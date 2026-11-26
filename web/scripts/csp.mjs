// Adds a per-page Content-Security-Policy <meta> to every exported HTML file.
//
// GitHub Pages cannot send response headers, so the policy ships as a meta tag.
// Next.js inlines its bootstrap scripts (self.__next_f.push), so each page gets
// the SHA-256 hashes of its own inline scripts instead of 'unsafe-inline'.
// JSON-LD blocks are data, not script, and are not affected by script-src.
// frame-ancestors, report-uri and sandbox are ignored in meta tags, so they are
// left out; they need a header-capable host (for example Cloudflare).
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../out");

const FORM_ORIGIN = "https://formsubmit.co";

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return name.endsWith(".html") ? [full] : [];
  });
}

const EXECUTABLE = new Set(["", "text/javascript", "application/javascript", "module"]);

function inlineScriptHashes(html) {
  const hashes = new Set();
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  for (const match of html.matchAll(re)) {
    const attrs = match[1];
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = (attrs.match(/\btype\s*=\s*"([^"]*)"/i)?.[1] ?? "").trim().toLowerCase();
    if (!EXECUTABLE.has(type)) continue;
    const digest = createHash("sha256").update(match[2], "utf8").digest("base64");
    hashes.add(`'sha256-${digest}'`);
  }
  return [...hashes];
}

function policy(hashes) {
  return [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(" ")}`.trim(),
    // React and the site use inline style attributes (for example --d delays).
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src 'self' ${FORM_ORIGIN}`,
    `form-action 'self' ${FORM_ORIGIN}`,
    "manifest-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

let count = 0;
for (const file of htmlFiles(outDir)) {
  let html = readFileSync(file, "utf8");
  html = html.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/gi, "");
  const tag = `<meta http-equiv="Content-Security-Policy" content="${policy(inlineScriptHashes(html))}"/>`;
  const charset = /<meta charSet="utf-8"\/>/i;
  if (!charset.test(html)) {
    console.error(`No <meta charSet> in ${path.relative(outDir, file)}; CSP not added.`);
    process.exit(1);
  }
  html = html.replace(charset, (m) => `${m}${tag}`);
  writeFileSync(file, html);
  count += 1;
}
console.log(`Added CSP meta to ${count} HTML files.`);

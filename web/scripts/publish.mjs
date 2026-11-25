import { cpSync, existsSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(here, "../out");
const root = path.resolve(here, "../..");

if (!existsSync(path.join(outDir, "index.html"))) {
  console.error("Missing web/out/index.html. Run npm run build first.");
  process.exit(1);
}

const stale = [
  "index.html",
  "404.html",
  "index.txt",
  "__next._full.txt",
  "__next.__PAGE__.txt",
  "__next._tree.txt",
  "_next",
  "_not-found",
  "_not-found.html",
  "_not-found.txt",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
  "web-design",
  "app-development",
  "website-maintenance",
  "website-check",
  "work",
  "404",
];

for (const name of stale) {
  rmSync(path.join(root, name), { recursive: true, force: true });
}

for (const entry of readdirSync(outDir)) {
  if (entry === ".git" || entry === "web") continue;
  cpSync(path.join(outDir, entry), path.join(root, entry), { recursive: true, force: true });
}

console.log("Published static export to repository root.");

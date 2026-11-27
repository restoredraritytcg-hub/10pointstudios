import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import { SiteBehaviors } from "@/components/SiteBehaviors";
import {
  META_DESCRIPTION,
  OG_IMAGE_ALT,
  PAGE_TITLE,
  SITE_URL,
  SOCIAL_DESCRIPTION,
  SOCIAL_TITLE,
} from "@/lib/site";
import "./site.css";
import "./extras.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: META_DESCRIPTION,
  applicationName: "10Point Studios",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "Scott Shipley" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    siteName: "10Point Studios",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: ["/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B272C",
  width: "device-width",
  initialScale: 1,
};

// Preloaded so the heading font is not discovered late via the CSS file.
// WOFF2 is prepared locally (88 KB vs 193 KB TTF) but is not in this PR because
// the GitHub write tools cannot commit binary files.
const HEADING_FONT = "/fonts/InstrumentSans_Variable-s.p.03qm8unt6-8hy.ttf";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  preload(HEADING_FONT, { as: "font", type: "font/ttf", crossOrigin: "anonymous" });
  return (
    <html lang="en" data-palette="petrol" className="KYc23q_variable">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
        <SiteBehaviors />
      </body>
    </html>
  );
}

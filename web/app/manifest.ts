import type { MetadataRoute } from "next";
import { SOCIAL_DESCRIPTION } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "10Point Studios",
    short_name: "10Point",
    description: SOCIAL_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0B272C",
    theme_color: "#0B272C",
    icons: [
      { src: "/icons/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/favicon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/app-icon-1024.png", sizes: "1024x1024", type: "image/png" },
    ],
  };
}

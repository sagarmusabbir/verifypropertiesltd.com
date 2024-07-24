import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verify Properties Limited",
    short_name: "VPL",
    description:
      "Affordable Property Management Solutions: Revolutionizing the way you manage properties with cost-effective, efficient service.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#f59e0b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

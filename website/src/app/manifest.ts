import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emerging Group Bangladesh",
    short_name: "Emerging Group",
    description:
      "Diversified enterprise group building Bangladesh's industrial self-reliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B2240",
    theme_color: "#0B2240",
    lang: "en",
    icons: [
      {
        src: "/brand/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

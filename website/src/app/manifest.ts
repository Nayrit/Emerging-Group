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
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/brand/logo-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

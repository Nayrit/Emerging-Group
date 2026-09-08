import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { absoluteUrl, JsonLd } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Emerging Group | Diversified Enterprise Group Bangladesh",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Emerging Group | Bangladesh",
    url: absoluteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Emerging Group Bangladesh",
          description: site.tagline,
          url: absoluteUrl("/"),
          about: { "@id": "https://emerginggroup.com.bd/#organization" },
        }}
      />
      <HomeContent />
    </>
  );
}

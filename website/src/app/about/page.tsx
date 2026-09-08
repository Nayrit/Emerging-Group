import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { absoluteUrl, breadcrumbJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Executive overview of Emerging Group — mission, vision, milestones and leadership.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Emerging Group",
    description:
      "Two decades of disciplined growth, built around national self-reliance and domestic supply security.",
    url: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutContent />
    </>
  );
}

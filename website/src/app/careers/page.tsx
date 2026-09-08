import type { Metadata } from "next";
import { CareersContent } from "@/components/pages/CareersContent";
import { roles } from "@/data/careers";
import { JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the industries the country depends on. Explore open roles across Emerging Group.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  const jobPostings = roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    employmentType: role.type === "Full time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "Emerging Group",
      sameAs: "https://emerginggroup.com.bd",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: role.location,
        addressCountry: "BD",
      },
    },
    description: `${role.title} — ${role.vertical} · ${role.function}`,
    datePosted: "2026-08-01",
    validThrough: "2026-12-31",
    directApply: true,
    url: "https://emerginggroup.com.bd/careers#roles",
  }));

  return (
    <>
      <JsonLd data={jobPostings} />
      <CareersContent />
    </>
  );
}

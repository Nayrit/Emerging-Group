import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { RolesBoard } from "@/components/RolesBoard";
import { careerPillars, roles } from "@/data/careers";
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
      <section className="relative min-h-[400px] overflow-hidden bg-ink md:min-h-[440px]">
        <div className="absolute inset-0">
          <MediaBlock className="h-full w-full" label="Team on site" accent="green" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 to-ink/45" />
        <div className="container-x relative flex min-h-[400px] flex-col justify-center gap-6 py-16 md:min-h-[440px]">
          <div className="text-[11px] uppercase tracking-[0.2em] text-blue-soft">
            Careers
          </div>
          <h1 className="max-w-[720px] font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-white md:text-[52px]">
            Build the industries the country depends on.
          </h1>
          <a href="#roles" className="btn btn-primary self-start">
            View open roles
          </a>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px]">
        <div className="container-x grid gap-10 md:grid-cols-3 md:gap-0">
          {careerPillars.map((pillar, i) => (
            <FadeIn
              key={pillar.tag}
              delay={i * 80}
              className={`md:px-10 ${
                i === 0 ? "md:pl-0" : ""
              } ${i === careerPillars.length - 1 ? "md:pr-0" : ""} ${
                i < careerPillars.length - 1
                  ? "md:border-r md:border-line"
                  : ""
              }`}
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.16em] text-blue">
                {pillar.tag}
              </div>
              <div className="font-serif text-2xl leading-snug text-ink">
                {pillar.title}
              </div>
              <p className="mt-3 text-[14.5px] font-light leading-relaxed text-body">
                {pillar.text}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="roles" className="border-t border-line bg-wash py-16 md:pb-[92px] md:pt-20">
        <div className="container-x">
          <RolesBoard />
        </div>
      </section>

      <section className="bg-ink py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-[28px] text-white">
              Don&apos;t see the right role?
            </div>
            <p className="mt-2 text-sm font-light text-white/65">
              Send a speculative CV — we review every application.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Contact People team
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Emerging Group collects and protects personal data on the corporate website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        compact
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl space-y-5 text-[15.5px] font-light leading-relaxed text-body-strong">
          <p>
            Emerging Group collects personal data only where needed to respond to
            enquiries, process employment applications, or fulfil contractual
            obligations with customers and suppliers.
          </p>
          <p>
            We do not sell personal data. Access is limited to authorised Group
            personnel and processors under confidentiality agreements. You may
            request access, correction or deletion by writing to{" "}
            <a href="mailto:info@emerginggroup.com.bd" className="font-medium text-blue">
              info@emerginggroup.com.bd
            </a>
            .
          </p>
          <p>
            Contact forms are protected against automated abuse. Messages are
            retained only as long as needed to resolve your enquiry or meet legal
            obligations.
          </p>
          <p>
            This page is a summary statement for the corporate website. Specific
            processing notices apply to careers applications and supplier portals.
          </p>
        </div>
      </section>
    </>
  );
}

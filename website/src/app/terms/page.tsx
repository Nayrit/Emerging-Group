import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use and modern slavery statement for Emerging Group Bangladesh.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of use"
        compact
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl space-y-5 text-[15.5px] font-light leading-relaxed text-body-strong">
          <p>
            Content on this website is provided for general information about
            Emerging Group and its businesses. It does not constitute an offer,
            prospectus or investment advice.
          </p>
          <p>
            Figures marked as illustrative or forward-looking may change.
            Downloadable reports are the authoritative source for financial and
            sustainability disclosures.
          </p>
          <p>
            All trademarks, logos and page designs remain the property of
            Emerging Group or their respective owners. Unauthorised commercial
            reuse is prohibited.
          </p>

          <div id="modern-slavery" className="scroll-mt-28 border-t border-line pt-10">
            <h2 className="font-serif text-[28px] text-ink">Modern slavery statement</h2>
            <p className="mt-4">
              Emerging Group prohibits forced labour, child labour and human
              trafficking across its operations and supply chains. Suppliers are
              expected to meet equivalent standards under our Supplier Code of
              Conduct. Concerns may be raised confidentially via{" "}
              <a href="mailto:info@emerginggroup.com.bd" className="font-medium text-blue">
                info@emerginggroup.com.bd
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

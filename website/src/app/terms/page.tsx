import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of use" compact crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]} />
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
        </div>
      </section>
    </>
  );
}

"use client";

import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export function TermsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.termsTitle}
        compact
        crumbs={[
          { label: t.home, href: "/" },
          { label: t.terms },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl space-y-5 text-[15.5px] font-light leading-relaxed text-body-strong">
          <p>{t.termsP1}</p>
          <p>{t.termsP2}</p>
          <p>{t.termsP3}</p>

          <div id="modern-slavery" className="scroll-mt-28 border-t border-line pt-10">
            <h2 className="font-serif text-[28px] text-ink">{t.modernSlaveryTitle}</h2>
            <p className="mt-4">
              {t.slaveryP1}{" "}
              <a href="mailto:info@emerginggroup.com.bd" className="font-medium text-blue">
                info@emerginggroup.com.bd
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.privacyTitle}
        compact
        crumbs={[
          { label: t.home, href: "/" },
          { label: t.privacy },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <div className="container-x max-w-3xl space-y-5 text-[15.5px] font-light leading-relaxed text-body-strong">
          <p>{t.privacyP1}</p>
          <p>
            {t.privacyP2}{" "}
            <a href="mailto:info@emerginggroup.com.bd" className="font-medium text-blue">
              info@emerginggroup.com.bd
            </a>
          </p>
          <p>{t.privacyP3}</p>
          <p>{t.privacyP4}</p>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { enquiryRoutes, site } from "@/data/site";

export function ContactContent() {
  const { t } = useLanguage();

  const routeTitle = (title: string) => {
    switch (title) {
      case "Commercial & supply":
        return t.commercialSupply;
      case "Projects & tenders":
        return t.projectsTenders;
      case "Investor relations":
        return t.investorRelations;
      case "Media & press":
        return t.mediaPress;
      default:
        return title;
    }
  };

  return (
    <>
      <PageHero
        crumbs={[
          { label: t.home, href: "/" },
          { label: t.contact },
        ]}
        title={t.contactHeroTitle}
        compact
      />

      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col gap-10 bg-white px-6 py-14 md:px-16 md:py-[76px] lg:pr-16 lg:pl-14">
          <div className="flex flex-col gap-4">
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted">
              {t.headOffice}
            </div>
            <div className="font-serif text-[24px] leading-snug text-ink md:text-[26px]">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
              <br />
              {site.address.country}
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-[14.5px] text-body-strong hover:text-blue"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-[14.5px] font-medium text-blue"
              >
                {site.email}
              </a>
            </div>
            <div className="mt-2">
              <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {t.officeHours}
              </div>
              <div className="mt-1.5 text-sm text-body-strong">{site.hours}</div>
            </div>
          </div>

          <div className="h-px bg-line" />

          <div>
            <div className="mb-4 text-[10.5px] uppercase tracking-[0.16em] text-muted">
              {t.whereToDirect}
            </div>
            {enquiryRoutes.map((route) => (
              <a
                key={route.email}
                href={`mailto:${route.email}`}
                className="flex items-baseline justify-between gap-4 border-t border-line py-[18px] last:border-b"
              >
                <div>
                  <div className="text-[15px] font-medium text-ink">
                    {routeTitle(route.title)}
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted">{route.detail}</div>
                </div>
                <span className="shrink-0 text-[13.5px] text-blue">
                  {route.email.split("@")[0]}@ →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative min-h-[480px] bg-wash-deep lg:min-h-[660px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#edf2f7,#dbe4f0_40%,#c5d4e8)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#0b224033_1px,transparent_1px),linear-gradient(90deg,#0b224033_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue shadow-[0_0_0_12px_rgba(21,72,176,0.2)]" />
          <div className="absolute bottom-10 left-6 max-w-[300px] border border-line bg-white p-[22px] md:left-10">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {t.headOffice}
            </div>
            <div className="mt-2 text-[15px] font-medium text-ink">
              Gulshan Avenue, Dhaka
            </div>
            <a
              href="https://maps.google.com/?q=Gulshan+Avenue+Dhaka"
              target="_blank"
              rel="noreferrer"
              className="mt-2.5 inline-block text-[13px] font-medium text-blue"
            >
              {t.openInMaps}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-wash py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-[30px] text-ink md:text-[34px]">
              {t.preferWrite}
            </h2>
            <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-body">
              {t.preferWriteBody}
            </p>
            <Link href="/careers" className="link-arrow mt-6 inline-flex">
              {t.lookingCareers}
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

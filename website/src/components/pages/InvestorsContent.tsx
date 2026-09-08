"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FilingDownload } from "@/components/FilingDownload";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/site";

const filings = [
  {
    title: "Annual Report 2025",
    meta: "PDF · 4.2MB",
    date: "March 2026",
  },
  {
    title: "Integrated Triple-Bottom-Line Report 2025",
    meta: "PDF · 2.1MB",
    date: "July 2026",
  },
  {
    title: "Group Fact Sheet FY25",
    meta: "PDF · 680KB",
    date: "April 2026",
  },
  {
    title: "Corporate Governance Statement",
    meta: "PDF · 540KB",
    date: "March 2026",
  },
];

export function InvestorsContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        crumbs={[
          { label: t.home, href: "/" },
          { label: t.investors },
        ]}
        title={t.investorsHeroTitle}
        description={t.investorsHeroDesc}
      />

      <section className="border-b border-line bg-wash py-12">
        <div className="container-x grid gap-8 sm:grid-cols-3">
          {[
            { label: t.groupTurnover, value: site.stats.turnover },
            { label: t.yoyGrowth, value: site.stats.growth, up: true },
            { label: t.institutionalPartners, value: site.stats.partners },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {item.label}
              </div>
              <div className="mt-2 flex items-baseline gap-2 text-[32px] font-bold tracking-[-0.02em] text-ink">
                {item.value}
                {item.up && <span className="text-sm font-medium text-green">▲</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="eyebrow mb-4">{t.filingsReports}</div>
            <h2 className="font-serif text-[34px] text-ink">{t.latestDocuments}</h2>
            <p className="mt-4 text-[15px] font-light leading-relaxed text-body">
              {t.investorsFilingsIntro}
            </p>
            <a
              href="mailto:investors@emerginggroup.com.bd"
              className="link-arrow mt-6 inline-flex"
            >
              investors@emerginggroup.com.bd →
            </a>
          </div>
          <div className="border border-line">
            {filings.map((doc) => (
              <FadeIn
                key={doc.title}
                className="flex flex-col gap-2 border-b border-line px-6 py-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <div>
                  <div className="text-[15.5px] font-medium text-ink">
                    {doc.title}
                  </div>
                  <div className="mt-1 text-[12.5px] text-muted">
                    {doc.meta} · {doc.date}
                  </div>
                </div>
                <FilingDownload filing={doc} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-wash py-16 md:py-24">
        <div className="container-x">
          <h2 className="mb-10 font-serif text-[34px] text-ink">{t.governance}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: t.boardOversight,
                text: t.boardOversightText,
              },
              {
                title: t.divisionPl,
                text: t.divisionPlText,
              },
              {
                title: t.ethicsCompliance,
                text: t.ethicsComplianceText,
              },
            ].map((card, i) => (
              <FadeIn
                key={card.title}
                delay={i * 70}
                className="border border-line bg-white p-8"
              >
                <div className="font-serif text-[22px] text-ink">{card.title}</div>
                <p className="mt-3 text-sm font-light leading-relaxed text-body">
                  {card.text}
                </p>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/about#leadership" className="link-arrow">
              {t.meetLeadership}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

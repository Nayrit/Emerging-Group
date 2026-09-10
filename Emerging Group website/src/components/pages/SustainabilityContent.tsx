"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";

export function SustainabilityContent() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.sustainPillarPeople,
      text: t.sustainPillarPeopleText,
      metrics: [
        { value: "2,400+", label: "Group colleagues" },
        { value: "0.8", label: "Construction TRIR" },
      ],
    },
    {
      title: t.sustainPillarPlanet,
      text: t.sustainPillarPlanetText,
      metrics: [
        { value: "4.1%", label: "Packaging process waste" },
        { value: "92%", label: "Local construction sourcing" },
      ],
    },
    {
      title: t.sustainPillarProfit,
      text: t.sustainPillarProfitText,
      metrics: [
        { value: "+11.4%", label: "YoY revenue growth" },
        { value: "FY25", label: "Integrated TBL report" },
      ],
    },
  ];

  const priorities = [t.sustainP1, t.sustainP2, t.sustainP3, t.sustainP4];

  return (
    <>
      <PageHero
        crumbs={[
          { label: t.home, href: "/" },
          { label: t.sustainability },
        ]}
        eyebrow={t.vision2040}
        title={t.sustainHeroTitle}
        description={t.sustainHeroDesc}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.title}
              delay={i * 80}
              className="border border-line p-8 md:p-9"
            >
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-blue">
                0{i + 1}
              </div>
              <h2 className="font-serif text-[28px] text-ink">{pillar.title}</h2>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-body">
                {pillar.text}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
                {pillar.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-ink">{m.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-wash py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="eyebrow mb-5">{t.priorities}</div>
            <h2 className="font-serif text-[34px] leading-snug text-ink">
              {t.sustainPrioritiesTitle}
            </h2>
          </div>
          <div className="flex flex-col">
            {priorities.map((item, i) => (
              <div
                key={item}
                className="flex gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="text-sm font-medium text-blue">0{i + 1}</span>
                <p className="text-[15px] font-light leading-relaxed text-body-strong">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="font-serif text-[28px] text-white">{t.readTblCta}</div>
          <Link href="/investors" className="btn btn-primary">
            {t.investorCentre}
          </Link>
        </div>
      </section>
    </>
  );
}

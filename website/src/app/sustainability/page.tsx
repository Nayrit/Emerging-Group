import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "People, Planet and Enterprise Profitability — Emerging Group's triple-bottom-line approach.",
};

const pillars = [
  {
    title: "People",
    text: "Safe workplaces, skills pathways across six verticals, and fair employment standards audited by institutional customers.",
    metrics: [
      { value: "2,400+", label: "Group colleagues" },
      { value: "0.8", label: "Construction TRIR" },
    ],
  },
  {
    title: "Planet",
    text: "Closed-loop trim recovery in packaging, responsible agro formulations, and preferential local material sourcing in construction.",
    metrics: [
      { value: "4.1%", label: "Packaging process waste" },
      { value: "92%", label: "Local construction sourcing" },
    ],
  },
  {
    title: "Enterprise profitability",
    text: "Disciplined capital allocation and multi-year customer frameworks that fund continuous improvement without compromising standards.",
    metrics: [
      { value: "+11.4%", label: "YoY revenue growth" },
      { value: "FY25", label: "Integrated TBL report" },
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Sustainability" },
        ]}
        eyebrow="Vision 2040"
        title="Triple-bottom-line value as operating discipline."
        description="Sustainability at Emerging Group is not a side programme — it is how we measure whether diversification compounds value for people, planet and enterprise."
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
            <div className="eyebrow mb-5">Priorities</div>
            <h2 className="font-serif text-[34px] leading-snug text-ink">
              Where we focus through 2030.
            </h2>
          </div>
          <div className="flex flex-col">
            {[
              "Reduce packaging process waste below 3.5% through closed-loop recovery.",
              "Expand soil-health advisory coverage to every district we sell into.",
              "Maintain construction local-sourcing above 90% on Group capex projects.",
              "Publish annual integrated TBL metrics alongside the statutory report.",
            ].map((item, i) => (
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
          <div className="font-serif text-[28px] text-white">
            Read the integrated triple-bottom-line report
          </div>
          <Link href="/investors" className="btn btn-primary">
            Investor centre
          </Link>
        </div>
      </section>
    </>
  );
}

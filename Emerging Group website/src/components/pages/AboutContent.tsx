"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/components/LanguageProvider";
import { leadership, milestones } from "@/data/site";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 opacity-35">
          <MediaBlock className="h-full min-h-[420px] w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 to-ink/60" />
        <div className="container-x relative flex min-h-[360px] flex-col justify-center gap-[22px] py-20 md:min-h-[420px]">
          <nav className="flex items-center gap-2.5 text-[11.5px] text-white/60">
            <Link href="/" className="hover:text-white">
              {t.home}
            </Link>
            <span>/</span>
            <span className="text-white">{t.about}</span>
          </nav>
          <h1 className="max-w-[820px] font-serif text-[42px] font-normal leading-[1.15] tracking-[-0.015em] md:text-[54px]">
            {t.aboutHeroTitle}
          </h1>
          <p className="max-w-[640px] text-[16.5px] font-light leading-relaxed text-white/78">
            {t.aboutHeroDesc}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[92px]">
        <div className="container-x grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          <aside className="flex flex-col gap-3.5 lg:sticky lg:top-28 lg:self-start">
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted">
              {t.onThisPage}
            </div>
            {(
              [
                [t.executiveOverview, "#overview"],
                [`${t.mission} & ${t.vision}`, "#mission"],
                [t.milestones, "#milestones"],
                [t.leadership, "#leadership"],
                [t.governance, "/investors"],
              ] as const
            ).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-[13.5px] ${
                  href === "#overview"
                    ? "font-medium text-blue"
                    : "text-body hover:text-blue"
                }`}
              >
                {label}
              </Link>
            ))}
          </aside>
          <div id="overview" className="flex max-w-[760px] flex-col gap-[22px]">
            <p className="text-[20px] font-light leading-relaxed text-ink">
              {t.aboutLead}
            </p>
            <p className="text-base font-light leading-[1.8] text-body-strong">
              {t.aboutBody}
            </p>
          </div>
        </div>
      </section>

      <section id="mission" className="grid border-t border-line lg:grid-cols-2">
        <FadeIn className="border-b border-line bg-wash px-6 py-16 md:px-16 md:py-[76px] lg:border-b-0 lg:border-r">
          <div className="mb-5 text-[11px] uppercase tracking-[0.2em] text-blue">
            {t.mission}
          </div>
          <p className="font-serif text-[22px] font-light leading-relaxed text-pretty text-ink md:text-[26px]">
            {t.aboutMission}
          </p>
        </FadeIn>
        <FadeIn delay={100} className="bg-ink px-6 py-16 md:px-16 md:py-[76px]">
          <div className="mb-5 text-[11px] uppercase tracking-[0.2em] text-blue-soft">
            {t.vision}
          </div>
          <p className="font-serif text-[22px] font-light leading-relaxed text-pretty text-white md:text-[26px]">
            {t.aboutVision}
          </p>
        </FadeIn>
      </section>

      <section id="milestones" className="bg-white py-16 md:py-[92px]">
        <div className="container-x">
          <h2 className="mb-10 font-serif text-[30px] font-normal text-ink md:mb-12 md:text-[34px]">
            {t.milestones}
          </h2>
          <div className="grid gap-8 border-t border-line pt-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {milestones.map((m, i) => (
              <FadeIn
                key={m.year}
                delay={i * 70}
                className={`relative lg:border-r lg:border-line lg:pr-6 lg:pl-0 lg:first:pl-0 lg:last:border-r-0 lg:[&:not(:first-child)]:pl-6`}
              >
                <div className="absolute -top-[31px] left-0 h-2.5 w-2.5 bg-blue" />
                <div className="text-2xl font-bold text-ink">{m.year}</div>
                <p className="mt-2.5 text-[13.5px] font-light leading-relaxed text-body">
                  {m.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white pb-20 md:pb-[92px]">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-[30px] font-normal text-ink md:text-[34px]">
              {t.leadership}
            </h2>
            <Link href="/investors" className="link-arrow">
              {t.governance} →
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <FadeIn key={person.name} delay={i * 70} className="flex flex-col gap-4">
                <MediaBlock className="h-[260px]" label="Portrait" accent={i % 2 ? "green" : "blue"} />
                <div>
                  <div className="text-base font-medium text-ink">{person.name}</div>
                  <div className="mt-1 text-[12.5px] text-muted">{person.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PageHero title={t.aboutCtaTitle} description={t.aboutCtaDesc} compact>
        <Link href="/businesses" className="btn btn-primary mt-6">
          {t.aboutCtaBtn}
        </Link>
      </PageHero>
    </>
  );
}

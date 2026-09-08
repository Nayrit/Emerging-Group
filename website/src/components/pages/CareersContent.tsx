"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { RolesBoard } from "@/components/RolesBoard";
import { useLanguage } from "@/components/LanguageProvider";

export function CareersContent() {
  const { t } = useLanguage();

  const pillars = [
    {
      tag: t.ownership,
      title: t.ownershipTitle,
      text: t.ownershipText,
    },
    {
      tag: t.development,
      title: t.developmentTitle,
      text: t.developmentText,
    },
    {
      tag: t.standards,
      title: t.standardsTitle,
      text: t.standardsText,
    },
  ];

  return (
    <>
      <section className="relative min-h-[400px] overflow-hidden bg-ink md:min-h-[440px]">
        <div className="absolute inset-0">
          <MediaBlock className="h-full w-full" label="Team on site" accent="green" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 to-ink/45" />
        <div className="container-x relative flex min-h-[400px] flex-col justify-center gap-6 py-16 md:min-h-[440px]">
          <div className="text-[11px] uppercase tracking-[0.2em] text-blue-soft">
            {t.careersEyebrow}
          </div>
          <h1 className="max-w-[720px] font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-white md:text-[52px]">
            {t.careersHeroTitle}
          </h1>
          <a href="#roles" className="btn btn-primary self-start">
            {t.viewOpenRoles}
          </a>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px]">
        <div className="container-x grid gap-10 md:grid-cols-3 md:gap-0">
          {pillars.map((pillar, i) => (
            <FadeIn
              key={pillar.tag}
              delay={i * 80}
              className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${
                i === pillars.length - 1 ? "md:pr-0" : ""
              } ${i < pillars.length - 1 ? "md:border-r md:border-line" : ""}`}
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.16em] text-blue">
                {pillar.tag}
              </div>
              <div className="font-serif text-2xl leading-snug text-ink">
                {pillar.title}
              </div>
              <p className="mt-3 text-[14.5px] font-light leading-relaxed text-body">
                {pillar.text}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="roles" className="border-t border-line bg-wash py-16 md:pb-[92px] md:pt-20">
        <div className="container-x">
          <RolesBoard />
        </div>
      </section>

      <section className="bg-ink py-14">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-[28px] text-white">{t.dontSeeRole}</div>
            <p className="mt-2 text-sm font-light text-white/65">{t.speculativeCv}</p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            {t.contactPeople}
          </Link>
        </div>
      </section>
    </>
  );
}

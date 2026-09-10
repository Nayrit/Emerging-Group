"use client";

import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { businessNamesBn, useLanguage } from "@/components/LanguageProvider";
import { businesses } from "@/data/businesses";
import { news } from "@/data/news";
import { site } from "@/data/site";

export function HomeContent() {
  const { locale, t } = useLanguage();

  const bizName = (slug: string, name: string) =>
    locale === "bn" ? businessNamesBn[slug] || name : name;

  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-ink md:min-h-[620px]">
        <div className="absolute inset-0">
          <MediaBlock className="h-full w-full" label="Corporate campus" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/82 to-ink/30" />
        <div className="container-x relative flex min-h-[560px] flex-col justify-center py-16 md:min-h-[620px]">
          <div className="max-w-[760px] animate-rise">
            <div className="mb-6 flex items-center gap-3.5">
              <span className="h-0.5 w-9 origin-left animate-[draw-line_0.8s_ease_both] bg-blue-soft" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/75">
                {t.homeEyebrow}
              </span>
            </div>
            <h1 className="font-serif text-[40px] font-normal leading-[1.12] tracking-[-0.015em] text-pretty text-white md:text-[54px] lg:text-[62px]">
              {t.homeTagline}
            </h1>
            <p className="mt-6 max-w-[600px] text-[15.5px] font-light leading-relaxed text-white/80 md:text-[16.5px]">
              {t.homeIntro}
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/businesses" className="btn btn-primary">
                {t.exploreBusinesses}
              </Link>
              <Link href="/investors" className="btn btn-ghost">
                {t.investorRelationsCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between md:mb-12">
            <div className="eyebrow">{t.atAGlance}</div>
            <Link href="/about" className="link-arrow">
              {t.groupFactSheet}
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:gap-0">
            {[
              {
                value: "2002",
                label: t.yearFounded,
                text:
                  locale === "bn"
                    ? "একক ট্রেডিং অপারেশন থেকে বহুমুখী গ্রুপে দুই দশকেরও বেশি শৃঙ্খলাবদ্ধ প্রবৃদ্ধি।"
                    : "Over two decades of disciplined growth from a single trading operation to a diversified group.",
              },
              {
                value: "Six",
                label: t.businessVerticals,
                text:
                  locale === "bn"
                    ? "উৎপাদন, কৃষি উপকরণ, নির্মাণ, বাণিজ্য, সফটওয়্যার ও মিডিয়ায় উল্লম্বভাবে সমন্বিত।"
                    : "Vertically integrated across manufacturing, agriculture inputs, construction, trade, software and media.",
              },
              {
                value: "180+",
                label: t.institutionalPartners,
                text:
                  locale === "bn"
                    ? "২০টি বাজারে এফএমসিজি, ফার্মাসিউটিক্যাল, রপ্তানি ও পাবলিক-সেক্টর অংশীদার।"
                    : "FMCG, pharmaceutical, export and public-sector counterparties across 20 markets.",
                accentPlus: true,
              },
            ].map((item, i, arr) => (
              <FadeIn
                key={item.label}
                delay={i * 80}
                className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${
                  i === arr.length - 1 ? "md:pr-0" : ""
                } ${i < arr.length - 1 ? "md:border-r md:border-line" : ""}`}
              >
                <div className="flex flex-col gap-3 border-b border-line pb-6 md:border-0 md:pb-0">
                  <div className="text-[48px] font-bold leading-none tracking-[-0.02em] text-ink md:text-[56px]">
                    {item.accentPlus ? (
                      <>
                        <CountUp value="180" />
                        <span className="text-blue">+</span>
                      </>
                    ) : (
                      <CountUp value={item.value} />
                    )}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </div>
                  <p className="mt-1.5 max-w-[300px] text-sm font-light leading-relaxed text-body">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-wash py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="eyebrow mb-6">{t.executiveOverview}</div>
            <h2 className="font-serif text-[34px] font-normal leading-snug tracking-[-0.01em] text-pretty text-ink md:text-[40px]">
              {locale === "bn"
                ? "শৃঙ্খলাবদ্ধ বৈচিত্র্য, নিয়ন্ত্রিত সম্পদ, ক্রমবর্ধমান মূল্য।"
                : "Disciplined diversification, governed resources, compounding value."}
            </h2>
            <Link href="/about" className="link-arrow mt-6 inline-flex">
              {t.readOverview}
            </Link>
          </FadeIn>
          <FadeIn delay={120} className="flex flex-col gap-5 lg:pt-9">
            <p className="text-base font-light leading-[1.75] text-body-strong md:text-[16px]">
              {locale === "bn"
                ? `${site.founded} সালে প্রতিষ্ঠিত Emerging Group বাংলাদেশে সদর দপ্তরসহ একটি বহুমুখী এন্টারপ্রাইজ গ্রুপ। দুই দশকেরও বেশি শৃঙ্খলাবদ্ধ প্রবৃদ্ধিতে গ্রুপ একটি সমন্বিত পরিচালন ইকোসিস্টেম গড়ে তুলেছে।`
                : `Founded in ${site.founded}, Emerging Group is a diversified enterprise group headquartered in Bangladesh. Over more than two decades of disciplined growth, the Group has built an integrated operational ecosystem designed to advance national self-reliance, strengthen domestic supply security, and generate sustainable economic value.`}
            </p>
            <p className="text-base font-light leading-[1.75] text-body md:text-[16px]">
              {locale === "bn"
                ? "কৌশলগত বৈচিত্র্য ও শৃঙ্খলাবদ্ধ সম্পদ পরিচালনার সমন্বয়ে Emerging Group বিস্তৃত প্রাতিষ্ঠানিক অংশীদার নেটওয়ার্ক জুড়ে স্কেলযোগ্য, মিশন-ক্রিটিকাল সমাধান সরবরাহ করে।"
                : "By uniting strategic diversification with disciplined resource governance, Emerging Group delivers scalable, mission-critical solutions across a broad institutional partner network."}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:pb-[100px] md:pt-24">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between md:mb-11">
            <h2 className="font-serif text-[32px] font-normal tracking-[-0.01em] text-ink md:text-[38px]">
              {t.ourBusinessesHeading}
            </h2>
            <Link href="/businesses" className="link-arrow">
              {t.allSixVerticals}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((biz, i) => (
              <FadeIn key={biz.slug} delay={i * 60}>
                <Link
                  href={`/businesses/${biz.slug}`}
                  className="business-card group block border border-line bg-white"
                >
                  <MediaBlock
                    className="h-[170px]"
                    label={biz.category}
                    accent={i % 2 === 0 ? "blue" : "green"}
                  />
                  <div className="flex flex-col gap-2.5 p-[26px] pb-7">
                    <div className="text-[10px] uppercase tracking-[0.16em] text-blue">
                      Vertical {biz.number}
                    </div>
                    <div className="font-serif text-[22px] text-ink md:text-[23px]">
                      {bizName(biz.slug, biz.name)}
                    </div>
                    <p className="text-[13.5px] font-light leading-relaxed text-body">
                      {biz.summary}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-5 py-24 md:px-14 md:py-[110px]">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <MediaBlock className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/92 to-ink/78" />
        <FadeIn className="relative mx-auto flex max-w-[940px] flex-col items-center gap-7 text-center">
          <div className="text-[11px] uppercase tracking-[0.24em] text-blue-soft">
            {t.vision2040}
          </div>
          <p className="font-serif text-[28px] font-light leading-[1.42] text-pretty text-white md:text-[38px]">
            {locale === "bn"
              ? "২০৪০ সালের মধ্যে বৈশ্বিক এন্টারপ্রাইজ সমাধানের জন্য বাংলাদেশের প্রধান অংশীদার এবং ট্রিপল-বটম-লাইন মূল্যের আঞ্চলিক মানদণ্ড হওয়া।"
              : "To be Bangladesh's premier partner for global enterprise solutions and the regional benchmark for triple-bottom-line value by 2040."}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-8 md:gap-14">
            {[t.people, t.planet, t.profitability].map((item) => (
              <div
                key={item}
                className="text-[11px] uppercase tracking-[0.18em] text-white/65"
              >
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-b border-line bg-wash py-10 md:py-11">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[auto_1px_1fr_1fr_1fr] lg:gap-9">
          <div className="flex flex-col gap-1.5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
              {t.investorRelations}
            </div>
            <Link href="/investors" className="link-arrow">
              {locale === "bn" ? "বিনিয়োগকারী কেন্দ্র →" : "Investor centre →"}
            </Link>
          </div>
          <div className="hidden h-[52px] bg-line lg:block" />
          <div className="flex flex-col gap-1.5">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
              Group turnover FY25
            </div>
            <div className="text-[26px] font-bold tracking-[-0.01em] text-ink">
              {site.stats.turnover}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
              YoY revenue growth
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[26px] font-bold text-ink">
                {site.stats.growth}
              </span>
              <span className="text-xs font-medium text-green">▲</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
              Latest filing
            </div>
            <div className="text-[14.5px] font-medium text-ink">
              Annual Report 2025{" "}
              <span className="font-normal text-muted">· PDF 4.2MB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:pb-[100px] md:pt-24">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between md:mb-11">
            <h2 className="font-serif text-[32px] font-normal tracking-[-0.01em] text-ink md:text-[38px]">
              {t.latestNews}
            </h2>
            <Link href="/newsroom" className="link-arrow">
              {locale === "bn" ? "নিউজরুম →" : "Newsroom →"}
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {news.slice(0, 3).map((item, i) => (
              <FadeIn key={item.slug} delay={i * 80}>
                <Link
                  href={`/newsroom/${item.slug}`}
                  className="news-card group flex flex-col gap-[18px]"
                >
                  <MediaBlock
                    className="h-[200px]"
                    label={item.category}
                    accent={i === 1 ? "green" : "blue"}
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-blue">
                      {item.category}
                    </span>
                    <span className="text-[11.5px] text-muted">{item.dateLabel}</span>
                  </div>
                  <div className="font-serif text-[20px] leading-snug text-ink transition group-hover:text-blue md:text-[21px]">
                    {item.title}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

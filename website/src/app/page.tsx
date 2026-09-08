import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { businesses } from "@/data/businesses";
import { news } from "@/data/news";
import { site } from "@/data/site";

export default function HomePage() {
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
                Emerging Group · Bangladesh · Since {site.founded}
              </span>
            </div>
            <h1 className="font-serif text-[40px] font-normal leading-[1.12] tracking-[-0.015em] text-pretty text-white md:text-[54px] lg:text-[62px]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-[600px] text-[15.5px] font-light leading-relaxed text-white/80 md:text-[16.5px]">
              Six operating verticals, one integrated ecosystem — delivering
              mission-critical B2B solutions across packaging, agro-chemicals,
              infrastructure, trading, technology and media.
            </p>
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/businesses" className="btn btn-primary">
                Explore our businesses
              </Link>
              <Link href="/investors" className="btn btn-ghost">
                Investor relations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between md:mb-12">
            <div className="eyebrow">At a glance</div>
            <Link href="/about" className="link-arrow">
              Group fact sheet →
            </Link>
          </div>
          <div className="grid gap-8 border-line md:grid-cols-3 md:gap-px md:bg-line">
            {[
              {
                value: "2002",
                label: "Year founded",
                text: "Over two decades of disciplined growth from a single trading operation to a diversified group.",
              },
              {
                value: "Six",
                label: "Business verticals",
                text: "Vertically integrated across manufacturing, agriculture inputs, construction, trade, software and media.",
              },
              {
                value: "180+",
                label: "Institutional partners",
                text: "FMCG, pharmaceutical, export and public-sector counterparties across 20 markets.",
                accentPlus: true,
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 80} className="bg-white md:px-10 md:first:pl-0 md:last:pr-0">
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
            <div className="eyebrow mb-6">Executive overview</div>
            <h2 className="font-serif text-[34px] font-normal leading-snug tracking-[-0.01em] text-pretty text-ink md:text-[40px]">
              Disciplined diversification, governed resources, compounding value.
            </h2>
            <Link href="/about" className="link-arrow mt-6 inline-flex">
              Read the group overview →
            </Link>
          </FadeIn>
          <FadeIn delay={120} className="flex flex-col gap-5 lg:pt-9">
            <p className="text-base font-light leading-[1.75] text-body-strong md:text-[16px]">
              Founded in {site.founded}, Emerging Group is a diversified enterprise
              group headquartered in Bangladesh. Over more than two decades of
              disciplined growth, the Group has built an integrated operational
              ecosystem designed to advance national self-reliance, strengthen
              domestic supply security, and generate sustainable economic value.
            </p>
            <p className="text-base font-light leading-[1.75] text-body md:text-[16px]">
              By uniting strategic diversification with disciplined resource
              governance, Emerging Group delivers scalable, mission-critical
              solutions across a broad institutional partner network.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:pb-[100px] md:pt-24">
        <div className="container-x">
          <div className="mb-10 flex items-baseline justify-between md:mb-11">
            <h2 className="font-serif text-[32px] font-normal tracking-[-0.01em] text-ink md:text-[38px]">
              Our businesses
            </h2>
            <Link href="/businesses" className="link-arrow">
              All six verticals →
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
                      {biz.name}
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
            Vision 2040
          </div>
          <p className="font-serif text-[28px] font-light leading-[1.42] text-pretty text-white md:text-[38px]">
            To be Bangladesh&apos;s premier partner for global enterprise solutions
            and the regional benchmark for triple-bottom-line value by 2040.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-8 md:gap-14">
            {["People", "Planet", "Enterprise profitability"].map((item) => (
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
              Investor relations
            </div>
            <Link href="/investors" className="link-arrow">
              Investor centre →
            </Link>
          </div>
          <div className="hidden h-13 bg-line lg:block" />
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
              Latest news
            </h2>
            <Link href="/newsroom" className="link-arrow">
              Newsroom →
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {news.slice(0, 3).map((item, i) => (
              <FadeIn key={item.slug} delay={i * 80}>
                <Link href={`/newsroom/${item.slug}`} className="news-card group flex flex-col gap-[18px]">
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

import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { PageHero } from "@/components/PageHero";
import { businesses } from "@/data/businesses";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "Six verticals, one integrated ecosystem — packaging, agro-chemicals, infrastructure, trading, software and media.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Businesses" },
        ]}
        title="Six verticals, one integrated ecosystem."
        description="Each business operates independently but sources, supplies and services the others — closing loops on materials, capital and expertise across the Group."
      />

      <div>
        {businesses.map((biz, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <FadeIn key={biz.slug}>
              <article
                className={`grid min-h-[430px] lg:grid-cols-2 ${
                  index % 2 === 1 ? "bg-wash" : "bg-white"
                }`}
              >
                <div className={imageLeft ? "order-1" : "order-1 lg:order-2"}>
                  <MediaBlock
                    className="min-h-[240px] h-full lg:min-h-[430px]"
                    label={biz.category}
                    accent={index % 2 ? "green" : "blue"}
                  />
                </div>
                <div
                  className={`flex flex-col justify-center gap-[18px] px-6 py-14 md:px-16 md:py-[76px] ${
                    imageLeft ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-medium tracking-[0.18em] text-blue">
                      {biz.number}
                    </span>
                    <span className="h-px w-6 bg-line-strong" />
                    <span className="text-[10.5px] uppercase tracking-[0.16em] text-muted">
                      {biz.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-[32px] font-normal leading-snug text-ink md:text-[36px]">
                    {biz.name}
                  </h2>
                  <p className="max-w-[480px] text-[15.5px] font-light leading-relaxed text-body">
                    {biz.description[0]}
                  </p>
                  <div className="mt-2.5 flex gap-8">
                    {biz.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-[22px] font-bold text-ink">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/businesses/${biz.slug}`}
                    className="link-arrow mt-3"
                  >
                    Explore vertical →
                  </Link>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <section className="bg-blue">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-14">
          <div className="font-serif text-[26px] text-white md:text-[30px]">
            Looking for a supply or delivery partner?
          </div>
          <Link href="/contact" className="btn btn-white h-[50px]">
            Talk to our commercial team
          </Link>
        </div>
      </section>
    </>
  );
}

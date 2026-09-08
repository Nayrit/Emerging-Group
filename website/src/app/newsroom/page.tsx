import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
import { PageHero } from "@/components/PageHero";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Latest news and announcements from Emerging Group Bangladesh.",
};

export default function NewsroomPage() {
  const [featured, ...rest] = news;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Newsroom" },
        ]}
        title="Newsroom"
        description="Group announcements, vertical updates and public-interest reporting from across Emerging Group."
        compact
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <FadeIn>
            <Link
              href={`/newsroom/${featured.slug}`}
              className="group grid overflow-hidden border border-line lg:grid-cols-2"
            >
              <MediaBlock
                className="min-h-[260px] lg:min-h-[380px]"
                label={featured.category}
              />
              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-blue">
                    {featured.category}
                  </span>
                  <span className="text-[11.5px] text-muted">
                    {featured.dateLabel}
                  </span>
                </div>
                <h2 className="font-serif text-[28px] leading-snug text-ink transition group-hover:text-blue md:text-[34px]">
                  {featured.title}
                </h2>
                <p className="max-w-lg text-[15px] font-light leading-relaxed text-body">
                  {featured.excerpt}
                </p>
                <span className="link-arrow mt-2">Read story →</span>
              </div>
            </Link>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => (
              <FadeIn key={item.slug} delay={i * 60}>
                <Link
                  href={`/newsroom/${item.slug}`}
                  className="news-card group flex flex-col gap-4"
                >
                  <MediaBlock
                    className="h-[180px]"
                    label={item.category}
                    accent={i % 2 ? "green" : "blue"}
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-blue">
                      {item.category}
                    </span>
                    <span className="text-[11.5px] text-muted">
                      {item.dateLabel}
                    </span>
                  </div>
                  <div className="font-serif text-[20px] leading-snug text-ink transition group-hover:text-blue">
                    {item.title}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-body">
                    {item.excerpt}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-wash py-12">
        <div className="container-x flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Media enquiries
            </div>
            <a
              href="mailto:press@emerginggroup.com.bd"
              className="mt-2 inline-block text-lg font-medium text-ink hover:text-blue"
            >
              press@emerginggroup.com.bd
            </a>
          </div>
          <Link href="/contact" className="btn btn-outline h-[46px]">
            Contact media desk
          </Link>
        </div>
      </section>
    </>
  );
}

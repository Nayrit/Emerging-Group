"use client";

import Link from "next/link";
import { MediaBlock } from "@/components/MediaBlock";
import { useLanguage } from "@/components/LanguageProvider";
import { news, type NewsItem } from "@/data/news";

export function NewsArticleContent({ item }: { item: NewsItem }) {
  const { t } = useLanguage();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <article itemScope itemType="https://schema.org/NewsArticle">
        <header className="border-b border-line bg-white py-12 md:py-16">
          <div className="container-x max-w-3xl">
            <nav className="mb-6 flex items-center gap-2.5 text-[11.5px] text-muted">
              <Link href="/newsroom" className="hover:text-ink">
                {t.newsroom}
              </Link>
              <span>/</span>
              <span className="text-ink">{item.category}</span>
            </nav>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.14em] text-blue">
                {item.category}
              </span>
              <span className="text-[11.5px] text-muted">{item.dateLabel}</span>
            </div>
            <h1 className="font-serif text-[34px] font-normal leading-snug tracking-[-0.015em] text-ink md:text-[44px]">
              {item.title}
            </h1>
            <p className="mt-5 text-[17px] font-light leading-relaxed text-body">
              {item.excerpt}
            </p>
          </div>
        </header>

        <MediaBlock className="h-[280px] md:h-[420px]" label={item.category} />

        <div className="container-x max-w-3xl py-12 md:py-16">
          <div className="flex flex-col gap-5">
            {item.body.map((p) => (
              <p
                key={p.slice(0, 32)}
                className="text-[16.5px] font-light leading-[1.8] text-body-strong"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 border-t border-line pt-8">
            <Link href="/newsroom" className="link-arrow">
              {t.backNewsroom}
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-wash py-14">
        <div className="container-x">
          <h2 className="mb-8 font-serif text-[28px] text-ink">{t.moreNews}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((n) => (
              <Link
                key={n.slug}
                href={`/newsroom/${n.slug}`}
                className="border border-line bg-white p-6 transition hover:border-blue/40"
              >
                <div className="text-[10px] uppercase tracking-[0.14em] text-blue">
                  {n.category}
                </div>
                <div className="mt-3 font-serif text-xl leading-snug text-ink">
                  {n.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

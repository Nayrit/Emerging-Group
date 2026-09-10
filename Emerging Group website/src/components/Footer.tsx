"use client";

import Link from "next/link";
import { businesses } from "@/data/businesses";
import { site } from "@/data/site";
import { businessNamesBn, useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  const { locale, t } = useLanguage();

  const bizLabel = (slug: string, fallback: string) =>
    locale === "bn" ? businessNamesBn[slug] || fallback : fallback;

  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:pb-14 lg:pt-[72px]">
        <div className="flex max-w-sm flex-col gap-5">
          <Logo variant="dark" />
          <p className="text-[13.5px] font-light leading-relaxed text-white/65">
            {site.address.short}
          </p>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-sm text-white/80 transition hover:text-white"
          >
            {site.phone}
          </a>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            {t.group}
          </div>
          <Link href="/about" className="text-[13.5px] text-white/82 hover:text-white">
            {t.aboutUs}
          </Link>
          <Link href="/about#leadership" className="text-[13.5px] text-white/82 hover:text-white">
            {t.leadership}
          </Link>
          <Link href="/sustainability" className="text-[13.5px] text-white/82 hover:text-white">
            {t.sustainability}
          </Link>
          <Link href="/investors" className="text-[13.5px] text-white/82 hover:text-white">
            {t.governance}
          </Link>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            {t.businesses}
          </div>
          {businesses.slice(0, 3).map((b) => (
            <Link
              key={b.slug}
              href={`/businesses/${b.slug}`}
              className="text-[13.5px] text-white/82 hover:text-white"
            >
              {bizLabel(b.slug, b.shortName)}
            </Link>
          ))}
          <Link href="/businesses" className="text-[13.5px] text-white/82 hover:text-white">
            {t.tradingItMedia}
          </Link>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            {t.connect}
          </div>
          <Link href="/careers" className="text-[13.5px] text-white/82 hover:text-white">
            {t.careers}
          </Link>
          <Link href="/newsroom" className="text-[13.5px] text-white/82 hover:text-white">
            {t.newsroom}
          </Link>
          <Link href="/investors" className="text-[13.5px] text-white/82 hover:text-white">
            {t.investorRelations}
          </Link>
          <Link href="/contact" className="text-[13.5px] text-white/82 hover:text-white">
            {t.contact}
          </Link>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[11.5px] text-white/45">
          {t.rights.replace("{year}", String(COPYRIGHT_YEAR))}
        </span>
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="text-[11.5px] text-white/45 hover:text-white/70">
            {t.privacy}
          </Link>
          <Link href="/terms" className="text-[11.5px] text-white/45 hover:text-white/70">
            {t.terms}
          </Link>
          <Link
            href="/terms#modern-slavery"
            className="text-[11.5px] text-white/45 hover:text-white/70"
          >
            {t.modernSlavery}
          </Link>
        </div>
      </div>
    </footer>
  );
}

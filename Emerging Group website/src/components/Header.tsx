"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { businesses } from "@/data/businesses";
import { businessNamesBn, useLanguage } from "./LanguageProvider";
import { Logo } from "./Logo";
import { SearchModal } from "./SearchModal";

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBizOpen, setMobileBizOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close overlays on navigation without remounting (preserves language state)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMegaOpen(false);
    setMobileOpen(false);
    setSearchOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const id = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const closeOverlays = useCallback(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setSearchOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") closeOverlays();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeOverlays]);

  const navItems = useMemo(
    () => [
      { label: t.about, href: "/about" },
      { label: t.businesses, href: "/businesses", hasMega: true },
      { label: t.sustainability, href: "/sustainability" },
      { label: t.investors, href: "/investors" },
      { label: t.newsroom, href: "/newsroom" },
      { label: t.careers, href: "/careers" },
    ],
    [t],
  );

  const utilityItems = useMemo(
    () => [
      { label: t.investorRelations, href: "/investors" },
      { label: t.mediaCentre, href: "/newsroom" },
      { label: t.suppliers, href: "/contact" },
      { label: t.contact, href: "/contact" },
    ],
    [t],
  );

  const bizLabel = (slug: string, fallback: string) =>
    locale === "bn" ? businessNamesBn[slug] || fallback : fallback;

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>

      <div className="bg-ink text-white">
        <div className="container-x flex h-9 items-center justify-end gap-4 text-[11.5px] tracking-[0.06em] sm:gap-6">
          {utilityItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="hidden text-white/70 transition-colors hover:text-white focus-visible:text-white sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-3.5 w-px bg-white/20 sm:block" aria-hidden />
          <div className="flex items-center gap-3" role="group" aria-label={t.language}>
            <button
              type="button"
              className={`transition ${locale === "en" ? "font-medium text-white" : "text-white/50 hover:text-white/80"}`}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`transition ${locale === "bn" ? "font-medium text-white" : "text-white/50 hover:text-white/80"}`}
              aria-pressed={locale === "bn"}
              onClick={() => setLocale("bn")}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_8px_24px_rgba(11,34,64,0.06)]" : ""
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="container-x flex h-[72px] items-center justify-between lg:h-[78px]">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex xl:gap-[34px]" aria-label="Primary">
            {navItems.map((item) =>
              item.hasMega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onFocus={() => setMegaOpen(true)}
                >
                  <Link
                    href={item.href}
                    className={`nav-underline flex items-center gap-1.5 py-7 text-sm font-medium ${
                      isActive(item.href) || megaOpen
                        ? "is-active text-blue"
                        : "text-ink"
                    }`}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className="text-[9px] opacity-70" aria-hidden>
                      ▼
                    </span>
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-underline py-7 text-sm font-medium ${
                    isActive(item.href) ? "is-active text-blue" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <button
              type="button"
              aria-label={t.openSearch}
              onClick={() => setSearchOpen(true)}
              className="search-trigger ml-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              aria-label={t.openSearch}
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              aria-label={t.openMenu}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <span className="block h-[1.5px] w-6 bg-ink" />
              <span className="block h-[1.5px] w-6 bg-ink" />
              <span className="block h-[1.5px] w-6 bg-ink" />
            </button>
          </div>
        </div>

        {megaOpen && (
          <div className="mega-enter absolute inset-x-0 top-full border-b border-line bg-wash shadow-lg">
            <div className="container-x grid grid-cols-[1.1fr_1fr_1fr] gap-x-10 gap-y-2 py-8">
              <div className="border-r border-line pr-8">
                <div className="eyebrow mb-3.5">{t.ourBusinesses}</div>
                <p className="font-serif text-[22px] leading-snug text-ink">
                  {t.megaBlurb}
                </p>
                <Link href="/businesses" className="link-arrow mt-4" onClick={closeOverlays}>
                  {t.viewAll}
                </Link>
              </div>
              <div className="flex flex-col gap-4 pt-1">
                {businesses.slice(0, 3).map((b) => (
                  <Link
                    key={b.slug}
                    href={`/businesses/${b.slug}`}
                    className="text-[14.5px] font-medium text-ink transition hover:text-blue"
                    onClick={closeOverlays}
                  >
                    {bizLabel(b.slug, b.name)}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-1">
                {businesses.slice(3).map((b) => (
                  <Link
                    key={b.slug}
                    href={`/businesses/${b.slug}`}
                    className="text-[14.5px] font-medium text-ink transition hover:text-blue"
                    onClick={closeOverlays}
                  >
                    {bizLabel(b.slug, b.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={t.openMenu}
        >
          <div className="flex h-[60px] items-center justify-between px-5">
            <Logo variant="dark" />
            <button
              type="button"
              aria-label={t.closeMenu}
              className="text-2xl leading-none"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-10 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
              className="mb-7 flex h-[46px] items-center gap-2.5 border border-white/30 px-3.5 text-[13.5px] text-white/50"
            >
              <span className="inline-block h-3.5 w-3.5 rounded-full border-[1.5px] border-white/50" />
              {t.search}
            </button>
            <div className="flex flex-col">
              {navItems.map((item) =>
                item.hasMega ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between border-b border-white/15 py-[18px] text-left font-serif text-2xl"
                      onClick={() => setMobileBizOpen((v) => !v)}
                      aria-expanded={mobileBizOpen}
                    >
                      {t.businesses}
                      <span className="text-xs text-blue-soft">
                        {mobileBizOpen ? "−" : "+"}
                      </span>
                    </button>
                    {mobileBizOpen && (
                      <div className="flex flex-col gap-3.5 border-b border-white/15 py-3 pl-4">
                        <Link
                          href="/businesses"
                          className="text-sm text-white/80"
                          onClick={closeOverlays}
                        >
                          {t.allBusinesses}
                        </Link>
                        {businesses.map((b) => (
                          <Link
                            key={b.slug}
                            href={`/businesses/${b.slug}`}
                            className="text-sm text-white/80"
                            onClick={closeOverlays}
                          >
                            {bizLabel(b.slug, b.name)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/15 py-[18px] font-serif text-2xl"
                    onClick={closeOverlays}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3.5">
              <Link href="/contact" className="btn btn-primary h-[50px]" onClick={closeOverlays}>
                {t.contactUs}
              </Link>
              <div
                className="flex gap-4 pt-1.5 text-xs tracking-[0.08em]"
                role="group"
                aria-label={t.language}
              >
                <button
                  type="button"
                  className={locale === "en" ? "font-medium" : "text-white/45"}
                  aria-pressed={locale === "en"}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={locale === "bn" ? "font-medium" : "text-white/45"}
                  aria-pressed={locale === "bn"}
                  onClick={() => setLocale("bn")}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

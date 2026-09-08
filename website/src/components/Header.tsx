"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
} from "react";
import { businesses } from "@/data/businesses";
import { navMain, navUtility } from "@/data/site";
import { Logo } from "./Logo";

type Locale = "en" | "bn";

const copy = {
  en: {
    search: "Search the Group",
    searchHint: 'Try "Packaging", "Careers", or "Investors".',
    noMatches: "No matches found.",
    contact: "Contact us",
    allBusinesses: "All businesses",
    ourBusinesses: "Our businesses",
    megaBlurb: "Six verticals, one integrated operating ecosystem.",
    viewAll: "View all businesses →",
    page: "Page",
    business: "Business",
  },
  bn: {
    search: "গ্রুপে খুঁজুন",
    searchHint: '"Packaging", "Careers" বা "Investors" চেষ্টা করুন।',
    noMatches: "কোনো ফলাফল নেই।",
    contact: "যোগাযোগ করুন",
    allBusinesses: "সব ব্যবসা",
    ourBusinesses: "আমাদের ব্যবসা",
    megaBlurb: "ছয়টি উল্লম্ব, একটি সমন্বিত ইকোসিস্টেম।",
    viewAll: "সব ব্যবসা দেখুন →",
    page: "পৃষ্ঠা",
    business: "ব্যবসা",
  },
} as const;

export function Header() {
  const pathname = usePathname();
  return <HeaderChrome key={pathname} pathname={pathname} />;
}

function HeaderChrome({ pathname }: { pathname: string }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBizOpen, setMobileBizOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const searchId = useId();
  const t = copy[locale];

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("eg-locale");
      if (saved === "en" || saved === "bn") {
        window.queueMicrotask(() => setLocale(saved));
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "bn" ? "bn" : "en";
    try {
      window.localStorage.setItem("eg-locale", locale);
    } catch {
      // ignore
    }
  }, [locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return [
      ...navMain.map((n) => ({ label: n.label, href: n.href, kind: t.page })),
      { label: "Contact", href: "/contact", kind: t.page },
      ...businesses.map((b) => ({
        label: b.name,
        href: `/businesses/${b.slug}`,
        kind: t.business,
      })),
    ].filter((item) => item.label.toLowerCase().includes(q));
  }, [query, t.page, t.business]);

  const onSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchResults[0]) {
      window.location.assign(searchResults[0].href);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="bg-ink text-white">
        <div className="container-x flex h-9 items-center justify-end gap-4 text-[11.5px] tracking-[0.06em] sm:gap-6">
          {navUtility.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="hidden text-white/70 transition-colors hover:text-white focus-visible:text-white sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-3.5 w-px bg-white/20 sm:block" aria-hidden />
          <div className="flex items-center gap-3" role="group" aria-label="Language">
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
            {navMain.map((item) =>
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
              aria-label="Open search (Ctrl K)"
              onClick={() => setSearchOpen(true)}
              className="ml-1.5 flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#4A5568] transition hover:border-blue hover:text-blue focus-visible:border-blue"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-6 bg-ink" />
          </button>
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
                    {b.name}
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
                    {b.name}
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
          aria-label="Mobile navigation"
        >
          <div className="flex h-[60px] items-center justify-between px-5">
            <Logo variant="dark" />
            <button
              type="button"
              aria-label="Close menu"
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
              {navMain.map((item) =>
                item.hasMega ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between border-b border-white/15 py-[18px] text-left font-serif text-2xl"
                      onClick={() => setMobileBizOpen((v) => !v)}
                      aria-expanded={mobileBizOpen}
                    >
                      Businesses
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
                            {b.name}
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
                {t.contact}
              </Link>
              <div className="flex gap-4 pt-1.5 text-xs tracking-[0.08em]">
                <button
                  type="button"
                  className={locale === "en" ? "font-medium" : "text-white/45"}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={locale === "bn" ? "font-medium" : "text-white/45"}
                  onClick={() => setLocale("bn")}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/50 px-4 pt-[12vh] backdrop-blur-sm">
          <div
            className="w-full max-w-xl animate-rise rounded-sm border border-line bg-white shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby={searchId}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-muted"
                aria-hidden
              >
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                id={searchId}
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onSearchKeyDown}
                placeholder={t.search}
                className="h-14 flex-1 bg-transparent text-[15px] outline-none"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                className="text-sm text-muted hover:text-ink"
                onClick={() => setSearchOpen(false)}
              >
                Esc
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {query.trim() === "" && (
                <p className="px-3 py-4 text-sm text-muted">{t.searchHint}</p>
              )}
              {query.trim() && searchResults.length === 0 && (
                <p className="px-3 py-4 text-sm text-muted">{t.noMatches}</p>
              )}
              {searchResults.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-sm px-3 py-3 transition hover:bg-wash"
                  onClick={closeOverlays}
                >
                  <span className="font-medium text-ink">{item.label}</span>
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {item.kind}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Close search"
            className="absolute inset-0 -z-10 cursor-default"
            onClick={() => setSearchOpen(false)}
          />
        </div>
      )}
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { businesses } from "@/data/businesses";
import { navMain, navUtility } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBizOpen, setMobileBizOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const searchResults = query.trim()
    ? [
        ...navMain.map((n) => ({ label: n.label, href: n.href, kind: "Page" })),
        ...businesses.map((b) => ({
          label: b.name,
          href: `/businesses/${b.slug}`,
          kind: "Business",
        })),
      ].filter((item) =>
        item.label.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : [];

  return (
    <>
      <div className="bg-ink text-white">
        <div className="container-x flex h-9 items-center justify-end gap-4 text-[11.5px] tracking-[0.06em] sm:gap-6">
          {navUtility.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="hidden text-white/70 transition-colors hover:text-white sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <span className="hidden h-3.5 w-px bg-white/20 sm:block" />
          <button type="button" className="font-medium text-white">
            EN
          </button>
          <button type="button" className="text-white/50 hover:text-white/80">
            বাংলা
          </button>
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

          <nav className="hidden items-center gap-7 xl:gap-[34px] lg:flex">
            {navMain.map((item) =>
              item.hasMega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                >
                  <Link
                    href={item.href}
                    className={`nav-underline flex items-center gap-1.5 py-7 text-sm font-medium ${
                      isActive(item.href) || megaOpen
                        ? "is-active text-blue"
                        : "text-ink"
                    }`}
                    aria-expanded={megaOpen}
                  >
                    {item.label}
                    <span className="text-[9px] opacity-70">▼</span>
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
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-[#4A5568] transition hover:border-blue hover:text-blue"
            >
              <span className="sr-only">Search</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-6 bg-ink" />
            <span className="block h-[1.5px] w-6 bg-ink" />
          </button>
        </div>

        {megaOpen && (
          <div className="mega-enter absolute inset-x-0 top-full border-b border-line bg-wash">
            <div className="container-x grid grid-cols-[1.1fr_1fr_1fr] gap-x-10 gap-y-2 py-8">
              <div className="border-r border-line pr-8">
                <div className="eyebrow mb-3.5">Our businesses</div>
                <p className="font-serif text-[22px] leading-snug text-ink">
                  Six verticals, one integrated operating ecosystem.
                </p>
                <Link href="/businesses" className="link-arrow mt-4">
                  View all businesses →
                </Link>
              </div>
              <div className="flex flex-col gap-4 pt-1">
                {businesses.slice(0, 3).map((b) => (
                  <Link
                    key={b.slug}
                    href={`/businesses/${b.slug}`}
                    className="text-[14.5px] font-medium text-ink transition hover:text-blue"
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
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink text-white lg:hidden">
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
              Search the Group
            </button>
            <div className="flex flex-col">
              {navMain.map((item) =>
                item.hasMega ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between border-b border-white/15 py-[18px] text-left font-serif text-2xl"
                      onClick={() => setMobileBizOpen((v) => !v)}
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
                          onClick={() => setMobileOpen(false)}
                        >
                          All businesses
                        </Link>
                        {businesses.map((b) => (
                          <Link
                            key={b.slug}
                            href={`/businesses/${b.slug}`}
                            className="text-sm text-white/80"
                            onClick={() => setMobileOpen(false)}
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
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3.5">
              <Link
                href="/contact"
                className="btn btn-primary h-[50px]"
                onClick={() => setMobileOpen(false)}
              >
                Contact us
              </Link>
              <div className="flex gap-4 pt-1.5 text-xs tracking-[0.08em]">
                <span className="font-medium">EN</span>
                <span className="text-white/45">বাংলা</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/50 px-4 pt-[12vh] backdrop-blur-sm">
          <div className="w-full max-w-xl animate-rise rounded-sm border border-line bg-white shadow-2xl">
            <div className="flex items-center gap-3 border-b border-line px-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-muted">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the Group"
                className="h-14 flex-1 bg-transparent text-[15px] outline-none!"
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
                <p className="px-3 py-4 text-sm text-muted">
                  Try “Packaging”, “Careers”, or “Investors”.
                </p>
              )}
              {query.trim() && searchResults.length === 0 && (
                <p className="px-3 py-4 text-sm text-muted">No matches found.</p>
              )}
              {searchResults.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-sm px-3 py-3 transition hover:bg-wash"
                  onClick={() => setSearchOpen(false)}
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
            className="absolute inset-0 -z-10"
            onClick={() => setSearchOpen(false)}
          />
        </div>
      )}
    </>
  );
}

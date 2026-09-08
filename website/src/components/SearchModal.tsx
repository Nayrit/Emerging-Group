"use client";

import Link from "next/link";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { businesses } from "@/data/businesses";
import { news } from "@/data/news";
import {
  businessNamesBn,
  businessSummaryBn,
  useLanguage,
} from "@/components/LanguageProvider";

type SearchItem = {
  id: string;
  label: string;
  href: string;
  kind: string;
  blurb?: string;
  keywords: string;
};

type SearchModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchModal({ open, onClose }: SearchModalProps) {
  const { locale, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [prevOpen, setPrevOpen] = useState(open);
  const [prevQuery, setPrevQuery] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const titleId = useId();

  // Reset state when opening/closing or query changes — without effect setState
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (!open) {
      setQuery("");
      setActive(0);
    }
  }
  if (query !== prevQuery) {
    setPrevQuery(query);
    setActive(0);
  }

  const catalog = useMemo<SearchItem[]>(() => {
    const pages: SearchItem[] = [
      {
        id: "about",
        label: t.about,
        href: "/about",
        kind: t.page,
        blurb: t.aboutHeroDesc,
        keywords: "about overview leadership mission vision group",
      },
      {
        id: "businesses",
        label: t.businesses,
        href: "/businesses",
        kind: t.page,
        blurb: t.bizHeroDesc,
        keywords: "businesses verticals packaging agro trading software media",
      },
      {
        id: "sustainability",
        label: t.sustainability,
        href: "/sustainability",
        kind: t.page,
        blurb: t.sustainHeroDesc,
        keywords: "sustainability people planet esg triple bottom line",
      },
      {
        id: "investors",
        label: t.investors,
        href: "/investors",
        kind: t.page,
        blurb: t.investorsHeroDesc,
        keywords: "investors filings reports annual governance ir",
      },
      {
        id: "newsroom",
        label: t.newsroom,
        href: "/newsroom",
        kind: t.page,
        blurb: t.newsHeroDesc,
        keywords: "news media press announcements",
      },
      {
        id: "careers",
        label: t.careers,
        href: "/careers",
        kind: t.page,
        blurb: t.careersHeroTitle,
        keywords: "careers jobs roles hiring apply work",
      },
      {
        id: "contact",
        label: t.contact,
        href: "/contact",
        kind: t.page,
        blurb: t.headOffice,
        keywords: "contact email phone gulshan dhaka office",
      },
    ];

    const bizItems: SearchItem[] = businesses.map((b) => {
      const label =
        locale === "bn" ? businessNamesBn[b.slug] || b.name : b.name;
      const summary =
        locale === "bn" ? businessSummaryBn[b.slug] || b.summary : b.summary;
      return {
        id: `biz-${b.slug}`,
        label,
        href: `/businesses/${b.slug}`,
        kind: t.business,
        blurb: summary,
        keywords: `${b.name} ${b.shortName} ${b.category} ${b.summary} packaging agro infrastructure trading software media ${b.slug.replace(/-/g, " ")}`,
      };
    });

    const newsItems: SearchItem[] = news.slice(0, 6).map((n) => ({
      id: `news-${n.slug}`,
      label: n.title,
      href: `/newsroom/${n.slug}`,
      kind: t.newsroom,
      blurb: n.excerpt,
      keywords: `${n.title} ${n.category} ${n.excerpt}`,
    }));

    return [...pages, ...bizItems, ...newsItems];
  }, [locale, t]);

  const quickLinks = useMemo(
    () => [
      { label: t.businesses, href: "/businesses" },
      { label: t.careers, href: "/careers" },
      { label: t.investors, href: "/investors" },
      { label: t.contact, href: "/contact" },
    ],
    [t],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const tokens = q.split(/\s+/).filter(Boolean);
    return catalog
      .map((item) => {
        const hay = `${item.label} ${item.blurb || ""} ${item.keywords}`.toLowerCase();
        const score = tokens.reduce((acc, token) => {
          if (item.label.toLowerCase().includes(token)) return acc + 5;
          if (hay.includes(token)) return acc + 2;
          return acc;
        }, 0);
        return { item, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.item);
  }, [catalog, query]);

  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  if (!open) return null;

  const shown = query.trim() ? results : [];
  const maxIndex = Math.max(shown.length - 1, 0);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (shown.length) setActive((i) => Math.min(i + 1, maxIndex));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (shown.length) setActive((i) => Math.max(i - 1, 0));
      return;
    }
    if (e.key === "Enter" && shown[active]) {
      e.preventDefault();
      window.location.assign(shown[active].href);
    }
  };

  return (
    <div
      className="search-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="search-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-panel__accent" aria-hidden />
        <div className="search-panel__header">
          <div className="search-panel__icon" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p id={titleId} className="search-panel__eyebrow">
              {t.search}
            </p>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder={
                locale === "bn"
                  ? "প্যাকেজিং, ক্যারিয়ার, বিনিয়োগকারী…"
                  : "Search pages, businesses, news…"
              }
              className="search-panel__input"
              autoComplete="off"
              spellCheck={false}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={
                shown[active] ? `${listId}-${shown[active].id}` : undefined
              }
            />
          </div>
          <div className="flex items-center gap-2">
            {query && (
              <button
                type="button"
                className="search-panel__clear"
                onClick={() => setQuery("")}
              >
                {locale === "bn" ? "মুছুন" : "Clear"}
              </button>
            )}
            <button
              type="button"
              className="search-panel__close"
              aria-label={t.closeMenu}
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="search-panel__body" id={listId} role="listbox">
          {!query.trim() && (
            <div className="search-empty">
              <p className="search-empty__hint">{t.searchHint}</p>
              <div className="search-empty__label">
                {locale === "bn" ? "দ্রুত লিংক" : "Quick links"}
              </div>
              <div className="search-chips">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="search-chip"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="search-empty__label mt-5">
                {locale === "bn" ? "ব্যবসাসমূহ" : "Businesses"}
              </div>
              <div className="search-chips">
                {businesses.slice(0, 4).map((b) => (
                  <Link
                    key={b.slug}
                    href={`/businesses/${b.slug}`}
                    className="search-chip search-chip--ghost"
                    onClick={onClose}
                  >
                    {locale === "bn"
                      ? businessNamesBn[b.slug] || b.shortName
                      : b.shortName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {query.trim() && shown.length === 0 && (
            <div className="search-empty search-empty--center">
              <p className="font-medium text-ink">{t.noMatches}</p>
              <p className="mt-2 text-sm text-muted">{t.searchHint}</p>
            </div>
          )}

          {shown.map((item, index) => (
            <Link
              key={item.id}
              id={`${listId}-${item.id}`}
              href={item.href}
              role="option"
              aria-selected={index === active}
              className={`search-result ${index === active ? "is-active" : ""}`}
              onMouseEnter={() => setActive(index)}
              onClick={onClose}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="search-result__kind">{item.kind}</span>
                </div>
                <div className="search-result__title">{item.label}</div>
                {item.blurb && (
                  <p className="search-result__blurb">{item.blurb}</p>
                )}
              </div>
              <span className="search-result__arrow" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

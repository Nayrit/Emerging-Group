"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Locale = "en" | "bn";

export type Dictionary = {
  skipToContent: string;
  investorRelations: string;
  mediaCentre: string;
  suppliers: string;
  contact: string;
  about: string;
  businesses: string;
  sustainability: string;
  investors: string;
  newsroom: string;
  careers: string;
  search: string;
  searchHint: string;
  noMatches: string;
  contactUs: string;
  allBusinesses: string;
  ourBusinesses: string;
  megaBlurb: string;
  viewAll: string;
  page: string;
  business: string;
  group: string;
  aboutUs: string;
  leadership: string;
  governance: string;
  connect: string;
  tradingItMedia: string;
  privacy: string;
  terms: string;
  modernSlavery: string;
  rights: string;
  language: string;
  backToTop: string;
  openMenu: string;
  closeMenu: string;
  openSearch: string;
  exploreBusinesses: string;
  investorRelationsCta: string;
  atAGlance: string;
  groupFactSheet: string;
  yearFounded: string;
  businessVerticals: string;
  institutionalPartners: string;
  executiveOverview: string;
  readOverview: string;
  ourBusinessesHeading: string;
  allSixVerticals: string;
  vision2040: string;
  people: string;
  planet: string;
  profitability: string;
  latestNews: string;
  homeEyebrow: string;
  homeTagline: string;
  homeIntro: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    skipToContent: "Skip to main content",
    investorRelations: "Investor Relations",
    mediaCentre: "Media Centre",
    suppliers: "Suppliers",
    contact: "Contact",
    about: "About",
    businesses: "Businesses",
    sustainability: "Sustainability",
    investors: "Investors",
    newsroom: "Newsroom",
    careers: "Careers",
    search: "Search the Group",
    searchHint: 'Try "Packaging", "Careers", or "Investors".',
    noMatches: "No matches found.",
    contactUs: "Contact us",
    allBusinesses: "All businesses",
    ourBusinesses: "Our businesses",
    megaBlurb: "Six verticals, one integrated operating ecosystem.",
    viewAll: "View all businesses →",
    page: "Page",
    business: "Business",
    group: "Group",
    aboutUs: "About us",
    leadership: "Leadership",
    governance: "Governance",
    connect: "Connect",
    tradingItMedia: "Trading · IT · Media",
    privacy: "Privacy",
    terms: "Terms",
    modernSlavery: "Modern slavery statement",
    rights: "© {year} Emerging Group. All rights reserved.",
    language: "Language",
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    openSearch: "Open search (Ctrl K)",
    exploreBusinesses: "Explore our businesses",
    investorRelationsCta: "Investor relations",
    atAGlance: "At a glance",
    groupFactSheet: "Group fact sheet →",
    yearFounded: "Year founded",
    businessVerticals: "Business verticals",
    institutionalPartners: "Institutional partners",
    executiveOverview: "Executive overview",
    readOverview: "Read the group overview →",
    ourBusinessesHeading: "Our businesses",
    allSixVerticals: "All six verticals →",
    vision2040: "Vision 2040",
    people: "People",
    planet: "Planet",
    profitability: "Enterprise profitability",
    latestNews: "Latest news",
    homeEyebrow: "Emerging Group · Bangladesh · Since 2002",
    homeTagline:
      "A diversified enterprise group building Bangladesh's industrial self-reliance.",
    homeIntro:
      "Six operating verticals, one integrated ecosystem — delivering mission-critical B2B solutions across packaging, agro-chemicals, infrastructure, trading, technology and media.",
  },
  bn: {
    skipToContent: "মূল কন্টেন্টে যান",
    investorRelations: "বিনিয়োগকারী সম্পর্ক",
    mediaCentre: "মিডিয়া সেন্টার",
    suppliers: "সরবরাহকারী",
    contact: "যোগাযোগ",
    about: "আমাদের সম্পর্কে",
    businesses: "ব্যবসাসমূহ",
    sustainability: "টেকসই উন্নয়ন",
    investors: "বিনিয়োগকারী",
    newsroom: "নিউজরুম",
    careers: "ক্যারিয়ার",
    search: "গ্রুপে খুঁজুন",
    searchHint: '"Packaging", "Careers" বা "Investors" চেষ্টা করুন।',
    noMatches: "কোনো ফলাফল নেই।",
    contactUs: "যোগাযোগ করুন",
    allBusinesses: "সব ব্যবসা",
    ourBusinesses: "আমাদের ব্যবসা",
    megaBlurb: "ছয়টি উল্লম্ব, একটি সমন্বিত পরিচালন ইকোসিস্টেম।",
    viewAll: "সব ব্যবসা দেখুন →",
    page: "পৃষ্ঠা",
    business: "ব্যবসা",
    group: "গ্রুপ",
    aboutUs: "আমাদের সম্পর্কে",
    leadership: "নেতৃত্ব",
    governance: "সুশাসন",
    connect: "সংযোগ",
    tradingItMedia: "ট্রেডিং · আইটি · মিডিয়া",
    privacy: "গোপনীয়তা",
    terms: "শর্তাবলি",
    modernSlavery: "আধুনিক দাসত্ব বিবৃতি",
    rights: "© {year} Emerging Group. সর্বস্বত্ব সংরক্ষিত।",
    language: "ভাষা",
    backToTop: "উপরে যান",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
    openSearch: "অনুসন্ধান খুলুন (Ctrl K)",
    exploreBusinesses: "আমাদের ব্যবসা দেখুন",
    investorRelationsCta: "বিনিয়োগকারী সম্পর্ক",
    atAGlance: "এক নজরে",
    groupFactSheet: "গ্রুপ ফ্যাক্ট শিট →",
    yearFounded: "প্রতিষ্ঠার বছর",
    businessVerticals: "ব্যবসায়িক উল্লম্ব",
    institutionalPartners: "প্রাতিষ্ঠানিক অংশীদার",
    executiveOverview: "নির্বাহী পর্যালোচনা",
    readOverview: "গ্রুপ পর্যালোচনা পড়ুন →",
    ourBusinessesHeading: "আমাদের ব্যবসাসমূহ",
    allSixVerticals: "ছয়টি উল্লম্ব →",
    vision2040: "ভিশন ২০৪০",
    people: "মানুষ",
    planet: "পৃথিবী",
    profitability: "এন্টারপ্রাইজ মুনাফা",
    latestNews: "সর্বশেষ খবর",
    homeEyebrow: "Emerging Group · বাংলাদেশ · ২০০২ থেকে",
    homeTagline:
      "বাংলাদেশের শিল্প স্বনির্ভরতা গড়ে তোলা একটি বহুমুখী এন্টারপ্রাইজ গ্রুপ।",
    homeIntro:
      "ছয়টি পরিচালন উল্লম্ব, একটি সমন্বিত ইকোসিস্টেম — প্যাকেজিং, এগ্রো-কেমিক্যাল, অবকাঠামো, ট্রেডিং, প্রযুক্তি ও মিডিয়ায় মিশন-ক্রিটিকাল বি২বি সমাধান।",
  },
};

const STORAGE_KEY = "eg-locale";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function readLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "bn" ? "bn" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Locale {
  return "en";
}

function writeLocale(next: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore
  }
  emit();
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale === "bn" ? "bn" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export const businessNamesBn: Record<string, string> = {
  "printing-packaging": "প্রিন্টিং ও প্যাকেজিং",
  "agro-chemicals": "এগ্রো-কেমিক্যালস",
  "infrastructure-construction": "অবকাঠামো ও নির্মাণ",
  trading: "ট্রেডিং",
  "software-it": "সফটওয়্যার ও আইটি",
  "news-media": "নিউজ ও মিডিয়া",
};

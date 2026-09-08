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
import { ui, type Locale, type UiDict } from "@/lib/dictionary";

export type { Locale, UiDict };

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
    return window.localStorage.getItem(STORAGE_KEY) === "bn" ? "bn" : "en";
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
  t: UiDict;
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
    () => ({ locale, setLocale, t: ui[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
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

export const businessCategoryBn: Record<string, string> = {
  Manufacturing: "উৎপাদন",
  "Agriculture inputs": "কৃষি উপকরণ",
  Development: "উন্নয়ন",
  Commodities: "পণ্য",
  Technology: "প্রযুক্তি",
  "Public interest": "জনস্বার্থ",
};

export const businessSummaryBn: Record<string, string> = {
  "printing-packaging":
    "এফএমসিজি, ফার্মাসিউটিক্যাল ও রপ্তানি খাতের জন্য উচ্চ-নির্ভুল ফ্লেক্সোগ্রাফিক ও অফসেট প্যাকেজিং।",
  "agro-chemicals":
    "গবেষণাভিত্তিক ফসল সুরক্ষা ফর্মুলেশন ও মাটির পুষ্টি যা অভ্যন্তরীণ খাদ্য নিরাপত্তা শক্তিশালী করে।",
  "infrastructure-construction":
    "কঠোর কাঠামোগত মানসহ শিল্প, সিভিল ও বাণিজ্যিক উন্নয়ন।",
  trading: "শিল্প কাঁচামালের নির্ভরযোগ্য প্রবাহ নিশ্চিত করে দেশীয় ও আন্তর্জাতিক নেটওয়ার্ক।",
  "software-it":
    "দ্রুত ফিডব্যাক লুপের ওপর নির্মিত স্কেলযোগ্য ডিজিটাল প্ল্যাটফর্ম ও এন্টারপ্রাইজ সিস্টেম আর্কিটেকচার।",
  "news-media":
    "নৈতিক জনসংলাপে প্রতিশ্রুতিবদ্ধ বস্তুনিষ্ঠ সাংবাদিকতা ও জনস্বার্থ প্রতিবেদন।",
};

export const businessHeroBn: Record<string, string> = {
  "printing-packaging":
    "নিয়ন্ত্রিত ও রপ্তানি-গ্রেড সাপ্লাই চেইনের জন্য নির্ভুল প্যাকেজিং।",
  "agro-chemicals":
    "বাংলাদেশের খাদ্য নিরাপত্তা শক্তিশালী করে এমন ফর্মুলেশন ও ফিল্ড সায়েন্স।",
  "infrastructure-construction":
    "বাংলাদেশের শিল্পের প্রয়োজনীয় স্থাপনার জন্য কাঠামোগত শৃঙ্খলা।",
  trading: "যেসব উৎপাদক ডাউনটাইম সহ্য করতে পারে না, তাদের জন্য নির্ভরযোগ্য কমোডিটি প্রবাহ।",
  "software-it": "সিদ্ধান্ত ও কর্মে দূরত্ব কমিয়ে আনে এমন এন্টারপ্রাইজ সফটওয়্যার।",
  "news-media": "জনসংলাপকে অবহিত করে এমন স্বাধীন সাংবাদিকতা।",
};

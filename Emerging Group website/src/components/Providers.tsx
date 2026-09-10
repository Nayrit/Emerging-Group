"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

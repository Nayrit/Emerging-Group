import type { Metadata } from "next";
import { TermsContent } from "@/components/pages/TermsContent";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use and modern slavery statement for Emerging Group Bangladesh.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <TermsContent />;
}

import type { Metadata } from "next";
import { SustainabilityContent } from "@/components/pages/SustainabilityContent";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "People, Planet and Enterprise Profitability — Emerging Group's triple-bottom-line approach.",
  alternates: { canonical: "/sustainability" },
};

export default function SustainabilityPage() {
  return <SustainabilityContent />;
}

import type { Metadata } from "next";
import { BusinessesContent } from "@/components/pages/BusinessesContent";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "Six verticals, one integrated ecosystem — packaging, agro-chemicals, infrastructure, trading, software and media.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return <BusinessesContent />;
}

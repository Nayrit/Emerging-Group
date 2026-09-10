import type { Metadata } from "next";
import { InvestorsContent } from "@/components/pages/InvestorsContent";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Investor relations for Emerging Group — filings, reports and governance.",
};

export default function InvestorsPage() {
  return <InvestorsContent />;
}

import type { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Emerging Group collects and protects personal data on the corporate website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}

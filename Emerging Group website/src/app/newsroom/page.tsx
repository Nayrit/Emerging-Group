import type { Metadata } from "next";
import { NewsroomContent } from "@/components/pages/NewsroomContent";

export const metadata: Metadata = {
  title: "Newsroom",
  description: "Latest news and announcements from Emerging Group Bangladesh.",
  alternates: { canonical: "/newsroom" },
};

export default function NewsroomPage() {
  return <NewsroomContent />;
}

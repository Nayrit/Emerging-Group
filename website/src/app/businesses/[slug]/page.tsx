import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessDetailContent } from "@/components/pages/BusinessDetailContent";
import { businesses, getBusiness } from "@/data/businesses";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return businesses.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) return { title: "Business", robots: { index: false } };
  return {
    title: biz.name,
    description: biz.summary,
    alternates: { canonical: `/businesses/${biz.slug}` },
    openGraph: {
      title: `${biz.name} | Emerging Group`,
      description: biz.summary,
      url: `/businesses/${biz.slug}`,
    },
  };
}

export default async function BusinessDetailPage({ params }: Props) {
  const { slug } = await params;
  const biz = getBusiness(slug);
  if (!biz) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Businesses", path: "/businesses" },
            { name: biz.name, path: `/businesses/${biz.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: biz.name,
            description: biz.summary,
            provider: {
              "@type": "Organization",
              name: "Emerging Group",
              url: "https://emerginggroup.com.bd",
            },
            areaServed: "BD",
            url: `https://emerginggroup.com.bd/businesses/${biz.slug}`,
          },
        ]}
      />
      <BusinessDetailContent business={biz} />
    </>
  );
}

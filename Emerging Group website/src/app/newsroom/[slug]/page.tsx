import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticleContent } from "@/components/pages/NewsArticleContent";
import { getNews, news } from "@/data/news";
import { breadcrumbJsonLd, JsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return { title: "News", robots: { index: false } };
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/newsroom/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      publishedTime: item.date,
      url: `/newsroom/${item.slug}`,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Newsroom", path: "/newsroom" },
            { name: item.title, path: `/newsroom/${item.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: item.title,
            datePublished: item.date,
            dateModified: item.date,
            description: item.excerpt,
            articleSection: item.category,
            author: {
              "@type": "Organization",
              name: "Emerging Group",
            },
            publisher: {
              "@type": "Organization",
              name: "Emerging Group",
              logo: {
                "@type": "ImageObject",
                url: "https://emerginggroupbd.com/brand/logo.png",
              },
            },
            mainEntityOfPage: `https://emerginggroupbd.com/newsroom/${item.slug}`,
          },
        ]}
      />
      <NewsArticleContent item={item} />
    </>
  );
}

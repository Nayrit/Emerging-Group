import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { MediaBlock } from "@/components/MediaBlock";
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

  const others = businesses.filter((b) => b.slug !== biz.slug).slice(0, 3);

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
      <section className="relative min-h-[420px] overflow-hidden bg-ink md:min-h-[480px]">
        <div className="absolute inset-0">
          <MediaBlock className="h-full w-full" label={biz.category} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/93 via-ink/55 to-ink/20" />
        <div className="container-x relative flex min-h-[420px] flex-col justify-end gap-5 pb-14 pt-24 md:min-h-[480px] md:pb-16">
          <nav className="flex items-center gap-2.5 text-[11.5px] text-white/60">
            <Link href="/businesses" className="hover:text-white">
              Businesses
            </Link>
            <span>/</span>
            <span className="text-white">{biz.name}</span>
          </nav>
          <div className="text-[11px] uppercase tracking-[0.2em] text-blue-soft">
            Vertical {biz.number}
          </div>
          <h1 className="max-w-[760px] font-serif text-[36px] font-normal leading-[1.15] tracking-[-0.015em] text-white md:text-[52px]">
            {biz.heroHeadline}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-[88px]">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-[22px]">
            {biz.description.map((p) => (
              <p
                key={p.slice(0, 24)}
                className={`font-light leading-relaxed ${
                  p === biz.description[0]
                    ? "text-[18px] text-ink md:text-[19px]"
                    : "text-[15.5px] leading-[1.8] text-body"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
          <FadeIn className="self-start border border-line bg-wash p-8 md:p-9">
            <div className="mb-6 text-[10.5px] uppercase tracking-[0.16em] text-muted">
              Division at a glance
            </div>
            <div className="grid grid-cols-2 gap-6">
              {biz.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[30px] font-bold tracking-[-0.01em] text-ink">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            {biz.certifications && (
              <>
                <div className="my-6 h-px bg-line" />
                <div className="mb-2.5 text-[10.5px] uppercase tracking-[0.16em] text-muted">
                  Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {biz.certifications.map((c) => (
                    <span
                      key={c}
                      className="border border-line-strong px-2.5 py-1.5 text-[11.5px] text-body-strong"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </>
            )}
          </FadeIn>
        </div>
      </section>

      {biz.capabilities && (
        <section className="border-t border-line bg-wash py-16 md:py-[88px]">
          <div className="container-x">
            <h2 className="mb-10 font-serif text-[30px] font-normal text-ink md:mb-11 md:text-[34px]">
              Capabilities
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {biz.capabilities.map((cap, i) => (
                <FadeIn
                  key={cap.title}
                  delay={i * 80}
                  className="flex flex-col gap-3 border border-line bg-white p-8"
                >
                  <div className="text-[11px] uppercase tracking-[0.16em] text-blue">
                    {cap.tag}
                  </div>
                  <div className="font-serif text-[22px] text-ink">{cap.title}</div>
                  <p className="text-sm font-light leading-relaxed text-body">
                    {cap.text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {biz.sectors && (
        <section className="grid lg:grid-cols-2">
          <MediaBlock className="min-h-[320px] lg:min-h-[400px]" label="Facility" accent="green" />
          <div className="flex flex-col justify-center gap-5 bg-ink px-6 py-14 md:px-16 md:py-[76px]">
            <div className="text-[11px] uppercase tracking-[0.2em] text-blue-soft">
              Sectors served
            </div>
            <div className="mt-1.5">
              {biz.sectors.map((sector, i) => (
                <div
                  key={sector.name}
                  className={`flex items-center justify-between py-4 text-[15px] text-white ${
                    i < biz.sectors!.length - 1 ? "border-b border-white/15" : ""
                  }`}
                >
                  {sector.name}
                  <span className="text-[13px] text-white/50">{sector.clients}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-ghost mt-3 h-[50px] self-start">
              Request a capability pack
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-white py-16 md:py-20">
        <div className="container-x">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-[28px] text-ink">More verticals</h2>
            <Link href="/businesses" className="link-arrow">
              All businesses →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/businesses/${b.slug}`}
                className="border border-line p-6 transition hover:border-blue/40 hover:bg-wash"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-blue">
                  Vertical {b.number}
                </div>
                <div className="mt-2 font-serif text-xl text-ink">{b.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

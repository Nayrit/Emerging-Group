import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-ink px-5 py-24 text-white md:py-32">
      <div className="container-x max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.2em] text-blue-soft">
          Error 404
        </div>
        <h1 className="mt-4 font-serif text-[42px] leading-tight md:text-[52px]">
          This page is not in the Group site map.
        </h1>
        <p className="mt-5 text-[16px] font-light leading-relaxed text-white/70">
          The link may be outdated, or the page may have moved. Use search or return
          to a primary section below.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Home
          </Link>
          <Link href="/businesses" className="btn btn-ghost">
            Businesses
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

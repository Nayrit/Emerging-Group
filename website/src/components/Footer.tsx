import Link from "next/link";
import { businesses } from "@/data/businesses";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:pb-14 lg:pt-[72px]">
        <div className="flex max-w-sm flex-col gap-5">
          <Logo variant="dark" />
          <p className="text-[13.5px] font-light leading-relaxed text-white/65">
            {site.address.short}
          </p>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="text-sm text-white/80 transition hover:text-white"
          >
            {site.phone}
          </a>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            Group
          </div>
          <Link href="/about" className="text-[13.5px] text-white/82 hover:text-white">
            About us
          </Link>
          <Link href="/about#leadership" className="text-[13.5px] text-white/82 hover:text-white">
            Leadership
          </Link>
          <Link href="/sustainability" className="text-[13.5px] text-white/82 hover:text-white">
            Sustainability
          </Link>
          <Link href="/investors" className="text-[13.5px] text-white/82 hover:text-white">
            Governance
          </Link>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            Businesses
          </div>
          {businesses.slice(0, 3).map((b) => (
            <Link
              key={b.slug}
              href={`/businesses/${b.slug}`}
              className="text-[13.5px] text-white/82 hover:text-white"
            >
              {b.shortName}
            </Link>
          ))}
          <Link href="/businesses" className="text-[13.5px] text-white/82 hover:text-white">
            Trading · IT · Media
          </Link>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="text-[10px] uppercase tracking-[0.16em] text-blue-soft">
            Connect
          </div>
          <Link href="/careers" className="text-[13.5px] text-white/82 hover:text-white">
            Careers
          </Link>
          <Link href="/newsroom" className="text-[13.5px] text-white/82 hover:text-white">
            Newsroom
          </Link>
          <Link href="/investors" className="text-[13.5px] text-white/82 hover:text-white">
            Investor relations
          </Link>
          <Link href="/contact" className="text-[13.5px] text-white/82 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <div className="container-x flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[11.5px] text-white/45">
          © {new Date().getFullYear()} Emerging Group. All rights reserved.
        </span>
        <div className="flex flex-wrap gap-6">
          <Link href="/privacy" className="text-[11.5px] text-white/45 hover:text-white/70">
            Privacy
          </Link>
          <Link href="/terms" className="text-[11.5px] text-white/45 hover:text-white/70">
            Terms
          </Link>
          <span className="text-[11.5px] text-white/45">
            Modern slavery statement
          </span>
        </div>
      </div>
    </footer>
  );
}

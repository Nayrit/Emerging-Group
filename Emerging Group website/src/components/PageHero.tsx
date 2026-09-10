import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
  children?: ReactNode;
  compact?: boolean;
  patterned?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
  compact = false,
  patterned = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-ink text-white ${
        compact ? "py-16 md:py-[64px]" : "py-20 md:py-[72px]"
      }`}
    >
      {patterned && (
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(80,184,103,0.16),transparent_34%),radial-gradient(circle_at_10%_80%,rgba(21,72,176,0.35),transparent_40%)]" />
      <div className="container-x relative">
        {crumbs && (
          <div className="mb-5 md:mb-6">
            <Breadcrumb items={crumbs} light />
          </div>
        )}
        {eyebrow && <div className="eyebrow-blue mb-4">{eyebrow}</div>}
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <h1 className="max-w-3xl font-serif text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-pretty md:text-[50px] lg:text-[54px]">
            {title}
          </h1>
          {(description || children) && (
            <div className="max-w-xl pb-1">
              {description && (
                <p className="text-base font-light leading-relaxed text-white/72 md:text-[16px]">
                  {description}
                </p>
              )}
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

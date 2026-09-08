import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumb({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-2.5 text-[11.5px] ${
        light ? "text-white/55" : "text-muted"
      }`}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-2.5">
            {index > 0 && <span>/</span>}
            {item.href && !last ? (
              <Link
                href={item.href}
                className={light ? "hover:text-white" : "hover:text-ink"}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-ink"}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}

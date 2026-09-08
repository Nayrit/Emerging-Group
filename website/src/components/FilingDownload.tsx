"use client";

type Filing = {
  title: string;
  meta: string;
  date: string;
};

export function FilingDownload({ filing }: { filing: Filing }) {
  const subject = encodeURIComponent(`Document request: ${filing.title}`);
  const body = encodeURIComponent(
    `Hello Investor Relations,\n\nPlease send the latest copy of "${filing.title}" (${filing.meta}, ${filing.date}).\n\nThank you.`,
  );
  const href = `mailto:investors@emerginggroup.com.bd?subject=${subject}&body=${body}`;

  return (
    <a
      href={href}
      className="self-start text-[13px] font-medium text-blue transition hover:text-ink sm:self-auto"
      aria-label={`Request download of ${filing.title}`}
    >
      Request PDF →
    </a>
  );
}

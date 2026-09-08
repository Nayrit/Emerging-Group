"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { roles, type Role } from "@/data/careers";

const ALL_VERTICALS = "All verticals";
const ALL_LOCATIONS = "All locations";
const ALL_FUNCTIONS = "Function";

const uniqueVerticals = Array.from(new Set(roles.map((r) => r.vertical)));
const uniqueLocations = Array.from(new Set(roles.map((r) => r.location)));
const uniqueFunctions = Array.from(new Set(roles.map((r) => r.function)));

export function RolesBoard() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [vertical, setVertical] = useState(ALL_VERTICALS);
  const [location, setLocation] = useState(ALL_LOCATIONS);
  const [fn, setFn] = useState(ALL_FUNCTIONS);
  const [showAll, setShowAll] = useState(false);

  const verticalOptions = useMemo(
    () => [
      { value: ALL_VERTICALS, label: t.allVerticals },
      ...uniqueVerticals.map((v) => ({ value: v, label: v })),
    ],
    [t],
  );
  const locationOptions = useMemo(
    () => [
      { value: ALL_LOCATIONS, label: t.allLocations },
      ...uniqueLocations.map((v) => ({ value: v, label: v })),
    ],
    [t],
  );
  const functionOptions = useMemo(
    () => [
      { value: ALL_FUNCTIONS, label: t.function },
      ...uniqueFunctions.map((v) => ({ value: v, label: v })),
    ],
    [t],
  );

  const filtered = useMemo(() => {
    return roles.filter((role) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        role.title.toLowerCase().includes(q) ||
        role.vertical.toLowerCase().includes(q);
      const matchesVertical =
        vertical === ALL_VERTICALS || role.vertical === vertical;
      const matchesLocation =
        location === ALL_LOCATIONS || role.location === location;
      const matchesFn = fn === ALL_FUNCTIONS || role.function === fn;
      return matchesQuery && matchesVertical && matchesLocation && matchesFn;
    });
  }, [query, vertical, location, fn]);

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <div>
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="font-serif text-[30px] font-normal text-ink md:text-[34px]">
          {t.openRoles}
        </h2>
        <span className="text-[13px] text-muted">
          {filtered.length} {t.positions}
        </span>
      </div>

      <div className="mb-7 grid gap-3 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <label className="flex h-[46px] items-center gap-2.5 border border-line-strong bg-white px-3.5">
          <span className="inline-block h-3.5 w-3.5 rounded-full border-[1.5px] border-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchRoles}
            className="w-full bg-transparent text-[13.5px] outline-none! placeholder:text-muted"
          />
        </label>
        <Select value={vertical} onChange={setVertical} options={verticalOptions} />
        <Select value={location} onChange={setLocation} options={locationOptions} />
        <Select value={fn} onChange={setFn} options={functionOptions} />
      </div>

      <div className="hidden overflow-hidden border border-line bg-white md:block">
        <div className="grid grid-cols-[2.4fr_1.4fr_1.1fr_0.9fr_auto] gap-5 border-b border-line bg-wash px-7 py-4">
          {[t.role, t.vertical, t.location, t.type, ""].map((h, i) => (
            <span
              key={h || `action-${i}`}
              className="text-[10.5px] uppercase tracking-[0.14em] text-muted"
            >
              {h}
            </span>
          ))}
        </div>
        {visible.map((role) => (
          <RoleRow key={role.id} role={role} applyLabel={t.apply} />
        ))}
        {visible.length === 0 && (
          <div className="px-7 py-10 text-sm text-muted">{t.noRoles}</div>
        )}
      </div>

      <div className="flex flex-col gap-3 md:hidden">
        {visible.map((role) => (
          <a
            key={role.id}
            href={`mailto:careers@emerginggroup.com.bd?subject=Application: ${encodeURIComponent(role.title)}`}
            className="flex flex-col gap-2.5 border border-line bg-white p-5 transition hover:border-blue/40"
          >
            <div className="text-base font-medium leading-snug text-ink">
              {role.title}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-line bg-wash px-2.5 py-1 text-[11.5px] text-body">
                {role.vertical}
              </span>
              <span className="border border-line bg-wash px-2.5 py-1 text-[11.5px] text-body">
                {role.location}
              </span>
            </div>
            <span className="link-arrow mt-0.5">{t.apply}</span>
          </a>
        ))}
      </div>

      {!showAll && filtered.length > 5 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="btn btn-outline h-[46px] px-[26px] text-[13.5px]"
          >
            {t.loadAllRoles.replace("{n}", String(filtered.length))}
          </button>
        </div>
      )}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative h-[46px] border border-line-strong bg-white">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full appearance-none bg-transparent px-3.5 pr-8 text-[13.5px] text-body-strong outline-none!"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-muted">
        ▼
      </span>
    </div>
  );
}

function RoleRow({ role, applyLabel }: { role: Role; applyLabel: string }) {
  return (
    <a
      href={`mailto:careers@emerginggroup.com.bd?subject=Application: ${encodeURIComponent(role.title)}`}
      className="role-row grid grid-cols-[2.4fr_1.4fr_1.1fr_0.9fr_auto] items-center gap-5 border-b border-line px-7 py-[22px] last:border-b-0"
    >
      <span className="text-[15.5px] font-medium text-ink">{role.title}</span>
      <span className="text-[13.5px] text-body">{role.vertical}</span>
      <span className="text-[13.5px] text-body">{role.location}</span>
      <span className="text-[13.5px] text-body">{role.type}</span>
      <span className="text-[13px] font-medium text-blue">{applyLabel}</span>
    </a>
  );
}

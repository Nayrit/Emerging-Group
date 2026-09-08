"use client";

import { useMemo, useState } from "react";
import { roles, type Role } from "@/data/careers";

const verticals = ["All verticals", ...Array.from(new Set(roles.map((r) => r.vertical)))];
const locations = ["All locations", ...Array.from(new Set(roles.map((r) => r.location)))];
const functions = ["Function", ...Array.from(new Set(roles.map((r) => r.function)))];

export function RolesBoard() {
  const [query, setQuery] = useState("");
  const [vertical, setVertical] = useState("All verticals");
  const [location, setLocation] = useState("All locations");
  const [fn, setFn] = useState("Function");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    return roles.filter((role) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        role.title.toLowerCase().includes(q) ||
        role.vertical.toLowerCase().includes(q);
      const matchesVertical =
        vertical === "All verticals" || role.vertical === vertical;
      const matchesLocation =
        location === "All locations" || role.location === location;
      const matchesFn = fn === "Function" || role.function === fn;
      return matchesQuery && matchesVertical && matchesLocation && matchesFn;
    });
  }, [query, vertical, location, fn]);

  const visible = showAll ? filtered : filtered.slice(0, 5);

  return (
    <div>
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="font-serif text-[30px] font-normal text-ink md:text-[34px]">
          Open roles
        </h2>
        <span className="text-[13px] text-muted">{filtered.length} positions</span>
      </div>

      <div className="mb-7 grid gap-3 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <label className="flex h-[46px] items-center gap-2.5 border border-line-strong bg-white px-3.5">
          <span className="inline-block h-3.5 w-3.5 rounded-full border-[1.5px] border-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search roles"
            className="w-full bg-transparent text-[13.5px] outline-none! placeholder:text-muted"
          />
        </label>
        <Select value={vertical} onChange={setVertical} options={verticals} />
        <Select value={location} onChange={setLocation} options={locations} />
        <Select value={fn} onChange={setFn} options={functions} />
      </div>

      <div className="hidden overflow-hidden border border-line bg-white md:block">
        <div className="grid grid-cols-[2.4fr_1.4fr_1.1fr_0.9fr_auto] gap-5 border-b border-line bg-wash px-7 py-4">
          {["Role", "Vertical", "Location", "Type", ""].map((h) => (
            <span
              key={h || "action"}
              className="text-[10.5px] uppercase tracking-[0.14em] text-muted"
            >
              {h}
            </span>
          ))}
        </div>
        {visible.map((role) => (
          <RoleRow key={role.id} role={role} />
        ))}
        {visible.length === 0 && (
          <div className="px-7 py-10 text-sm text-muted">
            No roles match these filters.
          </div>
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
            <span className="link-arrow mt-0.5">Apply →</span>
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
            Load all {filtered.length} roles
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
  options: string[];
}) {
  return (
    <div className="relative h-[46px] border border-line-strong bg-white">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-full w-full appearance-none bg-transparent px-3.5 pr-8 text-[13.5px] text-body-strong outline-none!"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[9px] text-muted">
        ▼
      </span>
    </div>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <a
      href={`mailto:careers@emerginggroup.com.bd?subject=Application: ${encodeURIComponent(role.title)}`}
      className="role-row grid grid-cols-[2.4fr_1.4fr_1.1fr_0.9fr_auto] items-center gap-5 border-b border-line px-7 py-[22px] last:border-b-0"
    >
      <span className="text-[15.5px] font-medium text-ink">{role.title}</span>
      <span className="text-[13.5px] text-body">{role.vertical}</span>
      <span className="text-[13.5px] text-body">{role.location}</span>
      <span className="text-[13.5px] text-body">{role.type}</span>
      <span className="text-[13px] font-medium text-blue">Apply →</span>
    </a>
  );
}

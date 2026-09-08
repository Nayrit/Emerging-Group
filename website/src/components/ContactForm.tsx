"use client";

import { FormEvent, useState } from "react";
import { enquiryRoutes, site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      org: String(data.get("org") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      type: String(data.get("type") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Unable to send enquiry. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please email us directly or try again.");
    }
  }

  return (
    <form
      className="relative flex flex-col gap-4 border border-line bg-white p-6 md:p-8"
      onSubmit={onSubmit}
    >
      <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted">
        Send a message
      </div>

      {/* Honeypot — hidden from users, bots often fill it */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Organisation" name="org" autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-muted">Enquiry type</span>
        <select
          name="type"
          className="h-11 border border-line-strong bg-wash px-3 outline-none focus:border-blue"
          defaultValue="Commercial & supply"
          required
        >
          {enquiryRoutes.map((r) => (
            <option key={r.title} value={r.title}>
              {r.title}
            </option>
          ))}
          <option value="General">General</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={4000}
          className="resize-y border border-line-strong bg-wash px-3 py-2.5 outline-none focus:border-blue"
        />
      </label>

      {status === "success" && (
        <p className="text-sm font-medium text-green" role="status">
          Thank you — your enquiry was received. Our team will respond via{" "}
          {site.email}.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {error}{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
        </p>
      )}

      {status !== "success" && (
        <button
          type="submit"
          className="btn btn-primary self-start disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Submit enquiry"}
        </button>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={type === "email" ? 254 : 160}
        className="h-11 border border-line-strong bg-wash px-3 outline-none focus:border-blue"
      />
    </label>
  );
}

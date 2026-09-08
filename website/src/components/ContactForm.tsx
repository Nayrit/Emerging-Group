"use client";

import { useState } from "react";
import { enquiryRoutes, site } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-4 border border-line bg-white p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="text-[10.5px] uppercase tracking-[0.16em] text-muted">
        Send a message
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="org" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-muted">Enquiry type</span>
        <select
          name="type"
          className="h-11 border border-line-strong bg-wash px-3 outline-none!"
          defaultValue="Commercial & supply"
        >
          {enquiryRoutes.map((r) => (
            <option key={r.title}>{r.title}</option>
          ))}
          <option>General</option>
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y border border-line-strong bg-wash px-3 py-2.5 outline-none!"
        />
      </label>
      {sent ? (
        <p className="text-sm font-medium text-green">
          Thank you — your message has been recorded. Our team will respond via{" "}
          {site.email}.
        </p>
      ) : (
        <button type="submit" className="btn btn-primary self-start">
          Submit enquiry
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-muted">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 border border-line-strong bg-wash px-3 outline-none!"
      />
    </label>
  );
}

import { NextResponse } from "next/server";
import { enquiryRoutes } from "@/data/site";
import {
  isValidEmail,
  isValidPhone,
  rateLimit,
  sanitizeText,
} from "@/lib/security";

export const runtime = "nodejs";

type Body = {
  name?: string;
  org?: string;
  email?: string;
  phone?: string;
  type?: string;
  message?: string;
  website?: string; // honeypot
};

const allowedTypes = new Set([
  ...enquiryRoutes.map((r) => r.title),
  "General",
]);

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`contact:${ip}`, 5, 60_000);
  if (!limited.ok) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec || 60) },
      },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden field
  if (sanitizeText(body.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitizeText(body.name, 120);
  const org = sanitizeText(body.org, 160);
  const email = sanitizeText(body.email, 254).toLowerCase();
  const phone = sanitizeText(body.phone, 24);
  const type = sanitizeText(body.type, 80);
  const message = sanitizeText(body.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  if (!allowedTypes.has(type)) {
    return NextResponse.json(
      { ok: false, error: "Invalid enquiry type." },
      { status: 400 },
    );
  }

  // Persist-ready payload (wire to ESP/CRM later). Never reflect raw HTML.
  const payload = {
    receivedAt: new Date().toISOString(),
    name,
    org,
    email,
    phone,
    type,
    message,
    ip,
  };

  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", JSON.stringify(payload));
  }

  return NextResponse.json({
    ok: true,
    message: "Enquiry received. Our team will respond shortly.",
  });
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}

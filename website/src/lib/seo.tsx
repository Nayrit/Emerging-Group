export const SITE_URL = "https://emerginggroup.com.bd";

export const defaultDescription =
  "Emerging Group is a diversified enterprise group building Bangladesh's industrial self-reliance across packaging, agro-chemicals, infrastructure, trading, technology and media.";

export const defaultKeywords = [
  "Emerging Group",
  "Emerging Group Bangladesh",
  "Bangladesh conglomerate",
  "packaging Bangladesh",
  "agro-chemicals Bangladesh",
  "infrastructure construction Dhaka",
  "industrial trading",
  "enterprise software Bangladesh",
  "investor relations Bangladesh",
  "Gazipur packaging",
  "Gulshan corporate",
];

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Emerging Group",
    legalName: "Emerging Group Bangladesh",
    url: SITE_URL,
    logo: absoluteUrl("/brand/logo.png"),
    foundingDate: "2002",
    description: defaultDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 42, Gulshan Avenue, Gulshan 1",
      addressLocality: "Dhaka",
      postalCode: "1212",
      addressCountry: "BD",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+880-2-9821-4400",
        contactType: "customer service",
        email: "info@emerginggroup.com.bd",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    ],
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Emerging Group",
    description: defaultDescription,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/newsroom?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

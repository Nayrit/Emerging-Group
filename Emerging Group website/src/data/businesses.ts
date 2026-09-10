export type Business = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  category: string;
  summary: string;
  description: string[];
  stats: { value: string; label: string }[];
  certifications?: string[];
  capabilities?: { tag: string; title: string; text: string }[];
  sectors?: { name: string; clients: string }[];
  heroHeadline: string;
  imageHint: string;
};

export const businesses: Business[] = [
  {
    slug: "printing-packaging",
    number: "01",
    name: "Printing & Packaging",
    shortName: "Printing & Packaging",
    category: "Manufacturing",
    summary:
      "High-precision flexographic and offset packaging for FMCG, pharmaceutical and export sectors.",
    description: [
      "High-precision flexographic and offset packaging solutions serving FMCG, pharmaceutical, and export sectors with minimal environmental waste.",
      "The division operates three facilities across Gazipur and Narayanganj, running pharma-grade cleanroom lines alongside high-volume FMCG carton and flexible film production. In-house prepress, colour management and structural design shorten approval cycles for brand owners, while closed-loop trim recovery returns process waste to the substrate stream.",
      "Capacity is contracted under multi-year framework agreements with both domestic manufacturers and export buyers in the EU and Gulf markets.",
    ],
    stats: [
      { value: "3", label: "Facilities" },
      { value: "640", label: "People employed" },
      { value: "9", label: "Production lines" },
      { value: "4.1%", label: "Process waste rate" },
    ],
    certifications: ["ISO 9001", "ISO 15378", "FSC Chain of Custody", "GMP"],
    capabilities: [
      {
        tag: "Flexographic",
        title: "Flexible film & laminates",
        text: "Eight-colour CI presses with in-line inspection for pouches, sachets and shrink sleeves.",
      },
      {
        tag: "Offset",
        title: "Folding cartons",
        text: "Pharmaceutical secondary packaging with braille embossing and serialised coding.",
      },
      {
        tag: "Prepress",
        title: "Structural & colour",
        text: "In-house plate making, colour management and sample mock-ups within 72 hours.",
      },
    ],
    sectors: [
      { name: "FMCG", clients: "62 clients" },
      { name: "Pharmaceutical", clients: "24 clients" },
      { name: "Textile & RMG export", clients: "31 clients" },
      { name: "Agro & food processing", clients: "18 clients" },
    ],
    heroHeadline:
      "Precision packaging for regulated and export-grade supply chains.",
    imageHint: "packaging manufacturing line",
  },
  {
    slug: "agro-chemicals",
    number: "02",
    name: "Agro-Chemicals",
    shortName: "Agro-Chemicals",
    category: "Agriculture inputs",
    summary:
      "Research-backed crop care formulations and soil nutrients reinforcing domestic food security.",
    description: [
      "Research-backed crop care formulations and soil nutrients designed to enhance agricultural productivity and reinforce domestic food security.",
      "Our agronomy network supports farmers across 64 districts with registered formulations, soil diagnostics and season-long advisory — closing the loop between product performance and field outcomes.",
      "Trials are run under controlled protocols with universities and extension partners, feeding continuous improvement into the product pipeline.",
    ],
    stats: [
      { value: "64", label: "Districts served" },
      { value: "12", label: "Registered formulations" },
      { value: "18%", label: "Yield lift in trials" },
      { value: "220", label: "Field agronomists" },
    ],
    certifications: ["BSTI", "ISO 9001", "Responsible Care"],
    capabilities: [
      {
        tag: "Crop care",
        title: "Protective formulations",
        text: "Targeted fungicides, herbicides and insecticides registered for major Bangladeshi crops.",
      },
      {
        tag: "Nutrition",
        title: "Soil nutrients",
        text: "Balanced NPK blends and micronutrient packs tuned to regional soil profiles.",
      },
      {
        tag: "Advisory",
        title: "Field extension",
        text: "Season-long agronomy support that ties product use to measurable yield outcomes.",
      },
    ],
    sectors: [
      { name: "Rice & cereals", clients: "Primary" },
      { name: "Vegetables", clients: "Growing" },
      { name: "Cash crops", clients: "Regional" },
      { name: "Institutional farms", clients: "Contract" },
    ],
    heroHeadline:
      "Formulations and field science that strengthen Bangladesh's food security.",
    imageHint: "agricultural crop field",
  },
  {
    slug: "infrastructure-construction",
    number: "03",
    name: "Infrastructure & Construction",
    shortName: "Infrastructure",
    category: "Development",
    summary:
      "Industrial, civil and commercial development with rigorous structural standards.",
    description: [
      "Industrial, civil, and commercial development projects delivered with rigorous structural standards and localized material sourcing.",
      "From plant expansions for Group manufacturing to third-party industrial parks and civic works, the division brings disciplined project controls and a preference for domestic supply chains.",
    ],
    stats: [
      { value: "40+", label: "Projects delivered" },
      { value: "92%", label: "Local sourcing" },
      { value: "1,100", label: "Site workforce peak" },
      { value: "0.8", label: "TRIR safety index" },
    ],
    certifications: ["ISO 45001", "ISO 9001", "LEED aligned"],
    capabilities: [
      {
        tag: "Industrial",
        title: "Plant & facilities",
        text: "Turnkey construction for manufacturing, warehousing and utilities.",
      },
      {
        tag: "Civil",
        title: "Infrastructure works",
        text: "Roads, drainage and site development for industrial estates.",
      },
      {
        tag: "Commercial",
        title: "Built environment",
        text: "Offices and mixed-use shells to institutional finish standards.",
      },
    ],
    sectors: [
      { name: "Manufacturing clients", clients: "Core" },
      { name: "Public works", clients: "Selective" },
      { name: "Logistics parks", clients: "Growing" },
      { name: "Group capex", clients: "Internal" },
    ],
    heroHeadline:
      "Structural discipline for the facilities Bangladesh's industry needs.",
    imageHint: "industrial construction site",
  },
  {
    slug: "trading",
    number: "04",
    name: "Trading",
    shortName: "Trading",
    category: "Commodities",
    summary:
      "Domestic and international networks securing reliable flows of industrial raw materials.",
    description: [
      "Domestic and international trade networks securing reliable flows of industrial raw materials.",
      "Desks cover polymers, paper substrates, agro inputs and selected industrial metals — feeding both Group manufacturing and external customers with contracted supply security.",
    ],
    stats: [
      { value: "20", label: "Source markets" },
      { value: "6", label: "Commodity desks" },
      { value: "48h", label: "Average quote cycle" },
      { value: "95%", label: "On-time delivery" },
    ],
    capabilities: [
      {
        tag: "Import",
        title: "Global sourcing",
        text: "Structured procurement from Asia, Middle East and Europe.",
      },
      {
        tag: "Domestic",
        title: "Distribution",
        text: "Warehousing and last-mile delivery across key industrial corridors.",
      },
      {
        tag: "Finance",
        title: "Trade instruments",
        text: "LC, inventory finance and hedging support for counterparties.",
      },
    ],
    sectors: [
      { name: "Polymers & resins", clients: "Desk" },
      { name: "Paper & board", clients: "Desk" },
      { name: "Agro inputs", clients: "Desk" },
      { name: "Industrial metals", clients: "Desk" },
    ],
    heroHeadline:
      "Reliable commodity flows for manufacturers who cannot afford downtime.",
    imageHint: "shipping containers port",
  },
  {
    slug: "software-it",
    number: "05",
    name: "Software & IT",
    shortName: "Software & IT",
    category: "Technology",
    summary:
      "Scalable digital platforms and enterprise system architectures built on rapid feedback loops.",
    description: [
      "Scalable digital platforms, tailored enterprise software solutions, and system architectures built on rapid feedback loops to modernize business operations.",
      "The vertical supports both Group digitalization and external enterprise clients across manufacturing, logistics and financial services.",
    ],
    stats: [
      { value: "30+", label: "Enterprise deployments" },
      { value: "ISO", label: "27001 aligned" },
      { value: "120", label: "Engineers" },
      { value: "99.9%", label: "Platform uptime" },
    ],
    certifications: ["ISO 27001 aligned", "OWASP practices"],
    capabilities: [
      {
        tag: "Platforms",
        title: "Enterprise systems",
        text: "ERP extensions, MES connectors and custom operational dashboards.",
      },
      {
        tag: "Cloud",
        title: "Secure infrastructure",
        text: "Hardened deployments with continuous monitoring and access control.",
      },
      {
        tag: "Product",
        title: "Digital products",
        text: "Customer and partner portals with measurable adoption loops.",
      },
    ],
    sectors: [
      { name: "Manufacturing ops", clients: "Core" },
      { name: "Logistics", clients: "Growing" },
      { name: "Financial services", clients: "Selective" },
      { name: "Group systems", clients: "Internal" },
    ],
    heroHeadline:
      "Enterprise software that shortens the distance between decision and action.",
    imageHint: "software engineering team",
  },
  {
    slug: "news-media",
    number: "06",
    name: "News & Media",
    shortName: "News & Media",
    category: "Public interest",
    summary:
      "Objective journalism and public-interest reporting committed to ethical public dialogue.",
    description: [
      "Objective journalism, digital news dissemination, and public-interest reporting committed to ethical public dialogue.",
      "Editorial independence is ring-fenced from Group commercial interests, with a digital-first desk serving national and diaspora audiences.",
    ],
    stats: [
      { value: "2.4m", label: "Monthly readers" },
      { value: "24/7", label: "Digital desk" },
      { value: "80+", label: "Journalists" },
      { value: "12", label: "Beats covered" },
    ],
    capabilities: [
      {
        tag: "Digital",
        title: "News platforms",
        text: "Fast, accessible reporting across web and social channels.",
      },
      {
        tag: "Investigative",
        title: "Public interest",
        text: "Long-form work on governance, economy and social issues.",
      },
      {
        tag: "Multimedia",
        title: "Video & podcasts",
        text: "Explainers and interviews that deepen civic understanding.",
      },
    ],
    sectors: [
      { name: "National news", clients: "Daily" },
      { name: "Business", clients: "Desk" },
      { name: "Features", clients: "Weekly" },
      { name: "Opinion", clients: "Curated" },
    ],
    heroHeadline:
      "Independent journalism that informs the public conversation.",
    imageHint: "newsroom editorial desk",
  },
];

export function getBusiness(slug: string) {
  return businesses.find((b) => b.slug === slug);
}

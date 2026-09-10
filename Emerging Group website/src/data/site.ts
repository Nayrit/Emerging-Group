export const site = {
  name: "Emerging Group",
  legalName: "Emerging Group Bangladesh",
  tagline: "A diversified enterprise group building Bangladesh's industrial self-reliance.",
  founded: 2002,
  address: {
    line1: "Emerging Group House",
    line2: "Plot 42, Gulshan Avenue",
    line3: "Gulshan 1, Dhaka 1212",
    country: "Bangladesh",
    short: "Emerging Group House, Gulshan Avenue, Dhaka 1212, Bangladesh",
  },
  phone: "+880 2 9821 4400",
  email: "info@emerginggroup.com.bd",
  hours: "Sun–Thu, 09:00–18:00",
  stats: {
    turnover: "US$1.6bn",
    growth: "+11.4%",
    partners: "180+",
    markets: "20",
  },
};

export const navMain: {
  label: string;
  href: string;
  hasMega?: boolean;
}[] = [
  { label: "About", href: "/about" },
  { label: "Businesses", href: "/businesses", hasMega: true },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Investors", href: "/investors" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Careers", href: "/careers" },
];

export const navUtility = [
  { label: "Investor Relations", href: "/investors" },
  { label: "Media Centre", href: "/newsroom" },
  { label: "Suppliers", href: "/contact" },
  { label: "Contact", href: "/contact" },
] as const;

export const enquiryRoutes = [
  {
    title: "Commercial & supply",
    detail: "Packaging, agro-chemicals, trading",
    email: "commercial@emerginggroup.com.bd",
  },
  {
    title: "Projects & tenders",
    detail: "Infrastructure & construction",
    email: "projects@emerginggroup.com.bd",
  },
  {
    title: "Investor relations",
    detail: "Filings, reports, analyst requests",
    email: "investors@emerginggroup.com.bd",
  },
  {
    title: "Media & press",
    detail: "Statements and interview requests",
    email: "press@emerginggroup.com.bd",
  },
];

export const milestones = [
  {
    year: "2002",
    text: "Group founded as a commodity trading house in Dhaka.",
  },
  {
    year: "2008",
    text: "First packaging facility commissioned in Gazipur.",
  },
  {
    year: "2013",
    text: "Agro-chemicals division launched with registered formulations.",
  },
  {
    year: "2019",
    text: "Infrastructure and software verticals established.",
  },
  {
    year: "2025",
    text: "First integrated triple-bottom-line report published.",
  },
];

export const leadership = [
  { name: "Rafiqul Islam Chowdhury", role: "Chairman" },
  { name: "Nusrat Jahan Ahmed", role: "Managing Director" },
  { name: "Imran Hossain", role: "Group Chief Financial Officer" },
  { name: "Farhana Kabir", role: "Director, Operations" },
];

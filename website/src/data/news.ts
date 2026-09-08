export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "gazipur-flexographic-line",
    title:
      "Third flexographic line commissioned at Gazipur, lifting export capacity 40%",
    category: "Packaging",
    date: "2026-08-14",
    dateLabel: "14 August 2026",
    excerpt:
      "The new CI press expands pouch and laminate capacity for EU and Gulf export programmes.",
    body: [
      "Emerging Group has commissioned a third flexographic line at its Gazipur packaging facility, increasing export-ready flexible packaging capacity by approximately 40%.",
      "The eight-colour CI press includes in-line inspection and closed-loop colour control, supporting multi-year framework agreements with FMCG and pharmaceutical brand owners.",
      "Group Managing Director Nusrat Jahan Ahmed said the investment deepens Bangladesh's ability to serve regulated export supply chains from a domestic manufacturing base.",
    ],
  },
  {
    slug: "rangpur-soil-nutrient-trials",
    title: "Soil nutrient trials across Rangpur report 18% yield improvement",
    category: "Agro-chemicals",
    date: "2026-08-02",
    dateLabel: "02 August 2026",
    excerpt:
      "Season-long field trials with extension partners validate new micronutrient packs for rice systems.",
    body: [
      "Controlled trials across Rangpur division have shown an average 18% yield improvement where Emerging Group soil nutrient packs were applied under agronomist guidance.",
      "The programme paired product use with soil diagnostics and mid-season advisory visits, reinforcing the division's model of closing the loop between formulation and field outcome.",
    ],
  },
  {
    slug: "triple-bottom-line-report",
    title:
      "Emerging Group publishes first integrated triple-bottom-line report",
    category: "Group",
    date: "2026-07-21",
    dateLabel: "21 July 2026",
    excerpt:
      "People, Planet and Enterprise Profitability metrics published in a single Group account.",
    body: [
      "Emerging Group has released its first integrated triple-bottom-line report, consolidating workforce, environmental and financial performance across all six verticals.",
      "The report establishes baseline indicators toward Vision 2040 and will be updated annually alongside the statutory Annual Report.",
    ],
  },
  {
    slug: "software-mes-rollout",
    title: "MES connectors live across three packaging lines",
    category: "Software & IT",
    date: "2026-06-18",
    dateLabel: "18 June 2026",
    excerpt:
      "Real-time production visibility now links Gazipur presses to Group planning systems.",
    body: [
      "The Software & IT vertical has completed MES connector deployment on three packaging lines, giving planners live OEE and waste data.",
      "The stack is being productised for external manufacturing clients seeking similar operational visibility.",
    ],
  },
  {
    slug: "narayanganj-warehouse",
    title: "Narayanganj logistics hall handed over ahead of monsoon season",
    category: "Infrastructure",
    date: "2026-05-09",
    dateLabel: "09 May 2026",
    excerpt:
      "40,000 sq ft warehouse completed with 92% locally sourced materials.",
    body: [
      "Infrastructure & Construction has handed over a 40,000 square-foot logistics hall in Narayanganj, completed ahead of the monsoon window.",
      "Local material content reached 92%, consistent with the division's sourcing standard for Group and third-party industrial projects.",
    ],
  },
  {
    slug: "media-audience-milestone",
    title: "News & Media desk surpasses 2.4 million monthly readers",
    category: "News & Media",
    date: "2026-04-28",
    dateLabel: "28 April 2026",
    excerpt:
      "Digital-first journalism reaches a new audience high while editorial independence remains ring-fenced.",
    body: [
      "The Group's News & Media vertical reported 2.4 million monthly readers, reflecting growth in national and diaspora audiences.",
      "Editorial governance continues to separate newsroom decisions from Group commercial interests.",
    ],
  },
];

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}

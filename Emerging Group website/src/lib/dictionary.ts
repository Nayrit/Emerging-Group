export type Locale = "en" | "bn";

export function tx(locale: Locale, en: string, bn: string) {
  return locale === "bn" ? bn : en;
}

export type UiDict = {
  skipToContent: string;
  investorRelations: string;
  mediaCentre: string;
  suppliers: string;
  contact: string;
  about: string;
  businesses: string;
  sustainability: string;
  investors: string;
  newsroom: string;
  careers: string;
  search: string;
  searchHint: string;
  noMatches: string;
  contactUs: string;
  allBusinesses: string;
  ourBusinesses: string;
  megaBlurb: string;
  viewAll: string;
  page: string;
  business: string;
  group: string;
  aboutUs: string;
  leadership: string;
  governance: string;
  connect: string;
  tradingItMedia: string;
  privacy: string;
  terms: string;
  modernSlavery: string;
  rights: string;
  language: string;
  backToTop: string;
  openMenu: string;
  closeMenu: string;
  openSearch: string;
  home: string;
  exploreVertical: string;
  moreVerticals: string;
  requestCapability: string;
  divisionGlance: string;
  certifications: string;
  capabilities: string;
  sectorsServed: string;
  talkCommercial: string;
  lookingPartner: string;
  onThisPage: string;
  mission: string;
  vision: string;
  milestones: string;
  openRoles: string;
  positions: string;
  searchRoles: string;
  allVerticals: string;
  allLocations: string;
  function: string;
  apply: string;
  loadAllRoles: string;
  viewOpenRoles: string;
  noRoles: string;
  dontSeeRole: string;
  speculativeCv: string;
  contactPeople: string;
  headOffice: string;
  officeHours: string;
  whereToDirect: string;
  preferWrite: string;
  preferWriteBody: string;
  lookingCareers: string;
  sendMessage: string;
  fullName: string;
  organisation: string;
  organisationShort: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  submitEnquiry: string;
  sending: string;
  openInMaps: string;
  filingsReports: string;
  latestDocuments: string;
  requestPdf: string;
  meetLeadership: string;
  investorCentre: string;
  mediaEnquiries: string;
  contactMedia: string;
  readStory: string;
  moreNews: string;
  backNewsroom: string;
  priorities: string;
  readTbl: string;
  vertical: string;
  role: string;
  location: string;
  type: string;
  general: string;
  aboutHeroTitle: string;
  aboutHeroDesc: string;
  aboutLead: string;
  aboutBody: string;
  aboutMission: string;
  aboutVision: string;
  aboutCtaTitle: string;
  aboutCtaDesc: string;
  aboutCtaBtn: string;
  bizHeroTitle: string;
  bizHeroDesc: string;
  careersHeroTitle: string;
  careersEyebrow: string;
  contactHeroTitle: string;
  investorsHeroTitle: string;
  investorsHeroDesc: string;
  investorsFilingsIntro: string;
  newsHeroTitle: string;
  newsHeroDesc: string;
  sustainHeroTitle: string;
  sustainHeroDesc: string;
  sustainPrioritiesTitle: string;
  privacyTitle: string;
  termsTitle: string;
  modernSlaveryTitle: string;
  ownership: string;
  ownershipTitle: string;
  ownershipText: string;
  development: string;
  developmentTitle: string;
  developmentText: string;
  standards: string;
  standardsTitle: string;
  standardsText: string;
  exploreBusinesses: string;
  investorRelationsCta: string;
  atAGlance: string;
  groupFactSheet: string;
  yearFounded: string;
  businessVerticals: string;
  institutionalPartners: string;
  executiveOverview: string;
  readOverview: string;
  ourBusinessesHeading: string;
  allSixVerticals: string;
  vision2040: string;
  people: string;
  planet: string;
  profitability: string;
  latestNews: string;
  homeEyebrow: string;
  homeTagline: string;
  homeIntro: string;
  commercialSupply: string;
  projectsTenders: string;
  mediaPress: string;
  boardOversight: string;
  boardOversightText: string;
  divisionPl: string;
  divisionPlText: string;
  ethicsCompliance: string;
  ethicsComplianceText: string;
  sustainPillarPeople: string;
  sustainPillarPeopleText: string;
  sustainPillarPlanet: string;
  sustainPillarPlanetText: string;
  sustainPillarProfit: string;
  sustainPillarProfitText: string;
  sustainP1: string;
  sustainP2: string;
  sustainP3: string;
  sustainP4: string;
  privacyP1: string;
  privacyP2: string;
  privacyP3: string;
  privacyP4: string;
  termsP1: string;
  termsP2: string;
  termsP3: string;
  slaveryP1: string;
  readTblCta: string;
  groupTurnover: string;
  yoyGrowth: string;
  latestFiling: string;
};

const en: UiDict = {
  skipToContent: "Skip to main content",
  investorRelations: "Investor Relations",
  mediaCentre: "Media Centre",
  suppliers: "Suppliers",
  contact: "Contact",
  about: "About",
  businesses: "Businesses",
  sustainability: "Sustainability",
  investors: "Investors",
  newsroom: "Newsroom",
  careers: "Careers",
  search: "Search the Group",
  searchHint: 'Try "Packaging", "Careers", or "Investors".',
  noMatches: "No matches found.",
  contactUs: "Contact us",
  allBusinesses: "All businesses",
  ourBusinesses: "Our businesses",
  megaBlurb: "Six verticals, one integrated operating ecosystem.",
  viewAll: "View all businesses →",
  page: "Page",
  business: "Business",
  group: "Group",
  aboutUs: "About us",
  leadership: "Leadership",
  governance: "Governance",
  connect: "Connect",
  tradingItMedia: "Trading · IT · Media",
  privacy: "Privacy",
  terms: "Terms",
  modernSlavery: "Modern slavery statement",
  rights: "© {year} Emerging Group. All rights reserved.",
  language: "Language",
  backToTop: "Back to top",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  openSearch: "Open search (Ctrl K)",
  home: "Home",
  exploreVertical: "Explore vertical →",
  moreVerticals: "More verticals",
  requestCapability: "Request a capability pack",
  divisionGlance: "Division at a glance",
  certifications: "Certifications",
  capabilities: "Capabilities",
  sectorsServed: "Sectors served",
  talkCommercial: "Talk to our commercial team",
  lookingPartner: "Looking for a supply or delivery partner?",
  onThisPage: "On this page",
  mission: "Mission",
  vision: "Vision",
  milestones: "Milestones",
  openRoles: "Open roles",
  positions: "positions",
  searchRoles: "Search roles",
  allVerticals: "All verticals",
  allLocations: "All locations",
  function: "Function",
  apply: "Apply →",
  loadAllRoles: "Load all {n} roles",
  viewOpenRoles: "View open roles",
  noRoles: "No roles match these filters.",
  dontSeeRole: "Don't see the right role?",
  speculativeCv: "Send a speculative CV — we review every application.",
  contactPeople: "Contact People team",
  headOffice: "Head office",
  officeHours: "Office hours",
  whereToDirect: "Where to direct your enquiry",
  preferWrite: "Prefer to write?",
  preferWriteBody:
    "Use the form and we will route your message to the right desk. For urgent commercial matters, call the head office switchboard.",
  lookingCareers: "Looking for careers instead →",
  sendMessage: "Send a message",
  fullName: "Full name",
  organisation: "Organisation",
  organisationShort: "Organisation",
  email: "Email",
  phone: "Phone",
  enquiryType: "Enquiry type",
  message: "Message",
  submitEnquiry: "Submit enquiry",
  sending: "Sending…",
  openInMaps: "Open in Maps →",
  filingsReports: "Filings & reports",
  latestDocuments: "Latest documents",
  requestPdf: "Request PDF →",
  meetLeadership: "Meet leadership →",
  investorCentre: "Investor centre",
  mediaEnquiries: "Media enquiries",
  contactMedia: "Contact media desk",
  readStory: "Read story →",
  moreNews: "More news",
  backNewsroom: "← Back to newsroom",
  priorities: "Priorities",
  readTbl: "Investor centre",
  vertical: "Vertical",
  role: "Role",
  location: "Location",
  type: "Type",
  general: "General",
  aboutHeroTitle: "Executive overview",
  aboutHeroDesc:
    "Two decades of disciplined growth, built around national self-reliance and domestic supply security.",
  aboutLead:
    "Founded in 2002, Emerging Group is a diversified enterprise group headquartered in Bangladesh.",
  aboutBody:
    "Over more than two decades of disciplined growth, the Group has built an integrated operational ecosystem designed to advance national self-reliance, strengthen domestic supply security, and generate sustainable economic value. By uniting strategic diversification with disciplined resource governance, Emerging Group delivers scalable, mission-critical solutions across a broad institutional partner network.",
  aboutMission:
    "To drive resilient economic growth through strategic diversification and closed-loop resource ingenuity, delivering mission-critical B2B solutions that elevate our people and create compounding value across People, Planet, and Enterprise Profitability.",
  aboutVision:
    "To be Bangladesh's premier partner for global enterprise solutions and the regional benchmark for triple-bottom-line value by 2040, powering national economic self-reliance and elevating our workforce through resilient, investment-grade industrial leadership.",
  aboutCtaTitle: "Six verticals powering one Group.",
  aboutCtaDesc:
    "Explore how Emerging Group connects manufacturing, agriculture, infrastructure, trade, technology and media.",
  aboutCtaBtn: "View businesses",
  bizHeroTitle: "Six verticals, one integrated ecosystem.",
  bizHeroDesc:
    "Each business operates independently but sources, supplies and services the others — closing loops on materials, capital and expertise across the Group.",
  careersHeroTitle: "Build the industries the country depends on.",
  careersEyebrow: "Careers",
  contactHeroTitle: "Contact the Group",
  investorsHeroTitle: "Investor centre",
  investorsHeroDesc:
    "Transparent reporting, disciplined capital allocation, and governance frameworks built for long-horizon institutional partners.",
  investorsFilingsIntro:
    "Statutory and voluntary disclosures for analysts, lenders and institutional counterparties. Request the latest PDF from Investor Relations — documents are issued on verified request.",
  newsHeroTitle: "Newsroom",
  newsHeroDesc:
    "Group announcements, vertical updates and public-interest reporting from across Emerging Group.",
  sustainHeroTitle: "Triple-bottom-line value as operating discipline.",
  sustainHeroDesc:
    "Sustainability at Emerging Group is not a side programme — it is how we measure whether diversification compounds value for people, planet and enterprise.",
  sustainPrioritiesTitle: "Where we focus through 2030.",
  privacyTitle: "Privacy",
  termsTitle: "Terms of use",
  modernSlaveryTitle: "Modern slavery statement",
  ownership: "Ownership",
  ownershipTitle: "Decisions close to the work",
  ownershipText:
    "Divisions run their own P&L. Engineers, agronomists and plant managers hold real mandate over how targets are met.",
  development: "Development",
  developmentTitle: "Cross-vertical mobility",
  developmentText:
    "Six businesses under one group means finance, quality and technology careers that move sideways as well as up.",
  standards: "Standards",
  standardsTitle: "Safety before schedule",
  standardsText:
    "Certified management systems across manufacturing and construction, audited by our institutional customers.",
  exploreBusinesses: "Explore our businesses",
  investorRelationsCta: "Investor relations",
  atAGlance: "At a glance",
  groupFactSheet: "Group fact sheet →",
  yearFounded: "Year founded",
  businessVerticals: "Business verticals",
  institutionalPartners: "Institutional partners",
  executiveOverview: "Executive overview",
  readOverview: "Read the group overview →",
  ourBusinessesHeading: "Our businesses",
  allSixVerticals: "All six verticals →",
  vision2040: "Vision 2040",
  people: "People",
  planet: "Planet",
  profitability: "Enterprise profitability",
  latestNews: "Latest news",
  homeEyebrow: "Emerging Group · Bangladesh · Since 2002",
  homeTagline:
    "A diversified enterprise group building Bangladesh's industrial self-reliance.",
  homeIntro:
    "Six operating verticals, one integrated ecosystem — delivering mission-critical B2B solutions across packaging, agro-chemicals, infrastructure, trading, technology and media.",
  commercialSupply: "Commercial & supply",
  projectsTenders: "Projects & tenders",
  mediaPress: "Media & press",
  boardOversight: "Board oversight",
  boardOversightText:
    "Independent non-executive directors sit on audit, risk and nomination committees with clear charters.",
  divisionPl: "Division P&Ls",
  divisionPlText:
    "Each vertical runs on accountable P&L with Group capital allocation through a formal investment committee.",
  ethicsCompliance: "Ethics & compliance",
  ethicsComplianceText:
    "Supplier code, modern slavery statement, and whistleblowing channels available to employees and partners.",
  sustainPillarPeople: "People",
  sustainPillarPeopleText:
    "Safe workplaces, skills pathways across six verticals, and fair employment standards audited by institutional customers.",
  sustainPillarPlanet: "Planet",
  sustainPillarPlanetText:
    "Closed-loop trim recovery in packaging, responsible agro formulations, and preferential local material sourcing in construction.",
  sustainPillarProfit: "Enterprise profitability",
  sustainPillarProfitText:
    "Disciplined capital allocation and multi-year customer frameworks that fund continuous improvement without compromising standards.",
  sustainP1: "Reduce packaging process waste below 3.5% through closed-loop recovery.",
  sustainP2: "Expand soil-health advisory coverage to every district we sell into.",
  sustainP3: "Maintain construction local-sourcing above 90% on Group capex projects.",
  sustainP4: "Publish annual integrated TBL metrics alongside the statutory report.",
  privacyP1:
    "Emerging Group collects personal data only where needed to respond to enquiries, process employment applications, or fulfil contractual obligations with customers and suppliers.",
  privacyP2:
    "We do not sell personal data. Access is limited to authorised Group personnel and processors under confidentiality agreements.",
  privacyP3:
    "Contact forms are protected against automated abuse. Messages are retained only as long as needed to resolve your enquiry or meet legal obligations.",
  privacyP4:
    "This page is a summary statement for the corporate website. Specific processing notices apply to careers applications and supplier portals.",
  termsP1:
    "Content on this website is provided for general information about Emerging Group and its businesses. It does not constitute an offer, prospectus or investment advice.",
  termsP2:
    "Figures marked as illustrative or forward-looking may change. Downloadable reports are the authoritative source for financial and sustainability disclosures.",
  termsP3:
    "All trademarks, logos and page designs remain the property of Emerging Group or their respective owners. Unauthorised commercial reuse is prohibited.",
  slaveryP1:
    "Emerging Group prohibits forced labour, child labour and human trafficking across its operations and supply chains. Suppliers are expected to meet equivalent standards under our Supplier Code of Conduct.",
  readTblCta: "Read the integrated triple-bottom-line report",
  groupTurnover: "Group turnover FY25",
  yoyGrowth: "YoY revenue growth",
  latestFiling: "Latest filing",
};

const bn: UiDict = {
  ...en,
  skipToContent: "মূল কন্টেন্টে যান",
  investorRelations: "বিনিয়োগকারী সম্পর্ক",
  mediaCentre: "মিডিয়া সেন্টার",
  suppliers: "সরবরাহকারী",
  contact: "যোগাযোগ",
  about: "আমাদের সম্পর্কে",
  businesses: "ব্যবসাসমূহ",
  sustainability: "টেকসই উন্নয়ন",
  investors: "বিনিয়োগকারী",
  newsroom: "নিউজরুম",
  careers: "ক্যারিয়ার",
  search: "গ্রুপে খুঁজুন",
  searchHint: '"Packaging", "Careers" বা "Investors" চেষ্টা করুন।',
  noMatches: "কোনো ফলাফল নেই।",
  contactUs: "যোগাযোগ করুন",
  allBusinesses: "সব ব্যবসা",
  ourBusinesses: "আমাদের ব্যবসা",
  megaBlurb: "ছয়টি উল্লম্ব, একটি সমন্বিত পরিচালন ইকোসিস্টেম।",
  viewAll: "সব ব্যবসা দেখুন →",
  page: "পৃষ্ঠা",
  business: "ব্যবসা",
  group: "গ্রুপ",
  aboutUs: "আমাদের সম্পর্কে",
  leadership: "নেতৃত্ব",
  governance: "সুশাসন",
  connect: "সংযোগ",
  tradingItMedia: "ট্রেডিং · আইটি · মিডিয়া",
  privacy: "গোপনীয়তা",
  terms: "শর্তাবলি",
  modernSlavery: "আধুনিক দাসত্ব বিবৃতি",
  rights: "© {year} Emerging Group. সর্বস্বত্ব সংরক্ষিত।",
  language: "ভাষা",
  backToTop: "উপরে যান",
  openMenu: "মেনু খুলুন",
  closeMenu: "মেনু বন্ধ করুন",
  openSearch: "অনুসন্ধান খুলুন (Ctrl K)",
  home: "হোম",
  exploreVertical: "উল্লম্ব দেখুন →",
  moreVerticals: "আরও উল্লম্ব",
  requestCapability: "সক্ষমতা প্যাক অনুরোধ করুন",
  divisionGlance: "বিভাগ এক নজরে",
  certifications: "সার্টিফিকেশন",
  capabilities: "সক্ষমতা",
  sectorsServed: "সেবাপ্রাপ্ত খাত",
  talkCommercial: "আমাদের কমার্শিয়াল টিমের সাথে কথা বলুন",
  lookingPartner: "সরবরাহ বা ডেলিভারি অংশীদার খুঁজছেন?",
  onThisPage: "এই পৃষ্ঠায়",
  mission: "মিশন",
  vision: "ভিশন",
  milestones: "মাইলফলক",
  openRoles: "খোলা পদ",
  positions: "পদ",
  searchRoles: "পদ খুঁজুন",
  allVerticals: "সব উল্লম্ব",
  allLocations: "সব অবস্থান",
  function: "ফাংশন",
  apply: "আবেদন →",
  loadAllRoles: "সব {n} পদ দেখুন",
  viewOpenRoles: "খোলা পদ দেখুন",
  noRoles: "এই ফিল্টারে কোনো পদ নেই।",
  dontSeeRole: "সঠিক পদ দেখছেন না?",
  speculativeCv: "একটি সিভি পাঠান — আমরা প্রতিটি আবেদন পর্যালোচনা করি।",
  contactPeople: "পিপল টিমের সাথে যোগাযোগ",
  headOffice: "প্রধান কার্যালয়",
  officeHours: "অফিস সময়",
  whereToDirect: "আপনার অনুসন্ধান কোথায় পাঠাবেন",
  preferWrite: "লিখে জানাতে চান?",
  preferWriteBody:
    "ফর্ম ব্যবহার করুন, আমরা সঠিক ডেস্কে পৌঁছে দেব। জরুরি কমার্শিয়াল বিষয়ে প্রধান কার্যালয়ে কল করুন।",
  lookingCareers: "ক্যারিয়ার খুঁজছেন? →",
  sendMessage: "বার্তা পাঠান",
  fullName: "পূর্ণ নাম",
  organisation: "প্রতিষ্ঠান",
  organisationShort: "প্রতিষ্ঠান",
  email: "ইমেইল",
  phone: "ফোন",
  enquiryType: "অনুসন্ধানের ধরন",
  message: "বার্তা",
  submitEnquiry: "অনুসন্ধান জমা দিন",
  sending: "পাঠানো হচ্ছে…",
  openInMaps: "ম্যাপে খুলুন →",
  filingsReports: "ফাইলিং ও প্রতিবেদন",
  latestDocuments: "সর্বশেষ নথি",
  requestPdf: "পিডিএফ অনুরোধ →",
  meetLeadership: "নেতৃত্বের সাথে পরিচিত হোন →",
  investorCentre: "বিনিয়োগকারী কেন্দ্র",
  mediaEnquiries: "মিডিয়া অনুসন্ধান",
  contactMedia: "মিডিয়া ডেস্কে যোগাযোগ",
  readStory: "খবর পড়ুন →",
  moreNews: "আরও খবর",
  backNewsroom: "← নিউজরুমে ফিরুন",
  priorities: "অগ্রাধিকার",
  readTbl: "বিনিয়োগকারী কেন্দ্র",
  vertical: "উল্লম্ব",
  role: "পদ",
  location: "অবস্থান",
  type: "ধরন",
  general: "সাধারণ",
  aboutHeroTitle: "নির্বাহী পর্যালোচনা",
  aboutHeroDesc:
    "জাতীয় স্বনির্ভরতা ও অভ্যন্তরীণ সরবরাহ নিরাপত্তাকে কেন্দ্র করে দুই দশকের শৃঙ্খলাবদ্ধ প্রবৃদ্ধি।",
  aboutLead:
    "২০০২ সালে প্রতিষ্ঠিত Emerging Group বাংলাদেশে সদর দপ্তরসহ একটি বহুমুখী এন্টারপ্রাইজ গ্রুপ।",
  aboutBody:
    "দুই দশকেরও বেশি শৃঙ্খলাবদ্ধ প্রবৃদ্ধিতে গ্রুপ একটি সমন্বিত পরিচালন ইকোসিস্টেম গড়ে তুলেছে, যা জাতীয় স্বনির্ভরতা অগ্রসর করে, অভ্যন্তরীণ সরবরাহ নিরাপত্তা শক্তিশালী করে এবং টেকসই অর্থনৈতিক মূল্য সৃষ্টি করে। কৌশলগত বৈচিত্র্য ও শৃঙ্খলাবদ্ধ সম্পদ পরিচালনার সমন্বয়ে Emerging Group বিস্তৃত প্রাতিষ্ঠানিক অংশীদার নেটওয়ার্ক জুড়ে স্কেলযোগ্য, মিশন-ক্রিটিকাল সমাধান সরবরাহ করে।",
  aboutMission:
    "কৌশলগত বৈচিত্র্য ও ক্লোজড-লুপ সম্পদ নৈপুণ্যের মাধ্যমে স্থিতিশীল অর্থনৈতিক প্রবৃদ্ধি চালানো, যা আমাদের মানুষকে উন্নত করে এবং মানুষ, পৃথিবী ও এন্টারপ্রাইজ মুনাফা জুড়ে ক্রমবর্ধমান মূল্য সৃষ্টি করে।",
  aboutVision:
    "২০৪০ সালের মধ্যে বৈশ্বিক এন্টারপ্রাইজ সমাধানের জন্য বাংলাদেশের প্রধান অংশীদার এবং ট্রিপল-বটম-লাইন মূল্যের আঞ্চলিক মানদণ্ড হওয়া।",
  aboutCtaTitle: "এক গ্রুপকে শক্তি দেয় ছয়টি উল্লম্ব।",
  aboutCtaDesc:
    "উৎপাদন, কৃষি, অবকাঠামো, বাণিজ্য, প্রযুক্তি ও মিডিয়ায় Emerging Group কীভাবে সংযুক্ত তা দেখুন।",
  aboutCtaBtn: "ব্যবসাসমূহ দেখুন",
  bizHeroTitle: "ছয়টি উল্লম্ব, একটি সমন্বিত ইকোসিস্টেম।",
  bizHeroDesc:
    "প্রতিটি ব্যবসা স্বাধীনভাবে পরিচালিত হলেও একে অপরকে উৎস, সরবরাহ ও সেবা দেয় — গ্রুপজুড়ে উপকরণ, পুঁজি ও দক্ষতার লুপ বন্ধ করে।",
  careersHeroTitle: "দেশ যেসব শিল্পের ওপর নির্ভর করে, সেগুলো গড়ুন।",
  careersEyebrow: "ক্যারিয়ার",
  contactHeroTitle: "গ্রুপের সাথে যোগাযোগ",
  investorsHeroTitle: "বিনিয়োগকারী কেন্দ্র",
  investorsHeroDesc:
    "স্বচ্ছ প্রতিবেদন, শৃঙ্খলাবদ্ধ পুঁজি বরাদ্দ এবং দীর্ঘমেয়াদি প্রাতিষ্ঠানিক অংশীদারদের জন্য সুশাসন কাঠামো।",
  investorsFilingsIntro:
    "বিশ্লেষক, ঋণদাতা ও প্রাতিষ্ঠানিক অংশীদারদের জন্য আইনগত ও স্বেচ্ছাসেবী প্রকাশ। সর্বশেষ পিডিএফ বিনিয়োগকারী সম্পর্ক থেকে অনুরোধ করুন।",
  newsHeroTitle: "নিউজরুম",
  newsHeroDesc:
    "Emerging Group জুড়ে গ্রুপ ঘোষণা, উল্লম্ব আপডেট এবং জনস্বার্থ সংক্রান্ত প্রতিবেদন।",
  sustainHeroTitle: "পরিচালন শৃঙ্খলা হিসেবে ট্রিপল-বটম-লাইন মূল্য।",
  sustainHeroDesc:
    "Emerging Group-এ টেকসই উন্নয়ন কোনো পার্শ্ব কর্মসূচি নয় — এটি পরিমাপ করে বৈচিত্র্য মানুষ, পৃথিবী ও এন্টারপ্রাইজের জন্য মূল্য বাড়ায় কিনা।",
  sustainPrioritiesTitle: "২০৩০ পর্যন্ত আমাদের ফোকাস।",
  privacyTitle: "গোপনীয়তা",
  termsTitle: "ব্যবহারের শর্তাবলি",
  modernSlaveryTitle: "আধুনিক দাসত্ব বিবৃতি",
  ownership: "মালিকানা",
  ownershipTitle: "কাজের কাছাকাছি সিদ্ধান্ত",
  ownershipText:
    "বিভাগগুলো নিজস্ব পিএন্ডএল চালায়। প্রকৌশলী, কৃষিবিদ ও প্ল্যান্ট ম্যানেজাররা লক্ষ্য অর্জনে বাস্তব ম্যান্ডেট রাখেন।",
  development: "উন্নয়ন",
  developmentTitle: "ক্রস-উল্লম্ব চলাচল",
  developmentText:
    "এক গ্রুপের অধীনে ছয় ব্যবসা মানে অর্থ, মান ও প্রযুক্তি ক্যারিয়ার উপরে ও পাশে উভয় দিকে এগোয়।",
  standards: "মানদণ্ড",
  standardsTitle: "সময়সূচির আগে নিরাপত্তা",
  standardsText:
    "উৎপাদন ও নির্মাণে সার্টিফাইড ম্যানেজমেন্ট সিস্টেম, আমাদের প্রাতিষ্ঠানিক গ্রাহকদের দ্বারা নিরীক্ষিত।",
  exploreBusinesses: "আমাদের ব্যবসা দেখুন",
  investorRelationsCta: "বিনিয়োগকারী সম্পর্ক",
  atAGlance: "এক নজরে",
  groupFactSheet: "গ্রুপ ফ্যাক্ট শিট →",
  yearFounded: "প্রতিষ্ঠার বছর",
  businessVerticals: "ব্যবসায়িক উল্লম্ব",
  institutionalPartners: "প্রাতিষ্ঠানিক অংশীদার",
  executiveOverview: "নির্বাহী পর্যালোচনা",
  readOverview: "গ্রুপ পর্যালোচনা পড়ুন →",
  ourBusinessesHeading: "আমাদের ব্যবসাসমূহ",
  allSixVerticals: "ছয়টি উল্লম্ব →",
  vision2040: "ভিশন ২০৪০",
  people: "মানুষ",
  planet: "পৃথিবী",
  profitability: "এন্টারপ্রাইজ মুনাফা",
  latestNews: "সর্বশেষ খবর",
  homeEyebrow: "Emerging Group · বাংলাদেশ · ২০০২ থেকে",
  homeTagline:
    "বাংলাদেশের শিল্প স্বনির্ভরতা গড়ে তোলা একটি বহুমুখী এন্টারপ্রাইজ গ্রুপ।",
  homeIntro:
    "ছয়টি পরিচালন উল্লম্ব, একটি সমন্বিত ইকোসিস্টেম — প্যাকেজিং, এগ্রো-কেমিক্যাল, অবকাঠামো, ট্রেডিং, প্রযুক্তি ও মিডিয়ায় মিশন-ক্রিটিকাল বি২বি সমাধান।",
  commercialSupply: "কমার্শিয়াল ও সরবরাহ",
  projectsTenders: "প্রকল্প ও টেন্ডার",
  mediaPress: "মিডিয়া ও প্রেস",
  boardOversight: "বোর্ড তত্ত্বাবধান",
  boardOversightText:
    "স্বাধীন নন-এক্সিকিউটিভ পরিচালকরা অডিট, ঝুঁকি ও নমিনেশন কমিটিতে স্পষ্ট সনদসহ থাকেন।",
  divisionPl: "বিভাগীয় পিএন্ডএল",
  divisionPlText:
    "প্রতিটি উল্লম্ব জবাবদিহিমূলক পিএন্ডএল-এ চলে, গ্রুপ পুঁজি বরাদ্দ হয় ফর্মাল ইনভেস্টমেন্ট কমিটির মাধ্যমে।",
  ethicsCompliance: "নৈতিকতা ও কমপ্লায়েন্স",
  ethicsComplianceText:
    "সরবরাহকারী কোড, আধুনিক দাসত্ব বিবৃতি এবং হুইসেলব্লোয়িং চ্যানেল কর্মী ও অংশীদারদের জন্য উন্মুক্ত।",
  sustainPillarPeople: "মানুষ",
  sustainPillarPeopleText:
    "নিরাপদ কর্মক্ষেত্র, ছয় উল্লম্বে দক্ষতার পথ এবং প্রাতিষ্ঠানিক গ্রাহকদের দ্বারা নিরীক্ষিত ন্যায্য কর্মসংস্থান মান।",
  sustainPillarPlanet: "পৃথিবী",
  sustainPillarPlanetText:
    "প্যাকেজিংয়ে ক্লোজড-লুপ ট্রিম রিকভারি, দায়িত্বশীল এগ্রো ফর্মুলেশন এবং নির্মাণে স্থানীয় উপকরণ অগ্রাধিকার।",
  sustainPillarProfit: "এন্টারপ্রাইজ মুনাফা",
  sustainPillarProfitText:
    "শৃঙ্খলাবদ্ধ পুঁজি বরাদ্দ এবং বহুবর্ষীয় গ্রাহক চুক্তি যা মান না কমিয়ে ধারাবাহিক উন্নতি অর্থায়ন করে।",
  sustainP1: "ক্লোজড-লুপ রিকভারির মাধ্যমে প্যাকেজিং প্রক্রিয়া বর্জ্য ৩.৫%-এর নিচে নামানো।",
  sustainP2: "আমরা যেসব জেলায় বিক্রি করি সেখানে মাটির স্বাস্থ্য পরামর্শ সম্প্রসারণ।",
  sustainP3: "গ্রুপ ক্যাপেক্স প্রকল্পে নির্মাণ স্থানীয় সোর্সিং ৯০%-এর উপরে রাখা।",
  sustainP4: "আইনগত প্রতিবেদনের পাশাপাশি বার্ষিক সমন্বিত টিবিএল মেট্রিক্স প্রকাশ।",
  privacyP1:
    "Emerging Group শুধুমাত্র অনুসন্ধানের জবাব, চাকরির আবেদন প্রক্রিয়া বা গ্রাহক-সরবরাহকারী চুক্তি পূরণে প্রয়োজন হলে ব্যক্তিগত তথ্য সংগ্রহ করে।",
  privacyP2:
    "আমরা ব্যক্তিগত তথ্য বিক্রি করি না। অ্যাক্সেস সীমিত থাকে অনুমোদিত গ্রুপ কর্মী ও গোপনীয়তা চুক্তির অধীনে প্রসেসরদের মধ্যে।",
  privacyP3:
    "যোগাযোগ ফর্ম স্বয়ংক্রিয় অপব্যবহারের বিরুদ্ধে সুরক্ষিত। বার্তা শুধু অনুসন্ধান সমাধান বা আইনগত বাধ্যবাধকতা মেটাতে প্রয়োজনীয় সময় রাখা হয়।",
  privacyP4:
    "এই পৃষ্ঠা কর্পোরেট ওয়েবসাইটের সারাংশ বিবৃতি। ক্যারিয়ার আবেদন ও সরবরাহকারী পোর্টালে আলাদা প্রক্রিয়াকরণ নোটিশ প্রযোজ্য।",
  termsP1:
    "এই ওয়েবসাইটের বিষয়বস্তু Emerging Group ও তার ব্যবসা সম্পর্কে সাধারণ তথ্যের জন্য। এটি অফার, প্রসপেক্টাস বা বিনিয়োগ পরামর্শ নয়।",
  termsP2:
    "উদাহরণমূলক বা ভবিষ্যৎমুখী সংখ্যা পরিবর্তন হতে পারে। আর্থিক ও টেকসই প্রকাশের ক্ষেত্রে ডাউনলোডযোগ্য প্রতিবেদনই প্রামাণিক উৎস।",
  termsP3:
    "সব ট্রেডমার্ক, লোগো ও পৃষ্ঠা ডিজাইন Emerging Group বা সংশ্লিষ্ট মালিকদের সম্পত্তি। অননুমোদিত বাণিজ্যিক পুনঃব্যবহার নিষিদ্ধ।",
  slaveryP1:
    "Emerging Group তার পরিচালনা ও সাপ্লাই চেইনে জোরপূর্বক শ্রম, শিশুশ্রম ও মানব পাচার নিষিদ্ধ করে। সরবরাহকারীদের আমাদের সাপ্লায়ার কোড অনুযায়ী সমমানের মান মেনে চলতে হয়।",
  readTblCta: "সমন্বিত ট্রিপল-বটম-লাইন প্রতিবেদন পড়ুন",
  groupTurnover: "গ্রুপ টার্নওভার FY25",
  yoyGrowth: "বছরওয়ারি আয় বৃদ্ধি",
  latestFiling: "সর্বশেষ ফাইলিং",
};

export const ui: Record<Locale, UiDict> = { en, bn };

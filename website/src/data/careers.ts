export type Role = {
  id: string;
  title: string;
  vertical: string;
  location: string;
  type: "Full time" | "Contract";
  function: string;
};

export const roles: Role[] = [
  {
    id: "pp-prod-mgr",
    title: "Production Manager — Flexographic",
    vertical: "Printing & Packaging",
    location: "Gazipur",
    type: "Full time",
    function: "Operations",
  },
  {
    id: "ag-agronomist",
    title: "Field Agronomist",
    vertical: "Agro-Chemicals",
    location: "Rangpur",
    type: "Full time",
    function: "Technical",
  },
  {
    id: "it-backend",
    title: "Senior Backend Engineer",
    vertical: "Software & IT",
    location: "Dhaka",
    type: "Full time",
    function: "Technology",
  },
  {
    id: "inf-site",
    title: "Site Engineer — Civil",
    vertical: "Infrastructure",
    location: "Narayanganj",
    type: "Contract",
    function: "Engineering",
  },
  {
    id: "tr-finance",
    title: "Trade Finance Analyst",
    vertical: "Trading",
    location: "Dhaka",
    type: "Full time",
    function: "Finance",
  },
  {
    id: "pp-qa",
    title: "Quality Assurance Lead — Pharma Packaging",
    vertical: "Printing & Packaging",
    location: "Gazipur",
    type: "Full time",
    function: "Quality",
  },
  {
    id: "ag-formulation",
    title: "Formulation Chemist",
    vertical: "Agro-Chemicals",
    location: "Dhaka",
    type: "Full time",
    function: "Technical",
  },
  {
    id: "it-devops",
    title: "DevOps Engineer",
    vertical: "Software & IT",
    location: "Dhaka",
    type: "Full time",
    function: "Technology",
  },
  {
    id: "media-reporter",
    title: "Business Desk Reporter",
    vertical: "News & Media",
    location: "Dhaka",
    type: "Full time",
    function: "Editorial",
  },
  {
    id: "group-hr",
    title: "People Partner — Manufacturing",
    vertical: "Group",
    location: "Dhaka",
    type: "Full time",
    function: "People",
  },
  {
    id: "inf-qs",
    title: "Quantity Surveyor",
    vertical: "Infrastructure",
    location: "Dhaka",
    type: "Full time",
    function: "Engineering",
  },
  {
    id: "tr-desk",
    title: "Commodity Desk Associate — Polymers",
    vertical: "Trading",
    location: "Dhaka",
    type: "Full time",
    function: "Commercial",
  },
  {
    id: "pp-prepress",
    title: "Prepress Colour Specialist",
    vertical: "Printing & Packaging",
    location: "Narayanganj",
    type: "Full time",
    function: "Technical",
  },
  {
    id: "group-ehs",
    title: "EHS Manager",
    vertical: "Group",
    location: "Gazipur",
    type: "Full time",
    function: "Operations",
  },
];

export const careerPillars = [
  {
    tag: "Ownership",
    title: "Decisions close to the work",
    text: "Divisions run their own P&L. Engineers, agronomists and plant managers hold real mandate over how targets are met.",
  },
  {
    tag: "Development",
    title: "Cross-vertical mobility",
    text: "Six businesses under one group means finance, quality and technology careers that move sideways as well as up.",
  },
  {
    tag: "Standards",
    title: "Safety before schedule",
    text: "Certified management systems across manufacturing and construction, audited by our institutional customers.",
  },
];

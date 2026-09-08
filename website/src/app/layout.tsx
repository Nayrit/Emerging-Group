import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollToTop } from "@/components/ScrollToTop";
import {
  defaultDescription,
  defaultKeywords,
  JsonLd,
  organizationJsonLd,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B2240",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emerging Group | Diversified Enterprise Group Bangladesh",
    template: "%s | Emerging Group",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: "Emerging Group",
  authors: [{ name: "Emerging Group Bangladesh" }],
  creator: "Emerging Group",
  publisher: "Emerging Group",
  category: "business",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: SITE_URL,
    siteName: "Emerging Group",
    title: "Emerging Group | Bangladesh",
    description:
      "Six operating verticals, one integrated ecosystem — delivering mission-critical B2B solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerging Group | Bangladesh",
    description:
      "Six operating verticals, one integrated ecosystem — delivering mission-critical B2B solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhaka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

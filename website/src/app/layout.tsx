import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Emerging Group | Bangladesh",
    template: "%s | Emerging Group",
  },
  description:
    "Emerging Group is a diversified enterprise group building Bangladesh's industrial self-reliance across packaging, agro-chemicals, infrastructure, trading, technology and media.",
  metadataBase: new URL("https://emerginggroup.com.bd"),
  openGraph: {
    title: "Emerging Group | Bangladesh",
    description:
      "Six operating verticals, one integrated ecosystem — delivering mission-critical B2B solutions.",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

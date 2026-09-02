import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = "https://afayyyy.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jing Han | Economist",
  description: "Academic homepage of Jing Han, a Ph.D. candidate in Economics at The Chinese University of Hong Kong studying urban economics, consumer mobility, digital platforms, and international trade through empirical analysis and economic modeling.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "t6W1KyvwnjkpfRkP2w48JgYW5SYrUpNY0NymRre2e2E",
  },
  openGraph: {
    title: "Jing Han | Economist",
    description: "Urban Economics · Consumer Mobility · Digital Platforms",
    type: "website",
    url: siteUrl,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jing Han - Economist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jing Han | Economist",
    description: "Urban Economics · Consumer Mobility · Digital Platforms",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}

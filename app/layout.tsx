import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import AnalyticsEvents from "./analytics";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = "https://afayyyy.github.io";
const googleAnalyticsId = "G-SERLRZ5G12";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jing Han | Ph.D. Student in Economics",
  description: "Academic homepage of Jing Han, a Ph.D. student in Economics at The Chinese University of Hong Kong studying urban economics, consumer mobility, digital platforms, and international trade through empirical analysis and economic modeling.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "t6W1KyvwnjkpfRkP2w48JgYW5SYrUpNY0NymRre2e2E",
  },
  openGraph: {
    title: "Jing Han | Ph.D. Student in Economics",
    description: "Urban Economics · Consumer Mobility · Digital Platforms",
    type: "website",
    url: siteUrl,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jing Han - Ph.D. Student in Economics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jing Han | Ph.D. Student in Economics",
    description: "Urban Economics · Consumer Mobility · Digital Platforms",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        {children}
        <AnalyticsEvents />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}

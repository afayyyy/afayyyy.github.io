import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jing Han | Economist",
  description: "Academic homepage of Jing Han, a Ph.D. candidate in Economics at The Chinese University of Hong Kong studying digital platforms, international trade, and technological change.",
  openGraph: {
    title: "Jing Han | Economist",
    description: "Digital Economics · International Trade · Technological Change",
    type: "website",
    url: "https://academic-homepage-2026.faye9703.chatgpt.site",
    images: [{ url: "https://academic-homepage-2026.faye9703.chatgpt.site/og.png", width: 1200, height: 630, alt: "Jing Han - Economist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jing Han | Economist",
    description: "Digital Economics · International Trade · Technological Change",
    images: ["https://academic-homepage-2026.faye9703.chatgpt.site/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}

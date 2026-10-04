import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import {
  absoluteUrl,
  brandNode,
  homeTitle,
  jsonLdGraph,
  organizationNode,
  websiteNode,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: "%s | BAMBOOGO",
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: `${siteConfig.organisation} / ${siteConfig.name}` }],
  creator: siteConfig.organisation,
  publisher: siteConfig.organisation,
  category: "bicycles",
  keywords: [
    "bamboo bicycle Switzerland",
    "bamboo bike Switzerland",
    "bamboo bicycles Switzerland",
    "bamboo bike Bern",
    "bamboo bicycle Bern",
    "sustainable bicycle Switzerland",
    "sustainable bikes Switzerland",
    "sustainable mobility Switzerland",
    "bamboo bicycle frame",
    "bamboo frame bicycle",
    "handcrafted bamboo bicycle",
    "BAMBOOGO",
    "BAMBOOGO bicycles",
    "BAMBOOGO Switzerland",
    "BAMBOOGO Bern",
  ],
  alternates: {
    canonical: siteConfig.url,
    languages: { "en-CH": siteConfig.url, "x-default": siteConfig.url },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/bamboogo-black-logo.png", type: "image/png" },
    ],
    apple: "/bamboogo-black-logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: homeTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "BAMBOOGO bamboo bicycles from Bern, Switzerland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.defaultDescription,
    images: [absoluteUrl("/opengraph-image")],
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
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CH">
      <body className="bg-white text-[#0d0d0d]">
        <JsonLd data={jsonLdGraph([organizationNode(), brandNode(), websiteNode()])} />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
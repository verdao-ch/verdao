import type { Metadata } from "next";
import { siteConfig } from "./site";
import { breadcrumbsFor } from "./routes";

export interface PageSeo {
  /** Full, absolute <title> exactly as it should appear in search results. */
  title: string;
  description: string;
  /** Absolute path, e.g. "/why-bamboo". Used for canonical + OG url. */
  path: string;
  keywords?: readonly string[];
  /** Absolute or public-relative image path. */
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
}

export const homeTitle = "BAMBOOGO | Bamboo Bicycles from Bern, Switzerland";

export const defaultOgImage = "/opengraph-image";

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Single source of truth for per-page metadata: canonical URL, Open Graph,
 * Twitter card and keywords. Keeps every page consistent and indexable.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
  imageAlt = "BAMBOOGO bamboo bicycles developed in Bern, Switzerland",
  noindex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title,
      description,
      images: [{ url: absoluteUrl(image), alt: imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

/* ─────────────────────────  Structured data  ───────────────────────── */

type Node = Record<string, unknown>;

const logoNode = {
  "@type": "ImageObject",
  url: absoluteUrl("/bamboogo-black-logo.png"),
  width: 512,
  height: 512,
};

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organisation`,
    name: siteConfig.organisation,
    alternateName: siteConfig.organisationSlogan,
    slogan: siteConfig.organisationSlogan,
    url: `${siteConfig.url}/verdao`,
    email: siteConfig.email,
    logo: logoNode,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    brand: brandNode(),
  };
}

export function brandNode(): Node {
  return {
    "@type": "Brand",
    "@id": `${siteConfig.url}/#brand`,
    name: siteConfig.name,
    alternateName: siteConfig.slogan,
    slogan: siteConfig.slogan,
    url: siteConfig.url,
    logo: logoNode,
    parentOrganization: { "@id": `${siteConfig.url}/#organisation` },
  };
}

export function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.slogan,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.locale,
    publisher: { "@id": `${siteConfig.url}/#organisation` },
  };
}

export function founderNode(): Node {
  return {
    "@type": "Person",
    "@id": `${siteConfig.url}/about/#founder`,
    name: "Okey Omulu",
    jobTitle: "Founder, VERDAO & BAMBOOGO",
    description:
      "Bicycle professional and entrepreneur based in Bern, Switzerland. Working professionally with bicycle assembly, maintenance and repair since 2016, and building bamboo bicycles by hand since 2019.",
    worksFor: { "@id": `${siteConfig.url}/#organisation` },
    nationality: { "@type": "Country", name: "Switzerland" },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
  };
}

export function contactPointNode(): Node {
  return {
    "@type": "ContactPoint",
    "@id": `${siteConfig.url}/contact/#contactpoint`,
    contactType: "customer support",
    email: siteConfig.email,
    areaServed: { "@type": "Country", name: "Switzerland" },
    availableLanguage: ["en"],
  };
}

export function breadcrumbsNode(
  trail: { name: string; path: string }[]
): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqNode(
  items: { question: string; answer: string }[]
): Node | null {
  if (!items.length) return null;
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/**
 * Product concepts are not on sale yet, so they are described as a list of
 * defined terms rather than purchasable offers.
 */
export function bicycleListNode(): Node {
  return {
    "@type": "ItemList",
    name: "BAMBOOGO bicycles in development",
    itemListElement: [
      "BAMBOOGO Road",
      "BAMBOOGO Gravel",
      "BAMBOOGO Mountain",
      "BAMBOOGO City",
      "BAMBOOGO Cargo",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };
}

export function futureConceptsNode(): Node {
  return {
    "@type": "ItemList",
    name: "BAMBOOGO future concepts",
    itemListElement: [
      "BAMBOOGO Wheelchair",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
    })),
  };
}

export function aboutPageNode(): Node {
  return {
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about/#aboutpage`,
    mainEntity: { "@id": `${siteConfig.url}/about/#founder` },
  };
}

export function contactPageNode(): Node {
  return {
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact/#contactpage`,
    mainEntity: { "@id": `${siteConfig.url}/contact/#contactpoint` },
  };
}

export function webPageNode({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
}): Node {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-CH",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#brand` },
    breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` },
  };
}

/**
 * Complete structured-data graph for a page: brand, organisation, website,
 * the page itself, its breadcrumb trail and any page-specific nodes.
 */
export function pageStructuredData({
  path,
  name,
  description,
  extra = [],
  includeBreadcrumb = true,
}: {
  path: string;
  name: string;
  description: string;
  extra?: (Node | null | undefined)[];
  includeBreadcrumb?: boolean;
}): string {
  return jsonLdGraph([
    organizationNode(),
    brandNode(),
    websiteNode(),
    webPageNode({ path, name, description }),
    includeBreadcrumb
      ? { ...breadcrumbsNode(breadcrumbsFor(path)), "@id": `${absoluteUrl(path)}#breadcrumb` }
      : null,
    contactPointNode(),
    ...extra,
  ]);
}

/** Wraps nodes in a single @graph so a page only emits one JSON-LD script. */
export function jsonLdGraph(nodes: (Node | null | undefined)[]): string {
  const graph = nodes.filter(Boolean);
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}
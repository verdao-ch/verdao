export interface RouteEntry {
  path: string;
  label: string;
  description: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
}

/** Single source of truth for indexable routes, used by sitemap and breadcrumbs. */
export const publicRoutes: RouteEntry[] = [
  {
    path: "/",
    label: "Home",
    description: "BAMBOOGO bamboo bicycles from Bern, Switzerland",
    changefreq: "weekly",
    priority: 1,
  },
  {
    path: "/bamboogo",
    label: "BAMBOOGO",
    description:
      "BAMBOOGO bamboo bicycles: road, gravel, mountain, city and cargo concepts in development in Switzerland",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/why-bamboo",
    label: "Why Bamboo",
    description:
      "Why BAMBOOGO builds bamboo bicycle frames: renewable material, natural character, ride feel and craftsmanship",
    changefreq: "monthly",
    priority: 0.9,
  },
  {
    path: "/about",
    label: "Our Story",
    description:
      "The story of BAMBOOGO: hands-on bicycle work in Switzerland, bamboo bicycle building and the path to a Swiss bamboo bicycle brand",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    path: "/impact",
    label: "Our Vision & Impact",
    description:
      "BAMBOOGO's vision for sustainable mobility, Swiss bicycle development, craftsmanship and future skills development",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/support",
    label: "Support",
    description:
      "Support the development of BAMBOOGO bamboo bicycles and help move the road, gravel, mountain, city and cargo concepts to the next stage",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    path: "/verdao",
    label: "VERDAO",
    description:
      "VERDAO is the Switzerland-based organisation behind BAMBOOGO, exploring responsible enterprise and sustainable products",
    changefreq: "yearly",
    priority: 0.6,
  },
  {
    path: "/contact",
    label: "Contact",
    description: "Contact BAMBOOGO in Bern, Switzerland",
    changefreq: "yearly",
    priority: 0.6,
  },
];

/** Legal pages: indexable, but low priority and not part of the content journey. */
export const legalRoutes: RouteEntry[] = [
  {
    path: "/impressum",
    label: "Impressum",
    description: "Legal notice for VERDAO / BAMBOOGO, Bern, Switzerland",
    changefreq: "yearly",
    priority: 0.2,
  },
  {
    path: "/privacy",
    label: "Privacy Policy",
    description: "Privacy policy for the BAMBOOGO website",
    changefreq: "yearly",
    priority: 0.2,
  },
  {
    path: "/terms",
    label: "Terms",
    description: "Terms of use for the BAMBOOGO website",
    changefreq: "yearly",
    priority: 0.2,
  },
];

export const allRoutes = [...publicRoutes, ...legalRoutes];

export function breadcrumbsFor(path: string): { name: string; path: string }[] {
  const current = allRoutes.find((route) => route.path === path);
  if (!current) return [];
  return [{ name: "Home", path: "/" }, { name: current.label, path }];
}
export const siteConfig = {
  name: "BAMBOOGO",
  slogan: "Ride the Story.",
  campaign: "Grown, not forged.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://verdao.ch").replace(
    /\/$/,
    ""
  ),
  locale: "en",
  email: "hello@bamboogo.ch",
  city: "Bern",
  region: "Switzerland",
  country: "CH",
  instagram: "https://www.instagram.com/bamboobike.ch/",
  organisation: "VERDAO",
  organisationSlogan: "The Way to Good.",
  defaultDescription:
    "BAMBOOGO develops handcrafted bamboo bicycles in Bern, Switzerland. Road, gravel, mountain and cargo concepts built around natural materials, skilled assembly and sustainable mobility.",
} as const;

export const primaryKeywords = [
  "bamboo bicycle Switzerland",
  "bamboo bike Switzerland",
  "bamboo bicycles Switzerland",
  "bamboo bike Bern",
  "bamboo bicycle Bern",
  "BAMBOOGO",
  "BAMBOOGO bicycles",
  "BAMBOOGO Switzerland",
  "BAMBOOGO Bern",
  "sustainable bicycle Switzerland",
  "sustainable mobility Switzerland",
] as const;

export const productKeywords = [
  "bamboo road bike",
  "bamboo gravel bike",
  "bamboo mountain bike",
  "bamboo cargo bike",
  "sustainable road bike",
  "sustainable gravel bike",
  "sustainable mountain bike",
  "sustainable cargo bike",
] as const;
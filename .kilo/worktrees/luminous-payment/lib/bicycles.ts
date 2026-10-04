export interface BicycleConcept {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  status: "In development" | "Concept";
  image: string;
  imageAlt: string;
}

/**
 * Concepts only: nothing here is on sale, and no price, weight, geometry or
 * specification is published until it is confirmed.
 */
export const bicycleConcepts: BicycleConcept[] = [
  {
    name: "BAMBOOGO Road",
    slug: "road",
    category: "Bamboo road bike",
    tagline: "Natural Performance",
    description:
      "A bamboo road bicycle concept bringing together efficient road-bike geometry, modern components and the distinctive character of a handcrafted bamboo frame.",
    status: "In development",
    image: "/bike/wheel.jpg",
    imageAlt:
      "Detail of a BAMBOOGO handcrafted bamboo bicycle frame and wheel",
  },
  {
    name: "BAMBOOGO Gravel",
    slug: "gravel",
    category: "Bamboo gravel bike",
    tagline: "Take the Story Further",
    description:
      "Designed around versatility and adventure, the BAMBOOGO Gravel concept brings bamboo craftsmanship to roads, paths and journeys beyond the everyday commute.",
    status: "In development",
    image: "/unit.jpg",
    imageAlt:
      "BAMBOOGO bamboo gravel bicycle concept during workshop development in Switzerland",
  },
  {
    name: "BAMBOOGO Mountain",
    slug: "mountain",
    category: "Bamboo mountain bike",
    tagline: "Nature Meets the Trail",
    description:
      "The BAMBOOGO Mountain concept explores bamboo-frame construction for riders looking beyond conventional mountain-bike materials, from forest trails to open terrain.",
    status: "In development",
    image: "/okey.jpg",
    imageAlt:
      "BAMBOOGO bamboo mountain bicycle frame being built by hand in a Swiss workshop",
  },
  {
    name: "BAMBOOGO City",
    slug: "city",
    category: "Bamboo city bike",
    tagline: "Everyday Mobility, Crafted",
    description:
      "The BAMBOOGO City concept brings the character of a handcrafted bamboo bicycle frame to everyday urban riding, practical mobility and short journeys through the city.",
    status: "In development",
    image: "/bike/wheel.jpg",
    imageAlt:
      "BAMBOOGO bamboo city bicycle concept for everyday urban mobility in Switzerland",
  },
  {
    name: "BAMBOOGO Cargo",
    slug: "cargo",
    category: "Bamboo cargo bike",
    tagline: "Carry More, Carry a Story",
    description:
      "The BAMBOOGO Cargo concept explores a bamboo bicycle built to carry more: a sustainable cargo bike for everyday transport, family journeys and work.",
    status: "Concept",
    image: "/united.jpg",
    imageAlt:
      "Early BAMBOOGO bamboo cargo bicycle concept developed in Bern, Switzerland",
  },
];

export const futureConcepts: BicycleConcept[] = [
  {
    name: "BAMBOOGO Wheelchair",
    slug: "wheelchair",
    category: "Bamboo wheelchair",
    tagline: "Future Concept",
    description:
      "A future BAMBOOGO Wheelchair concept exploring bamboo as a natural material for mobility beyond cycling. This is a future concept only and is not part of the current bicycle range.",
    status: "Concept",
    image: "/bike/wheel.jpg",
    imageAlt:
      "Future BAMBOOGO bamboo wheelchair concept for mobility beyond cycling",
  },
];
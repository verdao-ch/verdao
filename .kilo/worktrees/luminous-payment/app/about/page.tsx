import JsonLd from "@/components/JsonLd";
import AboutClient from "./AboutClient";
import { primaryKeywords } from "@/lib/site";
import {
  aboutPageNode,
  buildPageMetadata,
  founderNode,
  pageStructuredData,
} from "@/lib/seo";

const title = "Our Story | BAMBOOGO Bamboo Bicycles Switzerland";
const description =
  "Discover the story behind BAMBOOGO, from hands-on bicycle experience and bamboo bicycle building in Switzerland to the development of a new Swiss bamboo bicycle brand.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    ...primaryKeywords,
    "BAMBOOGO story",
    "Bamboo Bikes Bern",
    "Okey Omulu",
    "bamboo bicycle Bern",
  ],
});

export default function About() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/about",
          name: title,
          description,
          extra: [aboutPageNode(), founderNode()],
        })}
      />
      <AboutClient />
    </>
  );
}
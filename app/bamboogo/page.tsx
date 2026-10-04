import JsonLd from "@/components/JsonLd";
import BamboogoClient from "./BamboogoClient";
import { primaryKeywords, productKeywords } from "@/lib/site";
import {
  bicycleListNode,
  buildPageMetadata,
  faqNode,
  futureConceptsNode,
  pageStructuredData,
} from "@/lib/seo";
import { bamboogoFaq } from "@/lib/faq";

const title = "BAMBOOGO Bamboo Bikes | Road, Gravel, Mountain, City & Cargo";
const description =
  "Explore BAMBOOGO bamboo bicycles, including road, gravel, mountain, city and cargo concepts being developed in Switzerland.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/bamboogo",
  keywords: [
    ...primaryKeywords,
    ...productKeywords,
    "bamboo bicycle frame",
    "bamboo frame bicycle",
    "handcrafted bamboo bicycle",
  ],
});

export default function Bamboogo() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/bamboogo",
          name: title,
          description,
          extra: [bicycleListNode(), futureConceptsNode(), faqNode(bamboogoFaq)],
        })}
      />
      <BamboogoClient />
    </>
  );
}
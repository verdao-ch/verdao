import JsonLd from "@/components/JsonLd";
import WhyBambooClient from "./WhyBambooClient";
import { primaryKeywords } from "@/lib/site";
import {
  buildPageMetadata,
  faqNode,
  pageStructuredData,
} from "@/lib/seo";
import { whyBambooFaq } from "@/lib/faq";

const title = "Why Bamboo? | BAMBOOGO Bamboo Bicycles";
const description =
  "Discover why BAMBOOGO is exploring bamboo as a natural material for bicycle frames and how craftsmanship, material character and bicycle design come together.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/why-bamboo",
  keywords: [
    ...primaryKeywords,
    "bamboo bicycle frame",
    "bamboo frame bicycle",
    "handcrafted bamboo bicycle",
    "sustainable bicycle Switzerland",
  ],
});

export default function WhyBamboo() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/why-bamboo",
          name: title,
          description,
          extra: [faqNode(whyBambooFaq)],
        })}
      />
      <WhyBambooClient />
    </>
  );
}
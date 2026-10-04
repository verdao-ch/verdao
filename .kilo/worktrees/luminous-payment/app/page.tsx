import JsonLd from "@/components/JsonLd";
import HomeClient from "./HomeClient";
import { primaryKeywords, productKeywords } from "@/lib/site";
import {
  bicycleListNode,
  buildPageMetadata,
  faqNode,
  pageStructuredData,
} from "@/lib/seo";
import { homeFaq } from "@/lib/faq";

const title = "BAMBOOGO | Bamboo Bicycles from Bern, Switzerland";
const description =
  "Discover BAMBOOGO, a bamboo bicycle project from Bern, Switzerland. Road, gravel, mountain and cargo bicycles developed with craftsmanship, natural materials and a different approach to mobility.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/",
  keywords: [...primaryKeywords, ...productKeywords],
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/",
          name: title,
          description,
          includeBreadcrumb: false,
          extra: [faqNode(homeFaq), bicycleListNode()],
        })}
      />
      <HomeClient />
    </>
  );
}
import JsonLd from "@/components/JsonLd";
import SupportClient from "./SupportClient";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "Support BAMBOOGO | Bamboo Bicycle Crowdfunding";
const description =
  "Support the development of BAMBOOGO bamboo bicycles and help move our road, gravel, mountain, city and cargo concepts towards the next stage.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/support",
  keywords: [
    "BAMBOOGO crowdfunding",
    "bamboo bicycle crowdfunding",
    "BAMBOOGO bicycles",
    "BAMBOOGO Bern",
    "bamboo bicycle Switzerland",
  ],
});

export default function Support() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/support",
          name: title,
          description,
        })}
      />
      <SupportClient />
    </>
  );
}
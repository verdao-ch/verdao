import JsonLd from "@/components/JsonLd";
import ImpactClient from "./ImpactClient";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "Our Vision & Impact | BAMBOOGO";
const description =
  "Discover BAMBOOGO’s vision for sustainable mobility, Swiss bicycle development, craftsmanship and future skills-development opportunities.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/impact",
  keywords: [
    "sustainable mobility Switzerland",
    "sustainable bicycle Switzerland",
    "BAMBOOGO Switzerland",
    "bamboo bicycle Switzerland",
    "bicycle craftsmanship Switzerland",
  ],
});

export default function Impact() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/impact",
          name: title,
          description,
        })}
      />
      <ImpactClient />
    </>
  );
}
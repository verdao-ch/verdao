import JsonLd from "@/components/JsonLd";
import VerdaoClient from "./VerdaoClient";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "VERDAO | The Organisation Behind BAMBOOGO";
const description =
  "VERDAO is a purpose-driven initiative based in Bern, Switzerland, developing projects around sustainable products, responsible enterprise and positive impact.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/verdao",
  keywords: [
    "VERDAO",
    "VERDAO Switzerland",
    "VERDAO Bern",
    "BAMBOOGO Switzerland",
    "sustainable enterprise Switzerland",
    "responsible enterprise Switzerland",
  ],
});

export default function Verdao() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/verdao",
          name: title,
          description,
        })}
      />
      <VerdaoClient />
    </>
  );
}
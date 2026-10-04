import JsonLd from "@/components/JsonLd";
import ContactClient from "./ContactClient";
import {
  buildPageMetadata,
  contactPageNode,
  pageStructuredData,
} from "@/lib/seo";

const title = "Contact BAMBOOGO | Bern, Switzerland";
const description =
  "Contact BAMBOOGO in Bern, Switzerland, for questions about our bamboo bicycles, crowdfunding project and future developments.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/contact",
  keywords: ["BAMBOOGO Bern", "BAMBOOGO Switzerland", "bamboo bike Bern"],
});

export default function Contact() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/contact",
          name: title,
          description,
          extra: [contactPageNode()],
        })}
      />
      <ContactClient />
    </>
  );
}
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "Impressum | VERDAO / BAMBOOGO";
const description =
  "Legal notice for VERDAO / BAMBOOGO, bamboo bicycles from Bern, Switzerland.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/impressum",
  keywords: ["BAMBOOGO", "VERDAO", "Bern, Switzerland"],
});

export default function Impressum() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/impressum",
          name: title,
          description,
        })}
      />
    <main className="min-h-screen bg-white text-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-[1.05]">
          Impressum
        </h1>
        <div className="w-20 h-px bg-[#0d0d0d] mb-10" />

        <div className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold mb-2">VERDAO.CH</h2>
            <p>Bern, Switzerland</p>
            <p>hello@bamboogo.ch</p>
            <p>Registered Swiss Verein</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Legal Notice</h2>
            <p>
              The content of this website is provided for informational purposes only. 
              No guarantee is given for the accuracy, completeness, or timeliness of the information provided.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Intellectual Property</h2>
            <p>
              All content, including text, images, graphics, and code, is the property of 
              VERDAO.CH / BAMBOOGO unless otherwise stated. Reproduction, distribution, or 
              use of any material from this site requires prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Limitation of Liability</h2>
            <p>
              The operators of this website are not liable for any damages arising from 
              the use or non-use of the information provided. Links to external websites 
              are provided for convenience only and do not imply endorsement.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

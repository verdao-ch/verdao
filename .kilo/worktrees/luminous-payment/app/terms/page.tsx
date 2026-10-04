import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "Terms of Use | BAMBOOGO";
const description =
  "Terms of use for the BAMBOOGO website, the bamboo bicycle brand from VERDAO in Bern, Switzerland.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/terms",
  keywords: ["BAMBOOGO", "VERDAO", "Bern, Switzerland"],
});

export default function Terms() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/terms",
          name: title,
          description,
        })}
      />
    <main className="min-h-screen bg-white text-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-[1.05]">
          Terms
        </h1>
        <div className="w-20 h-px bg-[#0d0d0d] mb-10" />

        <div className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold mb-2">Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these 
              Terms. If you do not agree with any part of these Terms, please 
              do not use the website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Content</h2>
            <p>
              The content on this website is provided for general information 
              only. It is subject to change without notice. We do not guarantee 
              the accuracy, completeness, or timeliness of the content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Limitation of Liability</h2>
            <p>
              The operators of this website are not liable for any loss or damage 
              arising from the use of, or reliance on, the information contained 
              on this site. This includes, but is not limited to, indirect or 
              consequential loss.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">External Links</h2>
            <p>
              This website may contain links to external sites. We are not 
              responsible for the content or privacy practices of external sites. 
              Links do not imply endorsement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the 
              laws of Switzerland. Any disputes shall be subject to the exclusive 
              jurisdiction of the courts in Bern, Switzerland.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

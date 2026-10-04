import JsonLd from "@/components/JsonLd";
import { buildPageMetadata, pageStructuredData } from "@/lib/seo";

const title = "Privacy Policy | VERDAO.CH / BAMBOOGO";
const description =
  "How the BAMBOOGO website handles your data: cookies, privacy and contact information for VERDAO.CH, Bern, Switzerland.";

export const metadata = buildPageMetadata({
  title,
  description,
  path: "/privacy",
  keywords: ["BAMBOOGO", "VERDAO", "Bern, Switzerland"],
});

export default function PrivacyPolicy() {
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          path: "/privacy",
          name: title,
          description,
        })}
      />
    <main className="min-h-screen bg-white text-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-[1.05]">
          Privacy Policy
        </h1>
        <div className="w-20 h-px bg-[#0d0d0d] mb-10" />

        <div className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold mb-2">Data Controller</h2>
            <p>
              VERDAO.CH
              <br />
              Bern, Switzerland
              <br />
              hello@bamboogo.ch
            </p>
            <p className="mt-2">
              VERDAO.CH is a registered Swiss Verein responsible for this website
              and the BAMBOOGO project.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Data Collection</h2>
            <p>
              This website does not collect personal data automatically. The only
              personal data processed is what you voluntarily provide by sending
              an email to hello@bamboogo.ch or by using the email subscription
              form on the homepage. That may include your email address and, if
              you include it, your name.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Use of Data</h2>
            <p>
              Your data is used solely for responding to your inquiry or sending
              project updates if you have subscribed. We do not share your data
              with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Hosting and Services</h2>
            <p>
              This website is hosted on Netlify. No analytics, advertising or
              tracking services are currently active on the site. If a trusted
              crowdfunding or payment provider is integrated in the future, this
              policy will be updated to reflect that.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-2">Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion 
              of your personal data. Please contact us at hello@bamboogo.ch for 
              any such requests.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

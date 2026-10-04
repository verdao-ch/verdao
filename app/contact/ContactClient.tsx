"use client";

import Reveal from "@/components/Reveal";
import { Mail, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const heroImg = "/bike/wheel.jpg";

const reasons = [
  {
    title: "Interested in a bicycle",
    desc: "Tell us which BAMBOOGO concept interests you, whether road, gravel, mountain or cargo, and we will share what is happening with development and how you can follow along.",
  },
  {
    title: "Collaboration or partnership",
    desc: "We are open to conversations with suppliers, workshops, mobility organisations and research partners around bamboo bicycle construction and sustainable mobility in Switzerland.",
  },
  {
    title: "Supporter or collaborator",
    desc: "Supporters, crowdfunding backers and people who simply want to follow the story are all welcome to get in touch.",
  },
];

export default function ContactClient() {
  return (
    <main>
      {/* ═════════════ HERO ═════════════ */}
      <section className="relative h-[70vh] min-h-[560px] w-full overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />

        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-[#e6fd53]/10 blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold text-white leading-[0.95] mb-4">
              Join the
              <br />
              <span className="text-gradient-lime">Story.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Questions about our bamboo bicycles, the crowdfunding project or
              future developments? We would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ CONTACT DETAILS ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
                  Get in
                  <br />
                  <span className="text-gradient">touch.</span>
                </h2>
                <div className="line-lime" />
                <p className="text-lg text-[#555] mt-8 mb-5 leading-relaxed">
                  BAMBOOGO is still growing, and we would love to hear from
                  riders, supporters, organisations and people interested in the
                  journey. Whether you are interested in a future BAMBOOGO
                  bicycle, a collaboration, crowdfunding, or simply following the
                  project, get in touch.
                </p>
                <p className="text-[#555] mb-8 leading-relaxed">
                  We are based in Bern, Switzerland, and we reply to messages as
                  the project develops.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-all duration-300"
                  >
                    <Mail size={18} />
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#e8f7ea] text-[#0d0d0d] rounded-xl font-bold hover:border-[#44b551] hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram size={18} />
                    Follow BAMBOOGO
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                {reasons.map((item, i) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea]"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-2">
                      0{i + 1}
                    </p>
                    <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              Support the
              <br />
              <span className="text-gradient">next chapter.</span>
            </h2>
            <p className="text-lg text-[#555] mb-10 max-w-xl mx-auto">
              BAMBOOGO has moved from an idea to real bamboo bicycles. Crowdfunding
              will help us take that next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-[#0d0d0d] text-white rounded-xl font-bold text-lg hover:bg-[#333] transition-all duration-300"
              >
                Support BAMBOOGO
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white border border-[#e8f7ea] text-[#0d0d0d] rounded-xl font-bold text-lg hover:border-[#44b551] hover:shadow-lg transition-all duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
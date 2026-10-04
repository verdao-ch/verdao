"use client";

import Reveal from "@/components/Reveal";
import { Check, Shield, Wind, Recycle, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import { whyBambooFaq } from "@/lib/faq";

const heroImg =
  "https://images.pexels.com/photos/13777768/pexels-photo-13777768.jpeg?auto=compress&cs=tinysrgb&w=1920";

const benefits = [
  {
    icon: Recycle,
    title: "Renewable Material",
    desc: "Bamboo is a rapidly growing natural material with interesting possibilities for bicycle-frame construction. It is a grass that regrows from its rhizomes without being replanted, which makes it a renewable choice for sustainable mobility.",
  },
  {
    icon: Check,
    title: "Natural Character",
    desc: "No two bamboo stems are exactly identical, giving each handcrafted bamboo bicycle frame its own grain, tone and character.",
  },
  {
    icon: Wind,
    title: "Ride Experience",
    desc: "Bamboo is valued by frame builders for material characteristics that can contribute to a distinctive ride feel.",
  },
  {
    icon: Shield,
    title: "Craftsmanship",
    desc: "A bamboo frame brings visible craftsmanship into a product category dominated by industrial manufacturing.",
  },
];

const buildSteps = [
  {
    step: "01",
    title: "Select",
    desc: "Bamboo culms are selected for diameter, wall thickness and fibre density, so that the tubes of the frame work together as a structure.",
  },
  {
    step: "02",
    title: "Treat",
    desc: "The culms are treated, cured and shaped, giving the material time to stabilise before it becomes part of a bicycle frame.",
  },
  {
    step: "03",
    title: "Join",
    desc: "Tubes are joined with a bio-resin process, and every joint is finished by hand.",
  },
  {
    step: "04",
    title: "Finish",
    desc: "The completed bamboo frame is sealed, finished and assembled with modern bicycle components in the workshop.",
  },
];

export default function WhyBambooClient() {
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
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-[0.95] mb-4">
              Why
              <br />
              <span className="text-gradient-lime">bamboo?</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              A rapidly growing natural material with interesting possibilities
              for bicycle-frame construction. No two stems are identical, and the
              material characteristics can contribute to a distinctive ride
              feel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ BENEFITS ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
              Nature&apos;s
              <br />
              <span className="text-gradient">engineering.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group p-8 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-[#0d0d0d] flex items-center justify-center mb-6 group-hover:bg-[#44b551] transition-all duration-500">
                    <item.icon
                      size={26}
                      className="text-[#e6fd53] group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ HOW A BAMBOO FRAME IS BUILT ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
                  How a bamboo
                  <br />
                  <span className="text-gradient">frame is built.</span>
                </h2>
                <div className="line-lime" />
                <p className="text-lg text-[#555] mt-8 mb-5 leading-relaxed">
                  Bamboo bicycle frame construction is slow, skilled work. Each
                  handcrafted bamboo bicycle is the result of material knowledge,
                  patience and workshop time, which is exactly why we think it is
                  worth doing properly.
                </p>
                <p className="text-[#555] leading-relaxed">
                  Grown, not forged.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                {buildSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-white border border-[#e8f7ea] hover:border-[#44b551] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0d0d0d] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#e6fd53] font-extrabold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0d0d0d] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
      <FAQSection
        title="Bamboo bicycle frames, answered."
        subtitle="Why Bamboo"
        items={whyBambooFaq}
      />

      {/* ═════════════ CTA ═════════════ */}
      <section className="py-16 md:py-20 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-[1.05]">
              Ready to ride
              <br />
              <span className="text-gradient-lime">the story?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Discover the bamboo bicycles being developed in Switzerland, grown
              from the ground up.
            </p>
            <Link
              href="/bamboogo"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-lg hover:bg-[#c7e600] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6fd53]/50 hover:scale-105"
            >
              Discover BAMBOOGO
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
"use client";

import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroImg = "/bike/crafting.jpg";

export default function SupportClient() {
  return (
    <main>
      {/* ═════════════ HERO ═════════════ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />

        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-[#e6fd53]/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-[#e6fd53]/10 blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
          <div className="max-w-3xl">
            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-[0.95] mb-4">
                Help Build
                <br />
                <span className="text-gradient-lime">the Next Chapter.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
                BAMBOOGO has moved from an idea to real bamboo bicycles. The next
                challenge is turning years of learning, building and development
                into a sustainable bicycle project capable of reaching more
                riders. Crowdfunding will help us take that next step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#support"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-base hover:bg-[#c7e600] transition-all duration-300 hover:shadow-xl hover:shadow-[#e6fd53]/30 hover:scale-105"
                >
                  See How You Can Help
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-base border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Our Story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ WHAT SUPPORT CAN HELP FINANCE ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
              What support
              <br />
              <span className="text-gradient">can help finance.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
          </Reveal>

          {/* BALANCED BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* TOP ROW: Product Development - Featured tall card */}
            <div className="md:col-span-8 md:row-span-2">
              <Reveal>
                <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-white border-2 border-[#e6fd53] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/20 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#e6fd53]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-bold bg-[#e6fd53] text-[#0d0d0d] rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 text-xs font-bold bg-[#0d0d0d] text-white rounded-full">
                        01
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#0d0d0d] mb-4">
                      Product Development
                    </h3>
                    <p className="text-[#666] leading-relaxed text-lg max-w-lg">
                      Refining the BAMBOOGO road, gravel, mountain, city and cargo
                      bamboo bicycles toward production-ready models.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#e6fd53] flex items-center justify-center">
                      <ArrowRight size={20} className="text-[#0d0d0d]" />
                    </div>
                    <span className="text-sm font-bold text-[#44b551]">
                      Core Focus Area
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* TOP RIGHT: Frames and Components */}
            <div className="md:col-span-4">
              <Reveal delay={60}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">
                      02
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-2">
                    Frames and Components
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    Funding the first production requirements as the project
                    grows.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* TOP RIGHT: Testing and Quality */}
            <div className="md:col-span-4">
              <Reveal delay={120}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">
                      03
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-2">
                    Testing &amp; Quality
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    Developing testing, safety, quality standards and processes before wider sales.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* MIDDLE ROW LEFT: Swiss Assembly */}
            <div className="md:col-span-5">
              <Reveal delay={180}>
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">
                      04
                    </span>
                    <span className="px-2 py-0.5 text-xs font-bold bg-[#e6fd53] text-[#0d0d0d] rounded-full">
                      Key Focus
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-2">
                    Swiss Assembly
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    Components, tools and workshop requirements for assembly in
                    Switzerland.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* MIDDLE RIGHT: Logistics + Photography in a mini grid */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Reveal delay={240}>
                <div className="h-full p-6 rounded-2xl bg-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">
                      05
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-2">
                    Logistics
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    Moving frames through the supply chain.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">
                      06
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-2">
                    Photography &amp; Comm.
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    Presenting the project professionally and transparently.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* BOTTOM ROW: Future Skills - Full width */}
            <div className="md:col-span-12">
              <Reveal delay={360}>
                <div className="p-6 rounded-2xl bg-white border-2 border-[#e6fd53] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/20 transition-all duration-500 hover:-translate-y-1 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-xl bg-[#e6fd53] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0d0d0d] font-extrabold text-sm">
                      07
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-extrabold text-[#0d0d0d]">
                        Future Skills Development
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-bold bg-[#e6fd53] text-[#0d0d0d] rounded-full">
                        Impact
                      </span>
                    </div>
                    <p className="text-[#666] leading-relaxed text-sm mt-1">
                      Preparing future training and skills-development activities
                      as the project grows.
                    </p>
                  </div>
                  <ArrowRight size={24} className="text-[#44b551] flex-shrink-0" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ TRANSPARENCY ═════════════ */}
      <section
        id="support"
        className="py-16 md:py-20 bg-[#0d0d0d] relative overflow-hidden scroll-mt-24"
      >
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/7002955/pexels-photo-7002955.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2 leading-[1.05]">
              Transparency
              <br />
              <span className="text-gradient-lime">promise.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#e6fd53]/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e6fd53] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0d0d0d] font-extrabold text-sm">
                      01
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Open Communication
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  We want supporters to understand where the project stands and
                  where their money goes. As the crowdfunding project develops, we
                  intend to communicate milestones, production progress,
                  challenges and the use of funds openly.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#e6fd53]/40 transition-all duration-500 mt-0 md:mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#e6fd53] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0d0d0d] font-extrabold text-sm">
                      02
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Trusted Integration
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Rather than developing our own payment infrastructure from
                  scratch, we plan to integrate a trusted crowdfunding and payment
                  provider once the appropriate solution is selected. For now, we
                  are developing the storytelling and crowdfunding information, and
                  the actual payment functionality will be added when the
                  provider is in place.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d0d0d] mb-4 leading-[1.05]">
                  Ready to be part
                  <br />
                  <span className="text-gradient">of the story?</span>
                </h2>
                <p className="text-lg text-[#555] mb-8 leading-relaxed max-w-lg">
                  Your support directly funds product development, frames and
                  components, testing and quality development, Swiss assembly,
                  logistics, photography and communication, and future skills
                  development as the project grows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold text-base hover:bg-[#333] transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
                  >
                    Get in Touch
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#e8f7ea] text-[#0d0d0d] rounded-xl font-bold text-base hover:border-[#44b551] hover:shadow-lg transition-all duration-300"
                  >
                    Read Our Story
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                  <img
                    src="/bike/639455046_18504649330078517_2891678082930078047_n.jpg"
                    alt="Handcrafted BAMBOOGO bamboo bicycle developed in Switzerland"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#e6fd53] rounded-2xl shadow-xl p-6 max-w-[240px]">
                  <p className="text-3xl font-extrabold text-[#0d0d0d] leading-none mb-1">
                    Ride the Story.
                  </p>
                  <p className="text-sm text-[#0d0d0d]/70 font-bold mt-2">
                    Every bicycle carries a story.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
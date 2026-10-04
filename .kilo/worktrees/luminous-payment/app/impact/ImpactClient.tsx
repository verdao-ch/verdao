"use client";

import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroImg = "/bamboogo-bike.jpg";

export default function ImpactClient() {
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
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-[0.95] mb-6">
              Our Impact
              <br />
              <span className="text-gradient-lime">Vision.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-4 leading-relaxed">
              Documented history, current development, and future ambition.
            </p>
            <p className="text-base text-white/70 max-w-2xl leading-relaxed">
              BAMBOOGO is not built on promises. It is built on real bamboo
              bicycles, real skills, and a real question about how sustainable
              materials, craftsmanship and opportunity can grow together. What
              exists today, what is in development, and what we hope this can
              eventually create are all clearly separated, and all transparent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ WHAT EXISTS TODAY ═════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              What exists
              <br />
              <span className="text-gradient">today.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="p-8 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Real Bamboo Bicycles
                </h3>
                <p className="text-[#666] leading-relaxed">
                  Bamboo bicycles that exist today: frames built by hand and
                  complete bicycles assembled in Switzerland, from years of
                  practical bamboo bicycle construction.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-8 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Swiss Expertise
                </h3>
                <p className="text-[#666] leading-relaxed">
                  Years of professional bicycle assembly, maintenance and repair
                  experience, hands-on bamboo bicycle frame building, and custom
                  bicycle building in Switzerland form the foundation of the
                  project.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ WHAT IS PLANNED ═════════════ */}
      <section className="py-24 md:py-32 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              What is
              <br />
              <span className="text-gradient">planned.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Product Development
                </h3>
                <p className="text-[#666] leading-relaxed">
                  Refining the BAMBOOGO road, gravel, mountain, city and cargo
                  bamboo bicycles toward production-ready models.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Skills Development
                </h3>
                <p className="text-[#666] leading-relaxed">
                  As the project grows, our ambition is to explore training
                  opportunities in bamboo bicycle construction and related
                  skills.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Swiss Assembly
                </h3>
                <p className="text-[#666] leading-relaxed">
                  Components, tools and workshop requirements for assembly in
                  Switzerland.
                </p>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                  Responsible Growth
                </h3>
                <p className="text-[#666] leading-relaxed">
                  Moving frames and components through the supply chain
                  responsibly as production develops, and preparing for future
                  training and skills-development activities.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ WHAT WE HOPE ═════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              What we hope
              <br />
              <span className="text-gradient">this can create.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skills",
                desc: "Practical knowledge that can remain within communities.",
              },
              {
                title: "Craftsmanship",
                desc: "Developing specialist capabilities around bamboo and bicycle construction.",
              },
              {
                title: "Economic Opportunity",
                desc: "Creating meaningful work as production develops.",
              },
              {
                title: "Sustainable Mobility",
                desc: "Bringing another material choice to the bicycle market and to sustainable mobility in Switzerland.",
              },
              {
                title: "International Collaboration",
                desc: "Connecting knowledge, resources and markets responsibly as the organisation develops.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="p-8 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#0d0d0d] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={600}>
              <div className="p-8 rounded-2xl bg-white border border-dashed border-[#44b551]/40">
                <h3 className="text-xl font-bold text-[#0d0d0d] mb-1">
                  BAMBOOGO Wheelchair
                </h3>
                <p className="text-sm font-semibold text-[#44b551] mb-3">
                  Future Concept
                </p>
                <p className="text-[#666] leading-relaxed text-sm">
                  A future concept exploring bamboo as a natural material for
                  mobility beyond cycling. The BAMBOOGO Wheelchair is separate
                  from the current bicycle range and is not under active
                  development at this stage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="py-24 md:py-32 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05]">
              Support the
              <br />
              <span className="text-gradient-lime">journey.</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Your support directly funds product development, frames and
              components, testing and quality development, Swiss assembly,
              logistics, photography and communication, and future skills
              development as the project grows.
            </p>
            <Link
              href="/support"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-lg hover:bg-[#c7e600] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6fd53]/40 hover:scale-105"
            >
              Learn About Support
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
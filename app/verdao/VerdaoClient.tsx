"use client";

import Reveal from "@/components/Reveal";
import { Leaf, TreePine, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const heroImg = "/verdao-green-logo.png";
const forestImg =
  "https://images.pexels.com/photos/33116217/pexels-photo-33116217.jpeg?auto=compress&cs=tinysrgb&w=1280";

const pillars = [
  {
    icon: TreePine,
    title: "What VERDAO Is Today",
              desc: "VERDAO.CH is a Swiss Verein developing BAMBOOGO toward its next stage while building the partnerships and structures needed for its wider mission. The initiative exists to explore how responsible enterprise, sustainable products and social ambition can work together.",
  },
  {
    icon: Users,
    title: "Where VERDAO Wants to Go",
    desc: "Our long-term ambition is to develop responsible collaborations that can create value beyond the products themselves. We are interested in opportunities involving skills development, craftsmanship, sustainable materials, employment and responsible enterprise in Switzerland and, as the organisation develops, internationally.",
  },
  {
    icon: Leaf,
    title: "BAMBOOGO Under VERDAO",
    desc: "BAMBOOGO is the first major project being developed under the VERDAO vision. It is a bamboo bicycle brand born from craftsmanship, experience and a vision for a more sustainable way of moving.",
  },
];

export default function VerdaoClient() {
  return (
    <main>
      {/* ═════════════ HERO ═════════════ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden mt-20">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={heroImg}
            alt="VERDAO, the organisation behind the BAMBOOGO bamboo bicycle project in Bern, Switzerland"
            fill
            className="object-cover object-[center_80%]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />

        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-[#44b551]/20 blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-24">
          <div className="max-w-3xl">
            <div className="lg:sr-only">
              <Reveal delay={100}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] mb-3">
                  VERDAO
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-4 leading-relaxed">
                  The Way to Good.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="inline-block px-6 py-4 rounded-xl bg-[#44b551]/15 border border-[#44b551]/25 backdrop-blur-sm">
                <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed">
                  Swiss-based purpose-driven initiative exploring how responsible
                  enterprise, sustainable products and social ambition can work
                  together. BAMBOOGO is the first major project being developed
                  under the VERDAO vision.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#44b551] text-white rounded-xl font-bold text-base hover:bg-[#3a9e45] transition-all duration-300 hover:shadow-xl hover:shadow-[#44b551]/30 hover:scale-105"
                >
                  Get involved
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="#mission"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-base border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Our mission
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ MISSION ═════════════ */}
      <section id="mission" className="py-16 md:py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              Purpose
              <br />
              <span className="text-gradient">driven.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 150}>
                <div className="group h-full p-8 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
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

      {/* ═════════════ BRAND RELATIONSHIP ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              Brand
              <br />
              <span className="text-gradient">architecture.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#0d0d0d] mb-2">
                  VERDAO
                </h3>
                <p className="text-[#44b551] font-semibold mb-4">
                  The Way to Good.
                </p>
                <p className="text-[#666] leading-relaxed">
                  VERDAO.CH is the wider purpose-driven initiative and Swiss Verein
                  behind BAMBOOGO. It is the umbrella under which BAMBOOGO and
                  future projects are developed, exploring how responsible
                  enterprise, sustainable products and social ambition can work
                  together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#0d0d0d] mb-2">
                  BAMBOOGO
                </h3>
                <p className="text-[#44b551] font-semibold mb-4">
                  Ride the Story.
                </p>
                <p className="text-[#666] leading-relaxed">
                  BAMBOOGO is the bamboo bicycle brand being developed under
                  VERDAO. It comes from a real journey with bicycles and bamboo
                  bicycle building, and storytelling is central to the brand.
                  Every BAMBOOGO carries two stories: the story behind how it was
                  created and the story its rider creates with it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ CTA ═════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${forestImg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-3 leading-[0.95]">
              Join the
              <br />
              <span className="text-gradient-lime">journey.</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              Whether you want to support the project, collaborate or simply
              follow the story. Every action helps us grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="group inline-flex items-center gap-2 px-10 py-5 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-lg hover:bg-[#c7e600] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6fd53]/50 hover:scale-105"
              >
                Support the Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
"use client";

import Reveal from "@/components/Reveal";
import FAQSection from "@/components/FAQSection";
import Link from "next/link";
import {
  Leaf,
  Weight,
  Shield,
  Wind,
  Check,
  ArrowRight,
  ArrowUpRight,
  X,
} from "lucide-react";
import { useState } from "react";
import { bicycleConcepts, futureConcepts } from "@/lib/bicycles";
import { bamboogoFaq } from "@/lib/faq";

const bambooClose =
  "https://images.pexels.com/photos/35961438/pexels-photo-35961438.jpeg?auto=compress&cs=tinysrgb&w=1280";
const bambooForest =
  "https://images.pexels.com/photos/33116217/pexels-photo-33116217.jpeg?auto=compress&cs=tinysrgb&w=1280";

const features = [
  {
    icon: Weight,
    title: "Lightweight",
    desc: "Bamboo's natural hollow structure keeps a bamboo bicycle frame light.",
  },
  {
    icon: Wind,
    title: "Natural Comfort",
    desc: "The fibre structure of bamboo can absorb road vibration, contributing to a smoother ride feel.",
  },
  {
    icon: Leaf,
    title: "Renewable Material",
    desc: "Bamboo is a rapidly growing natural material with interesting possibilities for bicycle-frame construction.",
  },
  {
    icon: Check,
    title: "One of One",
    desc: "No two bamboo grains are identical, so every BAMBOOGO frame carries its own natural character.",
  },
  {
    icon: Shield,
    title: "Skilled Assembly",
    desc: "Each frame is treated, cured and sealed, and every bicycle is assembled by hand in the workshop.",
  },
  {
    icon: Shield,
    title: "Craftsmanship",
    desc: "A bamboo frame brings visible craftsmanship into a product category dominated by industrial manufacturing.",
  },
];

export default function BamboogoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      {/* ═════════════ HERO WITH FEATURED WINDOW ═════════════ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden mt-20">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-label="BAMBOOGO bamboo bicycle film showing a handcrafted bamboo frame"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />

        <div className="absolute top-1/4 left-10 w-40 h-40 rounded-xl bg-[#e6fd53]/15 blur-3xl animate-float" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
          <div className="w-full flex items-start gap-8">
            <div className="max-w-2xl flex-shrink-0 pt-8">
              <Reveal>
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-extrabold text-white leading-[0.9] mb-6">
                  BAMBOOGO
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-6 leading-relaxed">
                  Bamboo bicycles from Bern, Switzerland. Selected bamboo, bio
                  resin joints, skilled assembly. Every frame carries a story no
                  two bicycles can share, and every one of them is crafted by
                  hand.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#bicycles"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold hover:bg-[#c7e600] transition-all duration-300 hover:shadow-xl hover:shadow-[#e6fd53]/30 hover:scale-105"
                  >
                    Explore the build
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    Our Story
                  </Link>
                  {/* Why Bamboo button - visible on small screens */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all duration-300 lg:hidden"
                  >
                    Why Bamboo
                    <ArrowRight size={18} />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Why Bamboo Window - hidden on small screens */}
            <div className="flex-1 flex justify-end pr-0 hidden lg:flex">
              <Reveal delay={300}>
                <div className="w-[320px] mt-24 ml-12 bg-black/70 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                  <button
                    className="cursor-pointer group block w-full text-left"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#e6fd53] text-[#0d0d0d] text-xs font-bold tracking-wider">
                        Why Bamboo
                      </span>
                      <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors">
                        Learn more →
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-white mb-2">
                      Nature&apos;s Engineering
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Bamboo is a rapidly growing natural material with
                      interesting possibilities for bicycle-frame construction.
                    </p>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════ MODAL ═════════════ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Why bamboo"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto">
                <img
                  src={bambooClose}
                  alt="Close-up of bamboo culms used to build BAMBOOGO bicycle frames"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#e6fd53] text-[#0d0d0d] text-xs font-bold tracking-wider mb-4">
                  Why Bamboo
                </span>
                <h2 className="text-3xl font-extrabold text-[#0d0d0d] mb-4">
                  Nature&apos;s Engineering
                </h2>
                <p className="text-[#555] leading-relaxed mb-6">
                  Bamboo is a rapidly growing natural material with interesting
                  possibilities for bicycle-frame construction. No two bamboo
                  stems are exactly identical, giving each handcrafted frame its
                  own character.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Renewable material, because bamboo regrows without being replanted",
                    "Natural material characteristics for a distinctive ride feel",
                    "Light and hollow culms that keep the frame weight down",
                    "Every stem is different, so no two frames are alike",
                    "Visible craftsmanship in every joint",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[#555] text-sm"
                    >
                      <Check
                        size={16}
                        className="text-[#44b551] mt-0.5 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/why-bamboo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-colors"
                >
                  Read the full story
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════ OVERVIEW ═════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={bambooClose}
                  alt="Bamboo culms selected for the frame of a handcrafted BAMBOOGO bicycle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
              Nature&apos;s engineering,
              <br />
              <span className="text-gradient">perfected by hand.</span>
            </h2>
            <p className="text-lg text-[#555] mb-3 leading-relaxed">
              A BAMBOOGO bamboo bicycle frame is built from selected bamboo
              culms, chosen for their diameter, wall thickness and fibre density.
              Each tube is treated, cured and joined using a bio-resin process.
            </p>
            <p className="text-[#555] mb-8 leading-relaxed">
              The result is a frame with a distinctive material character, a
              ride feel shaped by the way bamboo behaves, and a story that starts
              long before anyone rides it. Crafted by hand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ FEATURES ═════════════ */}
      <section className="py-16 md:py-24 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              Six reasons
              <br />
              <span className="text-gradient">it grows on you.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[features.slice(0, 2), features.slice(2, 4), features.slice(4, 6)].map(
              (column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  {column.map((feat, i) => (
                    <Reveal key={feat.title} delay={i * 100 + columnIndex * 200}>
                      <div className="group p-6 rounded-xl bg-white border border-[#e8f7ea] hover:border-[#44b551] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#0d0d0d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#44b551] transition-all duration-300">
                            <feat.icon
                              size={18}
                              className="text-[#e6fd53] group-hover:text-white transition-colors duration-300"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#0d0d0d] mb-1">
                              {feat.title}
                            </h3>
                            <p className="text-[#666] text-sm leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ═════════════ SUSTAINABILITY WITHOUT THE SLOGANS ═════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              Sustainable,
              <br />
              <span className="text-gradient">without the slogans.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
          </Reveal>

          <Reveal delay={200}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-[#555] mb-4 leading-relaxed">
                  We would rather describe what is actually happening than
                  decorate it. BAMBOOGO is a bamboo bicycle project in Bern,
                  Switzerland, where sustainable mobility means something very
                  concrete: another material choice in the bicycle market, built
                  and assembled by hand, with the skill and time that requires.
                </p>
                <p className="text-[#555] leading-relaxed">
                  Bamboo is a renewable natural material, and it brings visible
                  craftsmanship into a product category dominated by industrial
                  manufacturing. We do not publish environmental figures we
                  cannot substantiate. What exists today, what is in development
                  and what we aim for is kept separate.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "What exists today",
                    desc: "Handbuilt bamboo bicycles, Swiss bicycle expertise and development bicycles in the workshop.",
                  },
                  {
                    title: "What is in development",
                    desc: "Road, gravel, mountain and cargo concepts being refined toward production models.",
                  },
                  {
                    title: "What we are aiming for",
                    desc: "Sustainable mobility in Switzerland: another material choice, more skilled assembly, and skills development around bamboo bicycle building.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 120}>
                    <div className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea]">
                      <h3 className="font-bold text-[#0d0d0d] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ GALLERY + BUILD PROCESS - Combined section ═════════════ */}
      <section className="py-16 md:py-24 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              From selection
              <br />
              <span className="text-gradient">to saddle.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
            <p className="text-[#666] max-w-xl mt-6 text-lg">
              Each step pairs artisanal craft with careful material selection.
              Development bicycles and prototypes are being refined toward
              production models.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Process steps - horizontal flow */}
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Select",
                  desc: "Bamboo culms are selected for diameter, wall thickness and fibre density.",
                },
                {
                  step: "02",
                  title: "Treat",
                  desc: "Culms are treated, cured and prepared for frame construction.",
                },
                {
                  step: "03",
                  title: "Assemble",
                  desc: "The frame is joined with bio resin, and every joint is finished by hand.",
                },
                {
                  step: "04",
                  title: "Finish",
                  desc: "Each frame is finished, sealed and prepared for riding.",
                },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 80}>
                  <div className="flex items-center gap-6 p-4 rounded-xl bg-white border border-[#e8f7ea] hover:border-[#44b551] transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[#0d0d0d] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#e6fd53] font-extrabold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0d0d0d]">{item.title}</h3>
                      <p className="text-[#666] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right: Gallery */}
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/okey.jpg"
                  alt="Detail of a BAMBOOGO bamboo bicycle being assembled by hand in the workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-sm">
                    Every frame tells a story
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ BICYCLES ═════════════ */}
      <section id="bicycles" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              The bicycles
              <br />
              <span className="text-gradient">in development.</span>
            </h2>
            <div className="w-20 h-1 bg-[#e6fd53] mt-2" />
          </Reveal>

          {/* BENTO GRID */}
            <div className="grid md:grid-cols-12 gap-4">
              {/* Road - Featured tall card */}
              <div className="md:col-span-5 md:row-span-2">
                <Reveal>
                  <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#f8faf8] to-white border-2 border-[#e6fd53] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/20 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e6fd53]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-bold bg-[#e6fd53] text-[#0d0d0d] rounded-full">Featured</span>
                        <span className="px-3 py-1 text-xs font-bold bg-[#0d0d0d] text-white rounded-full">01</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-2">Bamboo road bike</p>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-[#0d0d0d] mb-2">BAMBOOGO Road</h3>
                      <p className="text-sm font-semibold text-[#0d0d0d] mb-4">Natural Performance</p>
                      <p className="text-[#666] leading-relaxed text-sm max-w-sm">
                        A bamboo road bicycle concept bringing together efficient road-bike geometry, modern components and the distinctive character of a handcrafted bamboo frame.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Gravel */}
              <div className="md:col-span-4">
                <Reveal delay={60}>
                  <div className="h-full p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[#44b551] bg-white px-2 py-1 rounded border border-[#e8f7ea]">02</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-1">Bamboo gravel bike</p>
                      <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-1">BAMBOOGO Gravel</h3>
                      <p className="text-xs font-semibold text-[#0d0d0d] mb-2">Take the Story Further</p>
                      <p className="text-[#666] leading-relaxed text-xs">Designed around versatility and adventure, bringing bamboo craftsmanship to roads and paths beyond the everyday commute.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Mountain */}
              <div className="md:col-span-3">
                <Reveal delay={120}>
                  <div className="h-full p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between text-right">
                    <div>
                      <div className="flex items-center justify-end gap-2 mb-3">
                        <span className="text-xs font-bold text-[#44b551] bg-white px-2 py-1 rounded border border-[#e8f7ea]">03</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-1">Bamboo mountain bike</p>
                      <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-1">BAMBOOGO Mountain</h3>
                      <p className="text-xs font-semibold text-[#0d0d0d] mb-2">Nature Meets the Trail</p>
                      <p className="text-[#666] leading-relaxed text-xs">Exploring bamboo-frame construction for riders looking beyond conventional mountain-bike materials.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* City */}
              <div className="md:col-span-4">
                <Reveal delay={180}>
                  <div className="h-full p-6 rounded-2xl bg-white border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-[#44b551] bg-[#f8faf8] px-2 py-1 rounded">04</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-1">Bamboo city bike</p>
                      <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-1">BAMBOOGO City</h3>
                      <p className="text-xs font-semibold text-[#0d0d0d] mb-2">Everyday Mobility, Crafted</p>
                      <p className="text-[#666] leading-relaxed text-xs">Bringing the character of a handcrafted bamboo bicycle frame to everyday urban riding.</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Cargo */}
              <div className="md:col-span-3">
                <Reveal delay={240}>
                  <div className="h-full p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:border-[#44b551] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between text-right">
                    <div>
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="text-xs font-bold text-[#44b551] bg-white px-2 py-1 rounded border border-[#e8f7ea]">05</span>
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#44b551] mb-1">Bamboo cargo bike</p>
                      <h3 className="text-lg font-extrabold text-[#0d0d0d] mb-1">BAMBOOGO Cargo</h3>
                      <p className="text-xs font-semibold text-[#0d0d0d] mb-2">Carry More, Carry a Story</p>
                      <p className="text-[#666] leading-relaxed text-xs">A bamboo bicycle built to carry more: for everyday transport, family journeys and work.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          <p className="text-[#666] text-sm mt-6 max-w-2xl">
            Real development bicycles and prototypes can be shown, and are kept
            clearly separate from final production models. Final weight, price,
            geometry, warranty and component specifications will be published
            once confirmed.
          </p>
        </div>
      </section>

      {/* ═════════════ FUTURE CONCEPTS ═════════════ */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bambooForest})` }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6fd53] mb-4">
                  Future Concept
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-extrabold text-white leading-[0.95] mb-4">
                  BAMBOOGO
                  <br />
                  Wheelchair.
                </h2>
                <p className="text-lg text-white/70 max-w-xl leading-relaxed mb-6">
                  A future concept exploring bamboo as a natural material for
                  mobility beyond cycling. The BAMBOOGO Wheelchair is separate
                  from the current bicycle range and is not under active
                  development at this stage.
                </p>
                <span className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white/80 text-xs font-bold tracking-wider">
                  Concept
                </span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/united.jpg"
                  alt="Future BAMBOOGO bamboo wheelchair concept for mobility beyond cycling"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-sm">
                    Mobility beyond cycling
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
      <FAQSection
        title="Questions about the bicycles."
        subtitle="BAMBOOGO"
        items={bamboogoFaq}
      />

      {/* ═════════════ CTA ═════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bambooForest})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-3 leading-[0.95]">
              Ride the
              <br />
              <span className="text-gradient-lime">Story.</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              BAMBOOGO is developing bamboo bicycles that carry a story. Join the
              journey as we turn years of learning and building into a
              sustainable bicycle project capable of reaching more riders.
            </p>
            <Link
              href="/support"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-lg hover:bg-[#c7e600] transition-all duration-300 hover:shadow-2xl hover:shadow-[#e6fd53]/40 hover:scale-105"
            >
              Join the Journey
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
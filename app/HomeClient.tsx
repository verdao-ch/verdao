"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Mail, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import FAQSection from "@/components/FAQSection";
import { homeFaq } from "@/lib/faq";
import { bicycleConcepts } from "@/lib/bicycles";

const heroImage = "/bike/wheel.jpg";
const cyclistRoad =
  "https://images.pexels.com/photos/5807638/pexels-photo-5807638.jpeg?auto=compress&cs=tinysrgb&w=1920";
const bambooTexture =
  "https://images.pexels.com/photos/7002955/pexels-photo-7002955.jpeg?auto=compress&cs=tinysrgb&w=1920";

export default function HomeClient() {
  const [heroImg, setHeroImg] = useState(heroImage);

  return (
    <main>
      {/* ═════════════ HERO ═════════════ */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
          onError={() => setHeroImg(cyclistRoad)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40" />

        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-xl bg-[#e6fd53]/20 blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold text-white leading-[0.95] mb-6">
              BAMBOOGO
              <br />
              <span className="text-gradient-lime">Ride the Story</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-4 leading-relaxed">
              Handcrafted bamboo bicycles developed in Bern, Switzerland, born
              from craftsmanship, experience and a different approach to
              sustainable mobility.
            </p>
            <p className="text-sm text-white/50 mb-10 max-w-xl">
              Road, gravel, mountain and cargo concepts. Inspired by a journey
              that connects people, materials, skills and opportunity. A bicycle
              project by VERDAO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bamboogo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-base hover:bg-[#c7e600] transition-all duration-300 hover:shadow-xl hover:shadow-[#e6fd53]/30 hover:scale-105"
              >
                Discover BAMBOOGO
                <ArrowUpRight
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
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-base border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Join the Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <ChevronDown size={20} className="text-white/40 animate-bounce" />
        </div>
      </section>

      {/* ═════════════ INTRO / KEYWORD COPY ═════════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0d0d0d] mb-5 leading-[1.1]">
              Bamboo bicycles from Bern, Switzerland.
            </h2>
            <p className="text-lg text-[#555] mb-4 leading-relaxed">
              BAMBOOGO is a bamboo bicycle brand from Bern, Switzerland. A
              bamboo bike built around sustainable mobility, natural materials
              and the skill of the people who make it. We are developing
              handcrafted bamboo bicycles for riders in Switzerland and beyond:
              road, gravel, mountain, city and cargo.
            </p>
            <p className="text-[#555] leading-relaxed">
              Every bamboo bicycle frame is built from selected bamboo culms,
              treated, cured and joined by hand. That is our idea of a
              sustainable bicycle for Switzerland: natural materials, careful
              design and craftsmanship you can see in every joint. Grown, not
              forged.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ EVERY BIKE CARRIES A STORY ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/united.jpg"
                    alt="Handcrafted bamboo bicycle built in a Swiss workshop during BAMBOOGO development"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
                Every Bike
                <br />
                <span className="text-gradient">Carries a Story</span>
              </h2>
              <p className="text-lg text-[#555] mb-5 leading-relaxed">
                Before BAMBOOGO was a brand, it was a journey. A journey that
                began with years of hands-on bicycle work in Switzerland, grew
                through learning to build bamboo bicycles by hand, and developed
                into a bigger question: can a bicycle connect sustainable
                materials, craftsmanship, skills and economic opportunity?
              </p>
              <p className="text-[#555] mb-8 leading-relaxed">
                BAMBOOGO is our answer in progress. Every bamboo bicycle we
                create carries the story of that journey and the story of the
                people who build it.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-all duration-300"
              >
                Read Our Story
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ VIDEO ═════════════ */}
      <section className="relative py-16 md:py-20 bg-[#0d0d0d] overflow-hidden noise">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bambooTexture})` }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-[1.05]">
              A bicycle that
              <br />
              <span className="text-gradient-lime">grows back.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative mt-12 aspect-video rounded-3xl overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/home-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-label="BAMBOOGO bamboo bicycle film: a handcrafted bamboo frame grown from the ground up"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ JOURNEY HIGHLIGHTS ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              The journey
              <br />
              <span className="text-gradient">so far.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Beginning",
                desc: "Professional bicycle assembly, maintenance and repair in Switzerland since 2016. Years of hands-on experience across mechanical and electric bicycles.",
              },
              {
                title: "Discovering Bamboo",
                desc: "Learning bamboo bicycle construction in Basel through Le Bambousier, then building bamboo bicycles by hand in Switzerland and understanding the material from the ground up.",
              },
              {
                title: "BAMBOOGO Today",
                desc: "A bamboo bicycle brand by VERDAO, developing road, gravel, mountain, city and cargo concepts that bring the natural character of bamboo together with modern components and skilled assembly.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="h-full p-8 rounded-2xl bg-white border border-[#e8f7ea] hover:shadow-xl hover:shadow-[#44b551]/10 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#0d0d0d] flex items-center justify-center mb-5">
                    <span className="text-[#e6fd53] font-extrabold text-lg">
                      0{i + 1}
                    </span>
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

      {/* ═════════════ WHY BAMBOO ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal delay={200}>
              <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
                Why bamboo for a
                <br />
                <span className="text-gradient">bicycle frame?</span>
              </h2>
              <p className="text-lg text-[#555] mb-5 leading-relaxed">
                Bamboo is a rapidly growing natural material with interesting
                possibilities for bicycle frame construction. No two bamboo
                stems are exactly identical, giving each handcrafted bamboo frame
                its own character, and frame builders value the material
                characteristics that can contribute to a distinctive ride feel.
              </p>
              <p className="text-[#555] mb-5 leading-relaxed">
                For BAMBOOGO, a bamboo frame is also a way to bring visible
                craftsmanship into a product category dominated by industrial
                manufacturing, and to offer sustainable mobility a natural
                material choice. Grown, not forged.
              </p>
              <Link
                href="/why-bamboo"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-all duration-300"
              >
                Explore the Material
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/unit.jpg"
                    alt="Close-up of a handcrafted bamboo bicycle frame tube joint"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                  <img
                    src="https://images.pexels.com/photos/33116217/pexels-photo-33116217.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Bamboo grove, the renewable raw material used for BAMBOOGO bicycle frames"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ THE BICYCLES ═════════════ */}
      <section className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-3 leading-[1.05]">
              Bamboo bicycles
              <br />
              <span className="text-gradient">in development.</span>
            </h2>
            <div className="line-lime" />
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
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <p className="text-[#666] text-sm max-w-2xl">
                Development bicycles and prototypes are being refined toward
                production models. Final weight, price, geometry, warranty and
                component specifications will be published once confirmed.
              </p>
              <Link
                href="/bamboogo"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-all duration-300 shrink-0"
              >
                Explore the Bicycles
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════ FAQ ═════════════ */}
      <FAQSection
        title="Questions about BAMBOOGO."
        subtitle="Bamboo bicycles from Switzerland"
        items={homeFaq}
      />

      {/* ═════════════ CTA WINDOWS ═════════════ */}
      <section className="relative py-16 md:py-20 bg-[#0d0d0d]">
        <div
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${bambooTexture})` }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Follow the journey */}
            <Reveal delay={100}>
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#e6fd53]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-[1.05]">
                    Follow the
                    <br />
                    <span className="text-gradient-lime">journey.</span>
                  </h3>
                  <p className="text-white/60 mb-8 max-w-sm">
                    New builds, project updates and story chapters. No noise,
                    just meaningful content, a few times a year.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        aria-label="Email address for BAMBOOGO project updates"
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/30 focus:border-[#e6fd53] focus:outline-none focus:ring-2 focus:ring-[#e6fd53]/20 transition-all text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-sm hover:bg-[#c7e600] transition-all duration-300 hover:shadow-lg hover:shadow-[#e6fd53]/30 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>

            {/* Ride the Story */}
            <Reveal delay={200}>
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden flex flex-col justify-between">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#44b551]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-[1.05]">
                    Ride the
                    <br />
                    <span className="text-gradient-lime">Story.</span>
                  </h3>
                  <p className="text-white/60 mb-8 max-w-sm">
                    BAMBOOGO is developing bamboo bicycles that carry a story.
                    Join the journey as we turn years of learning and building
                    into a sustainable bicycle project capable of reaching more
                    riders.
                  </p>
                </div>
                <div className="relative">
                  <Link
                    href="/support"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#e6fd53] text-[#0d0d0d] rounded-xl font-bold text-base hover:bg-[#c7e600] transition-all duration-300 hover:shadow-xl hover:shadow-[#e6fd53]/30 hover:scale-105"
                  >
                    Join the Journey
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
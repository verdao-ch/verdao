"use client";

import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroImg = "/bike/631283607_18385389079154343_5635014999552081479_n.webp";
const founderImg = "/bike/founder.jpg";

const timeline = [
  {
    year: "2016",
    title: "The Bicycle Journey",
    desc: "Okey Omulu began working professionally with bicycle assembly and maintenance in Switzerland. Over the following years, his work expanded across bicycle assembly, maintenance, repair, and later mechanical and electric bicycles.",
  },
  {
    year: "2019 / 2020",
    title: "Discovering Bamboo",
    desc: "His interest in bicycles eventually led beyond conventional frame materials. In Basel, Okey learned the craft of bamboo bicycle construction through Le Bambousier and began building bamboo bicycles himself. A Le Bambousier post dated 2 January 2020 publicly documented one of his self-built bamboo bicycles.",
  },
  {
    year: "Switzerland",
    title: "Building Bamboo Bicycles by Hand",
    desc: "Okey went on to build bamboo bicycles by hand in Switzerland. Building by hand gave him first-hand understanding of the material, the construction process, and the skill, patience and time required to produce a quality bamboo bicycle.",
  },
  {
    year: "The Challenge",
    title: "A Different Question",
    desc: "The experience also revealed practical challenges. Bamboo bicycle construction is labour-intensive, which can make small-scale production in Switzerland expensive. Sourcing bamboo with the characteristics required for bicycle-frame construction can also be challenging locally. Instead of abandoning the idea, these challenges inspired a different question: could production be developed in a way that combines suitable bamboo resources, craftsmanship, skills development and economic opportunity?",
  },
  {
    year: "2021",
    title: "Bamboo Bikes Bern",
    desc: "The idea developed further through Bamboo Bikes Bern, establishing the foundation for what would later evolve into BAMBOOGO.",
  },
  {
    year: "Today",
    title: "The Next Chapter",
    desc: "The journey that began with learning and building has now evolved into VERDAO and BAMBOOGO. BAMBOOGO brings that history forward into a new Swiss bamboo bicycle brand built around craftsmanship, sustainable materials and the belief that every bicycle can carry a bigger story. Ride the Story.",
  },
];

export default function AboutClient() {
  return (
    <main>
      {/* ═════════════ HERO ═════════════ */}
      <section className="relative h-[75vh] min-h-[560px] w-full overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-fade-in"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-white leading-[0.95] mb-4 animate-fade-up">
              Every Story
              <br />
              Has a Beginning.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl animate-fade-up delay-200">
              From bicycle workshops in Switzerland to building bamboo bicycle
              frames by hand in Bern, the BAMBOOGO story is rooted in real
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════ TIMELINE ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              The journey
              <br />
              <span className="text-gradient">so far.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#44b551]/20 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-xl bg-[#e6fd53] ring-4 ring-white -translate-x-1/2 z-10" />
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="p-6 rounded-2xl bg-[#f8faf8] border border-[#e8f7ea] hover:shadow-lg transition-all duration-300">
                      <span className="text-2xl font-extrabold text-[#44b551]">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#0d0d0d] mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════ FOUNDER ═════════════ */}
      <section id="founder" className="py-16 md:py-20 bg-[#f4f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] leading-[1.05] mb-4">
              Meet the
              <br />
              <span className="text-gradient">founder.</span>
            </h2>
            <div className="line-lime" />
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg relative">
                  <img
                    src="/bike/crafting.jpg"
                    alt="Bamboo bicycle frame being crafted by hand in a Swiss bicycle workshop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8 relative group cursor-pointer">
                  <a
                    href="https://www.instagram.com/bamboobike.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow BAMBOOGO on Instagram"
                    className="block w-full h-full"
                  >
                    <img
                      src={founderImg}
                      alt="Okey Omulu, founder of VERDAO and BAMBOOGO, with a bamboo bicycle in Bern"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0d0d0d] mb-4">
                Okey Omulu
              </h3>
              <p className="text-[#44b551] font-semibold mb-6">
                Founder, VERDAO & BAMBOOGO
              </p>
              <p className="text-lg text-[#555] mb-5 leading-relaxed">
                Okey Omulu is a bicycle professional and entrepreneur based in
                Bern, Switzerland. His professional bicycle journey began in 2016
                and has since included years of hands-on experience in bicycle
                assembly, maintenance and repair, including work with mechanical
                bicycles and e-bikes.
              </p>
              <p className="text-[#555] mb-5 leading-relaxed">
                His interest in sustainable bicycle construction led him to
                bamboo. After learning bamboo bicycle building in Basel, Okey
                built bamboo bicycles himself in Switzerland. The experience was
                publicly documented by Le Bambousier in January 2020.
              </p>
              <p className="text-[#555] mb-5 leading-relaxed">
                What began as hands-on experimentation gradually developed into
                Bamboo Bikes Bern and ultimately the wider VERDAO and BAMBOOGO
                vision. Today, he is working to turn that experience into a
                Swiss bamboo bicycle project that connects craftsmanship,
                sustainable materials and opportunities for people.
              </p>
              <p className="text-[#555] mb-8 leading-relaxed">
                For Okey, Ride the Story represents that journey and an
                invitation for every future BAMBOOGO rider to add their own
                chapter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/bamboogo"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold hover:bg-[#333] transition-all duration-300"
                >
                  Explore the Bicycles
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-[#e8f7ea] text-[#0d0d0d] rounded-xl font-bold hover:border-[#44b551] hover:shadow-lg transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═════════════ JOIN THE STORY ═════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0d0d0d] mb-2 leading-[1.05]">
              Join the
              <br />
              <span className="text-gradient">Story.</span>
            </h2>
            <p className="text-lg text-[#555] mb-10 max-w-xl mx-auto">
              BAMBOOGO is still growing, and we would love to hear from riders,
              supporters, organisations and people interested in the journey.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0d0d0d] text-white rounded-xl font-bold text-base hover:bg-[#333] transition-all duration-300"
              >
                Contact BAMBOOGO
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <p className="text-[#888] text-sm mt-6">VERDAO / BAMBOOGO, Bern, Switzerland</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
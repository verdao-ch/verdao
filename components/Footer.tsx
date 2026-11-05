import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Giant background word */}
      <div className="absolute -bottom-8 left-0 right-0 text-center pointer-events-none select-none">
        <span className="text-[12vw] font-extrabold text-white/[0.03] tracking-tighter leading-none">
          BAMBOOGO
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="grid md:grid-cols-12 gap-10 pb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Logo className="h-20 w-20" variant="white" />
            </div>
            <p className="text-white/50 leading-relaxed text-sm">
              BAMBOOGO is a bamboo bicycle brand and project from Bern,
              Switzerland, developed under VERDAO. Handcrafted bamboo bicycles
              born from real craftsmanship, and from a story worth riding.
            </p>
            
<div className="flex gap-4 mt-6">
  <a
    href="https://www.instagram.com/bamboogo.ch/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="BAMBOOGO on Instagram"
    className="w-10 h-10 rounded-xl bg-white/8 hover:bg-[#e6fd53] hover:text-[#0d0d0d] flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <Instagram size={18} />
  </a>
  <a
    href="mailto:info@verdao.ch"
    aria-label="Email BAMBOOGO"
    className="w-10 h-10 rounded-xl bg-white/8 hover:bg-[#e6fd53] hover:text-[#0d0d0d] flex items-center justify-center transition-all duration-300 hover:scale-110"
  >
    <Mail size={18} />
  </a>
</div>

          </div>

          {/* Discover */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#e6fd53]">
              Discover
            </h4>
            <ul className="space-y-3">
              <li><Link href="/verdao" className="text-white/50 hover:text-white transition-colors text-sm">About VERDAO</Link></li>
              <li><Link href="/bamboogo" className="text-white/50 hover:text-white transition-colors text-sm">BAMBOOGO</Link></li>
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/why-bamboo" className="text-white/50 hover:text-white transition-colors text-sm">Why Bamboo</Link></li>
              <li><Link href="/impact" className="text-white/50 hover:text-white transition-colors text-sm">Impact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#e6fd53]">
              Support
            </h4>
            <ul className="space-y-3">
              <li><Link href="/support" className="text-white/50 hover:text-white transition-colors text-sm">Support</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#e6fd53]">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><Link href="/impressum" className="text-white/50 hover:text-white transition-colors text-sm">Impressum</Link></li>
              <li><Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white transition-colors text-sm">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#e6fd53]">
              Say Hello
            </h4>
            <ul className="space-y-3">
              
<li className="text-white/50 text-sm">info@verdao.ch</li>

              <li className="text-white/50 text-sm">Bern, Switzerland</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 VERDAO / BAMBOOGO. Ride the Story.
          </p>
          <p className="text-white/30 text-xs">
            Bamboo bicycles from Bern, Switzerland. Grown, not forged.
          </p>
        </div>
      </div>
    </footer>
  );
}

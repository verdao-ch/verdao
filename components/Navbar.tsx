"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/bamboogo", label: "BAMBOOGO" },
  { href: "/why-bamboo", label: "Why Bamboo" },
  { href: "/about", label: "Our Story" },
  { href: "/verdao", label: "VERDAO" },
  { href: "/impact", label: "Impact" },
  { href: "/support", label: "Support" },
];

export function BrandLogo({ className = "", color = "white" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bamboo frame bicycle silhouette */}
      {/* Rear wheel */}
      <circle cx="14" cy="28" r="9" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="28" r="2" fill={color} />
      {/* Front wheel */}
      <circle cx="50" cy="28" r="9" stroke={color} strokeWidth="2" />
      <circle cx="50" cy="28" r="2" fill={color} />
      {/* Bamboo frame: organic curved tubes */}
      <path d="M22 28 L30 12 L44 12 L50 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Seat post */}
      <path d="M30 12 L28 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Seat */}
      <path d="M25 5 L32 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Handlebar stem */}
      <path d="M44 12 L46 6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Handlebar */}
      <path d="M42 5 L50 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Chain stay */}
      <path d="M22 28 L50 28" stroke={color} strokeWidth="1.5" strokeDasharray="2 2" />
      {/* Bamboo node marks on frame */}
      <line x1="26" y1="20" x2="28" y2="20" stroke={color} strokeWidth="1.5" />
      <line x1="36" y1="12" x2="38" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="46" y1="20" x2="48" y2="20" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80"
          : "bg-black/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            className="transition-all duration-300"
          >
            <Logo
              className="h-16 w-auto"
              variant={
                pathname === "/verdao"
                  ? "verdao"
                  : scrolled
                  ? logoHover
                    ? "white"
                    : "black"
                  : logoHover
                  ? "black"
                  : "white"
              }
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                 <Link
                  href={link.href}
                  className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 relative py-2 ${
                    active
                      ? "text-[#e6fd53]"
                      : scrolled
                      ? "text-white/70 hover:text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#e6fd53] transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
       <Link
          href="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all duration-300 bg-[#e6fd53] text-[#0d0d0d] hover:bg-[#c7e600] hover:shadow-lg hover:shadow-[#e6fd53]/30"
        >
          Contact
       </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-white" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#0d0d0d]/95 backdrop-blur-md ${
          open ? "max-h-screen shadow-2xl" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-8 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 px-4 font-bold text-sm tracking-wide transition-colors ${
                  pathname === link.href ? "text-[#e6fd53]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/contact"
              className="block py-3 px-4 text-center bg-[#e6fd53] text-[#0d0d0d] rounded-full font-bold text-sm tracking-widest uppercase"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

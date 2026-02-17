"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Bar", href: "#bar" },
  { label: "Doświadczenie", href: "#experience" },
  { label: "Rezerwacje", href: "#booking" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-8 overflow-hidden">
      {/* Nav row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#d4c9b8]/70 font-sans text-sm hover:text-[#d4c9b8] transition-colors relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-[#d4c9b8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <p className="text-[#d4c9b8]/50 font-sans text-sm">
          © 2025 Veloura. Wszelkie prawa zastrzeżone.
        </p>
      </div>

      {/* Giant VELOURA text + bottle background */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Bottle background image */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div
            className="relative w-[250px] md:w-[350px] h-[300px] md:h-[400px]"
            style={{
              maskImage: "radial-gradient(ellipse 70% 80% at center, black 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 80% at center, black 30%, transparent 100%)",
            }}
          >
            <Image
              src="/footer-bottle.png"
              alt=""
              fill
              className="object-contain opacity-60"
              sizes="350px"
            />
          </div>
        </div>
        {/* VELOURA text */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[15vw] md:text-[13vw] text-[#d4c9b8]/80 uppercase tracking-wide leading-none text-center select-none z-10 relative"
        >
          VELOURA
        </motion.h2>
      </div>
    </footer>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignatureCocktail() {
  return (
    <section
      id="bar"
      className="bg-[#1a1410] text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image — edge-to-edge po lewej */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] md:aspect-auto md:h-full md:min-h-[600px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
            alt="Midnight Velvet — espresso martini"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="py-24 px-6 md:px-16 lg:pr-[max(2rem,calc((100vw-1400px)/2+64px))]"
        >
          <p className="text-[#C39E88] text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Koktajl Firmowy
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-wide leading-[0.95] mb-8">
            MIDNIGHT
            <br />
            VELVET
          </h2>
          <p className="text-white/70 font-sans leading-relaxed text-base md:text-lg max-w-md">
            Midnight Velvet stworzony jest dla tych, którzy cenią odważne, a
            zarazem gładkie smaki. Łącząc premium wódkę ze świeżym espresso i
            nutą gorzkiej czekolady, dostarcza wyrafinowaną równowagę
            intensywności i słodyczy. Zwieńczony jedwabistą pianką, ten koktajl
            jest idealnym towarzyszem na wieczór pełen luksusu.
          </p>

          <motion.a
            href="#bar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 inline-flex items-center gap-2 text-white/90 font-sans text-sm tracking-wider group"
          >
            <span className="relative overflow-hidden border-b border-white/40 pb-1">
              <span className="relative z-10 group-hover:text-white transition-colors">
                Skosztuj Elegancji
              </span>
            </span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

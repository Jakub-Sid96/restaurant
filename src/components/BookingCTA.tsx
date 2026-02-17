"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      className="relative py-24 px-6 md:px-16 bg-[#f5efe9] overflow-hidden"
    >
      {/* Left image — steak */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute left-[10%] top-[85%] -translate-y-1/2 w-[700px] lg:w-[800px] rotate-45"
      >
        <Image
          src="/booking-steak.png"
          alt="Stek na drewnianej desce"
          width={480}
          height={600}
          className="object-contain"
          sizes="480px"
        />
      </motion.div>

      {/* Right image — cocktail */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute right-0 top-[5%] -translate-y-1/2 w-[700px] lg:w-[800px] -rotate-45"
      >
        <Image
          src="/booking-cocktail.png"
          alt="Koktajl mojito"
          width={360}
          height={540}
          className="object-contain"
          sizes="360px"
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative flex flex-col items-center min-h-[50vh] justify-center">
        {/* Center text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-2xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-wide leading-[1.1] mb-10">
            ZAREZERWUJ STOLIK NA NIEZAPOMNIANĄ NOC PEŁNĄ ELEGANCJI I WYKWINTNEGO
            JEDZENIA
          </h2>
          <a
            href="#booking"
            className="relative inline-flex items-center gap-2 text-foreground font-sans text-sm tracking-wider group overflow-hidden"
          >
            <span className="border-b border-foreground/50 pb-1 relative">
              <span className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              Zarezerwuj Doświadczenie
            </span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

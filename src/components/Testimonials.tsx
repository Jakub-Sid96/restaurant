"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    title: "Wyborne Doświadczenie",
    text: "Od momentu wejścia wszystko było bez zarzutu — ambiance, obsługa i jedzenie. Każdy szczegół dopracowany do perfekcji.",
    user: "@ElenaM",
  },
  {
    title: "Perfekcyjny Wieczór",
    text: "Veloura to więcej niż restauracja; to doświadczenie. Koktajle były oszałamiające, a Wagyu Risotto niezapomniane.",
    user: "@JakubC",
  },
  {
    title: "Elegancka Uczta",
    text: "Każde danie jak arcydzieło. Dbałość o szczegóły i ciepła atmosfera uczyniły nasz wieczór wyjątkowym.",
    user: "@ZofiaR",
  },
  {
    title: "Luksus Na Nowo",
    text: "Byłem w wielu ekskluzywnych miejscach, ale Veloura wyznacza nowy standard luksusu i komfortu. Warto za każdym razem.",
    user: "@DanielK",
  },
];

function Stars({ delay }: { delay: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * 0.05,
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="text-primary text-3xl"
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const bgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="bg-background">
      {/* Background image with parallax */}
      <div ref={bgRef} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 h-[120%]">
          <Image
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=85"
            alt="Przyjaciele wznoszący toast w restauracji"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Testimonial cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.user}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <Stars delay={i * 0.12 + 0.2} />
              <h3 className="font-serif text-xl text-foreground mb-3 italic">
                {t.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                {t.text}
              </p>
              <p className="text-foreground/60 font-sans text-sm italic">
                {t.user}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

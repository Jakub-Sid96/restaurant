"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Doświadczenie Live Lounge",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Muzyk występujący na żywo w lounge barze",
    labelPosition: "below" as const,
    imageClass: "aspect-[3/4] w-full",
    wrapperClass: "md:w-[18%] md:-rotate-2",
  },
  {
    title: "Kuchnia Fine Dining",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Eleganckie danie fine dining",
    labelPosition: "above" as const,
    imageClass: "aspect-[3/4] w-full",
    wrapperClass: "md:w-[19%]",
  },
  {
    title: "Koktajle Firmowe",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
    alt: "Koktajl z dymem na barze",
    labelPosition: "below" as const,
    imageClass: "aspect-[3/4] w-full",
    wrapperClass: "md:w-[20%]",
  },
  {
    title: "Prywatne Sale",
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
    alt: "Kelner przygotowujący elegancki stolik",
    labelPosition: "above" as const,
    imageClass: "aspect-[3/4] w-full",
    wrapperClass: "md:w-[19%]",
  },
  {
    title: "Selekcja Win i Spirytusów",
    image:
      "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?w=800&q=80",
    alt: "Regał z ekskluzywną kolekcją win",
    labelPosition: "below" as const,
    imageClass: "aspect-[3/4] w-full",
    wrapperClass: "md:w-[18%] md:rotate-2",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground uppercase tracking-wide leading-[0.95]">
            GDZIE KAŻDY SMAK
            <br />
            OPOWIADA HISTORIĘ
          </h2>
        </motion.div>

        {/* Editorial scattered layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-4 md:pb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group cursor-pointer ${feature.wrapperClass}`}
            >
              {feature.labelPosition === "above" && (
                <p className="text-foreground font-serif text-base md:text-lg tracking-wider mb-3 italic">
                  {feature.title}
                </p>
              )}

              <div
                className={`relative overflow-hidden rounded-[10px] ${feature.imageClass}`}
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>

              {feature.labelPosition === "below" && (
                <p className="text-foreground font-serif text-base md:text-lg tracking-wider mt-3 italic">
                  {feature.title}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "CHÂTEAU MARGAUX 2015",
    subtitle: "Czerwone wino · 750ml",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    alt: "Butelka czerwonego wina Château Margaux",
  },
  {
    name: "STEK VELOURA",
    subtitle: "Dry-Aged Wagyu Ribeye · 500g",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    alt: "Stek Wagyu Ribeye na gorącej patelni",
  },
  {
    name: "MAKARON Z CZARNĄ TRUFLĄ",
    subtitle: "Makaron ręcznie robiony · 200g",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80",
    alt: "Makaron z czarną truflą na białym talerzu",
  },
];

export default function BestSellers() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 flex flex-col justify-center p-8 md:p-12 overflow-hidden"
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-5xl xl:text-6xl text-foreground uppercase tracking-wide leading-[0.9] mb-6">
            BEST
            <br />
            SELLERS
          </h2>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8">
            Nasze Najbardziej Uwielbiane Dania i Drinki, Stworzone Na Każdą
            Luksusową Chwilę.
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 text-foreground font-sans text-sm tracking-wider group"
          >
            <span className="border-b border-foreground/40 pb-1">
              Zobacz Pełne Menu
            </span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">
              ↗
            </span>
          </a>
        </motion.div>

        {/* Product cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[500px] overflow-hidden group cursor-pointer"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:-translate-y-1 transition-transform duration-500">
                <p className="text-white/60 text-xs font-sans tracking-wider uppercase mb-1">
                  {product.subtitle}
                </p>
                <h3 className="text-white font-serif text-xl md:text-2xl tracking-wide mb-4">
                  {product.name}
                </h3>
                <span className="inline-block text-white/90 text-xs font-sans tracking-widest uppercase border-b border-white/40 pb-0.5 hover:border-white transition-colors">
                  Dodaj do koszyka
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

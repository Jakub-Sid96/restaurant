"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80",
    alt: "Pasta z sosem na eleganckim talerzu",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
    alt: "Różowy koktajl z lodem",
  },
  {
    src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=500&q=80",
    alt: "Spaghetti z owocami morza",
  },
  {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&q=80",
    alt: "Stek na drewnianej desce",
  },
  {
    src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=500&q=80",
    alt: "Tropikalny drink z miętą",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
    alt: "Talerz z wykwintnym mięsem",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80",
    alt: "Kolorowa sałatka na talerzu",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80",
    alt: "Naleśniki z owocami i syropem",
  },
];

export default function PhotoGallery() {
  const allPhotos = [...photos, ...photos];

  return (
    <section className="py-12 overflow-hidden bg-background">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{}}
        transition={{ duration: 0.6 }}
        className="text-center font-serif text-3xl md:text-5xl text-foreground mb-10"
      >
        Poznaj naszą kartę menu
      </motion.h2>
      <div
        className="flex gap-4 w-max hover:[animation-play-state:paused]"
        style={{
          animation: "marquee 40s linear infinite",
        }}
      >
        {allPhotos.map((photo, i) => (
          <div
            key={i}
            className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex-shrink-0 overflow-hidden group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              sizes="300px"
            />
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-10"
      >
        <a
          href="#"
          className="relative inline-block px-10 py-4 font-serif text-lg tracking-widest uppercase text-foreground border border-primary/50 overflow-hidden group transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)]"
        >
          <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
            Menu
          </span>
        </a>
      </motion.div>
    </section>
  );
}

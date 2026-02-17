"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SignatureDish() {
  return (
    <section id="menu" className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="py-24 px-6 md:px-16 lg:pl-[max(2rem,calc((100vw-1400px)/2+64px))]"
        >
          <p className="text-primary text-sm font-sans tracking-[0.2em] uppercase mb-4">
            Danie Firmowe
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-wide leading-[0.95] mb-8">
            WAGYU
            <br />
            RISOTTO
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed text-base md:text-lg max-w-md">
            Nasze Wagyu Truffle Risotto łączy bogactwo kremowego ryżu Arborio z
            ziemistym aromatem czarnej trufli. Każdy kęs jest wzbogacony o
            delikatne plastry premium Wagyu, wióra Parmezanu i subtelny dreszcz
            olejku truflowego. Danie zaprojektowane by dostarczyć głębię,
            komfort i czystą elegancję w każdej łyżce.
          </p>
        </motion.div>

        {/* Image — edge-to-edge po prawej */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[600px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
            alt="Wagyu Risotto — tataki wołowe na eleganckim talerzu"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}

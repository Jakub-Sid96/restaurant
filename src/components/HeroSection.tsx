"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedText from "./AnimatedText";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background video with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[115%]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-20 max-w-[1400px] mx-auto">
        <AnimatedText
          text="ROZKOSZUJ SIĘ LUKSUSEM"
          as="h1"
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-[0.15em] uppercase max-w-4xl"
          splitBy="words"
          staggerDelay={0.08}
        />

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mt-8 w-16 h-px bg-white/50 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-white/80 text-base md:text-lg max-w-xl font-sans leading-relaxed"
        >
          Wyjątkowa podróż kulinarna, gdzie artyzm kulinarny spotyka się ze
          światowej klasy koktajlami w atmosferze ponadczasowej elegancji.
        </motion.p>

        <motion.a
          href="#booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 text-white font-sans text-sm tracking-widest uppercase group self-start md:self-end border border-white/20 px-6 py-3 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-500"
        >
          <span>Zarezerwuj Stolik</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </motion.a>
      </div>
    </section>
  );
}

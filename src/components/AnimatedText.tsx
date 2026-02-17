"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  splitBy?: "words" | "letters";
  staggerDelay?: number;
}

export default function AnimatedText({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  splitBy = "words",
  staggerDelay = 0.05,
}: AnimatedTextProps) {
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="inline-flex flex-wrap"
        aria-label={text}
      >
        {items.map((item, i) => (
          <motion.span
            key={i}
            variants={child}
            className="inline-block"
          >
            {item}
            {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

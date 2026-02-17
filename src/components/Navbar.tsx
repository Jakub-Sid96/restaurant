"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Bar", href: "#bar" },
  { label: "Doświadczenie", href: "#experience" },
  { label: "Rezerwacje", href: "#booking" },
];

const rightLinks = [
  { label: "Zaloguj się", href: "#login" },
  { label: "Koszyk (0)", href: "#cart" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} scrolled={scrolled}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-2xl tracking-wider transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Veloura
        </a>

        {/* Right links */}
        <div className="hidden md:flex items-center gap-8">
          {rightLinks.map((link) => (
            <NavLink key={link.label} href={link.href} scrolled={scrolled}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Otwórz menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-0.5 transition-colors ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {[...navLinks, ...rightLinks].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground font-sans text-lg hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) {
  return (
    <a
      href={href}
      className={`relative text-sm tracking-wide font-sans transition-colors duration-500 group ${
        scrolled ? "text-foreground" : "text-white/90 hover:text-white"
      }`}
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-px w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </a>
  );
}

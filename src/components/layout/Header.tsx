"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-foreground">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-accent rounded-full border-2 border-foreground flex items-center justify-center shadow-pop transition-all duration-300 group-hover:shadow-pop-hover group-hover:-translate-y-0.5">
            <span className="text-white font-heading font-extrabold text-lg">
              MJ
            </span>
          </div>
          <span className="font-heading font-bold text-lg hidden sm:block">
            Mingju Wu
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 font-heading font-bold text-sm rounded-full border-2 border-transparent transition-all duration-300 hover:border-foreground ${
                  isActive
                    ? "bg-accent text-white border-accent"
                    : "text-foreground hover:bg-tertiary/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden w-12 h-12 flex items-center justify-center border-2 border-foreground rounded-full bg-card shadow-pop"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-foreground overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-5 py-3 font-heading font-bold rounded-full border-2 transition-all ${
                      isActive
                        ? "bg-accent text-white border-accent"
                        : "border-foreground text-foreground hover:bg-tertiary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

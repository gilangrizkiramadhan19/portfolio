"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            GR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 text-sm font-medium ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact Link - scroll to section on home page */}
            <Link
              href="/#contact"
              className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 space-y-3 pb-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block transition-colors py-2.5 px-1 ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Contact - scroll to section on home page */}
            <Link
              href="/#contact"
              className="block text-foreground/80 hover:text-primary transition-colors py-2.5 px-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

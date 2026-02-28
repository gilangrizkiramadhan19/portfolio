"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isExperienceMobileOpen, setIsExperienceMobileOpen] = useState(false);

  // Urutan yang diinginkan: About, Skills, Projects, Experience, Contact
  const navItems = ["About", "Skills", "Projects", "Contact"];
  // Experience dipisah agar bisa punya dropdown

  const experienceSubItems = [
    { label: "Pengalaman Profesional", id: "experience" },
    { label: "Prestasi & Penghargaan", id: "achievements" },
    { label: "Sertifikasi & Kredensial", id: "certifications" },
    { label: "Hak Cipta Terdaftar dan Publikasi Jurnal", id: "publications" },
  ];

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
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            GR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) =>
              item !== "Contact" ? (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </a>
              ) : null,
            )}

            {/* Desktop Experience Dropdown - diposisikan sebelum Contact */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium">
                Experience
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>

              <div className="absolute left-0 mt-2 w-64 bg-popover border border-border rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-1">
                {experienceSubItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-2.5 text-foreground/80 hover:text-primary hover:bg-accent/40 transition-colors text-sm font-medium border-b border-border/40 last:border-b-0 first:rounded-t-md last:rounded-b-md"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact - paling akhir */}
            <a
              href="#contact"
              className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </a>
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
            {navItems.map((item) =>
              item !== "Contact" ? (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-foreground/80 hover:text-primary transition-colors py-2.5 px-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ) : null,
            )}

            {/* Mobile Experience Dropdown */}
            <div>
              <button
                onClick={() =>
                  setIsExperienceMobileOpen(!isExperienceMobileOpen)
                }
                className="flex items-center justify-between gap-2 text-foreground/80 hover:text-primary transition-colors py-2.5 px-1 w-full text-left font-medium text-sm"
              >
                Experience
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isExperienceMobileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isExperienceMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="ml-5 space-y-2 mt-1 border-l border-border/50 pl-4"
                >
                  {experienceSubItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-foreground/70 hover:text-primary transition-colors py-2 text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsExperienceMobileOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact - paling akhir di mobile juga */}
            <a
              href="#contact"
              className="block text-foreground/80 hover:text-primary transition-colors py-2.5 px-1"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

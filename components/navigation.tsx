'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isExperienceMobileOpen, setIsExperienceMobileOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];
  
  const experienceSubItems = [
    { label: 'Pengalaman Profesional', id: 'experience' },
    { label: 'Prestasi & Penghargaan', id: 'achievements' },
    { label: 'Sertifikasi & Kredensial', id: 'certifications' },
    { label: 'Hak Cipta Terdaftar dan Publikasi Jurnal', id: 'publications' },
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
          <Link href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#58a6ff' }}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </motion.a>
            ))}
            
            {/* Desktop Experience Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                Experience
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Desktop Dropdown Menu */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 mt-0 w-56 bg-popover border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                onMouseEnter={() => setIsExperienceOpen(true)}
                onMouseLeave={() => setIsExperienceOpen(false)}
              >
                {experienceSubItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-accent/50 transition-colors text-sm font-medium first:rounded-t-md last:rounded-b-md border-b border-border/50 last:border-b-0"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </div>
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 space-y-3 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            
            {/* Mobile Experience Dropdown */}
            <div>
              <button
                onClick={() => setIsExperienceMobileOpen(!isExperienceMobileOpen)}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors py-2 w-full text-left font-medium text-sm"
              >
                Experience
                <ChevronDown size={16} className={`transition-transform duration-300 ${isExperienceMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isExperienceMobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-4 space-y-2 mt-2 border-l border-border/50 pl-4"
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
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

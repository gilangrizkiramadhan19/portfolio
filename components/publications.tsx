"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  doi: string;
  description: string;
  highlights: string[];
}

const publications: Publication[] = [
  {
    title: "Prediksi Harga Mobil Bekas Menggunakan Klasterisasi K-Means dan Perbandingan Empat Algoritma Regresi Supervised Learning",
    journal: "ROUTERS: Jurnal Sistem dan Teknologi Informasi",
    year: "2025",
    doi: "10.25181/rt.v3i2.4249",
    description:
      "Penelitian tentang prediksi harga mobil bekas menggunakan teknik machine learning, kombinasi K-Means clustering dengan empat algoritma regresi supervised learning (Linear Regression, Decision Tree, Random Forest, Gradient Boosting) untuk hasil akurasi optimal.",
    highlights: [
      "Machine Learning",
      "K-Means Clustering",
      "Predictive Analytics",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Publications() {
  return (
    <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <BookOpen className="text-indigo-500" size={32} />
          Publikasi Jurnal
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {publications.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.title}
                    </h4>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 ml-3"
                  >
                    <BookOpen className="text-indigo-500" size={24} />
                  </motion.div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 text-sm">
                  <p className="text-foreground/70 font-semibold">
                    {item.journal}
                  </p>
                  <span className="hidden md:inline text-foreground/40">•</span>
                  <p className="text-foreground/60">
                    {item.year}
                  </p>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-semibold">
                    DOI: {item.doi}
                  </p>
                  <a
                    href={`https://doi.org/${item.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-2 py-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Experience {
  title: string;
  organization: string;
  year: string;
  type: 'competition' | 'freelance' | 'achievement';
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'Juara 2 Nasional AITECH 2024',
    organization: 'Agricultural Technology Innovation Competition',
    year: '2024',
    type: 'competition',
    description: 'Meraih penghargaan Juara 2 Nasional pada kompetisi inovasi teknologi AITECH 2024 dengan inovasi Smart Planting System kategori Smart Farming. Mengalahkan peserta tingkat nasional dengan solusi IoT & AI terintegrasi.',
    highlights: ['Juara 2 Nasional', 'Smart Farming Category', 'IoT & AI Innovation'],
  },
  {
    title: 'Praktik Kerja Lapangan',
    organization: 'PT Cerdaskan Generasi Bangsa (NIOMIC)',
    year: '20 Desember 2021 - 22 Juni 2022',
    type: 'freelance',
    description: 'Mempelajari frontend development dengan HTML, CSS, Bootstrap, JavaScript dan GitHub. Membuat desain iklan digital, konten media sosial, dan website. Predikat "Baik Sekali" (Nilai 85).',
    highlights: ['Frontend Development', 'Web Design', 'Digital Content Creation'],
  },
  {
    title: 'Freelance Developer',
    organization: 'PT PLN (Persero)',
    year: '01 Mei - 25 Juni 2023',
    type: 'achievement',
    description: 'Mengakses server pengolah data secara remote, melakukan generate data teknis (Vibrasi, Arus, Suhu), memantau sinkronisasi data, dan validasi hasil olahan ke Google Sheets. Laporan kendala teknis & dokumentasi.',
    highlights: ['Server Management', 'Data Processing', 'Technical Support'],
  },
  {
    title: 'Publication - Jurnal Penelitian',
    organization: 'ROUTERS: Jurnal Sistem dan Teknologi Informasi',
    year: '2025',
    type: 'achievement',
    description: 'Publikasi jurnal "Prediksi Harga Mobil Bekas Menggunakan Klasterisasi K-Means dan Perbandingan Empat Algoritma Regresi Supervised Learning". DOI: 10.25181/rt.v3i2.4249',
    highlights: ['Published Research', 'Machine Learning', 'Data Science'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors ml-0 md:ml-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-foreground/70 font-semibold">{item.organization}</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <Award
                      className={`${
                        item.type === 'competition'
                          ? 'text-yellow-500'
                          : item.type === 'freelance'
                          ? 'text-blue-400'
                          : 'text-green-400'
                      }`}
                      size={28}
                    />
                  </motion.div>
                </div>

                <p className="text-foreground/70 mb-4 text-sm font-medium">{item.year}</p>
                <p className="text-foreground/80 leading-relaxed mb-5">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Completed', value: '3+' },
            { label: 'Competitions Won', value: 'Top Awards' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Skills Mastered', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-foreground/70 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

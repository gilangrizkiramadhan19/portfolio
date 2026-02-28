"use client";

import { motion } from "framer-motion";
import { Award, Trophy, BookOpen, Copyright } from "lucide-react";

interface Achievement {
  title: string;
  subtitle?: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
  icon?: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: "Juara 2 – Skilled Category (Smart and Precision Farming)",
    subtitle: "6th Agricultural Innovation Technology Competition (AITeC VI)",
    organization: "AITeC VI 2024",
    year: "2024",
    description:
      "Meraih Juara 2 pada kategori Skilled (Sub-kategori Smart and Precision Farming) melalui pengembangan Aplikasi Smart Farming – Sistem Tanam Cerdas Berbasis Data Lingkungan dan Tanah untuk Masa Depan Pangan Berkelanjutan, solusi pertanian cerdas berbasis AI dan IoT dengan integrasi monitoring real-time serta analisis prediktif berbasis machine learning.",
    highlights: [
      "Kompetisi tingkat nasional",
      "Integrasi AI & IoT",
      "Sistem pertanian cerdas berbasis data",
    ],
    icon: <Trophy className="text-yellow-500" size={28} />,
  },
  {
    title: "Hak Cipta Terdaftar – Program Komputer",
    subtitle:
      "Aplikasi Smart Farming Sistem Tanam Cerdas Berbasis Data Lingkungan dan Tanah untuk Masa Depan Pangan Berkelanjutan",
    organization:
      "Direktorat Jenderal Kekayaan Intelektual – Kementerian Hukum dan HAM RI",
    year: "2024",
    description:
      "Nomor Pencatatan: 000780626. Ciptaan terdaftar resmi berdasarkan Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta dengan masa perlindungan selama 50 tahun sejak tanggal pengumuman.",
    highlights: [
      "Program Komputer Terdaftar Resmi",
      "Perlindungan Hukum 50 Tahun",
      "Sistem AI & IoT Terintegrasi",
    ],
    icon: <Copyright className="text-purple-500" size={28} />,
  },
  {
    title: "Hak Cipta Terdaftar – Buku Teknis",
    subtitle:
      "Panduan Teknis HydroWatch IoT Sistem Pemantauan Kualitas Air Perikanan Berbasis IoT",
    organization:
      "Direktorat Jenderal Kekayaan Intelektual – Kementerian Hukum dan HAM RI",
    year: "2024",
    description:
      "Nomor Pencatatan: 000819850. Buku panduan teknis terdaftar resmi berdasarkan Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta dengan masa perlindungan seumur hidup pencipta dan 70 tahun setelahnya. Termasuk dokumentasi teknis sistem IoT dan panduan implementasi monitoring kualitas air.",
    highlights: [
      "Hak Cipta Terdaftar Resmi Negara",
      "Dokumentasi Teknis Sistem IoT",
      "Panduan Implementasi Monitoring Kualitas Air",
    ],
    icon: <Copyright className="text-purple-500" size={28} />,
  },
  {
    title: "Publikasi Jurnal – Machine Learning & Data Science",
    subtitle:
      "Prediksi Harga Mobil Bekas Menggunakan Klasterisasi K-Means dan Perbandingan Empat Algoritma Regresi Supervised Learning",
    organization: "ROUTERS: Jurnal Sistem dan Teknologi Informasi",
    year: "2025",
    description: "DOI: 10.25181/rt.v3i2.4249",
    highlights: [
      "Jurnal ilmiah terindeks",
      "Penelitian berbasis machine learning",
      "Implementasi clustering dan regresi prediktif",
    ],
    icon: <BookOpen className="text-blue-500" size={28} />,
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

export function Achievements() {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <Award className="text-yellow-500" size={32} />
          Prestasi & Penghargaan
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-yellow-500/50 transition-colors h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-yellow-500 mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-sm md:text-base font-semibold text-foreground/80 line-clamp-2">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 ml-3"
                  >
                    {item.icon || (
                      <Trophy className="text-yellow-500" size={24} />
                    )}
                  </motion.div>
                </div>

                <p className="text-xs md:text-sm text-foreground/70 font-medium mb-2">
                  {item.organization}
                </p>
                <p className="text-xs text-foreground/60 font-medium mb-3">
                  {item.year}
                </p>

                <p className="text-sm text-foreground/80 leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-semibold"
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

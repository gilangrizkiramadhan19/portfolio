"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Trophy, BookOpen, Copyright } from "lucide-react";

interface Achievement {
  title: string;
  subtitle?: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
  icon?: React.ReactNode;
}

interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
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

const professionalExperiences: ExperienceItem[] = [
  {
    title: "Praktik Kerja Lapangan",
    organization: "PT Cerdaskan Generasi Bangsa (NIOMIC)",
    duration: "20 Desember 2021 – 22 Juni 2022",
    description:
      "Mengembangkan antarmuka web menggunakan HTML, CSS, Bootstrap, dan JavaScript. Membuat desain konten digital serta website responsif. Meraih predikat “Baik Sekali” dengan nilai 85.",
    highlights: [
      "Frontend Development",
      "UI & Web Design",
      "Implementasi Website",
    ],
  },
  {
    title: "Freelance Developer",
    organization: "PT PLN (Persero)",
    duration: "01 Mei – 25 Juni 2023",
    description:
      "Mengoperasikan server pengolah data secara remote, melakukan generate data teknis (vibrasi, arus, suhu), memantau proses sinkronisasi data, serta melakukan validasi hasil olahan dan pelaporan kendala teknis.",
    highlights: [
      "Pengolahan Data Teknis",
      "Operasional Server",
      "Dokumentasi & Pelaporan Teknis",
    ],
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
        {/* Heading Utama */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0" />
        </motion.div>

        {/* Bagian 1: Prestasi & Kompetisi */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Award className="text-yellow-500" size={32} /> 🏆 Prestasi &
            Kompetisi
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="bg-card border border-border rounded-xl p-8 hover:border-yellow-500/50 transition-colors ml-0 md:ml-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-yellow-500 mb-1">
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <p className="text-lg font-semibold text-foreground/80">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-foreground/70 font-medium">
                        {item.organization}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 ml-4"
                    >
                      {item.icon || (
                        <Trophy className="text-yellow-500" size={28} />
                      )}
                    </motion.div>
                  </div>

                  <p className="text-foreground/70 mb-4 text-sm font-medium">
                    {item.year}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold"
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

        {/* Bagian 2: Pengalaman Profesional */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Briefcase className="text-blue-500" size={32} /> 💼 Pengalaman
            Profesional
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {professionalExperiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="bg-card border border-border rounded-xl p-8 hover:border-blue-500/50 transition-colors ml-0 md:ml-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-blue-500 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-foreground/70 font-semibold">
                        {item.organization}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <Briefcase className="text-blue-500" size={28} />
                    </motion.div>
                  </div>

                  <p className="text-foreground/70 mb-4 text-sm font-medium">
                    {item.duration}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
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

        {/* Stats (opsional, tetap dipertahankan) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "3+" },
            { label: "Competitions Won", value: "Top Awards" },
            { label: "Years Experience", value: "3+" },
            { label: "Skills Mastered", value: "30+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-foreground/70 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

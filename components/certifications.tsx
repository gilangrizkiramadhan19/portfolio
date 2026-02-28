"use client";

import { motion } from "framer-motion";
import { Award, FileText, CheckCircle2 } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
  category: "credential" | "copyright";
}

const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate - Cloud Architecting & Web App Builder",
    organization: "AWS Academy & Dicoding Indonesia",
    year: "2024",
    description:
      "Sertifikasi komprehensif meliputi arsitektur cloud (Architecting), pengembangan aplikasi web berbasis cloud (Builder), serta fondasi layanan AWS (Cloud Foundations & Belajar Dasar AWS Cloud).",
    highlights: [
      "Cloud Architecting",
      "Web App Builder",
      "AWS Fundamentals",
    ],
    category: "credential",
  },
  {
    title: "Python & AI Data Specialist (Gold Level)",
    organization: "Skilvul, Cisco, & IBM",
    year: "2024",
    description:
      "Python Lanjutan & Algoritma (Gold): Penguasaan logika pemrograman tingkat lanjut, struktur data, dan manipulasi data kompleks. IBM Granite: Penerapan teknologi Generative AI untuk klasifikasi dan peringkasan data. Python Essentials: Pemahaman fundamental dari Cisco Networking Academy.",
    highlights: [
      "Python Advanced",
      "Generative AI",
      "Data Science",
    ],
    category: "credential",
  },
  {
    title: "Sertifikat Kompetensi Keahlian (IAII)",
    organization: "Ikatan Ahli Informatika Indonesia (IAII) DPW Lampung",
    year: "2024",
    description:
      "Dinyatakan KOMPETEN dalam unit kompetensi 'Aplikasi Pelaporan Pengaduan Masyarakat' (Citizen Complaint Report Application). Merupakan sertifikasi profesi resmi yang divalidasi oleh asosiasi ahli informatika.",
    highlights: [
      "Sertifikasi Resmi Profesi",
      "Validasi Asosiasi",
      "Aplikasi Pelaporan",
    ],
    category: "credential",
  },
  {
    title: "Cisco Networking & IT Infrastructure",
    organization: "Cisco Networking Academy",
    year: "2024",
    description:
      "Memiliki kompetensi teknis dalam CCNA: Switching, Routing, and Wireless Essentials serta IT Essentials untuk manajemen jaringan, infrastruktur, dan administrasi sistem.",
    highlights: [
      "CCNA Essentials",
      "Network Management",
      "IT Infrastructure",
    ],
    category: "credential",
  },
  {
    title: "Hak Cipta Terdaftar – Program Komputer",
    organization: "Direktorat Jenderal Kekayaan Intelektual – Kementerian Hukum dan HAM RI",
    year: "2024",
    description:
      "Nomor Pencatatan: 000780626. Aplikasi Smart Farming Sistem Tanam Cerdas Berbasis Data Lingkungan dan Tanah. Ciptaan terdaftar resmi berdasarkan UU No. 28 Tahun 2014 tentang Hak Cipta dengan masa perlindungan selama 50 tahun.",
    highlights: [
      "Program Komputer",
      "Perlindungan 50 Tahun",
      "AI & IoT Integration",
    ],
    category: "copyright",
  },
  {
    title: "Hak Cipta Terdaftar – Buku Teknis",
    organization: "Direktorat Jenderal Kekayaan Intelektual – Kementerian Hukum dan HAM RI",
    year: "2024",
    description:
      "Nomor Pencatatan: 000819850. Panduan Teknis HydroWatch IoT Sistem Pemantauan Kualitas Air Perikanan Berbasis IoT. Terdaftar resmi dengan perlindungan seumur hidup pencipta dan 70 tahun setelahnya.",
    highlights: [
      "Buku Teknis",
      "IoT Documentation",
      "Water Quality Monitoring",
    ],
    category: "copyright",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Certifications() {
  const credentials = certifications.filter(c => c.category === "credential");
  const copyrights = certifications.filter(c => c.category === "copyright");

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <CheckCircle2 className="text-green-500" size={32} />
          Sertifikasi & Kredensial
        </motion.h3>

        {/* Credentials Section */}
        <div className="mb-14">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold mb-6 text-green-600 dark:text-green-400"
          >
            Sertifikasi Profesional
          </motion.h4>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-green-500/50 transition-colors h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-green-600 dark:text-green-400 mb-1 line-clamp-2">
                        {item.title}
                      </h5>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 ml-3"
                    >
                      <CheckCircle2 className="text-green-500" size={24} />
                    </motion.div>
                  </div>

                  <p className="text-xs md:text-sm text-foreground/70 font-medium mb-1">
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
                        className="inline-block px-2 py-1 bg-green-500/10 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold"
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

        {/* Copyright Section */}
        <div>
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400"
          >
            Hak Cipta Terdaftar
          </motion.h4>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {copyrights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />

                <div className="bg-card border border-border rounded-xl p-6 hover:border-purple-500/50 transition-colors h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h5 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-1 line-clamp-2">
                        {item.title}
                      </h5>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0 ml-3"
                    >
                      <FileText className="text-purple-500" size={24} />
                    </motion.div>
                  </div>

                  <p className="text-xs md:text-sm text-foreground/70 font-medium mb-1">
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
                        className="inline-block px-2 py-1 bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold"
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
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Praktik Kerja Industri",
    organization: "PT Cerdaskan Generasi Bangsa (NIOMIC)",
    duration: "Desember 2021 – Juni 2022",
    description:
      "Mengembangkan antarmuka web menggunakan HTML, CSS, Bootstrap, dan JavaScript. Membuat desain konten digital serta website responsif untuk berbagai klien. Meraih predikat 'Baik Sekali' dengan nilai rata-rata 85 dalam aspek ketelitian, kecepatan, dan kerapihan hasil kerja.",
    highlights: [
      "Frontend Development",
      "Responsive Web Design",
      "UI Implementation",
    ],
  },
  {
    title: "Freelance Developer",
    organization: "PT PLN (Persero)",
    duration: "Mei – Juni 2023",
    description:
      "Mengoperasikan server pengolah data secara remote, melakukan generate data teknis (vibrasi, arus, suhu), memantau proses sinkronisasi data, serta melakukan validasi hasil olahan dan pelaporan kendala teknis kepada tim engineering.",
    highlights: [
      "Data Processing",
      "Remote Server Management",
      "Technical Reporting",
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <Briefcase className="text-blue-500" size={32} />
          Pengalaman Profesional
        </motion.h3>

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
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />

              <div className="bg-card border border-border rounded-xl p-6 hover:border-blue-500/50 transition-colors ml-0 md:ml-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-blue-500 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-foreground/80 font-semibold text-sm md:text-base">
                      {item.organization}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 ml-3"
                  >
                    <Briefcase className="text-blue-500" size={24} />
                  </motion.div>
                </div>

                <p className="text-xs md:text-sm text-foreground/70 font-medium mb-3">
                  {item.duration}
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="inline-block px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold"
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

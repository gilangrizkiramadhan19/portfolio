'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const educationItems = [
  {
    degree: 'D4 Teknologi Rekayasa Internet (Semester 6)',
    institution: 'Politeknik Negeri Lampung',
    year: '2021 - Sekarang',
    gpa: 'IPK: 3.96 / 4.00',
    achievement: 'Juara 2 AITECH 2024',
  },
  {
    degree: 'Rekayasa Perangkat Lunak',
    institution: 'SMK Negeri 4 Bandar Lampung',
    year: '2018 - 2021',
    gpa: 'Nilai: 90.00 / 100',
    achievement: 'Lulus Uji Kompetensi Keahlian',
  },
];

const softSkills = [
  'Problem Solving',
  'Team Leadership',
  'Critical Thinking',
  'Project Management',
  'Communication',
  'Adaptability',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Professional Background</h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Mahasiswa semester 6 Program Studi D4 Teknologi Rekayasa Internet dengan minat pada software engineering, backend development, dan integrasi AI dalam sistem berbasis web dan IoT. Memiliki pengalaman dalam pengembangan API menggunakan Python dan FastAPI, pengolahan data, serta implementasi model machine learning untuk mendukung pengambilan keputusan berbasis data.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Aktif dalam proyek inovasi teknologi dan pernah meraih Juara 2 pada kompetisi inovasi AITECH 2024 dengan Smart Planting System. Terbiasa bekerja dalam tim, berpikir analitis, serta mampu merancang solusi teknis yang terstruktur dan adaptif terhadap kebutuhan sistem.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-background/50 p-4 rounded-lg border border-border"
                  >
                    <p className="font-semibold text-primary">{item.degree}</p>
                    <p className="text-foreground/70">{item.institution}</p>
                    <p className="text-sm text-foreground/50">{item.year}</p>
                    <p className="text-sm text-foreground/60 mt-2">{item.gpa}</p>
                    {item.achievement && <p className="text-sm text-accent font-semibold mt-1">{item.achievement}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Focus Areas */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Area of Focus</h3>
              <div className="space-y-3">
                {['Mobile Development (Flutter/Dart)', 'AI Integration & Machine Learning', 'IoT Applications', 'Backend API Development', 'Database Design & Optimization'].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg text-center font-semibold text-primary hover:bg-primary/20 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

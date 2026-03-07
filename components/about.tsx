"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Download } from "lucide-react";

const educationItems = [
  {
    degree: "D4 Teknologi Rekayasa Internet (Semester 6)",
    institution: "Politeknik Negeri Lampung",
    year: "2021 – Sekarang",
    gpa: "IPK: 3.96 / 4.00",
    achievement:
      "2nd Winner – Skilled Category (Smart and Precision Farming), 6th Agricultural Innovation Technology Competition (AITeC VI) 2024",
  },
  {
    degree: "Rekayasa Perangkat Lunak",
    institution: "SMK Negeri 4 Bandar Lampung",
    year: "2018 – 2021",
    gpa: "Nilai: 90.00 / 100",
    achievement: "Lulus Uji Kompetensi Keahlian",
  },
];

const focusAreas = [
  "Mobile Application Development (Flutter & Dart)",
  "Applied Machine Learning & AI Integration",
  "Backend API Development (RESTful Architecture)",
  "IoT System Integration & Real-Time Data Processing",
  "Database Design, Schema Modeling & Query Optimization (PostgreSQL, MySQL, InfluxDB)",
];

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Critical Thinking",
  "Project Management",
  "Communication",
  "Adaptability",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 mt-4 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
          </div>

          <motion.a
            href="/cv-gilang-rizki-ramadhan.pdf"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            Download CV
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Kolom Kiri */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Professional Background */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                Professional Background
              </h3>
              <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
                <p>
                  Mahasiswa semester 6 D4 Teknologi Rekayasa Internet dengan
                  fokus pada pengembangan sistem berbasis AI, backend
                  engineering, dan integrasi machine learning dalam aplikasi web
                  serta IoT.
                </p>
                <p>
                  Berpengalaman membangun REST API menggunakan Python dan
                  FastAPI, mengelola pipeline pengolahan data, serta
                  mengimplementasikan model machine learning untuk mendukung
                  pengambilan keputusan berbasis data.
                </p>
                <p className="font-medium text-primary leading-relaxed">
                  Peraih 2nd Winner – Skilled Category (Smart and Precision
                  Farming) pada 6th Agricultural Innovation Technology
                  Competition (AITeC VI) 2024 melalui pengembangan Smart
                  Planting System.
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Education
              </h3>
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h4 className="font-bold text-lg text-primary mb-1.5">
                      {item.degree}
                    </h4>
                    <p className="text-foreground/80 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.year}
                    </p>
                    <p className="text-sm font-medium text-foreground/90">
                      {item.gpa}
                    </p>
                    {item.achievement && (
                      <p className="mt-3 text-sm text-accent font-medium leading-relaxed">
                        {item.achievement}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Kolom Kanan */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Area of Focus */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Area of Focus
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors duration-300"
                  >
                    <CheckCircle2
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-foreground/90 text-sm md:text-base">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-3 bg-primary/10 border border-primary/30 rounded-xl text-center font-medium text-primary hover:bg-primary/20 transition-all duration-300"
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

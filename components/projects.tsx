"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  features?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title:
      "Aplikasi Smart Farming – Sistem Tanam Cerdas Berbasis Data Lingkungan dan Tanah untuk Masa Depan Pangan Berkelanjutan",
    description:
      "Mobile & IoT-Based Smart Farming Application – 2nd Winner AITeC VI 2024 (Smart and Precision Farming)",

    problem:
      "Metode pertanian konvensional masih minim monitoring kondisi lahan secara real-time dan belum memanfaatkan sistem prediktif berbasis data. Hal ini menyebabkan penggunaan sumber daya yang kurang efisien serta risiko penurunan hasil panen. Dibutuhkan sistem terintegrasi untuk monitoring lingkungan dan pengambilan keputusan berbasis data.",

    solution:
      "Mengembangkan aplikasi mobile berbasis Flutter yang terintegrasi dengan sistem IoT untuk monitoring suhu, kelembaban, dan curah hujan secara real-time. Menerapkan model machine learning berbasis parameter NPK dan data lingkungan untuk prediksi kesesuaian tanaman. Sistem dilengkapi REST API (FastAPI), dashboard visualisasi time-series, serta integrasi data harga komoditas BPS untuk analisis pasar.",

    technologies: [
      "Flutter",
      "Python",
      "FastAPI",
      "RESTful API",
      "Machine Learning",
      "IoT Integration",
      "Firebase",
    ],

    features: [
      "Monitoring real-time suhu, kelembaban, curah hujan via IoT",
      "Prediksi kesesuaian tanaman berbasis ML (NPK + lingkungan)",
      "Integrasi API harga komoditas BPS",
      "Dashboard visualisasi time-series",
      "Notifikasi alert kondisi lahan kritis",
    ],

    image: "/project-1.jpg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
  },
  {
    id: 2,
    title: "SMARTILA - Water Quality Monitoring",
    description: "AI-Based Real-Time Water Quality Monitoring System",
    problem:
      "Deteksi kontaminasi air memerlukan tes laboratorium mahal dan waktu lama, tidak accessible untuk komunitas rural. Sistem monitoring real-time tidak tersedia untuk treatment facilities kecil.",
    solution:
      "Membangun backend FastAPI dengan MQTT protocol untuk real-time sensor data processing, InfluxDB untuk time-series storage, Random Forest classifier dengan SMOTE untuk imbalanced data, end-to-end pipeline dari ingestion hingga deployment dengan notifikasi real-time di mobile app.",
    technologies: [
      "Flutter",
      "Python",
      "FastAPI",
      "MQTT",
      "InfluxDB",
      "Scikit-Learn",
      "MySQL",
    ],
    features: [
      "Real-time water quality parameter monitoring",
      "ML-based contamination detection",
      "Sensor data collection via MQTT",
      "Time-series visualization dashboard",
      "Instant notification alerts",
    ],
    image: "/project-2.jpg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
  },
  {
    id: 3,
    title: "Precision Agriculture & Land Suitability",
    description: "Machine Learning Powered Precision Agriculture System",
    problem:
      "Petani kesulitan mengidentifikasi kesesuaian lahan untuk tanaman tertentu, memerlukan analisis parameter tanah dan lingkungan yang kompleks serta rekomendasi tanaman yang tepat.",
    solution:
      "Aplikasi Android Flutter untuk real-time land suitability analysis, implementasi ML models untuk klasifikasi kesesuaian lahan, preprocessing data dengan normalisasi & feature engineering, sistem rekomendasi Top-3 tanaman, dan integrasi GPS untuk ekstraksi koordinat & konversi MDPL.",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Machine Learning",
      "GPS Integration",
      "Data Analysis",
    ],
    features: [
      "Land suitability analysis with ML models",
      "Top-3 crop recommendations",
      "GPS coordinate extraction & altitude conversion",
      "Soil parameter analysis",
      "Environmental compatibility assessment",
    ],
    image: "/project-3.jpg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
  },
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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const features = project.features || [];

  const nextFeature = () => {
    setCurrentFeatureIndex((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-primary rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-foreground/80 font-semibold mb-6">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Problem
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Solution
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Features Carousel */}
              {features.length > 0 && (
                <div className="mb-8 border-t border-border pt-8">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Fitur Utama Aplikasi
                  </h3>
                  <div className="bg-primary/10 rounded-lg p-6 mb-4 min-h-32 flex items-center">
                    <motion.div
                      key={currentFeatureIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="w-full"
                    >
                      <p className="text-lg text-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary font-bold text-2xl flex-shrink-0">
                          •
                        </span>
                        <span>{features[currentFeatureIndex]}</span>
                      </p>
                    </motion.div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between gap-4">
                    <button
                      onClick={prevFeature}
                      className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} className="text-primary" />
                    </button>
                    <div className="flex gap-2">
                      {features.map((_, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setCurrentFeatureIndex(idx)}
                          animate={{
                            width: idx === currentFeatureIndex ? 32 : 8,
                          }}
                          className={`h-2 rounded-full transition-colors ${
                            idx === currentFeatureIndex
                              ? "bg-primary"
                              : "bg-primary/30"
                          }`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextFeature}
                      className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} className="text-primary" />
                    </button>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  <ExternalLink size={20} />
                  Demo
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <motion.div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold mb-2 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 font-semibold mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-foreground mb-2">
                          Problem
                        </p>
                        <p className="text-foreground/70 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">
                          Solution
                        </p>
                        <p className="text-foreground/70 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-foreground mb-3">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                        GitHub
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Details
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

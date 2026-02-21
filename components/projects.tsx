'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

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
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Planting System',
    description: 'Mobile & IoT-Based Smart Farming Application - Juara 2 AITECH 2024',
    problem: 'Traditional farming methods lack real-time monitoring dan sistem prediksi, leading to inefficient resource usage dan crop losses. Petani membutuhkan solusi terintegrasi untuk monitoring kondisi lahan real-time dan prediksi hasil panen.',
    solution: 'Mengembangkan aplikasi mobile berbasis Flutter untuk monitoring IoT real-time, mengintegrasikan sensor lingkungan (suhu, kelembaban, curah hujan), menerapkan ML untuk prediksi tanaman berbasis NPK, dan dashboard visualisasi time-series. Mengintegrasikan data harga komoditas BPS untuk analisis pasar.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'REST API', 'Machine Learning', 'IoT Sensors', 'Firebase'],
    image: '/project-1.jpg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
  },
  {
    id: 2,
    title: 'SMARTILA - Water Quality Monitoring',
    description: 'AI-Based Real-Time Water Quality Monitoring System',
    problem: 'Deteksi kontaminasi air memerlukan tes laboratorium mahal dan waktu lama, tidak accessible untuk komunitas rural. Sistem monitoring real-time tidak tersedia untuk treatment facilities kecil.',
    solution: 'Membangun backend FastAPI dengan MQTT protocol untuk real-time sensor data processing, InfluxDB untuk time-series storage, Random Forest classifier dengan SMOTE untuk imbalanced data, end-to-end pipeline dari ingestion hingga deployment dengan notifikasi real-time di mobile app.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'MQTT', 'InfluxDB', 'Scikit-Learn', 'MySQL'],
    image: '/project-2.jpg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
  },
  {
    id: 3,
    title: 'Precision Agriculture & Land Suitability',
    description: 'Machine Learning Powered Precision Agriculture System',
    problem: 'Petani kesulitan mengidentifikasi kesesuaian lahan untuk tanaman tertentu, memerlukan analisis parameter tanah dan lingkungan yang kompleks serta rekomendasi tanaman yang tepat.',
    solution: 'Aplikasi Android Flutter untuk real-time land suitability analysis, implementasi ML models untuk klasifikasi kesesuaian lahan, preprocessing data dengan normalisasi & feature engineering, sistem rekomendasi Top-3 tanaman, dan integrasi GPS untuk ekstraksi koordinat & konversi MDPL.',
    technologies: ['Flutter', 'Dart', 'Python', 'Machine Learning', 'GPS Integration', 'Data Analysis'],
    image: '/project-3.jpg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
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

export function Projects() {
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
              className={`bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <motion.div
                  className={index % 2 === 1 ? 'md:order-2' : ''}
                >
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
                <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold mb-2 text-primary">{project.title}</h3>
                    <p className="text-foreground/80 font-semibold mb-4">{project.description}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-foreground mb-2">Problem</p>
                        <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Solution</p>
                        <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-foreground mb-3">Technologies Used</p>
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

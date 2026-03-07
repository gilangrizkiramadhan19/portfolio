'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface AppScreen {
  title: string;
  description: string;
  image: string;
}

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
  screens?: AppScreen[];
  category: 'mobile-apps' | 'web-backend' | 'iot-ai';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Aplikasi Smart Farming – Sistem Tanam Cerdas Berbasis Data Lingkungan dan Tanah untuk Masa Depan Pangan Berkelanjutan',
    description: 'Mobile & IoT-Based Smart Farming Application – 2nd Winner AITeC VI 2024 (Smart and Precision Farming)',
    category: 'mobile-apps',
    problem: 'Metode pertanian konvensional masih minim monitoring kondisi lahan secara real-time dan belum memanfaatkan sistem prediktif berbasis data. Hal ini menyebabkan penggunaan sumber daya yang kurang efisien serta risiko penurunan hasil panen. Dibutuhkan sistem terintegrasi untuk monitoring lingkungan dan pengambilan keputusan berbasis data.',
    solution: 'Mengembangkan aplikasi mobile berbasis Flutter yang terintegrasi dengan sistem IoT untuk monitoring suhu, kelembaban, dan curah hujan secara real-time. Menerapkan model machine learning berbasis parameter NPK dan data lingkungan untuk prediksi kesesuaian tanaman. Sistem dilengkapi REST API (FastAPI), dashboard visualisasi time-series, serta integrasi data harga komoditas BPS untuk analisis pasar.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'RESTful API', 'Machine Learning', 'IoT Integration', 'Firebase'],
    screens: [
      {
        title: 'Authentication & Login',
        description: 'Sistem otentikasi aman dengan login berbasis email/password dan biometric. User dapat mendaftar akun baru dengan verifikasi email untuk keamanan maksimal. Interface yang intuitif memudahkan petani untuk mengakses aplikasi.',
        image: '/project-1.jpg',
      },
      {
        title: 'Real-Time Monitoring Dashboard',
        description: 'Dashboard menampilkan data real-time dari IoT sensors: suhu lahan, kelembaban tanah, dan curah hujan. Visualisasi grafik time-series untuk tracking kondisi lahan sepanjang hari. Alert otomatis muncul jika kondisi lahan mencapai threshold kritis.',
        image: '/project-1.jpg',
      },
      {
        title: 'Crop Suitability Prediction',
        description: 'Fitur prediksi menggunakan ML models untuk merekomendasikan tanaman yang cocok berdasarkan parameter NPK dan kondisi lingkungan. User input parameter tanah (N, P, K) dan sistem memberikan Top-3 rekomendasi tanaman dengan score kesesuaian. Integrasi data historis untuk meningkatkan akurasi prediksi.',
        image: '/project-1.jpg',
      },
      {
        title: 'Market Price Analysis',
        description: 'Integrasi API harga komoditas dari BPS menampilkan trend harga tanaman real-time. Petani dapat membuat keputusan panen berdasarkan analisis pasar yang akurat. Grafik price trends membantu planning penjualan dan strategi pertanian.',
        image: '/project-1.jpg',
      },
      {
        title: 'Alert & Notification System',
        description: 'Sistem notifikasi push untuk kondisi lahan kritis seperti kelembaban terlalu tinggi/rendah atau suhu ekstrem. User dapat mengatur threshold alert sesuai kebutuhan tanaman. Notifikasi real-time memastikan petani dapat segera mengambil tindakan preventif.',
        image: '/project-1.jpg',
      },
    ],
    image: '/project-1.jpg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
  },
  {
    id: 2,
    title: 'SMARTILA - Water Quality Monitoring',
    description: 'AI-Based Real-Time Water Quality Monitoring System',
    category: 'iot-ai',
    problem: 'Pemantauan kualitas air secara konvensional masih bergantung pada pengujian laboratorium yang memerlukan biaya tinggi dan waktu analisis yang lama. Hal ini membatasi akses komunitas skala kecil dan fasilitas pengolahan air sederhana terhadap sistem deteksi dini kontaminasi. Ketiadaan monitoring real-time meningkatkan risiko keterlambatan respons terhadap kondisi air yang kritis.',
    solution: 'Mengembangkan sistem monitoring kualitas air berbasis AI dan IoT dengan arsitektur end-to-end. Backend dibangun menggunakan FastAPI dengan protokol MQTT untuk streaming data sensor secara real-time. Data time-series dikelola menggunakan InfluxDB untuk analisis historis dan tren. Model Random Forest dikembangkan dengan teknik SMOTE untuk menangani imbalanced data dalam klasifikasi status air (Aman, Peringatan, Kritis). Pipeline mencakup data ingestion, preprocessing, training, evaluation, hingga deployment model dengan notifikasi real-time pada aplikasi mobile.',
    technologies: ['Flutter', 'Python', 'FastAPI', 'MQTT', 'InfluxDB', 'Scikit-Learn', 'MySQL'],
    screens: [
      {
        title: 'Authentication & Login',
        description: 'Sistem login aman dengan email dan password untuk akses aplikasi SMARTILA. Interface yang clean dan user-friendly untuk kemudahan user. Support untuk create account baru dan forgot password recovery.',
        image: '/smartila-login.jpeg',
      },
      {
        title: 'Water Quality Dashboard',
        description: 'Menampilkan parameter kualitas air real-time dari multiple sensors: pH, dan dissolved oxygen. Visualisasi circular indicators untuk setiap parameter dengan status color-coded (Bahaya, Normal, Optimal). Monitoring comprehensive untuk kondisi air secara real-time.',
        image: '/smartila-dashboard.jpeg',
      },
      {
        title: 'Contamination Detection & Alerts',
        description: 'ML-based model mengidentifikasi kontaminasi air dan kondisi berbahaya dengan alert level tinggi. User mendapat rekomendasi corrective measures otomatis. Sistem AI memberikan insights tentang tingkat kepercayaan prediksi dan tindakan yang diperlukan.',
        image: '/smartila-prediksi.jpeg',
      },
      {
        title: 'Data Visualization & Grafik',
        description: 'Dashboard dengan grafik time-series untuk analisis trend 30 data terakhir. Visualisasi multiple parameters secara bersamaan untuk melihat korelasi. Custom date range selection dan export data untuk reporting & analysis lebih lanjut.',
        image: '/smartila-grafik.jpeg',
      },
    ],
    image: '/smartila-login.jpeg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
  },
  {
    id: 3,
    title: 'Precision Agriculture & Land Suitability',
    description: 'Sistem Pertanian Presisi Berbasis Machine Learning dengan Sensor Tanah 7-in-1 Real-time',
    category: 'mobile-apps',
    problem: 'Keputusan pemilihan komoditas oleh petani sering kali tidak mempertimbangkan kesesuaian karakteristik lahan. Berdasarkan penelitian Neswati et al. (2023), hanya sekitar 21% petani yang mempertimbangkan faktor kesesuaian lahan, sementara 79% lainnya masih dipengaruhi faktor non-teknis seperti kebiasaan, keterbatasan modal, dan tren pasar jangka pendek. Kondisi ini berdampak pada rendahnya produktivitas serta meningkatnya risiko kegagalan panen. Diperlukan sistem berbasis data yang mampu memberikan rekomendasi tanaman secara objektif dan terukur berdasarkan parameter tanah dan lingkungan.',
    solution: 'Mengembangkan aplikasi Android berbasis Flutter yang mengintegrasikan data sensor tanah 7 parameter secara real-time (Nitrogen, Phosphorus, Kalium, pH tanah, suhu tanah, kelembaban, dan Electrical Conductivity). Sistem dilengkapi integrasi GPS untuk identifikasi lokasi serta model machine learning untuk analisis kesesuaian lahan dan rekomendasi Top-3 tanaman optimal berdasarkan kondisi aktual tanah. Pipeline mencakup akuisisi data sensor, preprocessing, hingga inferensi model secara otomatis.',
    technologies: ['Flutter', 'Dart', 'Python', 'Machine Learning', 'IoT Sensors', 'GPS Integration', 'Data Analysis'],
    screens: [
      {
        title: 'Halaman Login',
        description: 'Antarmuka autentikasi pengguna yang sederhana dan responsif dengan sistem validasi input serta keamanan berbasis kredensial untuk mengakses fitur monitoring dan analisis pertanian presisi.',
        image: '/login 7in1.jpeg',
      },
      {
        title: 'Halaman Registrasi',
        description: 'Form pendaftaran akun baru dengan validasi data (username, email, password, dan konfirmasi password) untuk memastikan keamanan serta integritas data pengguna sebelum mengakses sistem.',
        image: '/register7in1.jpeg',
      },
      {
        title: 'Dashboard Sensor Real-time',
        description: 'Dashboard monitoring yang menampilkan 7 parameter utama tanah secara real-time: Nitrogen, Phosphorus, Kalium, pH Tanah, Suhu Tanah, Kelembaban Tanah, dan Electrical Conductivity (EC). Data divisualisasikan sebagai dasar analisis presisi dan rekomendasi tanaman berbasis Machine Learning.',
        image: '/Dashboard 7 in 1.jpeg',
      },
      {
        title: 'Informasi Lokasi & Rekomendasi Tanaman',
        description: 'Sistem memperoleh koordinat lahan secara otomatis melalui sensor GPS perangkat untuk memastikan akurasi lokasi. Data geospasial ini dikombinasikan dengan parameter tanah real-time dan diproses oleh model Machine Learning untuk menghasilkan rekomendasi Top-3 tanaman paling sesuai beserta probabilitas prediksinya.',
        image: '/croppred.jpeg',
      },
    ],
    image: '/Dashboard 7 in 1.jpeg',
    github: 'https://github.com/gilangrizkiramadhan19',
    demo: '#projects',
  },
];

const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'web-backend', label: 'Web & Backend' },
  { id: 'iot-ai', label: 'IoT/AI' },
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
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const screens = project.screens || [];

  const nextScreen = () => {
    setCurrentScreenIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const prevScreen = () => {
    setCurrentScreenIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  const currentScreen = screens[currentScreenIndex];

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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <div className="bg-background border border-border rounded-xl max-w-4xl w-full my-8">
          <div className="flex justify-between items-center p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Masalah</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Solusi</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Teknologi</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/20 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {screens.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">Screenshots</h3>
                <div className="space-y-4">
                  <div className="relative aspect-video bg-background/50 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{currentScreen.title}</h4>
                    <p className="text-foreground/70 text-sm">{currentScreen.description}</p>
                  </div>

                  {screens.length > 1 && (
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={prevScreen}
                        className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="text-sm text-foreground/70">
                        {currentScreenIndex + 1} / {screens.length}
                      </span>
                      <button
                        onClick={nextScreen}
                        className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Github size={20} />
                Github
              </a>
              {project.demo && project.demo !== '#projects' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
                >
                  <ExternalLink size={20} />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
          Proyek & Portofolio
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Koleksi proyek terbaru dari Mobile Apps, Web & Backend, hingga IoT dan AI Solutions
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary text-background'
                : 'bg-background/50 border border-border text-foreground/70 hover:text-primary'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-background/50 hover:border-primary transition-all duration-300 h-full flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm line-clamp-2">{project.description}</p>
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/20 text-primary text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-accent/20 text-primary text-xs rounded font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
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

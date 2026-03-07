"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";

// Ambil basePath dari env (sudah didefinisikan di next.config.mjs)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  category: "mobile" | "web" | "design" | "other";
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
    screens: [
      {
        title: "Authentication & Login",
        description:
          "Sistem otentikasi aman dengan login berbasis email/password dan biometric. User dapat mendaftar akun baru dengan verifikasi email untuk keamanan maksimal. Interface yang intuitif memudahkan petani untuk mengakses aplikasi.",
        image: "/loginsicetas.jpeg",
      },
      {
        title: "Dashboard Monitoring & Integrasi OpenWeather API",
        description:
          "Sistem Tanam Cerdas ini menyajikan pemantauan kondisi lingkungan secara real-time di wilayah Bandar Lampung dengan mengintegrasikan data dari OpenWeather Dashboard. Antarmuka aplikasi menampilkan parameter cuaca krusial seperti suhu udara (21.7°C), kelembapan (68%), kecepatan angin, hingga curah hujan dalam satu kartu informasi yang intuitif. Dashboard ini juga dilengkapi dengan fitur Prakiraan 6 Jam ke Depan untuk membantu mitigasi risiko cuaca mendadak, serta Sistem Pendukung Keputusan (DSS) yang memberikan indikator visual 'Aman untuk Tanam' berdasarkan validasi ambang batas (threshold) data cuaca terkini. Melalui navigasi yang terintegrasi, pengguna dapat mengakses analisis prediktif dan rekomendasi komoditas, memastikan setiap langkah budidaya didukung oleh data meteorologi yang akurat dan terpercaya.",
        image: "/dashboardsicetas.jpeg",
      },
      {
        title: "Fitur Prediksi Tanaman Berbasis Data",
        description:
          "Fitur Prediksi Tanaman ini memungkinkan pengguna untuk mendapatkan rekomendasi komoditas yang paling sesuai dengan kondisi lahan secara instan. Alur kerjanya dimulai dengan menginputkan data tanah dan iklim spesifik, yang meliputi kadar Nitrogen (N), Phosphorus (P), Potassium (K), Suhu, Kelembaban, pH Tanah, dan Curah Hujan. Sistem ini memberikan fleksibilitas dengan mengizinkan pengisian data manual atau pengambilan data langsung dari sensor IoT melalui tombol 'Ambil Data Blynk'. Setelah data terisi, pengguna dapat menekan tombol 'Prediksi Tanaman', yang akan memproses informasi tersebut dan langsung menampilkan jenis tanaman yang paling direkomendasikan, seperti contoh hasil prediksi yang menunjukkan tanaman 'papaya' untuk set data yang dimasukkan.",
        image: "/prediksi.png",
      },
      {
        title: "Market Price Analysis",
        description:
          "Sebagai pelengkap fungsionalitas bagi pengguna, sistem juga menyediakan fitur Harga Komoditas yang menyajikan data nilai pasar riil di wilayah tertentu, seperti Lampung, sehingga petani tidak hanya mendapatkan panduan teknis mengenai tanaman yang cocok, tetapi juga dapat memantau informasi harga jual terkini untuk mendukung pengambilan keputusan ekonomi yang lebih strategis",
        image: "/komoditas.jpeg",
      },
      // {
      //   title: "Alert & Notification System",
      //   description:
      //     "Sistem notifikasi push untuk kondisi lahan kritis seperti kelembaban terlalu tinggi/rendah atau suhu ekstrem. User dapat mengatur threshold alert sesuai kebutuhan tanaman. Notifikasi real-time memastikan petani dapat segera mengambil tindakan preventif.",
      //   image: "/project-1.jpg",
      // },
    ],
    image: "/project-1.jpg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "mobile",
  },
  {
    id: 2,
    title: "SMARTILA - Water Quality Monitoring",
    description: "AI-Based Real-Time Water Quality Monitoring System",
    problem:
      "Pemantauan kualitas air secara konvensional masih bergantung pada pengujian laboratorium yang memerlukan biaya tinggi dan waktu analisis yang lama. Hal ini membatasi akses komunitas skala kecil dan fasilitas pengolahan air sederhana terhadap sistem deteksi dini kontaminasi. Ketiadaan monitoring real-time meningkatkan risiko keterlambatan respons terhadap kondisi air yang kritis.",
    solution:
      "Mengembangkan sistem monitoring kualitas air berbasis AI dan IoT dengan arsitektur end-to-end. Backend dibangun menggunakan FastAPI dengan protokol MQTT untuk streaming data sensor secara real-time. Data time-series dikelola menggunakan InfluxDB untuk analisis historis dan tren. Model Random Forest dikembangkan dengan teknik SMOTE untuk menangani imbalanced data dalam klasifikasi status air (Aman, Peringatan, Kritis). Pipeline mencakup data ingestion, preprocessing, training, evaluation, hingga deployment model dengan notifikasi real-time pada aplikasi mobile.",
    technologies: [
      "Flutter",
      "Python",
      "FastAPI",
      "MQTT",
      "InfluxDB",
      "Scikit-Learn",
      "MySQL",
    ],
    screens: [
      {
        title: "Authentication & Login",
        description:
          "Sistem login aman dengan email dan password untuk akses aplikasi SMARTILA. Interface yang clean dan user-friendly untuk kemudahan user. Support untuk create account baru dan forgot password recovery.",
        image: "/smartila-login.jpeg",
      },
      {
        title: "Water Quality Dashboard",
        description:
          "Menampilkan parameter kualitas air real-time dari multiple sensors: pH, dan dissolved oxygen. Visualisasi circular indicators untuk setiap parameter dengan status color-coded (Bahaya, Normal, Optimal). Monitoring comprehensive untuk kondisi air secara real-time.",
        image: "/smartila-dashboard.jpeg",
      },
      {
        title: "Contamination Detection & Alerts",
        description:
          "ML-based model mengidentifikasi kontaminasi air dan kondisi berbahaya dengan alert level tinggi. User mendapat rekomendasi corrective measures otomatis. Sistem AI memberikan insights tentang tingkat kepercayaan prediksi dan tindakan yang diperlukan.",
        image: "/smartila-prediksi.jpeg",
      },
      {
        title: "Data Visualization & Grafik",
        description:
          "Dashboard dengan grafik time-series untuk analisis trend 30 data terakhir. Visualisasi multiple parameters secara bersamaan untuk melihat korelasi. Custom date range selection dan export data untuk reporting & analysis lebih lanjut.",
        image: "/smartila-grafik.jpeg",
      },
    ],
    image: "/smartila-login.jpeg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "mobile",
  },
  {
    id: 3,
    title: "Precision Agriculture & Land Suitability",
    description:
      "Sistem Pertanian Presisi Berbasis Machine Learning dengan Sensor Tanah 7-in-1 Real-time",
    problem:
      "Keputusan pemilihan komoditas oleh petani sering kali tidak mempertimbangkan kesesuaian karakteristik lahan. Berdasarkan penelitian Neswati et al. (2023), hanya sekitar 21% petani yang mempertimbangkan faktor kesesuaian lahan, sementara 79% lainnya masih dipengaruhi faktor non-teknis seperti kebiasaan, keterbatasan modal, dan tren pasar jangka pendek. Kondisi ini berdampak pada rendahnya produktivitas serta meningkatnya risiko kegagalan panen. Diperlukan sistem berbasis data yang mampu memberikan rekomendasi tanaman secara objektif dan terukur berdasarkan parameter tanah dan lingkungan.",
    solution:
      "Mengembangkan aplikasi Android berbasis Flutter yang mengintegrasikan data sensor tanah 7 parameter secara real-time (Nitrogen, Phosphorus, Kalium, pH tanah, suhu tanah, kelembaban, dan Electrical Conductivity). Sistem dilengkapi integrasi GPS untuk identifikasi lokasi serta model machine learning untuk analisis kesesuaian lahan dan rekomendasi Top-3 tanaman optimal berdasarkan kondisi aktual tanah. Pipeline mencakup akuisisi data sensor, preprocessing, hingga inferensi model secara otomatis.",
    technologies: [
      "Flutter",
      "Dart",
      "Python",
      "Machine Learning",
      "IoT Sensors",
      "GPS Integration",
      "Data Analysis",
    ],
    screens: [
      {
        title: "Halaman Login",
        description:
          "Antarmuka autentikasi pengguna yang sederhana dan responsif dengan sistem validasi input serta keamanan berbasis kredensial untuk mengakses fitur monitoring dan analisis pertanian presisi.",
        image: "/login 7in1.jpeg",
      },
      {
        title: "Halaman Registrasi",
        description:
          "Form pendaftaran akun baru dengan validasi data (username, email, password, dan konfirmasi password) untuk memastikan keamanan serta integritas data pengguna sebelum mengakses sistem.",
        image: "/register7in1.jpeg",
      },
      {
        title: "Dashboard Sensor Real-time",
        description:
          "Dashboard monitoring yang menampilkan 7 parameter utama tanah secara real-time: Nitrogen, Phosphorus, Kalium, pH Tanah, Suhu Tanah, Kelembaban Tanah, dan Electrical Conductivity (EC). Data divisualisasikan sebagai dasar analisis presisi dan rekomendasi tanaman berbasis Machine Learning.",
        image: "/Dashboard 7 in 1.jpeg",
      },
      {
        title: "Informasi Lokasi & Rekomendasi Tanaman",
        description:
          "Sistem memperoleh koordinat lahan secara otomatis melalui sensor GPS perangkat untuk memastikan akurasi lokasi. Data geospasial ini dikombinasikan dengan parameter tanah real-time dan diproses oleh model Machine Learning untuk menghasilkan rekomendasi Top-3 tanaman paling sesuai beserta probabilitas prediksinya.",
        image: "/croppred.jpeg",
      },
    ],
    image: "/Dashboard 7 in 1.jpeg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "mobile",
  },
];

const filterCategories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
  { id: "other", label: "Other" },
] as const;

type FilterCategory = typeof filterCategories[number]["id"];

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
    setCurrentScreenIndex((prev) =>
      prev === screens.length - 1 ? 0 : prev + 1,
    );
  };

  const prevScreen = () => {
    setCurrentScreenIndex((prev) =>
      prev === 0 ? screens.length - 1 : prev - 1,
    );
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-primary rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="border-b border-border p-8 pb-6">
              <h2 className="text-3xl font-bold text-primary mb-2">
                {project.title}
              </h2>
              <p className="text-foreground/80 font-semibold mb-6">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    PROBLEM
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    SOLUTION
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Screens Carousel */}
            {screens.length > 0 && currentScreen && (
              <div className="p-8">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  App Features ({currentScreenIndex + 1} of {screens.length})
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Mockup Image */}
                  <motion.div
                    key={currentScreenIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center md:order-1"
                  >
                    <div className="relative w-48 h-72 md:w-56 md:h-96 overflow-hidden rounded-lg bg-muted flex-shrink-0">
                      <Image
                        src={`${basePath}${currentScreen.image}`} // ← FIX utama di sini
                        alt={currentScreen.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Screen Description */}
                  <motion.div
                    key={`desc-${currentScreenIndex}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center md:order-2"
                  >
                    <h4 className="text-xl md:text-2xl font-bold text-primary mb-4">
                      {currentScreen.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                      {currentScreen.description}
                    </p>
                  </motion.div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-border">
                  <button
                    onClick={prevScreen}
                    className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                  >
                    <ChevronLeft size={24} className="text-primary" />
                  </button>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {screens.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentScreenIndex(idx)}
                        animate={{
                          width: idx === currentScreenIndex ? 32 : 8,
                        }}
                        className={`h-2 rounded-full transition-colors ${
                          idx === currentScreenIndex
                            ? "bg-primary"
                            : "bg-primary/30"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextScreen}
                    className="p-2 hover:bg-primary/20 rounded-full transition-colors"
                  >
                    <ChevronRight size={24} className="text-primary" />
                  </button>
                </div>

                {/* Technologies */}
                <div className="mb-8 pt-6">
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
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground/70 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image – tambah basePath */}
                <motion.div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                    <Image
                      src={`${basePath}${project.image}`} // ← FIX utama di sini
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
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-foreground/60 text-lg">
                Belum ada project untuk kategori ini.
              </p>
            </motion.div>
          )}
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

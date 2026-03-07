"use client";

import { Project } from "./types";

export const mobileProjects: Project[] = [
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

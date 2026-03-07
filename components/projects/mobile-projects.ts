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
          "Sistem Tanam Cerdas ini menyajikan pemantauan kondisi lingkungan secara real-time di wilayah Bandar Lampung dengan mengintegrasikan data dari OpenWeather Dashboard. Antarmuka aplikasi menampilkan parameter cuaca krusial seperti suhu udara (21.7°C), kelembapan (68%), kecepatan angin, hingga curah hujan dalam satu kartu informasi yang intuitif.",
        image: "/dashboardsicetas.jpeg",
      },
      {
        title: "Fitur Prediksi Tanaman Berbasis Data",
        description:
          "Fitur Prediksi Tanaman ini memungkinkan pengguna untuk mendapatkan rekomendasi komoditas yang paling sesuai dengan kondisi lahan secara instan. Alur kerjanya dimulai dengan menginputkan data tanah dan iklim spesifik, yang meliputi kadar Nitrogen (N), Phosphorus (P), Potassium (K), Suhu, Kelembaban, pH Tanah, dan Curah Hujan.",
        image: "/prediksi.png",
      },
      {
        title: "Market Price Analysis",
        description:
          "Sebagai pelengkap fungsionalitas bagi pengguna, sistem juga menyediakan fitur Harga Komoditas yang menyajikan data nilai pasar riil di wilayah tertentu, seperti Lampung, sehingga petani tidak hanya mendapatkan panduan teknis mengenai tanaman yang cocok.",
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
      "Pemantauan kualitas air secara konvensional masih bergantung pada pengujian laboratorium yang memerlukan biaya tinggi dan waktu analisis yang lama. Hal ini membatasi akses komunitas skala kecil dan fasilitas pengolahan air sederhana terhadap sistem deteksi dini kontaminasi.",
    solution:
      "Mengembangkan sistem monitoring kualitas air berbasis AI dan IoT dengan arsitektur end-to-end. Backend dibangun menggunakan FastAPI dengan protokol MQTT untuk streaming data sensor secara real-time. Data time-series dikelola menggunakan InfluxDB untuk analisis historis dan tren.",
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
          "Sistem login aman dengan email dan password untuk akses aplikasi SMARTILA. Interface yang clean dan user-friendly untuk kemudahan user.",
        image: "/smartila-login.jpeg",
      },
      {
        title: "Water Quality Dashboard",
        description:
          "Menampilkan parameter kualitas air real-time dari multiple sensors: pH, dan dissolved oxygen. Visualisasi circular indicators untuk setiap parameter dengan status color-coded.",
        image: "/smartila-dashboard.jpeg",
      },
      {
        title: "Contamination Detection & Alerts",
        description:
          "ML-based model mengidentifikasi kontaminasi air dan kondisi berbahaya dengan alert level tinggi. User mendapat rekomendasi corrective measures otomatis.",
        image: "/smartila-prediksi.jpeg",
      },
      {
        title: "Data Visualization & Grafik",
        description:
          "Dashboard dengan grafik time-series untuk analisis trend 30 data terakhir. Visualisasi multiple parameters secara bersamaan untuk melihat korelasi.",
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
      "Keputusan pemilihan komoditas oleh petani sering kali tidak mempertimbangkan kesesuaian karakteristik lahan. Berdasarkan penelitian Neswati et al. (2023), hanya sekitar 21% petani yang mempertimbangkan faktor kesesuaian lahan.",
    solution:
      "Mengembangkan aplikasi Android berbasis Flutter yang mengintegrasikan data sensor tanah 7 parameter secara real-time (Nitrogen, Phosphorus, Kalium, pH tanah, suhu tanah, kelembaban, dan Electrical Conductivity).",
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
          "Antarmuka autentikasi pengguna yang sederhana dan responsif dengan sistem validasi input serta keamanan berbasis kredensial.",
        image: "/login 7in1.jpeg",
      },
      {
        title: "Halaman Registrasi",
        description:
          "Form pendaftaran akun baru dengan validasi data (username, email, password, dan konfirmasi password).",
        image: "/register7in1.jpeg",
      },
      {
        title: "Dashboard Sensor Real-time",
        description:
          "Dashboard monitoring yang menampilkan 7 parameter utama tanah secara real-time: Nitrogen, Phosphorus, Kalium, pH Tanah, Suhu Tanah, Kelembaban Tanah, dan Electrical Conductivity (EC).",
        image: "/Dashboard 7 in 1.jpeg",
      },
      {
        title: "Informasi Lokasi & Rekomendasi Tanaman",
        description:
          "Sistem memperoleh koordinat lahan secara otomatis melalui sensor GPS perangkat untuk memastikan akurasi lokasi. Data geospasial ini dikombinasikan dengan parameter tanah real-time.",
        image: "/croppred.jpeg",
      },
    ],
    image: "/Dashboard 7 in 1.jpeg",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "mobile",
  },
];

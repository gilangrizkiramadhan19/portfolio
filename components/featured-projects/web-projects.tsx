"use client";

import { Project } from "./types";

export const webProjects: Project[] = [
  {
    id: 4,
    title: "Aquaguards - Fish Pond Monitoring Dashboard",
    description: "Real-time Web Dashboard for Tilapia Fish Pond Water Quality Monitoring System",
    problem:
      "Pemantauan kualitas air kolam ikan secara manual memerlukan waktu dan tenaga yang besar. Petani ikan kesulitan memantau parameter kritis seperti suhu, pH, dan oksigen terlarut secara real-time, yang dapat menyebabkan kematian massal ikan jika tidak ditangani tepat waktu.",
    solution:
      "Mengembangkan dashboard web real-time yang terintegrasi dengan sensor IoT untuk monitoring parameter kualitas air secara otomatis. Dashboard menampilkan status sistem, grafik tren 24 jam, dan alert system untuk kondisi abnormal. Dilengkapi dengan fitur refresh data dan visualisasi yang intuitif untuk memudahkan petani dalam mengambil keputusan.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "IoT Integration",
      "Real-time Data",
      "Chart.js",
    ],
    screens: [
      {
        title: "Dashboard Overview",
        description:
          "Tampilan utama dashboard menampilkan status sistem dan 4 parameter utama: Suhu Air (26.2°C), pH Air (6.9), Oksigen Terlarut (5.8 mg/L), dan Kekeruhan (2.9 NTU). Setiap parameter dilengkapi dengan indikator status Normal/Warning/Danger.",
        image: "/aquaguards-dashboard.png",
      },
    ],
    image: "/aquaguards-dashboard.png",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "web",
  },
];

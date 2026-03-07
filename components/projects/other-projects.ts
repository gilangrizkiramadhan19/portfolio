import { Project } from "./types";

export const otherProjects: Project[] = [
  {
    id: 6,
    title: "Machine Learning Model - Crop Prediction",
    description: "Predictive ML Model for Optimal Crop Recommendation Based on Soil & Climate Data",
    problem:
      "Petani sering kesulitan menentukan jenis tanaman yang optimal untuk ditanam berdasarkan kondisi lahan mereka, mengakibatkan produktivitas yang tidak maksimal dan kerugian ekonomi.",
    solution:
      "Mengembangkan model machine learning menggunakan algoritma Random Forest dan ensemble methods untuk memprediksi jenis tanaman optimal berdasarkan 7 parameter tanah (N, P, K, pH, suhu, kelembaban, curah hujan). Model dilatih dengan dataset dari berbagai wilayah pertanian Indonesia.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Random Forest",
      "SMOTE",
      "Jupyter Notebook",
    ],
    image: "/prediksi.png",
    github: "https://github.com/gilangrizkiramadhan19",
    demo: "#projects",
    category: "other",
  },
];

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },
  {
    category: "Backend & API",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    ],
  },
  {
    category: "AI & Data Science",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Technical <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-foreground/60 text-lg">
            My preferred weapons of choice.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-lg"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                {category.category}
              </h3>

              {/* Skills Icons Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center justify-center p-4 bg-background rounded-xl hover:shadow-md transition-all cursor-pointer"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Skill Names */}
              <p className="text-center text-foreground/60 text-sm leading-relaxed">
                {category.skills.map(s => s.name).join(", ")}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Additional Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Postman",
              "GitHub",
              "VS Code",
              "Android Studio",
              "PyCharm",
              "Google Colab",
              "Laragon",
              "XAMPP",
              "Mikrotik",
              "Ubuntu Server",
              "AWS Academy",
              "InfluxDB",
            ].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-background border border-border rounded-lg text-foreground/70 font-medium hover:border-primary/50 hover:text-primary transition-all"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

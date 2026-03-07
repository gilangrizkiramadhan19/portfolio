"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Server, 
  Brain, 
  Database,
  Code2,
  Layers,
  Cpu,
  Globe
} from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ElementType;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Android Development", "Mobile UI/UX"],
  },
  {
    category: "Backend & API",
    icon: Server,
    skills: ["Python", "FastAPI", "REST API", "Flask & Django"],
  },
  {
    category: "AI & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "Scikit-learn", "Pandas & Data Analysis", "TensorFlow"],
  },
  {
    category: "Database & DevOps",
    icon: Database,
    skills: ["PostgreSQL & MySQL", "InfluxDB (Time-series)", "Firebase", "Git & GitHub"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-foreground/80 font-medium hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">
            Additional Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Postman",
              "GitHub",
              "VS Code",
              "Android Studio",
              "PyCharm",
              "Google Colab",
              "Laragon",
              "XAMPP",
              "Git",
              "Mikrotik",
              "Ubuntu Server",
              "AWS Academy",
            ].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "#58a6ff" }}
                className="px-4 py-2 bg-background border border-primary/30 rounded-lg text-foreground hover:text-primary-foreground transition-all cursor-default"
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

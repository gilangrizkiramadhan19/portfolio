'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Mobile Development',
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'Dart', level: 90 },
      { name: 'Android Development', level: 85 },
      { name: 'Mobile UI/UX', level: 85 },
    ],
  },
  {
    category: 'Backend & API',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 90 },
      { name: 'REST API', level: 90 },
      { name: 'Flask & Django', level: 85 },
    ],
  },
  {
    category: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning', level: 88 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Pandas & Data Analysis', level: 85 },
      { name: 'TensorFlow', level: 80 },
    ],
  },
  {
    category: 'Database & DevOps',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 88 },
      { name: 'InfluxDB (Time-series)', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'Git & GitHub', level: 90 },
    ],
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
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-8 text-primary">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-foreground">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">Additional Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {['Postman', 'GitHub', 'VS Code', 'Android Studio', 'PyCharm', 'Google Colab', 'Laragon', 'XAMPP', 'Git', 'Mikrotik', 'Ubuntu Server', 'AWS Academy'].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: '#58a6ff' }}
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { webProjects } from "./web-projects";
import { mobileProjects } from "./mobile-projects";
import { designProjects } from "./design-projects";
import { ProjectModal } from "./project-modal";
import { Project } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const filterCategories = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "design", label: "Design" },
] as const;

type FilterCategory = typeof filterCategories[number]["id"];

const allProjects: Project[] = [
  ...webProjects,
  ...mobileProjects,
  ...designProjects,
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

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

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
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
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
                  {/* Image */}
                  <motion.div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                      <Image
                        src={`${basePath}${project.image}`}
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

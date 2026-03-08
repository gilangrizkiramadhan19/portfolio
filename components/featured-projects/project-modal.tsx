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
import { Project } from "./types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function ProjectModal({
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <div className="bg-background border border-border rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-primary rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="border-b border-border p-8 md:p-10 pb-8 md:pb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {project.title}
              </h2>
              <p className="text-lg md:text-xl text-foreground/80 font-semibold mb-8">
                {project.description}
              </p>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
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
              <div className="p-8 md:p-10">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  App Features ({currentScreenIndex + 1} of {screens.length})
                </h3>

                <div className="grid md:grid-cols-2 gap-12 mb-10">
                  {/* Mockup Image */}
                  <motion.div
                    key={currentScreenIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center md:order-1"
                  >
                    <div className="relative w-48 h-72 md:w-72 md:h-[540px] overflow-hidden rounded-lg bg-muted flex-shrink-0">
                      <Image
                        src={`${basePath}${currentScreen.image}`}
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

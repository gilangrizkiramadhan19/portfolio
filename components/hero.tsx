"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { basePath } from "@/lib/utils";

const marqueeItems = [
  "MACHINE LEARNING",
  "WEB DEVELOPMENT",
  "MOBILE APPS",
  "SYSTEM DESIGN",
  "DATA SCIENCE",
  "IOT INTEGRATION",
  "BACKEND ENGINEERING",
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24">
        {/* Large Circular Background with Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
            {/* Circular Background */}
            <div className="absolute inset-0 rounded-full bg-muted/50" />

            {/* Photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[420px] overflow-hidden">
                <Image
                  src={`${basePath}/avatar.jpg`}
                  alt="Gilang Rizki Ramadhan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight"
          >
            <span className="text-foreground">Engineering</span>{" "}
            <span className="text-foreground/40">Digital</span>
            <br />
            <span className="text-foreground/40">Experiences</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 space-y-2"
          >
            <p className="text-foreground/60 text-lg md:text-xl">
              Creating modern digital solutions.
            </p>
            <p className="text-foreground font-semibold text-lg md:text-xl">
              Smart, scalable, and impactful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 text-foreground font-semibold hover:text-primary transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative py-6 border-t border-border overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
            ...marqueeItems,
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-sm font-semibold tracking-widest text-foreground/70">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

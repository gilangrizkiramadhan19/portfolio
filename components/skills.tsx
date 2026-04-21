"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  label: string;
  color: string;
  borderColor: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Mobile Development",
    label: "01",
    color: "from-sky-500/10 to-blue-600/5",
    borderColor: "hover:border-sky-500/40",
    skills: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Dart",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    category: "Backend & API",
    label: "02",
    color: "from-violet-500/10 to-purple-600/5",
    borderColor: "hover:border-violet-500/40",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
    ],
  },
  {
    category: "AI & Data Science",
    label: "03",
    color: "from-emerald-500/10 to-teal-600/5",
    borderColor: "hover:border-emerald-500/40",
    skills: [
      {
        name: "TensorFlow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Scikit-learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
    ],
  },
  {
    category: "Database & Tools",
    label: "04",
    color: "from-amber-500/10 to-orange-600/5",
    borderColor: "hover:border-amber-500/40",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
];

const tools = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "PyCharm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
  },
  {
    name: "Google Colab",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  },
  {
    name: "Laragon",
    icon: "https://images.icon-icons.com/3912/SVG/512/laragon_logo_icon_247873.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Ubuntu Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
  },
  {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      variants={cardVariants}
      className={`
        group relative rounded-2xl border border-white/[0.06]
        bg-gradient-to-br ${category.color}
        backdrop-blur-sm overflow-hidden
        transition-all duration-500 ease-out
        ${category.borderColor}
        hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]
        hover:-translate-y-1
      `}
    >
      {/* Subtle inner highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

      {/* Top bar with number + category */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/[0.06]">
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/50">
          {category.category}
        </h3>
        <span className="text-[11px] font-mono text-foreground/20 font-medium">
          {category.label}
        </span>
      </div>

      {/* Icon grid */}
      <div className="grid grid-cols-2 gap-3 p-5">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              flex flex-col items-center justify-center gap-2.5
              py-4 px-3 rounded-xl
              bg-white/[0.03] border border-white/[0.05]
              hover:bg-white/[0.07] hover:border-white/[0.12]
              transition-all duration-300 cursor-pointer
              group/skill
            "
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-100 blur-md bg-white/20 transition-opacity duration-300" />
              <Image
                src={skill.icon}
                alt={skill.name}
                width={36}
                height={36}
                className="object-contain relative z-10 drop-shadow-sm"
              />
            </div>
            <span className="text-[11px] text-foreground/40 font-medium group-hover/skill:text-foreground/70 transition-colors duration-200 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Skills list as small tags at bottom */}
      <div className="px-5 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {category.skills.map((s, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-foreground/30 font-medium"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/3 -right-24 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/3 blur-[160px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary/60" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary/70">
              Technical Expertise
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              Technical{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-accent">
                  Arsenal
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/60 to-accent/40 rounded-full" />
              </span>
            </h2>
            <p className="text-foreground/40 text-base max-w-xs md:text-right leading-relaxed">
              Tools and technologies I use to craft exceptional digital
              experiences.
            </p>
          </div>
        </motion.div>

        {/* ── Skills Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          {skillsData.map((category, i) => (
            <SkillCard key={i} category={category} />
          ))}
        </motion.div>

        {/* ── Stat bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-8 sm:gap-12 py-6 mb-20 border-y border-white/[0.04]"
        >
          {[
            { value: "16+", label: "Technologies" },
            { value: "4", label: "Domains" },
            { value: "3+", label: "Years exp." },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-foreground/80 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-foreground/30 font-medium mt-0.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Additional Tools Marquee ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Sub-header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.06]" />
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-white/10" />
              <span className="text-xs font-mono uppercase tracking-widest text-foreground/30">
                Dev Environment
              </span>
              <div className="h-px w-6 bg-white/10" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.06]" />
          </div>

          {/* Marquee track */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.01]">
            {/* Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-4 py-6 px-4 animate-marquee"
              style={{
                animation: "marquee 28s linear infinite",
              }}
            >
              {[...tools, ...tools].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.06, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="
                    flex flex-col items-center justify-center gap-2.5
                    px-5 py-4
                    rounded-xl flex-shrink-0 min-w-[108px]
                    bg-white/[0.02] border border-white/[0.05]
                    hover:bg-white/[0.06] hover:border-white/[0.12]
                    transition-all duration-300 cursor-pointer
                    group
                  "
                >
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 blur-sm bg-white/10 transition-opacity duration-300" />
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={32}
                      height={32}
                      className="object-contain relative z-10"
                      onError={(e) =>
                        console.error(
                          `Failed to load icon: ${tool.name} → ${tool.icon}`,
                        )
                      }
                    />
                  </div>
                  <span className="text-[11px] font-medium text-foreground/35 group-hover:text-foreground/65 transition-colors duration-200 text-center whitespace-nowrap">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Marquee keyframes — add to your globals.css instead if preferred */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}

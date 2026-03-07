"use client";

import { motion } from "framer-motion";

interface Tool {
  name: string;
  logo: string;
}

const tools: Tool[] = [
  {
    name: "Postman",
    logo: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
  {
    name: "Android Studio",
    logo: "https://cdn.worldvectorlogo.com/logos/android-studio-1.svg",
  },
  {
    name: "PyCharm",
    logo: "https://cdn.worldvectorlogo.com/logos/pycharm-1.svg",
  },
  {
    name: "Google Colab",
    logo: "https://cdn.worldvectorlogo.com/logos/google-colab.svg",
  },
  {
    name: "Laragon",
    logo: "https://cdn.worldvectorlogo.com/logos/laragon.svg",
  },
  {
    name: "XAMPP",
    logo: "https://cdn.worldvectorlogo.com/logos/xampp.svg",
  },
  {
    name: "MikroTik",
    logo: "https://cdn.worldvectorlogo.com/logos/mikrotik.svg",
  },
  {
    name: "Ubuntu Server",
    logo: "https://cdn.worldvectorlogo.com/logos/ubuntu-5.svg",
  },
  {
    name: "AWS Academy",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  },
  {
    name: "InfluxDB",
    logo: "https://cdn.worldvectorlogo.com/logos/influxdb.svg",
  },
];

export function TechnicalArsenal() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="arsenal"
      className="w-full py-20 bg-background/50 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Arsenal
          </h2>
          <p className="text-foreground/70 text-lg">
            Tools and platforms that power my development workflow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain dark:invert"
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-medium text-center text-foreground">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

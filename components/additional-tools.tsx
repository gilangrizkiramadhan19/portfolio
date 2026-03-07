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

export function AdditionalTools() {
  return (
    <section className="w-full py-20 bg-background/50 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Additional Tools & Platforms
          </h2>
          <p className="text-foreground/70 text-lg">
            Tools and platforms that power my development workflow
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 pb-8"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of tools */}
            {tools.map((tool) => (
              <motion.div
                key={`first-${tool.name}`}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex-shrink-0 w-32"
                whileHover={{ scale: 1.05 }}
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

            {/* Duplicate set for seamless loop */}
            {tools.map((tool) => (
              <motion.div
                key={`second-${tool.name}`}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-300 hover:shadow-lg hover:border-primary/50 flex-shrink-0 w-32"
                whileHover={{ scale: 1.05 }}
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

          {/* Fade gradients on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

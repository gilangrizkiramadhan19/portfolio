"use client";

import { motion } from "framer-motion";

interface Tool {
  name: string;
  logo: string;
}

const additionalTools: Tool[] = [
  { name: "Postman", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
  { name: "VS Code", logo: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
  { name: "Android Studio", logo: "https://cdn.worldvectorlogo.com/logos/android-studio-1.svg" },
  { name: "PyCharm", logo: "https://cdn.worldvectorlogo.com/logos/pycharm-1.svg" },
  { name: "Google Colab", logo: "https://cdn.worldvectorlogo.com/logos/google-colab.svg" },
  { name: "Laragon", logo: "https://cdn.worldvectorlogo.com/logos/laragon.svg" },
  { name: "XAMPP", logo: "https://cdn.worldvectorlogo.com/logos/xampp.svg" },
  { name: "MikroTik", logo: "https://cdn.worldvectorlogo.com/logos/mikrotik.svg" },
  { name: "Ubuntu Server", logo: "https://cdn.worldvectorlogo.com/logos/ubuntu-5.svg" },
  { name: "AWS Academy", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  { name: "InfluxDB", logo: "https://cdn.worldvectorlogo.com/logos/influxdb.svg" },
];

export function AdditionalToolsMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold text-center mb-4">
        Additional Tools & Platforms
      </h3>
      <p className="text-center text-foreground/70 mb-8 text-lg">
        Tools and platforms that power my development workflow
      </p>

      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -1920 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {/* First set of logos */}
          {additionalTools.map((tool) => (
            <div
              key={`${tool.name}-1`}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-background/50 rounded-lg hover:bg-accent/10 transition-colors duration-300 border border-border"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {additionalTools.map((tool) => (
            <div
              key={`${tool.name}-2`}
              className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-background/50 rounded-lg hover:bg-accent/10 transition-colors duration-300 border border-border"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

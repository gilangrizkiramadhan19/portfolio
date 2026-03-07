"use client";

import { motion } from "framer-motion";

interface Tool {
  name: string;
  logo: string;
}

const arsenalTools: Tool[] = [
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
  { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
  { name: "Dart", logo: "https://cdn.worldvectorlogo.com/logos/dart.svg" },
  { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
];

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

export function TechnicalArsenal() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Technical Arsenal Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Technical Arsenal
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Tools and technologies that power my development workflow
          </p>

          {/* Arsenal Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {arsenalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card hover:bg-accent/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Tools & Platforms Section with Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Additional Tools & Platforms
          </h3>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Tools and platforms that power my development workflow
          </p>

          {/* Logo Marquee */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

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
                  className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-card rounded-lg hover:bg-accent/10 transition-colors duration-300"
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
                  className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-card rounded-lg hover:bg-accent/10 transition-colors duration-300"
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
      </div>
    </section>
  );
}

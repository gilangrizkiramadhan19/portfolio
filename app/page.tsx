import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { FeaturedProjects } from '@/components/featured-projects';
import { TechnicalArsenal } from '@/components/technical-arsenal';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Certifications } from '@/components/certifications';
import { Publications } from '@/components/publications';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      {/* Hero Section - Welcome to Portfolio */}
      <Hero />
      {/* About Me Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Pengalaman Profesional */}
      <Experience />
      {/* Prestasi & Penghargaan */}
      <Achievements />
      {/* Sertifikasi & Kredensial + Hak Cipta Terdaftar */}
      <Certifications />
      {/* Publikasi Jurnal */}
      <Publications />
      {/* Technical Arsenal Section */}
      <TechnicalArsenal />
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Contact Section */}
      <Contact />
      <Footer />
    </main>
  );
}

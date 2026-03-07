import { Navigation } from '@/components/navigation';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Certifications } from '@/components/certifications';
import { Publications } from '@/components/publications';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Gilang Rizki Ramadhan',
  description: 'Learn more about Gilang Rizki Ramadhan - Machine Learning Engineer & Fullstack Developer. Professional experience, achievements, certifications, and publications.',
};

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      {/* About Me Section */}
      <div className="pt-20">
        <About />
      </div>
      {/* Technical Skills */}
      <Skills />
      {/* Pengalaman Profesional */}
      <Experience />
      {/* Prestasi & Penghargaan */}
      <Achievements />
      {/* Sertifikasi & Kredensial + Hak Cipta Terdaftar */}
      <Certifications />
      {/* Publikasi Jurnal */}
      <Publications />
      <Footer />
    </main>
  );
}

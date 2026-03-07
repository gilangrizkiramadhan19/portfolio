import { Navigation } from '@/components/navigation';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Certifications } from '@/components/certifications';
import { Publications } from '@/components/publications';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'About & Skills - Gilang Rizki Ramadhan',
  description: 'Learn more about my background, skills, experience, and achievements.',
};

export default function AboutPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <div className="pt-24">
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Certifications />
        <Publications />
      </div>
      <Footer />
    </main>
  );
}

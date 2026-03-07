import { Navigation } from '@/components/navigation';
import { Projects } from '@/components/projects';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Gilang Rizki Ramadhan',
  description: 'Explore featured projects by Gilang Rizki Ramadhan - Smart Farming applications, AI-based water quality monitoring, and precision agriculture systems.',
};

export default function ProjectsPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      {/* All Projects Section */}
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

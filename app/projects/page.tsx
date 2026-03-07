import { Navigation } from '@/components/navigation';
import { ProjectsPage } from '@/components/projects-page';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Projects - Gilang Rizki Ramadhan',
  description: 'Explore my portfolio of projects including mobile apps, web applications, and IoT/AI solutions.',
};

export default function ProjectsPageRoute() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <div className="pt-24">
        <ProjectsPage />
      </div>
      <Footer />
    </main>
  );
}

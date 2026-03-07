import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <Hero />
      <Contact />
      <Footer />
    </main>
  );
}

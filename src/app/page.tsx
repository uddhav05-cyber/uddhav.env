import { ConnectSection } from '@/components/connect/ConnectSection';
import { AboutSection, ExperienceSection, NowFocus, RecruiterHero, SelectedWork } from '@/components/home/RecruiterHome';

export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 sm:px-8">
      <RecruiterHero />
      <AboutSection />
      <ExperienceSection />
      <SelectedWork />
      <NowFocus />
      <ConnectSection />
      <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-8 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Uddhav Bhople</span>
        <span>Pune · UTC+05:30</span>
      </footer>
    </main>
  );
}

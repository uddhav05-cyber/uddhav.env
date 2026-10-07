import { ConnectSection } from '@/components/connect/ConnectSection';
import { AboutSection, ExperienceSection, NowFocus, RecruiterHero, SelectedWork } from '@/components/home/RecruiterHome';
import { SiteFooter } from '@/components/home/SiteFooter';
import { LatestBlog } from '@/components/home/LatestBlog';

export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 sm:px-8">
      <RecruiterHero />
      <AboutSection />
      <ExperienceSection />
      <SelectedWork />
      <LatestBlog />
      <NowFocus />
      <ConnectSection />
      <SiteFooter />
    </main>
  );
}

import { ConnectSection } from '@/components/connect/ConnectSection';
import { LatestBlog } from '@/components/home/LatestBlog';
import { NowFocus, ProofStrip, RecruiterHero, SelectedWork } from '@/components/home/RecruiterHome';

const noOpRef = () => undefined;

export default function Home() {
  return <main id="main-content" className="mx-auto max-w-6xl px-5 sm:px-8">
    <RecruiterHero />
    <ProofStrip />
    <SelectedWork />
    <NowFocus />
    <LatestBlog sectionRef={noOpRef} />
    <ConnectSection sectionRef={noOpRef} />
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-8 font-mono text-xs text-muted-foreground"><span>© {new Date().getFullYear()} Uddhav Bhople</span><span>Built with Next.js · TypeScript · intention</span></footer>
  </main>;
}

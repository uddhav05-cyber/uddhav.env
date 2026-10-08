'use client';

import Link from 'next/link';

const NAVIGATION_LINKS = [
  ['Home', '/'],
  ['About', '/#about'],
  ['Experience', '/#experience'],
  ['Projects', '/#projects'],
  ['Blog', '/blog'],
  ['Contact', '/#service'],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border pb-12 pt-10 font-mono text-xs text-muted-foreground">
      <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-foreground">Uddhav Bhople</p>
            <p className="mt-2 max-w-sm leading-6">
              Building reliable AI agents, realtime products, and thoughtful software.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} Uddhav Bhople</span>
            <span>Pune · UTC+05:30</span>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="mb-3 uppercase tracking-wider text-foreground">Navigation</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
            {NAVIGATION_LINKS.map(([label, href]) => (
              <Link key={href} href={href} className="transition-colors hover:text-primary">
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
            Open to Opportunities
          </span>
          <Link href="/feed.xml" className="transition-colors hover:text-primary">
            RSS Feed
          </Link>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="self-start transition-colors hover:text-primary sm:self-auto"
        >
          Back to Top ↑
        </button>
      </div>

      <p className="mt-5 text-[11px] text-muted-foreground/80">
        Built with Next.js, Tailwind CSS &amp; Vercel
      </p>
    </footer>
  );
}

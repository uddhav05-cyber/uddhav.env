'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CommandPalette } from '@/features/tools/components/CommandPalette';

import { cn } from '@/lib/utils';
interface NavItem {
  label: string;
  href: string;
  isActive: (pathname: string) => boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/#about', isActive: () => false },
  { label: 'Experience', href: '/#experience', isActive: (pathname) => pathname === '/experience' },
  { label: 'Projects', href: '/#projects', isActive: (pathname) => pathname === '/project' },
  { label: 'Blog', href: '/blog', isActive: (pathname) => pathname.startsWith('/blog') },
  { label: 'Contact', href: '/#service', isActive: () => false },
];

export function HeaderNavigation() {
  const pathname = usePathname();
  const [isVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const visibilityClasses = cn(
    'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
    isVisible || isMobileMenuOpen
      ? 'translate-y-0 opacity-100'
      : '-translate-y-8 opacity-0 pointer-events-none'
  );

  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-border bg-background pt-[env(safe-area-inset-top)] print:hidden">
      <div
        className={cn(
          'relative z-50 mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8',
          visibilityClasses
        )}
      >
        <Link
          href="/"
          className="font-display text-2xl leading-none text-foreground transition-colors hover:text-primary z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Uddhav Bhople
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const active = item.isActive(pathname);
            const isExternal = item.href.startsWith('http');
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={`Navigate to ${item.label}`}
                aria-current={active ? 'page' : undefined}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={cn(
                  'font-mono text-xs uppercase tracking-wider transition-colors duration-200',
                  'hover:text-primary',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                  active ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3"><CommandPalette /><ThemeToggle /></div>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-50 p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 z-50 flex min-h-full w-full items-stretch justify-end overflow-y-auto bg-black/40 transition-all duration-500 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Mobile navigation" className="ml-auto flex min-h-full w-full max-w-md flex-col items-center justify-center gap-8 overflow-y-auto bg-background px-6 pb-[env(safe-area-inset-bottom)] pt-20">
          {NAV_ITEMS.map((item, index) => {
            const active = item.isActive(pathname);
            const isExternal = item.href.startsWith('http');
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={cn(
                  'font-display text-4xl transition-all duration-300 transform',
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                  'hover:text-primary',
                  active ? 'text-foreground' : 'text-muted-foreground'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

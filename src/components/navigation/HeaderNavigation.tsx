'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);

  // Native modal dialogs contain focus and restore it to the menu button on close.
  useEffect(() => {
    const menu = menuRef.current;
    if (!isMobileMenuOpen) {
      menu?.close();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    menu?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      menu?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[70] border-b border-border bg-background pt-[env(safe-area-inset-top)] print:hidden">
      <div
        className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8"
      >
        <Link
          href="/"
          className="flex min-h-11 min-w-0 items-center font-display text-xl leading-none text-foreground transition-colors hover:text-primary sm:text-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Uddhav Bhople
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5">
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
                  'inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-wider transition-colors duration-200',
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
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0"><CommandPalette /><ThemeToggle />

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:hidden"
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
      </div>

      {/* Mobile Menu Overlay */}
      <dialog
        ref={menuRef}
        id="mobile-menu"
        aria-label="Navigation menu"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-background text-foreground backdrop:bg-black/40"
        onCancel={() => setIsMobileMenuOpen(false)}
        onClose={() => setIsMobileMenuOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsMobileMenuOpen(false);
          }
        }}
      >
        <div className="sticky top-0 flex justify-end bg-background px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))]">
          <button type="button" autoFocus onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation menu" className="flex h-11 w-11 items-center justify-center rounded hover:text-primary">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-md flex-col items-stretch gap-2 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
          {NAV_ITEMS.map((item) => {
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
                  'flex min-h-12 items-center justify-center rounded px-4 py-3 font-display text-3xl sm:text-4xl',
                  'hover:text-primary',
                  active ? 'text-foreground' : 'text-muted-foreground'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </dialog>
    </header>
  );
}

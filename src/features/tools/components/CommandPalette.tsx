'use client';

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { Check, Command, Copy, Moon, Search, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/hooks/useTheme';
import { PROJECT_DATA } from '@/features/projects/infrastructure/projectData';

const EMAIL = 'uddhavbhople5@gmail.com';

export function CommandPalette() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      setSearchQuery('');
    }
  }, [open]);

  const navigate = (href: string) => { router.push(href); setOpen(false); };
  const copyEmail = async () => {
    await navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => { setCopied(false); setOpen(false); }, 900);
  };
  const commandItems = [
    { label: 'About', category: 'Navigate', action: () => navigate('/#about') },
    { label: 'Contact', category: 'Navigate', action: () => navigate('/#service') },
    { label: 'View projects', category: 'Navigate', action: () => navigate('/project') },
    { label: 'Experience', category: 'Navigate', action: () => navigate('/experience') },
    { label: 'Read writing', category: 'Navigate', action: () => navigate('/blog') },
    { label: 'Resume', category: 'Navigate', action: () => navigate('/resume') },
    ...PROJECT_DATA.map((project) => ({
      label: project.title,
      category: 'Projects',
      action: () => navigate('/project'),
    })),
    { label: `Switch to ${isDark ? 'light' : 'dark'} mode`, category: 'System', action: () => { toggleTheme(); setOpen(false); } },
    { label: copied ? 'Email copied' : 'Copy email address', category: 'System', action: copyEmail },
  ];
  const normalizedQuery = searchQuery.toLowerCase().trim();
  const filteredItems = commandItems.filter((item) =>
    item.label.toLowerCase().includes(normalizedQuery) ||
    item.category.toLowerCase().includes(normalizedQuery)
  );
  const visibleItems = normalizedQuery ? filteredItems : commandItems;
  const handleSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && visibleItems[0]) {
      event.preventDefault();
      visibleItems[0].action();
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="hidden items-center gap-2 rounded-md border border-border bg-card/80 px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-[var(--accent-green)] hover:text-foreground md:flex" aria-label="Open command palette">
        <Search className="h-3.5 w-3.5" /><span>cmd</span><kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</kbd>
      </button>
      {open ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 p-4 pt-[14vh] backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={() => setOpen(false)}>
          <div className="w-full max-w-xl overflow-hidden rounded-lg border border-border bg-popover shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <div className="flex items-center gap-3 border-b border-border px-4 py-3"><Command className="h-4 w-4 text-[var(--accent-green)]" /><input ref={inputRef} value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} onKeyDown={handleSearchKeyDown} aria-label="Command search" placeholder="Jump to a page or action..." className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground" /></div>
            <div className="p-2">
              {visibleItems.length === 0 ? (
                <p className="px-3 py-6 text-center font-mono text-sm text-muted-foreground">No results found</p>
              ) : (
                <>
                  {(['Navigate', 'Projects', 'System'] as const).map((category) => {
                    const categoryItems = visibleItems.filter((item) => item.category === category);
                    if (!categoryItems.length) return null;
                    return (
                      <div key={category}>
                        <p className="px-2 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{category}</p>
                        {categoryItems.map((item) => (
                          <button key={item.label} onClick={item.action} className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm hover:bg-muted">
                            <span className="flex items-center gap-3">
                              {category === 'System' && (item.label.startsWith('Switch') ? (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : copied ? <Check className="h-4 w-4 text-[var(--accent-green)]" /> : <Copy className="h-4 w-4" />)}
                              {item.label}
                            </span>
                            <span className="font-mono text-xs text-muted-foreground">↵</span>
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

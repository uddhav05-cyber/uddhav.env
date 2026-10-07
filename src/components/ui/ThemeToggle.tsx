'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Switch theme'}
      className="min-h-9 whitespace-nowrap rounded-full border border-border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors hover:border-primary hover:text-primary"
    >
      {mounted ? (isDark ? '☀ Light' : '☾ Dark') : '◐ Theme'}
    </button>
  );
}

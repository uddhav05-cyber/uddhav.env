'use client';

export function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      <div className="terminal-grid absolute inset-0 opacity-40" />
      <div className="absolute -top-48 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[var(--accent-cyan)]/5 blur-3xl" />
      <div className="absolute bottom-[-16rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[var(--accent-green)]/5 blur-3xl" />
    </div>
  );
}

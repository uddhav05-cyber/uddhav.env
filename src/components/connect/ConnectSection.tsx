'use client';

import { memo, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import { CONNECT_LINKS, generateConnectUrl } from '@/lib/constants';

const EMAIL = 'uddhavbhople5@gmail.com';
const TOPICS = ['Internship', 'Collaboration', 'Project', 'Just saying hi'] as const;

interface ConnectSectionProps {
  activeSection?: string;
  sectionRef?: (el: HTMLElement | null) => void;
}

const field = 'w-full rounded border border-border bg-card px-3 py-3 text-base outline-none focus:border-primary';

export const ConnectSection = memo(function ConnectSection({ activeSection = '', sectionRef }: ConnectSectionProps) {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>(TOPICS[0]);
  const [sending, setSending] = useState(false);

  const openMail = (name: string, message: string) => {
    const subject = encodeURIComponent(`${topic} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    setSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, name, email, message, website: String(data.get('website') ?? '') }),
      });
      if (!res.ok) throw new Error(String(res.status));
      toast.success('Message sent. I will reply soon.');
      form.reset();
    } catch {
      toast.message('Opening your email app instead.');
      openMail(name, message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="service"
      ref={sectionRef}
      data-inview={activeSection === 'service' ? 'true' : undefined}
      aria-labelledby="connect-heading"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground"><span className="mr-3 text-primary">05</span>Contact</p>
      <h2 id="connect-heading" className="font-display text-4xl leading-tight sm:text-5xl">Let&apos;s Connect</h2>
      <p className="mt-3 max-w-lg text-muted-foreground">Open to internships, collaborations and product builds. Pick a topic and tell me what you are working on.</p>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div role="group" aria-label="Topic" className="flex flex-wrap gap-2">
            {TOPICS.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${topic === t ? 'border-foreground bg-foreground text-background' : 'border-border hover:border-primary'}`}
              >
                {t}
              </button>
            ))}
          </div>
          <label className="flex flex-col gap-1.5"><span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Your name</span><input name="name" required maxLength={80} autoComplete="name" className={field} /></label>
          <label className="flex flex-col gap-1.5"><span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Your email</span><input name="email" type="email" required maxLength={120} autoComplete="email" className={field} /></label>
          <label className="flex flex-col gap-1.5"><span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Message</span><textarea name="message" required minLength={5} maxLength={2000} rows={5} placeholder="What are you working on?" className={`${field} resize-y`} /></label>
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button type="submit" disabled={sending} className="w-fit rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-60">
            {sending ? 'Sending…' : 'Send message →'}
          </button>
        </form>

        <div className="flex flex-col gap-4">
          <div className="rounded-md border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />Open to opportunities</p>
            <Link href={`mailto:${EMAIL}`} className="mt-3 block break-all text-lg hover:text-primary">{EMAIL}</Link>
            <button
              type="button"
              onClick={() => navigator.clipboard?.writeText(EMAIL).then(() => toast.success('Email copied')).catch(() => undefined)}
              className="mt-2 font-mono text-xs uppercase tracking-wider text-primary"
            >
              Copy email
            </button>
          </div>
          <div className="rounded-md border border-border px-5 py-2">
            {CONNECT_LINKS.map((social) => (
              <Link
                key={social.name}
                href={generateConnectUrl(social.urlTemplate, social.handle)}
                target="_blank"
                rel="noreferrer"
                className="flex justify-between border-b border-border py-3 font-mono text-xs uppercase tracking-wider last:border-0 hover:text-primary"
              >
                <span>{social.name}</span><span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

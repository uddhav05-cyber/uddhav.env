'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECT_DATA } from '@/features/projects/infrastructure/projectData';
import { EXPERIENCES } from '@/lib/constants/experiences';

function Row({ id, index, label, children }: { id: string; index: string; label: string; children: ReactNode }) {
  return (
    <section id={id} className="grid scroll-mt-20 gap-3 border-t border-border py-12 sm:py-16 md:grid-cols-[180px_1fr] md:gap-6">
      <p className="pt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <span className="mb-1 block text-primary">{index}</span>
        {label}
      </p>
      <div>{children}</div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-border px-3 py-0.5 text-xs text-muted-foreground">{item}</span>
      ))}
    </div>
  );
}

export function RecruiterHero() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="intro" className="pb-16 pt-32 sm:pb-24 sm:pt-40">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Pune, India · Available for the next hard problem</p>
        <h1 className="mt-7 font-display text-[clamp(2.75rem,8.5vw,6.5rem)] leading-[0.98] tracking-[-0.02em]">
          I build AI agents that <em className="text-primary">do the work,</em> not just answer.
        </h1>
        <p className="mt-9 max-w-xl text-lg leading-8">
          Computer Engineering student building agentic systems and realtime products: software that listens, reasons, uses tools and gets a real task finished.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground bg-foreground px-5 text-sm text-background transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">View work <ArrowUpRight className="h-4 w-4" /></Link>
          <Link href="/resume" className="inline-flex min-h-11 items-center rounded-full border border-foreground px-5 text-sm transition-colors hover:border-primary hover:text-primary">Resume</Link>
          <Link href="#service" className="inline-flex min-h-11 items-center rounded-full border border-foreground px-5 text-sm transition-colors hover:border-primary hover:text-primary">Get in touch</Link>
        </div>
      </motion.div>
    </section>
  );
}

export function AboutSection() {
  const facts = [['8.64', 'CGPA'], ['117', 'Azure badges'], ['2', 'AI/ML internships']];
  return (
    <Row id="about" index="01" label="About">
      <h2 className="font-display text-4xl leading-tight">Hi, I&apos;m Uddhav.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8">
        I&apos;m a B.Tech Computer Engineering student in Pune who got hooked on AI the moment a model did something I didn&apos;t expect. Since then I&apos;ve been building: realtime classroom tools, learning platforms and small ML projects, and writing about what breaks along the way.
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-8">
        My goal is to build AI agents that are reliable enough to trust with real work, and to grow into a team that ships them at scale.
      </p>
      <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4">
        {facts.map(([value, label]) => (
          <div key={label}>
            <dd className="font-display text-4xl text-primary">{value}</dd>
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
          </div>
        ))}
      </dl>
    </Row>
  );
}

export function ExperienceSection() {
  return (
    <Row id="experience" index="02" label="Experience">
      <ol className="border-t border-border">
        {EXPERIENCES.slice(0, 4).map((item) => (
          <li key={`${item.company}-${item.year}`} className="border-b border-border py-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-2xl leading-tight">{item.role}</h3>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.year}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-primary">{item.company}</p>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">{item.description}</p>
            <Chips items={item.tech} />
          </li>
        ))}
      </ol>
      <p className="mt-6 font-mono text-xs uppercase tracking-wider"><Link href="/experience" className="hover:text-primary">Full experience →</Link></p>
    </Row>
  );
}

export function SelectedWork() {
  const projects = [PROJECT_DATA[0], PROJECT_DATA[3], PROJECT_DATA[4]].filter(Boolean);
  return (
    <Row id="projects" index="03" label="Tools & Projects">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const body = (
            <>
              <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
                <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex justify-between font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <span>0{i + 1}</span>
                  <span className="group-hover:text-primary">{project.link ? 'View ↗' : ''}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight">{project.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-7 text-muted-foreground">{project.summary}</p>
                <Chips items={project.languages.slice(0, 5)} />
              </div>
            </>
          );
          const cls = 'group flex flex-col overflow-hidden rounded-md border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-primary';
          return project.link
            ? <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className={cls}>{body}</a>
            : <article key={project.id} className={cls}>{body}</article>;
        })}
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-wider"><Link href="/project" className="hover:text-primary">All projects →</Link></p>
    </Row>
  );
}

export function NowFocus() {
  return (
    <Row id="now" index="04" label="Now / Focus">
      <div className="rounded-md border border-border border-l-[3px] border-l-primary bg-card p-8">
        <h2 className="font-display text-4xl leading-tight">What I&apos;m building toward.</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8">AI agents that take real actions, realtime AI interfaces, and the dependable infrastructure underneath them.</p>
        <Chips items={['AI agents', 'Realtime systems', 'Applied ML', 'Next.js architecture']} />
      </div>
    </Row>
  );
}

export interface ProjectRecord {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly date: string;
  readonly categories: string[];
  readonly languages: string[];
  readonly link?: string;
  readonly image: string;
  readonly featured?: boolean;
  readonly demoImages?: string[];
}

export const PROJECT_DATA: ProjectRecord[] = [
  {
    id: 'recover-ai',
    title: 'Recover.ai: Agentic Payment Recovery',
    summary:
      'AI agent that detects failed Razorpay subscription payments through signature-validated, idempotent webhooks and runs a Diagnose → Decide → Guardrail → Act pipeline. A deterministic guardrail stops ambiguous LLM diagnoses from bypassing policy; every action is written to a PostgreSQL audit trail first. In a simulated 60-case batch it recovered 14 cases (23.3%, Rs 10,886) and left 46 for human review.',
    date: 'Jul 2026',
    categories: ['AI Agents', 'FinTech', 'Back-end'],
    languages: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'LLM', 'Razorpay API'],
    link: 'https://github.com/uddhav05-cyber/Recover.ai',
    image: '/projects/recover-ai.png',
  },
  {
    id: 'autonomous-coding-agent',
    title: 'Autonomous Coding Agent',
    summary:
      'Research-driven AI software-engineering agent that works on existing repos in a controlled workspace, planned across 15 phases (context selection, tool permissions, verification, evaluation). Secure workspace layer rejects path traversal and symlink escapes and uses atomic writes; covered by unit and integration tests.',
    date: '2026',
    categories: ['AI Agents', 'Developer Tools'],
    languages: ['Python', 'Pydantic', 'pytest', 'Docker'],
    link: 'https://github.com/uddhav05-cyber/autonomous-coding-agent',
    image: '/projects/autonomous-coding-agent.png',
  },
  {
    id: 'bharat-setu',
    title: 'Bharat-Setu',
    summary:
      'Zero-cost, pilot-ready platform with satellite-verified carbon credits, a village digital twin and crisis detection, replacing 8 AWS services with open-source equivalents. Fraud protocol auto-approves under 10% variance and freezes accounts over 30%; 76 unit tests, React admin dashboard and a voice-enabled PWA.',
    date: 'Jan–Feb 2026',
    categories: ['Full Stack', 'Social Impact'],
    languages: ['Python', 'FastAPI', 'React', 'SQLite', 'SQLAlchemy', 'JWT'],
    link: 'https://github.com/uddhav05-cyber/Bharat_Setu',
    image: '/projects/bharat-setu.png',
  },
  {
    id: 'opspilot',
    title: 'OpsPilot',
    summary:
      'An IT operations copilot that searches runbooks and answers questions with citations. It supports configurable LLM providers and an offline mock mode.',
    date: '2026',
    categories: ['AI', 'IT Operations'],
    languages: ['Python', 'FastAPI', 'Docker'],
    link: 'https://github.com/uddhav05-cyber/OpsPilot',
    image: 'https://opengraph.githubassets.com/1/uddhav05-cyber/OpsPilot',
  },
  {
    id: 'portfolio-website',
    title: 'uddhav.env',
    summary:
      'My personal portfolio with selected projects, work experience, technical writing, and a résumé. Built with Next.js 16 and Tailwind CSS 4.',
    date: 'Dec 2025',
    categories: ['Web Development', 'Minimal App'],
    languages: ['Next.js', 'TailwindCSS', 'TypeScript', 'Redis'],
    link: 'https://github.com/uddhav05-cyber/uddhav.env',
    image: 'https://opengraph.githubassets.com/1/uddhav05-cyber/uddhav.env',
    featured: true,
  },
  {
    id: 'breathbudget',
    title: 'Breathbudget',
    summary:
      'Estimates how much air pollution you breathe in during a typical day and compares changes to your routine that could reduce that exposure.',
    date: 'Nov 2026',
    categories: ['Air Quality', 'Data'],
    languages: ['Python'],
    link: 'https://github.com/uddhav05-cyber/Breathbudget',
    image: 'https://opengraph.githubassets.com/1/uddhav05-cyber/Breathbudget',
  },
];

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
    id: 'privgpt-studio',
    title: 'PrivGPT Studio (contribution)',
    summary:
      'Privacy-first AI workspace with local and cloud LLMs and offline fallback. My work: multimodal cross-referencing across PDFs, video, images and audio.',
    date: 'Jan–Apr 2026',
    categories: ['AI', 'Open Source'],
    languages: ['TypeScript', 'Python', 'Next.js', 'Flask', 'MongoDB'],
    link: 'https://github.com/uddhav05-cyber/PrivGPT-Studio',
    image: '/projects/privgpt-studio.png',
  },
  {
    id: 'pollution-pulse',
    title: 'CleanAir & Clear Streets',
    summary:
      'Full-stack citizen-reporting MVP that uses geolocation, Gemini multimodal vision and a free OpenStreetMap dashboard to turn environmental and civic reports into severity-ranked municipal actions, with local storage fallback.',
    date: '2026',
    categories: ['AI', 'Civic Tech', 'Full Stack'],
    languages: ['React', 'TypeScript', 'Express', 'Gemini', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/uddhav05-cyber/pollution-pulse',
    image: '/projects/pollution-pulse.png',
  },
  {
    id: 'amd-edumind',
    title: 'AMD EduMind',
    summary:
      'AI-powered educational platform with a React frontend and FastAPI backend for intelligent learning experiences, document retrieval, LLM orchestration, ONNX inference and a local SQLite mode.',
    date: '2026',
    categories: ['AI', 'EdTech', 'Full Stack'],
    languages: ['React', 'Vite', 'FastAPI', 'LangChain', 'LlamaIndex', 'ONNX', 'SQLite'],
    link: 'https://github.com/uddhav05-cyber/AMD_Edu_Mind',
    image: '/projects/amd-edumind.png',
  },
  {
    id: 'uddhav-codes',
    title: 'Uddhav Codes',
    summary:
      'Production-ready personal portfolio and digital garden built with Next.js 16, featuring project discovery, MDX writing, RSS, structured data, observability, security headers and automated tests.',
    date: '2026',
    categories: ['Web Development', 'Open Source'],
    languages: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Jest'],
    link: 'https://github.com/uddhav05-cyber/uddhav-codes',
    image: '/projects/uddhav-codes.png',
  },
  {
    id: 'valsea-classroom-copilot',
    title: 'VALSEA Classroom Copilot',
    summary:
      'Speech-first classroom copilot for Vietnamese–English code-switching lectures. Streams realtime mic audio to VALSEA ASR, then turns transcripts into structured learning material: Vietnamese summary, key terms, English recap, quizzes, exports, and session history.',
    date: 'May 2026',
    categories: ['EdTech', 'AI', 'Real-time'],
    languages: ['Next.js', 'TypeScript', 'Fastify', 'WebSocket', 'VALSEA ASR', 'Supabase'],
    link: 'https://valsea-classroom-copilot.vercel.app',
    image: '/projects/valsea-classroom-copilot.png',
    demoImages: ['/projects/valsea-classroom-copilot.png'],
  },
  {
    id: 'taikhoanxin',
    title: 'TAIKHOANXIN',
    summary:
      'A premier marketplace for digital access. Connecting users with top-tier service accounts through a seamless, automated platform. Quality, reliability, and speed—delivered.',
    date: 'Oct 2025',
    categories: ['Web Development', 'E-commerce'],
    languages: ['Next.js', 'TypeScript', 'Supabase', 'Shadcn UI'],
    link: 'https://taikhoanxin.com',
    image: '/projects/taikhoanxin.png',
    featured: true,
    demoImages: ['/projects/taikhoanxin.png'],
  },
  {
    id: 'dev-orbit-blog',
    title: 'DevOrbit - Blog Platform',
    summary:
      'An open-source blog platform designed for developers. Features MDX support, syntax highlighting, dark mode, and a highly optimized reading experience.',
    date: 'Dec 2025',
    categories: ['Web Development', 'Open Source'],
    languages: ['Next.js', 'TypeScript', 'TailwindCSS', 'MDX'],
    link: 'https://devorbitblog.vercel.app',
    image: '/projects/blog.png',
    featured: true,
    demoImages: ['/projects/blog.png'],
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    summary:
      'A modern, high-performance portfolio built with Next.js 16 and Tailwind CSS 4. Features a matrix-themed design, interactive particles background, and seamless animations.',
    date: 'Dec 2025',
    categories: ['Web Development', 'Minimal App'],
    languages: ['Next.js', 'TailwindCSS', 'TypeScript', 'Redis'],
    link: 'https://uddhavbhople.dev/',
    image: '/projects/portfolio.png',
    featured: true,
    demoImages: ['/projects/portfolio.png'],
  },
  {
    id: 'luxe-wear-ai',
    title: 'LUXWEAR AI',
    summary:
      'SaaS platforms enable businesses to build, deploy, and manage AI agents. The system supports real-time data integration, performs actions across third-party systems, and provides detailed analytical reporting.',
    date: 'Jul 2025',
    categories: ['Web Development', 'SaaS', 'AI'],
    languages: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Gemini AI'],
    link: 'https://luxwearai.vercel.app',
    image: '/projects/luxe-wear.png',
    featured: true,
    demoImages: ['/projects/luxe-wear.png'],
  },
];

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    year: 'Jul 2026 – Aug 2026',
    role: 'Backend AI Engineering Intern (Virtual)',
    company: 'FlyRank AI',
    description: 'Built a FastAPI REST API with full CRUD, input validation, correct HTTP status codes and auto-generated OpenAPI/Swagger docs; published to GitHub with staged commits and a README.',
    tech: ['Python', 'FastAPI', 'OpenAPI', 'GCP'],
  },
  {
    year: 'Jan 2026 – Present',
    role: 'Microsoft Learn Student Ambassador',
    company: 'Microsoft',
    description: 'Delivered technical sessions on Python, AI and developer tools.',
    tech: ['Python', 'AI', 'Developer Tools'],
  },
  {
    year: 'Jan 2026 – Apr 2026',
    role: 'Open-Source Contributor',
    company: 'PrivGPT Studio',
    description: 'Contributed to a privacy-first AI workspace with local and cloud LLMs and offline fallback; implemented multimodal cross-referencing across PDFs, video, images and audio (with transcription).',
    tech: ['TypeScript', 'Python', 'Next.js', 'Flask', 'MongoDB'],
  },
  {
    year: 'Apr 2025 – Jun 2025',
    role: 'AI-ML Virtual Intern',
    company: 'EduSkills',
    description: 'Built an ML pipeline for treatment and diet recommendations on a real-world dataset; integrated Firebase auth, Twilio and Cloudinary with 98% service reliability.',
    tech: ['Python', 'TensorFlow', 'Flask', 'Firebase'],
  },
  {
    year: '2024 – 2028',
    role: 'B.Tech Computer Engineering',
    company: 'D.Y. Patil University, Pune',
    description: 'B.Tech Computer Engineering degree.',
    tech: [],
  },
];

/**
 * Person Schema (Schema.org)
 * Structured data for SEO and rich snippets
 */

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string | string[];
  jobTitle: string;
  url: string;
  sameAs: string[];
  image?: string;
  description?: string;
  knowsAbout?: string[];
  alumniOf?: {
    '@type': string;
    name: string;
  };
  worksFor?: {
    '@type': string;
    name: string;
  };
}

export function getPersonSchema(): PersonSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uddhavbhople.dev';

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Uddhav Bhople',
    alternateName: ['Uddhav'],
    jobTitle: 'Computer Engineering Student & AI/ML Developer',
    url: baseUrl,
    sameAs: [
      'https://github.com/uddhav05-cyber',
      'https://www.linkedin.com/in/uddhav-bhople/',
      'https://uddhavbhople.dev',
    ],
    image: `${baseUrl}/portrait.jpg`,
    description:
      'Computer Engineering student and AI/ML developer with a passion for building intelligent solutions. Experienced in full-stack development, machine learning, and open-source contributions.',
    knowsAbout: [
      'Web Development',
      'Frontend Development',
      'React',
      'Next.js',
      'TypeScript',
      'Software Engineering',
      'AI Engineering',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University',
    },
  };
}

import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { HeaderNavigation } from '@/components/navigation/HeaderNavigation';
import { ThemeProvider } from '@/components/theme-provider';
import { Background } from '@/components/ui/background';
import { SkipLink } from '@/components/ui/SkipLink';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { getPersonSchema } from '@/lib/schema/person';




const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--font-instrument' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-jetbrains' });

// One canonical domain everywhere (metadata, OG, sitemap). Change here if you move domains.
const PRODUCTION_SITE_URL = 'https://www.uddhavbhople.in';
const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : PRODUCTION_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
  default: 'Uddhav Bhople | AI Agents & Software Engineer',
    template: '%s | Uddhav Bhople',
  },
  description: 'Uddhav Bhople is an AI agents and software engineer building reliable agentic systems, realtime products, and full-stack applications with Python, TypeScript, and Next.js.',
  keywords: ['AI/ML Developer', 'Full Stack Developer', 'Python', 'React', 'Next.js', 'TypeScript', 'TensorFlow', 'FastAPI', 'Flask', 'Computer Engineering'],
  authors: [
    { name: 'Uddhav Bhople', url: PRODUCTION_SITE_URL },
  ],
  creator: 'Uddhav Bhople',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: PRODUCTION_SITE_URL,
    title: 'Uddhav Bhople | AI Agents & Software Engineer',
    description: 'AI agents and software engineering portfolio featuring reliable agentic systems, realtime products, Python, TypeScript, and Next.js applications.',
    siteName: 'Uddhav Bhople',
    images: [
      {
        url: '/og-image.png', // Ensure this file exists or upgrade opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: 'Uddhav Bhople portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uddhav Bhople | AI Agents & Software Engineer',
    description: 'AI agents and software engineering portfolio featuring reliable agentic systems, realtime products, Python, TypeScript, and Next.js applications.',
    images: [`${PRODUCTION_SITE_URL}/og-image.png`],
    creator: '@uddhavbhople',
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '16x16', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = getPersonSchema();

  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://huggingface.co" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
          storageKey="portfolio-theme"
        >
          <SkipLink />
          <Background />
          <HeaderNavigation />
          <Script id="remove-bis-skin" strategy="beforeInteractive">{`(() => {
        try {
          const clean = (root) => {
            if (!root) return;
            if (root.nodeType === 1 && root.hasAttribute && root.hasAttribute('bis_skin_checked')) {
              root.removeAttribute('bis_skin_checked');
            }
            if (root.querySelectorAll) {
              root.querySelectorAll('[bis_skin_checked]').forEach((node) => node.removeAttribute('bis_skin_checked'));
            }
          };

          clean(document);

          const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
              if (mutation.type === 'attributes' && mutation.target instanceof Element) {
                mutation.target.removeAttribute('bis_skin_checked');
              }
              if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                  if (node instanceof Element) {
                    clean(node);
                  }
                });
              }
            }
          });

          observer.observe(document, {
            attributes: true,
            attributeFilter: ['bis_skin_checked'],
            childList: true,
            subtree: true,
          });
        } catch (error) {
          console.warn('Failed to clean bis_skin_checked attributes', error);
        }
      })();`}</Script>
          {children}
          <Analytics />
          <SpeedInsights />
          <Toaster position="bottom-right" richColors />
          <Script
            id="init-preloading"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (typeof window === 'undefined') return;
                  const criticalRoutes = ['/project', '/blog', '/experience'];
                  const links = document.querySelectorAll('a[href^="/"]');
                  links.forEach((link) => {
                    const href = link.getAttribute('href');
                    if (criticalRoutes.includes(href)) {
                      link.addEventListener('mouseenter', function() {
                        const prefetchLink = document.createElement('link');
                        prefetchLink.rel = 'prefetch';
                        prefetchLink.href = href;
                        document.head.appendChild(prefetchLink);
                      }, { once: true });
                    }
                  });
                })();
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

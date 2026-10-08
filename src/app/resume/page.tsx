import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { RESUME_PATH, RESUME_VERSION } from './constants';

const resumeUrl = `${RESUME_PATH}?v=${RESUME_VERSION}`;

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background px-4 pb-20 pt-36 text-foreground sm:px-8 md:px-12">
      <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center justify-between gap-4 print:hidden sm:flex-row">
        <Link
          href="/"
          className="group flex w-full items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:w-auto sm:justify-start"
        >
          <span className="rounded-full border border-border p-2 transition-colors group-hover:bg-muted">
            <ArrowLeft className="h-4 w-4" />
          </span>
          Back to Portfolio
        </Link>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <a
            href={resumeUrl}
            download
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-foreground px-6 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
            Open in new tab
          </a>
        </div>
      </div>

      <main className="mx-auto max-w-5xl">
        <h1 className="mb-6 font-display text-4xl leading-tight">Resume</h1>
        <object
          data={resumeUrl}
          type="application/pdf"
          aria-label="Uddhav Bhople resume"
          className="hidden h-[calc(100vh-15rem)] min-h-[42rem] w-full rounded-md border border-border bg-card md:block"
        >
          <p className="p-6 text-muted-foreground">
            Your browser cannot display the PDF inline. Use the buttons above to download or open it in a new tab.
          </p>
        </object>
      </main>
    </div>
  );
}

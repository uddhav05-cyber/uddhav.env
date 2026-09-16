'use client';

import { ArrowLeft, Download, Mail, MapPin, Globe, Printer } from 'lucide-react';
import Link from 'next/link';
import { EXPERIENCES } from '@/lib/constants/experiences';

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-36 pb-20 px-4 sm:px-8 md:px-12 print:p-8 print:bg-white print:text-black">
            {/* Navigation & Actions - Hidden when printing */}
            {/* Navigation & Actions - Hidden when printing */}
            <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row justify-between items-center gap-4 print:hidden animate-fade-in-up">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-full sm:w-auto justify-center sm:justify-start"
                >
                    <div className="p-2 rounded-full border border-border group-hover:bg-muted transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                    </div>
                    Back to Portfolio
                </Link>

                <button
                    onClick={handlePrint}
                    className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                    <Printer className="w-4 h-4" />
                    Print / Save PDF
                </button>
            </div>

            {/* Resume Content */}
            <main className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 shadow-2xl print:shadow-none print:border-none print:p-0 print:rounded-none animate-fade-in-up"
                style={{ animationDelay: '100ms' }}>

                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b-2 border-border pb-8 mb-8 print:pb-4 print:mb-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                            Uddhav Bhople
                        </h1>
                        <p className="text-xl text-muted-foreground font-mono print:text-black/70">
                            Computer Engineering Student & AI/ML Developer
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground print:text-black/70">
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <a href="mailto:uddhavbhople5@gmail.com" className="hover:text-foreground hover:underline">
                                uddhavbhople5@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            <Link href="https://github.com/uddhav05-cyber" className="hover:text-foreground hover:underline">
                                github.com/uddhav05-cyber
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span> Pune MH , India</span>
                        </div>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-10 print:mb-6">
                    <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border/50 pb-2 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground"></span>
                        Professional Summary
                    </h2>
                    <p className="text-muted-foreground leading-relaxed print:text-black/80">
                        Computer Engineering student and AI/ML developer with a passion for building intelligent solutions. Experienced in full-stack development, machine learning, and open-source contributions. Focused on creating innovative products that leverage AI while maintaining code quality and best practices.
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-10 print:mb-6">
                    <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border/50 pb-2 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground"></span>
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
                        <div>
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2 print:text-black/60">Languages</h3>
                            <p className="font-mono text-sm">Python, Java, C, JavaScript, TypeScript, HTML/CSS</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2 print:text-black/60">Frameworks</h3>
                            <p className="font-mono text-sm">React, Node.js, Express, FastAPI, Flask, Next.js</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2 print:text-black/60">AI/ML & Data</h3>
                            <p className="font-mono text-sm">NumPy, Pandas, TensorFlow, scikit-learn, XGBoost</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm uppercase text-muted-foreground mb-2 print:text-black/60">Databases & Tools</h3>
                            <p className="font-mono text-sm">MongoDB, MySQL, Oracle, Git, GitHub, VS Code, Kiro</p>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-10 print:mb-6">
                    <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border/50 pb-2 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground"></span>
                        Experience
                    </h2>

                    <div className="space-y-8 print:space-y-6">
                        {EXPERIENCES.map((exp, index) => (
                            <div key={index} className="relative pl-6 border-l-2 border-border/30 print:border-black/20">
                                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-foreground"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                                    <h3 className="text-lg font-bold">{exp.role}</h3>
                                    <span className="text-sm font-mono text-muted-foreground print:text-black/60 whitespace-nowrap bg-muted/50 px-2 py-0.5 rounded print:bg-transparent print:p-0">
                                        {exp.year}
                                    </span>
                                </div>

                                <div className="text-sm font-semibold text-muted-foreground mb-2 print:text-black/70">
                                    {exp.company}
                                </div>

                                <p className="text-sm leading-relaxed text-muted-foreground print:text-black/80 mb-3">
                                    {exp.description}
                                </p>

                                {exp.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map(t => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider border border-border rounded-full px-2 py-0.5 text-muted-foreground print:text-black/60 print:border-black/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education (Static Placeholder) */}
                <section className="mb-10 print:mb-6">
                    <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border/50 pb-2 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground"></span>
                        Education
                    </h2>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="text-lg font-bold">B.Tech in Computer Engineering</h3>
                                <div className="text-muted-foreground print:text-black/70">D.Y. Patil University (DYPU), Pune</div>
                            </div>
                            <div className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0 bg-muted/50 px-2 py-0.5 rounded print:bg-transparent print:p-0 print:text-black/60">
                                2024 — 2028
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground print:text-black/70">
                            <strong>CGPA:</strong> 8.64 / 10
                        </div>
                        <div className="border-t border-border/30 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="text-base font-bold">Class XII (Science)</h3>
                                <div className="text-muted-foreground print:text-black/70">Samarth Junior College, Jafrabad</div>
                            </div>
                            <div className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0 bg-muted/50 px-2 py-0.5 rounded print:bg-transparent print:p-0 print:text-black/60">
                                2024 - 68.17%
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h3 className="text-base font-bold">Class X (MSBSHSE)</h3>
                                <div className="text-muted-foreground print:text-black/70">Dnyansagar Madhyamik Vidhyalaya, Sipora</div>
                            </div>
                            <div className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0 bg-muted/50 px-2 py-0.5 rounded print:bg-transparent print:p-0 print:text-black/60">
                                2022 - 91.0%
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer for Print */}
                <div className="hidden print:flex justify-between items-center border-t border-black/20 pt-4 mt-8 text-xs text-black/50">
                    <span>Resume - Uddhav Bhople</span>
                    <span>uddhavbhople5@gmail.com | github.com/uddhav05-cyber</span>
                </div>
            </main>
        </div>
    );
}

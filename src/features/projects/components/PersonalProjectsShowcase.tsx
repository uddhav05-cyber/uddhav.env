import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { BsPuzzleFill } from 'react-icons/bs';
import { PROJECT_DATA } from '@/features/projects/infrastructure/projectData';

export function PersonalProjectsShowcase() {
    return (
        <section className="space-y-8 rounded-2xl border border-border/60 bg-background/50 p-6 backdrop-blur md:p-8">
            <header className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4 text-center sm:text-left">
                <div className="relative flex items-center justify-center shrink-0">
                    <BsPuzzleFill className="h-8 w-8 text-foreground animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight uppercase">Personal Projects</h2>
            </header>

            <div className="grid gap-8">
                {PROJECT_DATA.map((project) => (
                    <article
                        key={project.id}
                        className="group relative grid gap-6 rounded-2xl border border-dashed border-border/60 bg-muted/20 p-6 transition-all duration-500 hover:border-solid hover:border-border hover:bg-muted/30 hover:shadow-xl md:grid-cols-2 lg:gap-12"
                    >
                        <div className="min-w-0 space-y-6">
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                                <p className="text-muted-foreground leading-relaxed font-mono text-sm max-w-md">
                                    {project.summary}
                                </p>
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105 active:scale-95"
                                >
                                    <span>Repo</span>
                                    <FaGithub className="h-4 w-4" />
                                </a>
                            )}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.languages.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-md border border-dashed border-border text-xs font-mono text-muted-foreground transition-colors group-hover:border-foreground/50 group-hover:text-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-xl overflow-hidden border border-border/40 group-hover:border-border transition-all duration-500">
                            <Image
                                src={project.image}
                                alt=""
                                fill
                                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                sizes="(min-width: 768px) 50vw, 100vw"
                            />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

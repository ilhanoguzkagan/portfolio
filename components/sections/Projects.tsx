import { personalProjects } from "@/lib/data";

interface ProjectsProps {
    sectionRef: (el: HTMLElement | null) => void;
}

export function Projects({ sectionRef }: ProjectsProps) {
    return (
        <section
            id="projects"
            ref={sectionRef}
            className="min-h-screen py-16 md:py-24 lg:py-32 opacity-0"
        >
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
                    Personal Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {personalProjects.map((project, index) => (
                        <article
                            key={index}
                            className="group p-4 md:p-6 lg:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                        >
                            <div className="space-y-4">
                                <h3 className="text-lg md:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.link && (
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Project
                                        </a>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

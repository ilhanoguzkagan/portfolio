import { workExperience } from "@/lib/data";

interface WorkProps {
    sectionRef: (el: HTMLElement | null) => void;
}

export function Work({ sectionRef }: WorkProps) {
    return (
        <section
            id="work"
            ref={sectionRef}
            className="min-h-screen py-16 md:py-24 lg:py-32 opacity-0"
        >
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
                        Experiences
                    </h2>
                    <div className="text-sm text-muted-foreground font-mono">
                        2019 – 2025
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8 lg:space-y-12">
                    {workExperience.map((job, index) => (
                        <div
                            key={index}
                            className="group grid md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 py-6 md:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                transform: "translateZ(0)", // Force GPU acceleration
                                backfaceVisibility: "hidden", // Optimize for repaints
                            }}
                        >
                            <div className="md:col-span-2 lg:col-span-2">
                                <div className="text-base md:text-lg lg:text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                                    {job.startYear} – {job.endYear}
                                </div>
                            </div>

                            <div className="md:col-span-4 lg:col-span-6 space-y-2 md:space-y-3">
                                <div>
                                    <h3 className="text-lg md:text-xl font-medium">{job.role}</h3>
                                    <div className="text-muted-foreground">{job.company}</div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed max-w-lg whitespace-pre-line">
                                    {job.description}
                                </p>
                            </div>

                            <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start md:items-end lg:items-end space-y-2">
                                <div className="flex flex-wrap gap-1.5 md:justify-end lg:justify-end">
                                    {job.tech.slice(0, 2).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs font-medium border border-border rounded-md hover:border-muted-foreground/50 transition-colors duration-300 bg-muted/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {job.tech.length > 2 && (
                                    <div className="flex flex-wrap gap-1.5 md:justify-end lg:justify-end">
                                        {job.tech.slice(2).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs font-medium border border-border rounded-md hover:border-muted-foreground/50 transition-colors duration-300 bg-muted/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

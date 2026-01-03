import { certifications } from "@/lib/data";

interface CertificationsProps {
    sectionRef: (el: HTMLElement | null) => void;
}

export function Certifications({ sectionRef }: CertificationsProps) {
    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-16 md:py-24 lg:py-32 opacity-0"
        >
            <div className="space-y-8 md:space-y-12 lg:space-y-16">
                <div className="flex items-end justify-between">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
                        Certifications
                    </h2>
                    <div className="text-sm text-muted-foreground font-mono">
                        PROFESSIONAL DEVELOPMENT
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group p-4 md:p-6 lg:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                        >
                            <div className="space-y-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="text-3xl">{cert.icon}</div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-medium leading-tight">
                                                {cert.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-muted-foreground">
                                                    {cert.provider}
                                                </span>
                                                <span className="text-muted-foreground">•</span>
                                                <span className="text-sm text-muted-foreground font-mono">
                                                    {cert.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {cert.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border group-hover:border-muted-foreground/30 transition-colors duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {cert.verifyLink && (
                                    <div className="pt-4 border-t border-border/30">
                                        <a
                                            href={cert.verifyLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-muted/30 hover:bg-muted/50 border border-border hover:border-muted-foreground/50 rounded-lg transition-all duration-300 group/verify"
                                        >
                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover/verify:scale-110"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                            Verify Certificate
                                            <svg
                                                className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/verify:translate-x-1"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
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

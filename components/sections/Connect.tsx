import Link from "next/link";
import { socialLinks } from "@/lib/data";

interface ConnectProps {
    sectionRef: (el: HTMLElement | null) => void;
}

export function Connect({ sectionRef }: ConnectProps) {
    return (
        <section
            id="connect"
            ref={sectionRef}
            className="py-16 md:py-24 lg:py-32 opacity-0"
        >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">
                        Let&apos;s Connect
                    </h2>
                </div>

                <div className="space-y-6 md:space-y-8">
                    <div className="text-sm text-muted-foreground font-mono">
                        ELSEWHERE
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {socialLinks.map((social) =>
                            social.name === "Email" || social.name === "Phone" ? (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm block"
                                >
                                    <div className="space-y-2">
                                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                                            {social.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground break-all">
                                            {social.handle}
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                                >
                                    <div className="space-y-2">
                                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                                            {social.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground break-all">
                                            {social.handle}
                                        </div>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

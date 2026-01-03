import Link from "next/link";
import Image from "next/image";

interface IntroProps {
    sectionRef: (el: HTMLElement | null) => void;
}

export function Intro({ sectionRef }: IntroProps) {
    return (
        <header
            id="intro"
            ref={sectionRef}
            className="min-h-screen flex items-center opacity-0 relative"
        >
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full relative z-10">
                <div className="lg:col-span-3 space-y-8">
                    <div className="space-y-2">
                        <div className="text-sm text-muted-foreground font-mono tracking-wider">
                            PORTFOLIO / 2025
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                            Industrial
                            <br />
                            <span className="text-muted-foreground">Engineer</span>
                        </h1>
                    </div>

                    <div className="space-y-6 max-w-md">
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                            Industrial Engineer (NFQ Level 8) with a Stamp 4 visa and over 4
                            years of experience in Quality Management and Process Optimization.
                            Currently based in Cork, having gained local operational experience
                            at Musgrave Group while completing advanced English studies. A Google
                            Certified Data Analyst skilled in leveraging SQL, Power BI, and
                            Python for data manipulation to drive data-informed business
                            decisions. Proven history of identifying workflow inefficiencies
                            and implementing automated reporting solutions that enhance
                            operational excellence and support business growth.
                        </p>

                        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>
                                    Stamp 4 (Eligible to work in Ireland without restriction or
                                    requirement for sponsorship)
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Available for work</span>
                            </div>
                            <div className="ml-4 text-muted-foreground/80">Cork, Ireland</div>

                            <div className="mt-4">
                                <a
                                    href="/Oguzkagan Ilhan-Resume.pdf"
                                    download="Oguzkagan Ilhan-Resume.pdf"
                                    className="group inline-flex items-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
                                >
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    <span>Download CV</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                                Currently
                            </div>
                            <div className="text-foreground">Product Analyst</div>
                            <div className="text-muted-foreground">
                                @ Self-Managed E-Commerce Business (Amazon FBA) · Freelance
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Mar 2024 — Present
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm text-muted-foreground font-mono">
                            CORE COMPETENCIES
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Data Analysis & Visualization",
                                "Quality Management",
                                "Standards & Compliance",
                                "Systems & Automation",
                                "Operational Excellence",
                                "SQL",
                                "Python",
                                "Power BI",
                                "Excel",
                                "SAP ERP",
                                "5WHY",
                                "Ishikawa",
                                "PFMEA",
                                "8D Methodology",
                                "ISO 9001",
                                "IATF 16949",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

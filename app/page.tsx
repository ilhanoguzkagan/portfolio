"use client"

import Link from "next/link"
import Image from "next/image"
import { workExperience, personalProjects, certifications, socialLinks } from "@/lib/data.tsx"
import { useLiquidCursor } from "@/hooks/useLiquidCursor"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useTheme } from "@/hooks/useTheme"

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const { sectionsRef, activeSection } = useIntersectionObserver({ threshold: 0.3, rootMargin: "0px 0px -20% 0px" });
  const cursorRef = useLiquidCursor();

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div ref={cursorRef} className="liquid-cursor" />
      
      {/* Profile Photo Area */}
      <div className="profile-photo-container fixed top-4 right-4 md:top-8 md:right-8 z-20 group">
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-border/50 hover:border-foreground/20 transition-all duration-500 cursor-pointer group-hover:scale-[1.5] md:group-hover:scale-[2] group-hover:shadow-2xl">
          <Image 
            src="/my-photo.jpg" 
            alt="Oguzkagan Ilhan"
            width={80}
            height={80}
            className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/10 group-hover:to-transparent transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "certifications", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-10 lg:hidden">
        <div className="flex gap-2 p-3 rounded-full mobile-nav-glass">
          {[
            { 
              id: "intro", 
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )
            },
            { 
              id: "work", 
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                </svg>
              )
            },
            { 
              id: "projects", 
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              )
            },
            { 
              id: "certifications", 
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )
            },
            { 
              id: "connect", 
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )
            }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-10 h-10 rounded-full flex items-center justify-center mobile-nav-icon ${
                activeSection === section.id 
                  ? "active text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`Navigate to ${section.id}`}
            >
              {section.icon}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 relative"
        >
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 w-full relative z-10">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                  Oguzkagan
                  <br />
                  <span className="text-muted-foreground">Ilhan</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  A versatile Industrial Engineer with a strong foundation in <span className="text-foreground">data analysis</span>, <span className="text-foreground">quality management</span>, and <span className="text-foreground">process optimisation</span>.
                  Experienced in leading
                  <span className="text-foreground"> cross-functional teams</span>,<span className="text-foreground"> continuous improvement</span>,
                  and leveraging advanced
                  <span className="text-foreground"> problem-solving techniques</span> to achieve measurable results.
                </p>

                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Eligible to work in Ireland without restriction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for work</span>
                  </div>
                  <div className="ml-4 text-muted-foreground/80">Cork, Ireland</div>
                  
                  <div className="mt-4">
                    <Link
                      href="/oguzkagan-resume.pdf"
                      download="oguzkagan-resume.pdf"
                      className="group inline-flex items-center gap-2 px-3 py-2 text-sm border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Download CV</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Currently</div>
                  <div className="text-foreground">E-Commerce Entrepreneur</div>
                  <div className="text-muted-foreground">@ Self-Managed E-Commerce Business</div>
                  <div className="text-xs text-muted-foreground">Mar 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "Power BI", "Advanced Excel", "PFMEA", "ISO 9001", "8D"].map((skill) => (
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

        <section id="work" ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen py-16 md:py-24 lg:py-32 opacity-0">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">Experiences</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 – Present</div>
            </div>

            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="group grid md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 py-6 md:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: 'translateZ(0)', // Force GPU acceleration
                    backfaceVisibility: 'hidden' // Optimize for repaints
                  }}
                >
                  <div className="md:col-span-2 lg:col-span-2">
                    <div className="text-base md:text-lg lg:text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500 whitespace-nowrap">
                      {job.startYear} – {job.endYear}
                    </div>
                  </div>

                  <div className="md:col-span-4 lg:col-span-6 space-y-2 md:space-y-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg whitespace-pre-line">{job.description}</p>
                  </div>

                  <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start md:items-end lg:items-end space-y-2">
                    <div className="flex flex-wrap gap-1.5 md:justify-end lg:justify-end">
                      {job.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium border border-border rounded-md hover:border-muted-foreground/50 transition-colors duration-300 whitespace-nowrap bg-muted/20"
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
                            className="px-2.5 py-1 text-xs font-medium border border-border rounded-md hover:border-muted-foreground/50 transition-colors duration-300 whitespace-nowrap bg-muted/20"
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

        <section id="projects" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-16 md:py-24 lg:py-32 opacity-0">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">Personal Projects</h2>

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

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

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
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
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

        <section id="certifications" ref={(el) => (sectionsRef.current[3] = el)} className="py-16 md:py-24 lg:py-32 opacity-0">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">Certifications</h2>
              <div className="text-sm text-muted-foreground font-mono">PROFESSIONAL DEVELOPMENT</div>
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
                          <h3 className="text-lg md:text-xl font-medium leading-tight">{cert.name}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-muted-foreground">{cert.provider}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground font-mono">{cert.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{cert.description}</p>

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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          Verify Certificate
                          <svg 
                            className="w-3 h-3 opacity-50 transition-transform duration-300 group-hover/verify:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-16 md:py-24 lg:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light">Let's Connect</h2>

            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((social) => (
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
                        <div className="text-sm text-muted-foreground break-all">{social.handle}</div>
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
                        <div className="text-sm text-muted-foreground break-all">{social.handle}</div>
                      </div>
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 md:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Oguzkagan Ilhan. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Bottom Line */}
          <div className="mt-8 pt-6 border-t border-border/30">
            <div className="text-center">
              <p className="text-lg font-bold text-cyan-400 glow-text whitespace-nowrap">
                This website was created by the portfolio owner using AI and vibecoding.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

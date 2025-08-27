"use client"

import Link from "next/link"
import Image from "next/image"
import { workExperience, recentThoughts, certifications, socialLinks } from "@/lib/data"
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
      <div className="fixed top-8 right-8 z-20 group">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border/50 hover:border-foreground/20 transition-all duration-500 cursor-pointer group-hover:scale-[2] group-hover:shadow-2xl">
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
      
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "certifications", "connect"].map((section) => (
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

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0 relative"
        >
          <div className="grid lg:grid-cols-5 gap-16 w-full relative z-10">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
                  Oguzkagan
                  <br />
                  <span className="text-muted-foreground">Ilhan</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-xl text-muted-foreground leading-relaxed">
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
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Amazon FBA Seller</div>
                  <div className="text-muted-foreground">@ Self-Managed E-Commerce</div>
                  <div className="text-xs text-muted-foreground">Mar 2024 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "Power BI", "Advanced Excel", "PFMEA", "ISO 9001"].map((skill) => (
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

        <section id="work" ref={(el) => (sectionsRef.current[1] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2024</div>
            </div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="thoughts" ref={(el) => (sectionsRef.current[2] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Recent Thoughts</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {recentThoughts.map((post, index) => (
                <article
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" ref={(el) => (sectionsRef.current[3] = el)} className="py-32 opacity-0">
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Certifications</h2>
              <div className="text-sm text-muted-foreground font-mono">PROFESSIONAL DEVELOPMENT</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{cert.icon}</div>
                        <div>
                          <h3 className="text-xl font-medium leading-tight">{cert.name}</h3>
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

        <section id="connect" ref={(el) => (sectionsRef.current[4] = el)} className="py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Open to opportunities in data analysis, quality management, process optimisation, and industrial engineering. Certified in Google Data Analytics and PFMEA, ready to deliver innovative solutions that drive business success.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:oguzkaganilhan@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">oguzkaganilhan@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">GLOBAL CONNECTIONS</div>
              

              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-2 gap-4">
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

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Oguzkagan Ilhan. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js and deployed on Vercel</div>
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

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
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

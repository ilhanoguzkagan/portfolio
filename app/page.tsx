"use client"

import Image from "next/image"
import { useLiquidCursor } from "@/hooks/useLiquidCursor"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useTheme } from "@/hooks/useTheme"
import { Intro } from "@/components/sections/Intro"
import { Work } from "@/components/sections/Work"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Connect } from "@/components/sections/Connect"

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const { sectionsRef, activeSection } = useIntersectionObserver();
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
              className={`w-2 h-8 rounded-full transition-all duration-500 ${activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
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
              className={`w-10 h-10 rounded-full flex items-center justify-center mobile-nav-icon ${activeSection === section.id
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
        <Intro sectionRef={(el) => (sectionsRef.current[0] = el)} />
        <Work sectionRef={(el) => (sectionsRef.current[1] = el)} />
        <Projects sectionRef={(el) => (sectionsRef.current[2] = el)} />
        <Certifications sectionRef={(el) => (sectionsRef.current[3] = el)} />
        <Connect sectionRef={(el) => (sectionsRef.current[4] = el)} />

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

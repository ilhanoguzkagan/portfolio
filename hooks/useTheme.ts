import { useEffect, useState, useCallback } from "react"
import { useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = resolvedTheme ?? theme ?? "dark"
  const isDark = mounted ? currentTheme === "dark" : (theme ?? "dark") === "dark"

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark")
  }, [isDark, setTheme])

  return { isDark, toggleTheme }
}

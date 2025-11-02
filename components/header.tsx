"use client"

interface HeaderProps {
  onMenuToggle: () => void
  isMobile: boolean
  isDarkMode: boolean
  onToggleTheme: () => void
}

export default function Header({ onMenuToggle, isMobile, isDarkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-950 dark:to-slate-900 border-b border-border px-4 md:px-8 py-4 flex justify-between items-center shadow-md transition-colors duration-300">
      <div className="flex items-center gap-4">
        {isMobile && (
          <button
            onClick={onMenuToggle}
            className="text-foreground hover:text-accent transition-all duration-300 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        {!isMobile && <h1 className="text-xl md:text-2xl font-bold text-accent">CSS Tutorial</h1>}
      </div>

      <div className="flex items-center gap-4">
        <span className="text-secondary text-sm hidden sm:inline">Learn Modern Styling</span>

        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-300 text-accent"
          aria-label="Toggle dark/light mode"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v4m0 12v4M4.22 4.22l2.83 2.83m5.9 5.9l2.83 2.83M2 12h4m12 0h4M4.22 19.78l2.83-2.83m5.9-5.9l2.83-2.83" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

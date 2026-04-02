import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* Wordmark icon */}
          <div className="w-6 h-6 rounded bg-accent flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L9 5H11L6 11L1 5H3L6 1Z" fill="white" />
            </svg>
          </div>
          <span className="font-semibold text-textPrimary text-sm tracking-tight group-hover:text-accentLight transition-colors">
            Vibe Code
          </span>
          <span className="text-textMuted text-xs font-normal">with Admin</span>
        </Link>

        <div className="flex items-center gap-5">
          {!isHome && (
            <Link
              to="/"
              className="text-textMuted text-xs hover:text-textPrimary transition-colors flex items-center gap-1.5 font-medium"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Modules
            </Link>
          )}
          <Link
            to="/capstone"
            className="text-xs text-textMuted hover:text-textPrimary transition-colors font-medium"
          >
            Capstone
          </Link>
        </div>
      </div>
    </nav>
  )
}

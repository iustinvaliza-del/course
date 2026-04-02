import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ModuleIcon from './ModuleIcon'

const cleanTitle = (title) => title.replace(/Module \d+ — /, '')

export default function ModuleCard({ module: mod, progress, isComplete }) {
  const { completed, total, percent } = progress
  const cardRef = useRef(null)
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  const handleMouseLeave = () => setSpotlight((s) => ({ ...s, visible: false }))

  const inProgress = completed > 0 && completed < total
  const firstIncomplete = mod.lessons.find((l) => !isComplete?.(l.id))

  return (
    <Link
      to={inProgress && firstIncomplete ? `/module/${mod.slug}/lesson/${firstIncomplete.slug}` : `/module/${mod.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="module-card animate-fade-up group relative block bg-surface border border-border rounded-xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
    >
      {/* Spotlight border effect */}
      {spotlight.visible && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${spotlight.x}px ${spotlight.y}px, rgba(124,58,237,0.12), transparent 70%)`,
          }}
        />
      )}

      <div className="relative">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center shrink-0`}>
              <ModuleIcon number={mod.number} size={16} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] text-textMuted font-medium uppercase tracking-[0.12em]">
                Module {mod.number}
              </p>
              <h3 className="text-textPrimary font-semibold text-sm mt-0.5 group-hover:text-accentLight transition-colors leading-tight">
                {cleanTitle(mod.title)}
              </h3>
            </div>
          </div>
          {completed === total && total > 0 ? (
            <span className="text-[10px] bg-accent/15 text-accentLight px-2 py-0.5 rounded-full font-medium border border-accent/20 shrink-0">
              Complete
            </span>
          ) : inProgress ? (
            <span className="text-[10px] bg-surfaceHigh text-textMuted px-2 py-0.5 rounded-full font-medium border border-border shrink-0">
              {completed}/{total}
            </span>
          ) : null}
        </div>

        <p className="text-textMuted text-xs leading-relaxed mb-5">
          {mod.tagline}
        </p>

        {/* Footer */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] text-textMuted">
            <span>{mod.duration}</span>
            <span>{completed}/{total} lessons</span>
          </div>
          <div className="h-0.5 bg-surfaceHigh rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${mod.color} rounded-full transition-all duration-500`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

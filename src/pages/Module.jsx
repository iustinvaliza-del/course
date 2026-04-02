import { useParams, Link, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'
import ModuleIcon from '../components/ModuleIcon'
import { getModuleBySlug } from '../data/courseData'
import { useProgress } from '../hooks/useProgress'

const cleanTitle = (title) => title.replace(/Module \d+ — /, '')

export default function Module() {
  const { moduleSlug } = useParams()
  const mod = getModuleBySlug(moduleSlug)
  const { isComplete, getModuleProgress } = useProgress()

  if (!mod) return <Navigate to="/" replace />

  const { completed, total, percent } = getModuleProgress(mod.lessons)

  return (
    <div className="min-h-[100dvh] bg-bg">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Back */}
        <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-textMuted hover:text-textPrimary transition-colors mb-10 font-medium tracking-wide uppercase">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All modules
        </Link>

        {/* Module header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center shrink-0`}>
              <ModuleIcon number={mod.number} size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-textMuted font-medium uppercase tracking-[0.12em]">
                Module {mod.number}
              </p>
              <h1
                className="text-textPrimary font-bold tracking-tight leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                {cleanTitle(mod.title)}
              </h1>
            </div>
          </div>

          <p className="text-textSecondary text-base leading-relaxed mb-6 max-w-xl">{mod.tagline}</p>

          <div className="flex items-center gap-4 text-xs text-textMuted mb-6">
            <span>{mod.duration}</span>
            <span className="w-px h-3 bg-border" />
            <span>{total} lessons</span>
            {completed > 0 && (
              <>
                <span className="w-px h-3 bg-border" />
                <span className="text-accentLight">{completed} complete</span>
              </>
            )}
          </div>

          <ProgressBar
            percent={percent}
            label={`${completed}/${total} lessons complete`}
            height="h-1"
          />
        </div>

        {/* Lessons list */}
        <div className="space-y-2">
          {mod.lessons.map((lesson, idx) => {
            const done = isComplete(lesson.id)
            return (
              <Link
                key={lesson.id}
                to={`/module/${mod.slug}/lesson/${lesson.slug}`}
                className="flex items-center gap-4 px-5 py-4 bg-surface border border-border rounded-xl hover:border-accent/40 hover:bg-surfaceHigh transition-all group"
              >
                {/* Indicator */}
                <div
                  className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 text-xs font-semibold transition-colors ${
                    done
                      ? 'bg-accent border-accent text-white'
                      : 'border-border text-textMuted group-hover:border-accent/40'
                  }`}
                >
                  {done ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4.2 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-textPrimary font-medium text-sm group-hover:text-accentLight transition-colors leading-snug">
                    {lesson.title}
                  </h3>
                  {lesson.concepts && (
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {lesson.concepts.slice(0, 3).map((c) => (
                        <span key={c} className="text-[11px] text-textMuted bg-surfaceHigh border border-border px-2 py-0.5 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] text-textMuted">{lesson.duration}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-textMuted group-hover:text-accentLight transition-colors">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Start CTA */}
        {completed === 0 && (
          <div className="mt-8">
            <Link
              to={`/module/${mod.slug}/lesson/${mod.lessons[0].slug}`}
              className={`block w-full py-3.5 text-center font-semibold text-white rounded-xl bg-gradient-to-r ${mod.color} hover:opacity-90 transition-opacity text-sm`}
            >
              Start Module {mod.number}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

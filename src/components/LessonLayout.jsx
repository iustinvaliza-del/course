import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import Navbar from './Navbar'
import ProgressBar from './ProgressBar'
import ModuleIcon from './ModuleIcon'

const cleanTitle = (title) => title.replace(/Module \d+ — /, '')

export default function LessonLayout({ children, lesson, module: mod }) {
  const { markComplete, isComplete, getModuleProgress } = useProgress()
  const completed = isComplete(lesson.id)
  const moduleProgress = getModuleProgress(mod.lessons)

  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const currentIndex = mod.lessons.findIndex((l) => l.id === lesson.id)
  const prevLesson = mod.lessons[currentIndex - 1]
  const nextLesson = mod.lessons[currentIndex + 1]

  return (
    <div className="min-h-[100dvh] bg-bg">
      <Navbar />

      <div className="flex pt-14">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 fixed top-14 left-0 bottom-0 border-r border-border bg-surface overflow-y-auto">
          {/* Module header */}
          <div className="p-5 border-b border-border">
            <Link
              to={`/module/${mod.slug}`}
              className="inline-flex items-center gap-1.5 text-[11px] text-textMuted hover:text-textPrimary transition-colors mb-4 font-medium uppercase tracking-wide"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M7 1L2 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to module
            </Link>

            <div className="flex items-center gap-2.5 mb-3">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${mod.color} flex items-center justify-center shrink-0`}>
                <ModuleIcon number={mod.number} size={13} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] text-textMuted font-medium uppercase tracking-[0.12em]">Module {mod.number}</p>
                <p className="text-textPrimary text-xs font-semibold leading-tight mt-0.5">{cleanTitle(mod.title)}</p>
              </div>
            </div>

            <ProgressBar
              percent={moduleProgress.percent}
              label={`${moduleProgress.completed}/${moduleProgress.total} lessons`}
              height="h-0.5"
            />
          </div>

          {/* Lesson list */}
          <nav className="p-3 space-y-0.5">
            {mod.lessons.map((l, idx) => {
              const isCurrent = l.id === lesson.id
              const isDone = isComplete(l.id)
              return (
                <Link
                  key={l.id}
                  to={`/module/${mod.slug}/lesson/${l.slug}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-colors ${
                    isCurrent
                      ? 'bg-accent/12 text-accentLight'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-surfaceHigh'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-semibold ${
                      isDone
                        ? 'bg-accent border-accent text-white'
                        : isCurrent
                        ? 'border-accent/60 text-accentLight'
                        : 'border-border text-textMuted'
                    }`}
                  >
                    {isDone ? '✓' : idx + 1}
                  </span>
                  <span className="leading-snug">{l.title}</span>
                </Link>
              )
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64 xl:ml-72 min-w-0">
          <div className="max-w-2xl mx-auto px-6 py-12">
            {/* Lesson header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-[11px] text-textMuted mb-4 font-medium uppercase tracking-wide">
                <span>{cleanTitle(mod.title)}</span>
                <span className="w-px h-3 bg-border" />
                <span>{lesson.duration}</span>
              </div>

              <h1
                className="text-textPrimary font-bold tracking-tight leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                {lesson.title}
              </h1>

              {/* Key concepts */}
              {lesson.concepts && lesson.concepts.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {lesson.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-[11px] text-textMuted bg-surfaceHigh border border-border px-2.5 py-1 rounded-md font-medium"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Lesson body */}
            <div className="lesson-prose">{children}</div>

            {/* Complete + navigation */}
            <div className="mt-14 pt-8 border-t border-border space-y-4">
              {!completed ? (
                <button
                  onClick={() => markComplete(lesson.id)}
                  className="w-full py-3 bg-accent hover:bg-accentLight text-white font-semibold rounded-xl transition-all hover:shadow-[0_8px_24px_rgba(124,58,237,0.3)] hover:-translate-y-0.5 text-sm"
                >
                  Mark complete
                </button>
              ) : (
                <div className="w-full py-3 bg-accent/10 text-accentLight font-semibold rounded-xl text-center border border-accent/25 text-sm flex items-center justify-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Lesson complete
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                {prevLesson ? (
                  <Link
                    to={`/module/${mod.slug}/lesson/${prevLesson.slug}`}
                    className="flex-1 py-2.5 px-4 text-xs text-textSecondary hover:text-textPrimary border border-border hover:border-accent/30 rounded-lg transition-colors text-center font-medium"
                  >
                    ← Previous
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}

                {nextLesson ? (
                  <Link
                    to={`/module/${mod.slug}/lesson/${nextLesson.slug}`}
                    onClick={() => markComplete(lesson.id)}
                    className="flex-1 py-2.5 px-4 text-xs bg-surfaceHigh hover:bg-accent/10 text-textPrimary border border-border hover:border-accent/30 rounded-lg transition-colors text-center font-medium"
                  >
                    Next lesson →
                  </Link>
                ) : (
                  <Link
                    to={`/module/${mod.slug}`}
                    className="flex-1 py-2.5 px-4 text-xs bg-accent/10 hover:bg-accent/15 text-accentLight border border-accent/25 rounded-lg transition-colors text-center font-medium"
                  >
                    Back to module →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile bottom nav — visible only on < lg */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border">
        {/* Lesson list drawer */}
        {mobileNavOpen && (
          <div className="max-h-64 overflow-y-auto border-b border-border">
            {mod.lessons.map((l, idx) => {
              const isCurrent = l.id === lesson.id
              const isDone = isComplete(l.id)
              return (
                <Link
                  key={l.id}
                  to={`/module/${mod.slug}/lesson/${l.slug}`}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm border-b border-border/50 transition-colors ${
                    isCurrent ? 'bg-accent/10 text-accentLight' : 'text-textSecondary hover:text-textPrimary hover:bg-surfaceHigh'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-semibold ${
                    isDone ? 'bg-accent border-accent text-white' : isCurrent ? 'border-accent/60 text-accentLight' : 'border-border text-textMuted'
                  }`}>
                    {isDone ? '✓' : idx + 1}
                  </span>
                  <span className="truncate">{l.title}</span>
                </Link>
              )
            })}
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex items-center h-14 px-4 gap-3">
          {prevLesson ? (
            <Link to={`/module/${mod.slug}/lesson/${prevLesson.slug}`}
              className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-textMuted hover:text-textPrimary hover:border-accent/40 transition-colors shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          ) : <div className="w-9 shrink-0" />}

          <button
            onClick={() => setMobileNavOpen((v) => !v)}
            className="flex-1 h-9 flex items-center justify-between px-3 border border-border rounded-lg text-xs text-textSecondary hover:border-accent/40 transition-colors"
          >
            <span className="truncate">{lesson.title}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`shrink-0 ml-2 transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`}>
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {nextLesson ? (
            <Link to={`/module/${mod.slug}/lesson/${nextLesson.slug}`} onClick={() => markComplete(lesson.id)}
              className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-textMuted hover:text-textPrimary hover:border-accent/40 transition-colors shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          ) : (
            <Link to={`/module/${mod.slug}`}
              className="w-9 h-9 flex items-center justify-center bg-accent/10 border border-accent/25 rounded-lg text-accentLight shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 1L3 6L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile bottom padding so content doesn't hide behind nav */}
      <div className="lg:hidden h-14" />
    </div>
  )
}

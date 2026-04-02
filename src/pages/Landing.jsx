import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ModuleCard from '../components/ModuleCard'
import ProgressBar from '../components/ProgressBar'
import ModuleIcon from '../components/ModuleIcon'
import { modules, getCourseStats } from '../data/courseData'
import { useProgress } from '../hooks/useProgress'

const features = [
  {
    number: '01',
    title: 'Direct, don\'t ask',
    body: 'You describe the house. The AI lays the bricks. One shift in how you talk to it changes everything you can build.',
  },
  {
    number: '02',
    title: 'See it in 10 minutes',
    body: 'Prompt. Watch it appear. Tweak one thing. Repeat. Antigravity gives you a working UI before you finish your coffee.',
  },
  {
    number: '03',
    title: 'Ship, don\'t tinker',
    body: 'Phase it into steps. Review each one. Hand it off clean. You get a URL at the end, not a folder of half-finished files.',
  },
]

export default function Landing() {
  const { getModuleProgress, getTotalProgress, isComplete } = useProgress()
  const stats = getCourseStats()
  const total = getTotalProgress(modules)

  return (
    <div className="min-h-[100dvh] bg-bg">
      <Navbar />

      {/* Hero — left-aligned, asymmetric */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Deep violet-to-black angled gradient base */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% -10%, rgba(109,40,217,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 100% 60%, rgba(79,70,229,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        {/* Thin horizontal rule at the bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-xs text-textMuted font-medium uppercase tracking-[0.18em] mb-7">
              No code. No terminal. No experience.
            </p>

            <h1
              className="animate-fade-up delay-1 font-bold text-textPrimary leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              You describe the house.
              <br />
              <span className="text-textSecondary font-light">The AI lays the bricks.</span>
            </h1>

            <p className="animate-fade-up delay-2 text-textSecondary leading-relaxed mb-10 max-w-xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
              Five modules. Real software at the end. You direct AI agents like a contractor
              and ship things that actually work.
            </p>

            <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-start gap-3">
              <Link
                to="/module/mindset/lesson/architect"
                className="px-7 py-3 bg-accent hover:bg-accentLight text-white font-semibold rounded-lg transition-all hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 text-sm"
              >
                Start here
              </Link>
              <a
                href="#modules"
                className="px-7 py-3 border border-border hover:border-accent/40 text-textSecondary hover:text-textPrimary rounded-lg transition-colors text-sm"
              >
                See all modules
              </a>
            </div>

            <div className="animate-fade-up delay-4 mt-10 flex items-center gap-6 text-xs text-textMuted">
              <span>{stats.totalModules} modules</span>
              <span className="w-px h-3 bg-border" />
              <span>{stats.totalLessons} lessons</span>
              <span className="w-px h-3 bg-border" />
              <span>Zero coding required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress banner (shows when started) */}
      {total.completed > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-8">
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-textPrimary">Your progress</p>
              <span className="text-xs text-textMuted">{total.completed}/{total.total} lessons complete</span>
            </div>
            <ProgressBar percent={total.percent} showLabel={false} height="h-1.5" />
          </div>
        </section>
      )}

      {/* What you'll learn — numbered list, not 3-col cards */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 items-start">
          <div>
            <p className="text-xs text-textMuted uppercase tracking-[0.15em] font-medium mb-4">What this course covers</p>
            <h2
              className="font-bold text-textPrimary leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Three tools.<br />That's the whole stack.
            </h2>
            <p className="text-textSecondary text-sm leading-relaxed">
              Antigravity for prototyping. Claude Cowork for managing. Claude Code for building.
              You run them like a director runs a crew.
            </p>
          </div>

          <div className="space-y-0 mt-8 md:mt-0">
            {features.map((f, i) => (
              <div
                key={f.number}
                className={`flex gap-5 py-6 ${i < features.length - 1 ? 'border-b border-border' : ''}`}
              >
                <span className="text-xs font-mono text-textMuted mt-1 w-6 shrink-0">{f.number}</span>
                <div>
                  <h3 className="text-textPrimary font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module grid */}
      <section id="modules" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs text-textMuted uppercase tracking-[0.15em] font-medium mb-1">Curriculum</p>
            <h2
              className="font-bold text-textPrimary tracking-tight"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
            >
              Course Modules
            </h2>
          </div>
          <span className="text-xs text-textMuted hidden sm:block">{stats.totalModules} modules · {stats.totalLessons} lessons</span>
        </div>

        <div className="module-card-grid grid sm:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              progress={getModuleProgress(mod.lessons)}
              isComplete={isComplete}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

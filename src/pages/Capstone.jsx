import Navbar from '../components/Navbar'
import ScopingTemplate from '../components/ScopingTemplate'
import { Link } from 'react-router-dom'

const reminders = [
  'Pick something small enough to ship in one focused session',
  'React + localStorage gets you surprisingly far without a backend',
  'The scoping doc becomes your CLAUDE.md. Fill it before you open Claude Code.',
  'A URL is the goal. Done beats perfect every time.',
]

const steps = [
  'Copy the brief above',
  'Open Claude Code in a new empty project folder',
  'Paste the brief. Say: "Generate a CLAUDE.md, then create a Phase 1 plan."',
  'Approve the plan, then say: "Execute Phase 1."',
  'Review what was built. Fix anything off. Start Phase 2.',
  'Deploy to Vercel. You now have a URL.',
]

export default function Capstone() {
  return (
    <div className="min-h-[100dvh] bg-bg">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs text-textMuted font-medium uppercase tracking-[0.18em] mb-5">
            Module 4 — Capstone
          </p>
          <h1
            className="text-textPrimary font-bold tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Build something real.
          </h1>
          <p className="text-textSecondary text-base leading-relaxed max-w-xl">
            Pick something you actually want. Scope it here. Then hand it to Claude Code and ship it.
            The template below becomes your CLAUDE.md.
          </p>
        </div>

        {/* Reminders */}
        <div className="bg-surface border border-border rounded-xl p-5 mb-10">
          <h3 className="text-textPrimary font-semibold text-sm mb-4">Before you start</h3>
          <ul className="space-y-2.5 text-sm text-textSecondary">
            {reminders.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent mt-0.5 shrink-0">
                  <path d="M2.5 7L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Scoping template */}
        <div className="mb-10">
          <h2 className="text-textPrimary font-bold text-lg mb-1 tracking-tight">Your scope brief</h2>
          <p className="text-textSecondary text-sm mb-6">
            Fill this out before touching any tool. Answers auto-save.
          </p>
          <ScopingTemplate />
        </div>

        {/* Next steps */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-textPrimary font-semibold text-sm mb-5">After you've scoped it</h3>
          <ol className="space-y-3 text-sm text-textSecondary">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-accent/12 text-accentLight text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-semibold">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs text-textMuted hover:text-textPrimary transition-colors">
            Back to all modules
          </Link>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

const FIELDS = [
  { key: 'projectName', label: 'Project name', placeholder: 'My awesome app', type: 'input' },
  { key: 'whatItDoes', label: 'What it does (one sentence)', placeholder: 'A tool that helps me track...', type: 'input' },
  { key: 'whoUsesIt', label: 'Who uses it', placeholder: 'Just me / small teams / anyone who...', type: 'input' },
  { key: 'coreFeatures', label: 'Core features for Phase 1 (max 3)', placeholder: '- Feature 1\n- Feature 2\n- Feature 3', type: 'textarea' },
  { key: 'outOfScope', label: 'Explicitly out of scope', placeholder: '- No accounts/login\n- No mobile app\n- No payments', type: 'textarea' },
  { key: 'techStack', label: 'Tech stack', placeholder: 'React + Vite, Tailwind CSS, localStorage', type: 'input' },
  { key: 'doneDefinition', label: 'Definition of done for Phase 1', placeholder: 'App loads, I can add/remove items, data persists on refresh', type: 'textarea' },
]

const STORAGE_KEY = 'vibe-capstone-scope'

const loadSaved = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export default function ScopingTemplate() {
  const [values, setValues] = useState(loadSaved)
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)

  const update = (key, value) => {
    const next = { ...values, [key]: value }
    setValues(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {}
  }

  const generatePrompt = () => {
    return `Project name: ${values.projectName || '[your project name]'}
What it does: ${values.whatItDoes || '[one sentence description]'}
Who uses it: ${values.whoUsesIt || '[describe the user]'}

Core features for Phase 1 (max 3):
${values.coreFeatures || '- Feature 1\n- Feature 2\n- Feature 3'}

Explicitly out of scope:
${values.outOfScope || '- [what to exclude]'}

Tech stack: ${values.techStack || '[React, plain HTML, Python — whatever fits]'}

Definition of done for Phase 1: ${values.doneDefinition || '[how will you know it works?]'}`
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const isComplete = FIELDS.every((f) => values[f.key]?.trim())

  return (
    <div className="space-y-6">
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
        <p className="text-textSecondary text-sm leading-relaxed">
          Fill this out before writing a single build prompt. Your answers become the briefing document
          that keeps your AI agent focused and your project on track.
        </p>
      </div>

      <div className="space-y-5">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-textPrimary mb-2">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                value={values[field.key] || ''}
                onChange={(e) => update(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted font-mono focus:outline-none focus:border-accent/60 transition-colors resize-none"
              />
            ) : (
              <input
                type="text"
                value={values[field.key] || ''}
                onChange={(e) => update(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-sm text-textPrimary placeholder-textMuted focus:outline-none focus:border-accent/60 transition-colors"
              />
            )}
          </div>
        ))}
      </div>

      {/* Generated prompt preview */}
      <div className="rounded-xl border border-accent/30 bg-surfaceHigh overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-accent/10 border-b border-accent/20">
          <span className="text-accentLight text-xs font-medium uppercase tracking-widest">
            Your Scope Brief
          </span>
          <button
            onClick={handleCopy}
            className="text-xs text-textMuted hover:text-accentLight transition-colors flex items-center gap-1.5 px-2 py-1 rounded hover:bg-accent/10"
          >
            {copied ? '✓ Copied' : '⎘ Copy to clipboard'}
          </button>
        </div>
        <pre className="p-5 text-xs font-mono text-textSecondary leading-relaxed whitespace-pre-wrap">
          {generatePrompt()}
        </pre>
      </div>

      {isComplete && (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 text-center">
          <p className="text-accentLight text-sm font-medium">
            Scope complete. Copy the brief above and hand it to Claude Code to start building.
          </p>
        </div>
      )}
    </div>
  )
}

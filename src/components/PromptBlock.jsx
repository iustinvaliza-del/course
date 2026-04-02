import { useState } from 'react'

export default function PromptBlock({ label, prompt, note }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select text
    }
  }

  return (
    <div className="my-8 rounded-xl overflow-hidden border border-accent/30 bg-surfaceHigh">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-accent/10 border-b border-accent/20">
        <div className="flex items-center gap-2">
          <span className="text-accent text-xs font-mono">▸</span>
          <span className="text-accentLight text-xs font-medium uppercase tracking-widest">
            Example Prompt
          </span>
          {label && (
            <>
              <span className="text-textMuted text-xs">—</span>
              <span className="text-textSecondary text-xs">{label}</span>
            </>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-textMuted hover:text-accentLight transition-colors flex items-center gap-1.5 px-2 py-1 rounded hover:bg-accent/10"
        >
          {copied ? (
            <>
              <span>✓</span>
              <span>Copied</span>
            </>
          ) : (
            <>
              <span>⎘</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Prompt text */}
      <pre className="p-5 text-sm font-mono text-textPrimary leading-relaxed whitespace-pre-wrap overflow-x-auto">
        {prompt.trim()}
      </pre>

      {/* Note */}
      {note && (
        <div className="px-5 py-3 border-t border-border flex items-start gap-2">
          <span className="text-accent text-xs mt-0.5 shrink-0">↳</span>
          <p className="text-textMuted text-xs leading-relaxed">{note}</p>
        </div>
      )}
    </div>
  )
}

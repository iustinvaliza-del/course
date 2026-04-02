export default function ProgressBar({ percent, label, showLabel = true, height = 'h-1.5', color = 'bg-accent' }) {
  return (
    <div className="space-y-1.5">
      {showLabel && (
        <div className="flex items-center justify-between text-xs text-textMuted">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
      )}
      <div className={`${height} bg-surfaceHigh rounded-full overflow-hidden`}>
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
        />
      </div>
    </div>
  )
}

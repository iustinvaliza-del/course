// SVG icons per module — no emojis
const icons = {
  0: ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10.5c0-1.657 1.343-3 3-3s3 1.343 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="13" r="1" fill="currentColor" />
    </svg>
  ),
  1: ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 2L11.8 7.2H17.4L12.8 10.4L14.6 15.6L10 12.4L5.4 15.6L7.2 10.4L2.6 7.2H8.2L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  2: ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8h6M7 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  3: ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M10 3L13 8H17L14 11.5L15.5 17L10 14L4.5 17L6 11.5L3 8H7L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  4: ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
}

export default function ModuleIcon({ number, size = 20, className = '' }) {
  const Icon = icons[number] ?? icons[0]
  return <Icon size={size} className={className} />
}

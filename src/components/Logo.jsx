function NexoMark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="presentation"
      aria-hidden="true"
    >
      <line x1="8" y1="8" x2="32" y2="32" stroke="#18A6A0" strokeWidth="2.5" />
      <line x1="32" y1="8" x2="8" y2="32" stroke="#142B44" strokeWidth="2.5" />
      <circle cx="8" cy="8" r="4" fill="#F7F8FA" stroke="#18A6A0" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="4" fill="#F7F8FA" stroke="#18A6A0" strokeWidth="2.5" />
      <circle cx="32" cy="8" r="4" fill="#F7F8FA" stroke="#142B44" strokeWidth="2.5" />
      <circle cx="8" cy="32" r="4" fill="#F7F8FA" stroke="#142B44" strokeWidth="2.5" />
    </svg>
  )
}

export default function Logo({ size = 32, dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <NexoMark size={size} />
      <span
        className={`font-heading font-semibold tracking-tight ${dark ? 'text-white' : 'text-azul'}`}
        style={{ fontSize: size * 0.75 }}
      >
        NEXO
      </span>
    </div>
  )
}

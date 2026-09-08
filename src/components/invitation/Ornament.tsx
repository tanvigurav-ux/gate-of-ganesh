export function Ornament({ className = "", tone = "gold" }: { className?: string; tone?: "gold" | "deep" }) {
  const stroke = tone === "gold" ? "var(--gold)" : "var(--gold-deep)";
  return (
    <svg
      viewBox="0 0 240 24"
      role="presentation"
      aria-hidden="true"
      className={`h-6 w-52 max-w-full ${className}`}
      fill="none"
    >
      <path d="M0 12h84" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <path d="M156 12h84" stroke={stroke} strokeWidth="1" opacity="0.7" />
      <path
        d="M120 3c6 4 10 6 16 9-6 3-10 5-16 9-6-4-10-6-16-9 6-3 10-5 16-9Z"
        stroke={stroke}
        strokeWidth="1.1"
      />
      <circle cx="120" cy="12" r="2.4" fill={stroke} />
      <circle cx="94" cy="12" r="1.8" fill={stroke} opacity="0.85" />
      <circle cx="146" cy="12" r="1.8" fill={stroke} opacity="0.85" />
    </svg>
  );
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="none">
      <path
        d="M4 4h30M4 4v30M12 12c22 0 34 12 34 34"
        stroke="var(--gold)"
        strokeWidth="1.2"
        opacity="0.9"
      />
      <path d="M12 34c10-6 16-12 22-22" stroke="var(--gold)" strokeWidth="0.9" opacity="0.6" />
      <circle cx="46" cy="46" r="2.2" fill="var(--gold)" />
    </svg>
  );
}

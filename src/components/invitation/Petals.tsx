const petals = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7.3 + 4) % 98,
  size: 6 + ((i * 5) % 9),
  delay: (i * 1.7) % 14,
  duration: 16 + ((i * 3) % 11),
  drift: (i % 2 === 0 ? 1 : -1) * (30 + ((i * 13) % 90)),
  hue: i % 3,
}));

export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block rounded-[60%_40%_55%_45%/50%_60%_40%_50%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.72,
            background:
              p.hue === 0
                ? "var(--marigold)"
                : p.hue === 1
                  ? "var(--gold-soft)"
                  : "var(--gold-deep)",
            opacity: 0,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

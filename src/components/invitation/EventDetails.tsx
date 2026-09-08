import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
    <path d="M12 7v5.5l3.5 2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path
      d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export function EventDetails() {
  const cards = [
    { icon: <CalendarIcon />, label: "Date", value: invitation.event.date },
    { icon: <ClockIcon />, label: "Time", value: invitation.event.time },
    { icon: <PinIcon />, label: "Venue", value: invitation.event.venue },
  ];

  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-gold-gradient sm:text-5xl">
            {invitation.event.title}
          </h2>
          <Ornament className="mx-auto mt-5" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 120}>
              <article className="h-full border border-gold/30 bg-card/60 px-6 py-10 backdrop-blur-sm transition-colors duration-500 hover:border-gold/70">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold">
                  {card.icon}
                </div>
                <p className="mt-6 text-[0.65rem] uppercase tracking-[0.4em] text-gold/80">
                  {card.label}
                </p>
                <p className="mt-3 font-display text-2xl text-ivory">{card.value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function LocationSection() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl text-gold-gradient sm:text-5xl">Join Us</h2>
        <Ornament className="mx-auto mt-5" />
        <p className="mt-10 font-display text-2xl text-ivory sm:text-3xl">
          {invitation.location.name}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {invitation.location.address}
        </p>
        <a
          href={invitation.location.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 border border-gold px-9 py-4 text-[0.7rem] uppercase tracking-[0.35em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
        >
          Get Directions
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}

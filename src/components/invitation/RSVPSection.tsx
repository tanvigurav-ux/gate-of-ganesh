import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function RSVPSection() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl leading-snug text-ivory sm:text-4xl">
          We Would Love To Celebrate With You
        </h2>
        <Ornament className="mx-auto my-7" />
        <p className="text-base text-muted-foreground">
          Your presence will make our celebration even more special.
        </p>
        <a
          href={invitation.rsvp.url}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block px-12 py-4 text-[0.7rem] uppercase tracking-[0.4em] text-primary-foreground transition-transform duration-500 hover:scale-[1.04]"
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
        >
          RSVP
        </a>
      </Reveal>
    </section>
  );
}

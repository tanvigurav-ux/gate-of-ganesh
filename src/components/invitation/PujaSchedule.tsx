import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function PujaSchedule() {
  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-gold-gradient sm:text-5xl">Puja &amp; Aarti</h2>
          <Ornament className="mx-auto mt-5" />
        </Reveal>

        <ul className="mt-14 space-y-1">
          {invitation.schedule.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 100}>
              <div className="flex flex-col gap-1 py-6 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
                <span className="font-display text-2xl text-ivory">{item.name}</span>
                <span
                  aria-hidden="true"
                  className="hidden flex-1 border-b border-dotted border-gold/30 sm:mx-5 sm:block"
                />
                <span className="text-sm uppercase tracking-[0.3em] text-gold">{item.time}</span>
              </div>
              {i < invitation.schedule.length - 1 && <Ornament className="mx-auto opacity-50" />}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

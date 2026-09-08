import portrait from "@/assets/bappa-portrait.jpg";
import { Ornament } from "./Ornament";
import { Petals } from "./Petals";
import { Reveal } from "./Reveal";

export function BappaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <Petals />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.79 0.13 85 / 0.28), transparent 68%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-gold-gradient sm:text-5xl">
            Our Beloved Bappa
          </h2>
          <Ornament className="mx-auto mt-5" />
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <figure className="relative mx-auto max-w-md p-3" style={{ boxShadow: "var(--shadow-gold)" }}>
            <div
              aria-hidden="true"
              className="absolute inset-0 border-2"
              style={{ borderColor: "oklch(0.79 0.13 85 / 0.65)" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-2 border"
              style={{ borderColor: "oklch(0.79 0.13 85 / 0.35)" }}
            />
            <img
              src={portrait}
              alt="Close-up of the decorated Ganesha idol with a golden crown and flowers"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          </figure>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-12 max-w-xl font-display text-lg italic leading-relaxed text-cream/85 sm:text-xl">
            May the remover of obstacles walk with you always — filling every doorway with light,
            every heart with courage, and every home with the sweetness of His blessings.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

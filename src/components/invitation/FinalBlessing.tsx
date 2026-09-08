import diyas from "@/assets/gallery-2.jpg";
import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Petals } from "./Petals";
import { Reveal } from "./Reveal";

export function FinalBlessing() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24">
      <img
        src={diyas}
        alt="Row of lit brass diyas with marigold petals"
        width={1024}
        height={1024}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 85%, oklch(0.79 0.13 85 / 0.3), transparent 60%), linear-gradient(180deg, oklch(0.19 0.075 315 / 0.95), oklch(0.16 0.06 312 / 0.9))",
        }}
      />
      <Petals />

      <Reveal className="relative z-10 max-w-2xl text-center">
        <p className="font-deva text-xl text-gold sm:text-2xl">॥ श्री गणेशाय नमः ॥</p>
        <h2 className="mt-6 font-display text-5xl text-gold-gradient sm:text-6xl">
          Ganpati Bappa Morya
        </h2>
        <Ornament className="mx-auto my-8" />
        <p className="mx-auto max-w-lg font-display text-lg italic leading-relaxed text-cream/85 sm:text-xl">
          May Bappa bless you and your family with happiness, prosperity and peace.
        </p>
        <p className="mt-12 text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">
          {invitation.hosts}
        </p>
      </Reveal>
    </section>
  );
}

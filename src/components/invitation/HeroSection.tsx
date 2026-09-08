import heroImage from "@/assets/bappa-hero.jpg";
import { Ornament } from "./Ornament";
import { Petals } from "./Petals";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24">
      <img
        src={heroImage}
        alt="Decorated Ganesha idol surrounded by marigold garlands and glowing lamps"
        width={1536}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, oklch(0.79 0.13 85 / 0.22), transparent 60%), linear-gradient(180deg, oklch(0.16 0.06 312 / 0.7), oklch(0.19 0.075 315 / 0.9))",
        }}
      />
      <Petals />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <p className="font-deva text-2xl text-gold-gradient sm:text-3xl md:text-4xl">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <Ornament className="my-6" />
        <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl">
          Ganpati Bappa Morya
        </h1>
        <p className="mt-7 text-xs uppercase tracking-[0.55em] text-gold sm:text-sm">
          You're Invited
        </p>
        <p className="mt-4 max-w-md font-display text-lg italic text-cream/85 sm:text-xl">
          To celebrate the arrival of our beloved Bappa
        </p>
      </div>

      <a
        href="#invitation"
        aria-label="Scroll to the invitation"
        className="animate-scroll-hint absolute bottom-8 z-10 flex flex-col items-center gap-2 text-gold"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">Scroll</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </a>
    </section>
  );
}

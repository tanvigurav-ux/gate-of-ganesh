import { Ornament, CornerFlourish } from "./Ornament";
import { Reveal } from "./Reveal";

export function InvitationMessage() {
  return (
    <section id="invitation" className="px-6 py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl">
        <div
          className="paper relative px-7 py-14 text-center sm:px-14 sm:py-20"
          style={{ boxShadow: "var(--shadow-royal)" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-3 border sm:inset-5"
            style={{ borderColor: "oklch(0.62 0.115 78 / 0.5)" }}
          />
          <CornerFlourish className="absolute left-5 top-5 h-10 w-10 sm:left-7 sm:top-7" />
          <CornerFlourish className="absolute right-5 top-5 h-10 w-10 rotate-90 sm:right-7 sm:top-7" />
          <CornerFlourish className="absolute bottom-5 left-5 h-10 w-10 -rotate-90 sm:bottom-7 sm:left-7" />
          <CornerFlourish className="absolute bottom-5 right-5 h-10 w-10 rotate-180 sm:bottom-7 sm:right-7" />

          <div className="relative">
            <p className="mx-auto max-w-lg text-base leading-relaxed opacity-80 sm:text-lg">
              With immense joy and devotion, we invite you and your family to join us as we welcome
              our beloved Lord Ganesha into our home.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

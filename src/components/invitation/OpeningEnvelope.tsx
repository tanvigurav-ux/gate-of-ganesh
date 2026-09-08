import { useEffect, useState } from "react";
import envelopeTexture from "@/assets/envelope-floral-texture.jpeg.asset.json";
import { StampSeal } from "./StampSeal";
import { Ornament, CornerFlourish } from "./Ornament";

type Phase = "closed" | "breaking" | "opening" | "done";

export function OpeningEnvelope({ onOpened }: { onOpened: () => void }) {
  const [phase, setPhase] = useState<Phase>("closed");

  useEffect(() => {
    document.body.classList.add("is-locked");
    return () => document.body.classList.remove("is-locked");
  }, []);

  useEffect(() => {
    if (phase !== "breaking") return;
    const toOpening = window.setTimeout(() => setPhase("opening"), 700);
    return () => window.clearTimeout(toOpening);
  }, [phase]);

  useEffect(() => {
    if (phase !== "opening") return;
    const finish = window.setTimeout(() => {
      setPhase("done");
      document.body.classList.remove("is-locked");
      window.scrollTo({ top: 0 });
      onOpened();
    }, 2200);
    return () => window.clearTimeout(finish);
  }, [phase, onOpened]);

  if (phase === "done") return null;

  const opening = phase === "opening";

  const panelBase =
    "relative h-full w-1/2 paper overflow-hidden transition-transform duration-[2000ms] ease-[cubic-bezier(0.65,0,0.25,1)]";

  return (
    <div
      className="fixed inset-0 z-50 select-none"
      style={{ perspective: "1600px", background: "var(--gradient-royal)" }}
    >
      {/* golden glow behind the gates */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[1600ms] ${
          phase === "closed" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.88 0.12 85 / 0.7), oklch(0.79 0.13 85 / 0.18) 38%, transparent 68%)",
        }}
      />

      <div className="absolute inset-0 flex">
        {/* LEFT GATE */}
        <div
          className={panelBase}
          style={{
            transformOrigin: "left center",
            transform: opening
              ? "perspective(1600px) rotateY(-108deg) translateX(-14%)"
              : "none",
            boxShadow: "var(--shadow-royal)",
          }}
        >
          <EnvelopeFace side="left" />
        </div>

        {/* RIGHT GATE */}
        <div
          className={panelBase}
          style={{
            transformOrigin: "right center",
            transform: opening
              ? "perspective(1600px) rotateY(108deg) translateX(14%)"
              : "none",
            boxShadow: "var(--shadow-royal)",
          }}
        >
          <EnvelopeFace side="right" />
        </div>
      </div>

      {/* centre seam content: text + seal */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-all duration-700 ${
          phase === "closed" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ color: "oklch(0.24 0.06 316)" }}
      >
        <p className="font-deva text-2xl tracking-wide sm:text-3xl md:text-4xl">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <Ornament tone="deep" />
        <p className="font-display text-base italic tracking-[0.18em] sm:text-lg">
          With the blessings of Lord Ganesha
        </p>

        <div className="pointer-events-auto my-2">
          <StampSeal
            onOpen={() => phase === "closed" && setPhase("breaking")}
            breaking={phase !== "closed"}
            disabled={phase !== "closed"}
          />
        </div>

        <p className="animate-soft-pulse text-[0.7rem] uppercase tracking-[0.42em] sm:text-xs">
          Tap the seal to open
        </p>
      </div>
    </div>
  );
}

function EnvelopeFace({ side }: { side: "left" | "right" }) {
  return (
    <div className="absolute inset-0">
      {/* embossed floral paper texture, continued across both gates */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-80 mix-blend-multiply"
        style={{
          backgroundImage: `url(${envelopeTexture.url})`,
          backgroundPosition: side === "left" ? "left center" : "right center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200% 100%",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.75), transparent 62%)",
        }}
      />
      {/* flap diagonal */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            side === "left"
              ? "linear-gradient(to bottom right, oklch(0.62 0.115 78 / 0.14) 0 49.6%, transparent 49.6%)"
              : "linear-gradient(to bottom left, oklch(0.62 0.115 78 / 0.14) 0 49.6%, transparent 49.6%)",
        }}
      />
      {/* ornamental border */}
      <div
        aria-hidden="true"
        className="absolute inset-4 border sm:inset-7"
        style={{ borderColor: "oklch(0.62 0.115 78 / 0.55)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 border sm:inset-9"
        style={{ borderColor: "oklch(0.62 0.115 78 / 0.28)" }}
      />
      <CornerFlourish
        className={`absolute top-6 h-14 w-14 sm:top-9 ${
          side === "left" ? "left-6 sm:left-9" : "right-6 rotate-90 sm:right-9"
        }`}
      />
      <CornerFlourish
        className={`absolute bottom-6 h-14 w-14 sm:bottom-9 ${
          side === "left" ? "left-6 -rotate-90 sm:left-9" : "right-6 rotate-180 sm:right-9"
        }`}
      />
      {/* inner seam shading */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 w-16"
        style={{
          [side === "left" ? "right" : "left"]: 0,
          background:
            side === "left"
              ? "linear-gradient(to right, transparent, oklch(0.3 0.06 316 / 0.18))"
              : "linear-gradient(to left, transparent, oklch(0.3 0.06 316 / 0.18))",
        }}
      />
    </div>
  );
}

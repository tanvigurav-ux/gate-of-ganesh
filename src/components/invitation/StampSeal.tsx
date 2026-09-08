import sealImage from "@/assets/seal.png";

export function StampSeal({
  onOpen,
  breaking,
  disabled,
}: {
  onOpen: () => void;
  breaking: boolean;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      disabled={disabled}
      aria-label="Tap the seal to open the invitation"
      className="group relative grid place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-transparent disabled:cursor-default"
    >
      <span
        aria-hidden="true"
        className="animate-glow absolute h-[125%] w-[125%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.79 0.13 85 / 0.55), transparent 68%)",
          filter: "blur(10px)",
        }}
      />
      <img
        src={sealImage}
        alt=""
        width={816}
        height={816}
        className={`relative w-32 select-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-40 md:w-48 ${
          breaking
            ? "scale-[0.82] rotate-[14deg] opacity-0 blur-[2px]"
            : "animate-seal group-hover:scale-[1.06] group-active:scale-95"
        }`}
        draggable={false}
      />
      {breaking && (
        <>
          <span
            aria-hidden="true"
            className="absolute h-40 w-40 rounded-full border border-gold/70 sm:h-52 sm:w-52"
            style={{ animation: "glow-breathe 0.9s ease-out forwards", transform: "scale(1.8)" }}
          />
        </>
      )}
    </button>
  );
}

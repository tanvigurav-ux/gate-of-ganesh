import { invitation } from "@/data/invitation";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function GallerySection() {
  const [featured, ...rest] = invitation.gallery;

  return (
    <section className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-gold-gradient sm:text-5xl">Celebrations</h2>
          <Ornament className="mx-auto mt-5" />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal as="figure" className="md:col-span-2">
            <GalleryFrame src={featured.src} alt={featured.alt} className="aspect-4/3" />
          </Reveal>
          <div className="grid gap-5">
            {rest.slice(0, 2).map((img, i) => (
              <Reveal as="figure" key={img.alt} delay={(i + 1) * 120}>
                <GalleryFrame src={img.src} alt={img.alt} className="aspect-4/3" />
              </Reveal>
            ))}
          </div>
          {rest.slice(2).map((img, i) => (
            <Reveal as="figure" key={img.alt} delay={i * 120} className="md:col-span-3">
              <GalleryFrame src={img.src} alt={img.alt} className="aspect-21/9" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden border border-gold/35 p-2 ${className}`}>
      <div className="h-full w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: "radial-gradient(circle at 50% 100%, oklch(0.79 0.13 85 / 0.25), transparent 60%)",
        }}
      />
    </div>
  );
}

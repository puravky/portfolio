import Image from "next/image";

export function HeroImage() {
  return (
    <div className="hero-stage">
      <section className="image-hero" aria-label="A visual introduction to the digital crib">
        <Image
          className="hero-photo"
          src="/header.webp"
          alt="A vintage computer in a sunlit hillside meadow"
          fill
          priority
          sizes="(max-width: 700px) calc(100vw - 28px), 806px"
        />
      </section>
    </div>
  );
}

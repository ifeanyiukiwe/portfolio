import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string; // small label above the title
  title: string; // the page's <h1>
  intro: string; // paragraph under the title
  image?: { src: string; alt: string }; // optional, Home only
  children?: ReactNode; // buttons, chips, links...
};

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading">
      <div className="container-page pt-8">
        <div className="flex flex-col gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-petrol-deep to-petrol px-6 py-12 md:flex-row md:items-center md:px-12 md:py-16">
          {/* Text column */}
          <div className="flex flex-1 flex-col gap-6">
            <p className="font-mono text-sm tracking-wide text-white/80">
              {eyebrow}
            </p>
            <h1
              id="page-hero-heading"
              className="max-w-[18ch] text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              {title}
            </h1>
            <p className="max-w-2xl text-lg text-white/85 md:text-xl">
              {intro}
            </p>
            {children}
          </div>

          {/* Image: only shown if a page passes one */}
          {image && (
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={1000}
              priority
              className="h-auto w-full max-w-[360px] shrink-0 self-center -mb-12 md:-mb-16 md:self-end"
            />
          )}
        </div>
      </div>
    </section>
  );
}

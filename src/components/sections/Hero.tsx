"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/site";

/**
 * Hero principal do site.
 * Vídeo de fundo em loop com conteúdo animado ao carregar.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      <video
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="https://pinktech.com.br/videos/rene-tattoo-hero.mp4" type="video/mp4" />
      </video>

      <video
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="https://pinktech.com.br/videos/rene-tattoo-hero-mobile.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 motion-fade-in" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-center">
        <div className="max-w-xl text-left">
          <Reveal onMount variant="up" delay={0.1}>
            <h1 className="text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Onde técnica, precisão e significado se encontram.
            </h1>
          </Reveal>

          <Reveal onMount variant="up" delay={0.25}>
            <p className="mt-6 max-w-md text-sm text-[#AFAFAF] sm:text-base">
              Tatuagens autorais feitas com cuidado, precisão e propósito. Do seu
              primeiro traço à sua próxima peça, transformamos a sua ideia em arte
              na pele.
            </p>
          </Reveal>

          <Reveal onMount variant="up" delay={0.4}>
            <div className="mt-8 flex w-full justify-center gap-4 md:w-auto md:justify-start">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white px-8 py-3 text-center text-sm font-medium text-black transition-base hover:bg-[#AFAFAF] md:flex-none"
              >
                Saiba mais
              </a>
              <a
                href="#gallery"
                className="flex-1 bg-white px-8 py-3 text-center text-sm font-medium text-black transition-base hover:bg-[#AFAFAF] md:flex-none"
              >
                Ver galeria
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

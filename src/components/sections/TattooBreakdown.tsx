import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * Seção de breakdown de tatuagem.
 * Citação impactante à esquerda e vídeo do processo à direita.
 */
export default function TattooBreakdown() {
  return (
    <section id="tattoo-breakdown" className="section-spacing">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal variant="left" className="w-full lg:w-6/12">
            <blockquote className="w-full px-2 sm:px-6 lg:px-0">
              <div className="relative w-fit max-w-full pb-8 pr-6 pt-6 pl-4">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 font-serif text-7xl leading-none text-white/10 sm:text-8xl"
                >
                  &ldquo;
                </span>

                <p className="relative z-10 text-2xl font-medium leading-snug text-white sm:text-3xl lg:text-4xl">
                  Mais do que uma tatuagem, uma obra de arte feita para
                  acompanhar você por toda a vida.
                </p>
              </div>

              <footer className="mt-2 text-sm text-[#AFAFAF] sm:text-base">
                — Renê Aroca · House Tattoo Art
              </footer>
            </blockquote>
          </Reveal>

          <Reveal variant="right" delay={0.12} className="w-full lg:w-4/12">
            <div className="overflow-hidden rounded-lg border border-white/10">
              <video
                className="aspect-[1080/1920] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Processo de tatuagem em realismo preto e cinza"
              >
                <source src="https://pinktech.com.br/videos/rene-tattoo-tattoo-breakdown.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

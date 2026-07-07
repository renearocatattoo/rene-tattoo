import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import StudioGallery from "@/components/ui/StudioGallery";
import { CONTACT } from "@/data/site";

/** Imagens do estúdio exibidas na galeria/carrossel. */
const STUDIO_IMAGES = [
  "/images/studio-1.png",
  "/images/studio-2.png",
  "/images/studio-3.png",
  "/images/studio-4.png",
  "/images/studio-5.png",
  "/images/studio-6.png",
];

/**
 * Seção do estúdio.
 * Apresenta o espaço com título, descrição, galeria e ações de contato.
 */
export default function Studio() {
  return (
    <section id="studio" className="section-spacing">
      <Container>
        <Reveal variant="up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Nosso Estúdio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#AFAFAF] sm:text-base">
              Um ambiente privado, reservado e confortável, pensado para
              proporcionar uma experiência exclusiva e personalizada do início ao
              fim.
            </p>
          </div>
        </Reveal>

        <StudioGallery images={STUDIO_IMAGES} alt="Ambiente do estúdio" />

        <Reveal variant="up" delay={0.15}>
          <div className="mt-12 flex w-full justify-center gap-3 sm:w-auto sm:gap-4">
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 whitespace-nowrap bg-white px-5 py-3 text-center text-sm font-medium text-black transition-base hover:bg-[#AFAFAF] sm:flex-none sm:px-8"
            >
              Ver no mapa
            </a>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 whitespace-nowrap bg-white px-5 py-3 text-center text-sm font-medium text-black transition-base hover:bg-[#AFAFAF] sm:flex-none sm:px-8"
            >
              Agendar um horário
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

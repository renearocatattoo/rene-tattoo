import Reveal from "@/components/ui/Reveal";
import TattooGalleryMobile from "@/components/ui/TattooGalleryMobile";
import TattooGalleryStrip from "@/components/ui/TattooGalleryStrip";
import { CONTACT } from "@/data/site";/**
 * Galeria de trabalhos.
 * Exibe composição visual e bloco de chamada com animações sutis ao scroll.
 */
export default function Gallery() {
  return (
    <section id="gallery" className="w-full overflow-hidden">
      <Reveal variant="scale" duration={0.7}>
        <div className="hidden md:block">
          <TattooGalleryStrip />
        </div>
      </Reveal>
      <Reveal variant="scale" duration={0.7}>
        <div className="md:hidden">
          <TattooGalleryMobile />
        </div>
      </Reveal>
      <div className="relative flex aspect-[1200/1600] w-full items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('/images/bg-gallery-mobile.png')] md:aspect-[1920/730] md:bg-[url('/images/bg-gallery.png')]">
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <Reveal variant="up">
            <h2 className="max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Realismo preto e cinza que transforma histórias em arte
              permanente.
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.12}>
            <p className="mt-6 max-w-2xl text-sm text-[#afafaf] sm:text-base lg:text-lg">
              Mais do que uma tatuagem, uma experiência única e personalizada do
              primeiro contato à finalização. Projetos exclusivos, feitos com
              técnica, profundidade e riqueza de detalhes para acompanhar você por
              toda a vida.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.22}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-white px-8 py-3 text-sm font-medium text-black transition-base hover:bg-[#afafaf]"
            >
              Agendar agora
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

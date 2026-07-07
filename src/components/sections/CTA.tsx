import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/data/site";

/**
 * Seção de contato e localização.
 * Exibe mapa embutido, informações de contato e ação principal de agendamento.
 */
export default function CTA() {
  return (
    <section id="cta" className="section-spacing">
      <Container>
        <Reveal variant="up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Contato
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#AFAFAF] sm:text-base">
              Estamos em Colina, São Paulo. Entre em contato para agendar sua
              sessão ou tirar dúvidas sobre o seu projeto.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-12">
          <Reveal variant="left" delay={0.08}>
            <div className="h-full overflow-hidden rounded-lg border border-white/10 bg-black">
              <iframe
                src={CONTACT.mapsEmbedUrl}
                title="Localização House Tattoo Art"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-[4/3] h-full min-h-[280px] w-full lg:min-h-[420px]"
              />
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.16}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  House Tattoo Art
                </h3>
                <p className="mt-2 text-sm text-[#AFAFAF]">
                  Estúdio privado de tatuagem em realismo preto e cinza.
                </p>

                <ul className="mt-8 flex flex-col gap-5 text-sm sm:text-base">
                  <li>
                    <span className="block text-xs font-medium uppercase tracking-wider text-white">
                      Endereço
                    </span>
                    <a
                      href={CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[#AFAFAF] transition-base hover:text-white"
                    >
                      {CONTACT.address}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-medium uppercase tracking-wider text-white">
                      WhatsApp
                    </span>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[#AFAFAF] transition-base hover:text-white"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-medium uppercase tracking-wider text-white">
                      Instagram
                    </span>
                    <a
                      href={CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[#AFAFAF] transition-base hover:text-white"
                    >
                      {CONTACT.instagram}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white px-6 py-3 text-center text-sm font-medium text-black transition-base hover:bg-[#AFAFAF]"
                >
                  Agendar agora
                </a>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-white px-6 py-3 text-center text-sm font-medium text-white transition-base hover:bg-white hover:text-black"
                >
                  Abrir no mapa
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT, NAV_LINKS, SOCIAL_LINKS } from "@/data/site";

/**
 * Rodapé do site.
 * Desktop: logo + descrição + redes à esquerda; colunas à direita.
 * Mobile: tudo centralizado e empilhado.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-white/10 bg-black text-white">
      <Container className="py-14">
        <Reveal variant="up" offset={16}>
          <div className="flex flex-col items-center gap-16 text-center md:flex-row md:items-start md:justify-between md:gap-28 md:text-left">
            <div className="flex flex-col items-center md:items-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.webp"
                alt="House Tattoo Art"
                className="h-[12.5rem] w-auto"
              />

              <p className="mt-5 max-w-xs text-sm text-[#AFAFAF]">
                Estúdio de tatuagem especializado em realismo preto e cinza.
                Técnica, precisão e significado em cada projeto.
              </p>

              <ul className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AFAFAF] text-black transition-base hover:bg-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-10 text-left sm:grid-cols-2 md:gap-16">
              <nav aria-label="Principal">
                <h2 className="text-3xl font-semibold uppercase tracking-wider text-white md:text-4xl">
                  Principal
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-[#AFAFAF] transition-base hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2 className="text-3xl font-semibold uppercase tracking-wider text-white md:text-4xl">
                  CONTATO
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-[#AFAFAF]">
                  <li>
                    <a
                      href={CONTACT.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-base hover:text-white"
                    >
                      {CONTACT.address}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-base hover:text-white"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.15}>
          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[#AFAFAF]">
            © {year} | Todos os direitos reservados. Desenvolvido por{" "}
            <a
              href="https://www.linksvibe.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-base hover:text-[#AFAFAF]"
            >
              Links Vibe
            </a>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}

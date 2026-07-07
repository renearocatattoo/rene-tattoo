import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";

/**
 * Seção sobre o artista.
 * Imagem à esquerda e biografia à direita, com layout responsivo.
 */
export default function AboutUs() {
  return (
    <section id="about-us" className="section-spacing">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <div className="overflow-hidden rounded-lg border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-us.png"
                alt="Renê Aroca trabalhando no estúdio"
                className="aspect-[1071/1428] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.1}>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#AFAFAF]">
                Onde técnica, precisão e significado se encontram.
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Sobre Mim
              </h2>

              <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-[#AFAFAF] sm:text-base">
                <p>
                  Meu nome é <span className="text-white">Renê Aroca</span> e a
                  tatuagem faz parte da minha vida desde muito cedo. Iniciei minha
                  trajetória em 2016, aos 16 anos de idade, movido pela paixão
                  pela arte e pelo desejo de transformar histórias em algo
                  permanente. Em 2020, dei início à minha carreira profissional,
                  dedicando-me integralmente ao aperfeiçoamento da técnica e à
                  construção de uma identidade artística própria.
                </p>

                <p>
                  Hoje, sou reconhecido principalmente pelo meu trabalho em{" "}
                  <span className="text-white">realismo preto e cinza</span>,
                  estilo no qual busco unir técnica, profundidade, contraste e
                  riqueza de detalhes para criar tatuagens exclusivas e
                  atemporais.
                </p>

                <p>
                  Atendo em meu estúdio privado em Colina, São Paulo, oferecendo
                  um ambiente reservado, confortável e pensado para proporcionar
                  uma experiência personalizada do início ao fim. Além disso,
                  realizo atendimentos em São Paulo capital e Curitiba, levando
                  meu trabalho para clientes de diferentes regiões.
                </p>

                <p>
                  Um dos momentos mais marcantes da minha trajetória aconteceu em
                  2024, quando tive a oportunidade de trabalhar em{" "}
                  <span className="text-white">Paris</span>, durante o período das
                  Olimpíadas. Essa experiência internacional ampliou minha visão
                  artística e reforçou ainda mais meu compromisso com a excelência
                  em cada projeto.
                </p>

                <p>
                  Mais do que executar uma tatuagem, acredito em criar uma
                  experiência única para cada cliente. Desde o primeiro contato
                  até a finalização do trabalho, cada detalhe é pensado de forma
                  individual, desenvolvendo projetos exclusivos que respeitam a
                  história, a personalidade e o significado que cada tatuagem
                  carrega.
                </p>

                <p className="border-l-2 border-white/20 pl-4 text-white">
                  Meu compromisso é entregar não apenas uma tatuagem de alto
                  nível técnico, mas uma obra de arte feita para acompanhar você
                  por toda a vida.
                </p>
              </div>

              <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3" stagger={0.1}>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                  <span className="block text-lg font-bold text-white">2016</span>
                  <span className="mt-1 block text-xs text-[#AFAFAF]">
                    Início da jornada
                  </span>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                  <span className="block text-lg font-bold text-white">2020</span>
                  <span className="mt-1 block text-xs text-[#AFAFAF]">
                    Carreira profissional
                  </span>
                </div>
                <div className="col-span-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-center sm:col-span-1">
                  <span className="block text-lg font-bold text-white">2024</span>
                  <span className="mt-1 block text-xs text-[#AFAFAF]">
                    Paris · Olimpíadas
                  </span>
                </div>
              </Stagger>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

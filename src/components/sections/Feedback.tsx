import Container from "@/components/ui/Container";
import FeedbackCard from "@/components/ui/FeedbackCard";
import FeedbackCarousel from "@/components/ui/FeedbackCarousel";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import { FEEDBACK_ITEMS } from "@/data/feedback";
import { pickRandomSubset } from "@/lib/shuffle";

/**
 * Seção de depoimentos de clientes.
 * Desktop: exibe 6 depoimentos por vez (seleção aleatória, ordem preservada).
 * Mobile: carrossel automático (5s) com todos os depoimentos.
 */
export default function Feedback() {
  const desktopItems = pickRandomSubset(FEEDBACK_ITEMS, 6);

  return (
    <section id="feedback" className="section-spacing">
      <Container>
        <Reveal variant="up">
          <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-left lg:text-4xl">
            O que nossos clientes dizem
          </h2>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="lg:hidden">
          <FeedbackCarousel items={FEEDBACK_ITEMS} className="mt-12" />
        </Reveal>

        <Stagger
          className="mt-12 hidden items-stretch gap-10 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16"
          stagger={0.07}
        >
          {desktopItems.map((item) => (
            <FeedbackCard key={item.id} item={item} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

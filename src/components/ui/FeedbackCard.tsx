import type { FeedbackItem } from "@/data/feedback";

type FeedbackCardProps = {
  item: FeedbackItem;
  className?: string;
};

/**
 * Card individual de depoimento de cliente.
 */
export default function FeedbackCard({ item, className = "" }: FeedbackCardProps) {
  return (
    <article
      className={`flex h-full flex-col items-start rounded-lg border border-white/10 bg-[#141414] p-6 sm:p-8 ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.avatar}
        alt={item.name}
        loading="lazy"
        decoding="async"
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />

      <p className="mt-5 text-sm font-medium uppercase leading-relaxed text-[#AFAFAF] sm:text-base">
        &ldquo;{item.text}&rdquo;
      </p>

      <p className="mt-auto pt-6 text-sm font-bold uppercase tracking-wide text-white">
        {item.name}
      </p>
    </article>
  );
}

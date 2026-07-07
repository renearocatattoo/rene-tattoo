"use client";

import { useEffect, useRef, useState } from "react";
import type { FeedbackItem } from "@/data/feedback";
import FeedbackCard from "@/components/ui/FeedbackCard";

const AUTOPLAY_INTERVAL_MS = 5000;

type FeedbackCarouselProps = {
  items: FeedbackItem[];
  className?: string;
};

/**
 * Carrossel de depoimentos para mobile — um card por vez com autoplay a cada 5s.
 */
export default function FeedbackCarousel({
  items,
  className = "",
}: FeedbackCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({
      left: activeIndex * track.clientWidth,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div className={className.trim()}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
        aria-live="polite"
        aria-roledescription="carrossel"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`w-full shrink-0 snap-center transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-90"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <FeedbackCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

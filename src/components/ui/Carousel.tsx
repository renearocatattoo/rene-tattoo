"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";

type CarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  onImageClick?: (src: string) => void;
};

/**
 * Carrossel horizontal com scroll-snap e setas de navegação.
 * Exibe uma imagem por vez; as setas avançam/retrocedem um slide.
 */
export default function Carousel({
  images,
  alt,
  className = "",
  onImageClick,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByOne = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`.trim()}>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
      >
        {images.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${alt} ${index + 1}`}
            onClick={onImageClick ? () => onImageClick(src) : undefined}
            loading="lazy"
            decoding="async"
            className={`aspect-[1071/1428] w-full shrink-0 snap-center rounded-lg object-cover ${
              onImageClick ? "cursor-pointer" : ""
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByOne(-1)}
        aria-label="Imagem anterior"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition-base hover:bg-[#AFAFAF]"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollByOne(1)}
        aria-label="Próxima imagem"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md transition-base hover:bg-[#AFAFAF]"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

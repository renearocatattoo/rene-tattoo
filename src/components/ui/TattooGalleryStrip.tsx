"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

const TATTOO_IMAGES = [
  { src: "/images/tatto-1.webp", width: 238 },
  { src: "/images/tatto-2.webp", width: 250 },
  { src: "/images/tatto-3.webp", width: 204 },
  { src: "/images/tatto-4.webp", width: 524 },
  { src: "/images/tatto-5.webp", width: 252 },
  { src: "/images/tatto-6.webp", width: 209 },
  { src: "/images/tatto-7.webp", width: 225 },
] as const;

const ROW_HEIGHT = 350;

/**
 * Faixa horizontal de tatuagens com proporções individuais.
 * Ao clicar em uma imagem, abre o lightbox em destaque.
 */
export default function TattooGalleryStrip() {
  const [activeImage, setActiveImage] = useState<(typeof TATTOO_IMAGES)[number] | null>(
    null,
  );

  return (
    <>
      <div className="flex w-full">
        {TATTOO_IMAGES.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImage(image)}
            className="cursor-pointer overflow-hidden border-0 bg-transparent p-0 transition-base hover:opacity-80"
            style={{
              flex: `${image.width} ${image.width} 0%`,
              aspectRatio: `${image.width} / ${ROW_HEIGHT}`,
            }}
            aria-label={`Ver tatuagem ${index + 1} em destaque`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={`Tatuagem em preto e cinza ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
          </button>
        ))}
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          aspectRatio={`${activeImage.width} / ${ROW_HEIGHT}`}
          alt="Tatuagem em preto e cinza"
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}

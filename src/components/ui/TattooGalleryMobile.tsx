"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

const ROW_IMAGES: GalleryImage[] = [
  { src: "/images/tattoo-mobile-1.png", width: 104, height: 152 },
  { src: "/images/tattoo-mobile-2.png", width: 109, height: 152 },
  { src: "/images/tattoo-mobile-3.png", width: 90, height: 152 },
  { src: "/images/tattoo-mobile-4.png", width: 110, height: 152 },
  { src: "/images/tattoo-mobile-5.png", width: 91, height: 152 },
  { src: "/images/tattoo-mobile-6.png", width: 98, height: 152 },
];

const FOOTER_IMAGE: GalleryImage = {
  src: "/images/tattoo-mobile-footer.png",
  width: 600,
  height: 399,
};

const ROW_HEIGHT = 152;

/**
 * Galeria mobile: 6 imagens em linha + imagem de rodapé em largura total.
 * Ao clicar em uma imagem, abre o lightbox em destaque.
 */
export default function TattooGalleryMobile() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex w-full">
          {ROW_IMAGES.map((image, index) => (
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
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveImage(FOOTER_IMAGE)}
          className="w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 transition-base hover:opacity-80"
          style={{ aspectRatio: `${FOOTER_IMAGE.width} / ${FOOTER_IMAGE.height}` }}
          aria-label="Ver tatuagem em destaque"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FOOTER_IMAGE.src}
            alt="Tatuagem em preto e cinza"
            className="h-full w-full object-cover"
          />
        </button>
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage.src}
          aspectRatio={`${activeImage.width} / ${activeImage.height}`}
          alt="Tatuagem em preto e cinza"
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}

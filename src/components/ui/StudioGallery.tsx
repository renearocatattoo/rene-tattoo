"use client";

import { useState } from "react";
import Carousel from "@/components/ui/Carousel";
import Lightbox from "@/components/ui/Lightbox";
import Stagger from "@/components/ui/Stagger";

type StudioGalleryProps = {
  images: string[];
  alt: string;
};

/**
 * Galeria do estúdio: grade no desktop e carrossel no mobile.
 * Ao clicar em uma imagem, abre o lightbox em destaque.
 */
export default function StudioGallery({ images, alt }: StudioGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <Stagger className="mt-12 hidden grid-cols-6 gap-4 md:grid" stagger={0.06}>
        {images.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`${alt} ${index + 1}`}
            onClick={() => setActiveImage(src)}
            className="aspect-[1071/1428] w-full cursor-pointer rounded-lg object-cover transition-base hover:opacity-80"
          />
        ))}
      </Stagger>

      <Carousel
        images={images}
        alt={alt}
        onImageClick={setActiveImage}
        className="mt-10 md:hidden"
      />

      {activeImage && (
        <Lightbox src={activeImage} alt={alt} onClose={() => setActiveImage(null)} />
      )}
    </>
  );
}

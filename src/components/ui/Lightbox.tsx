"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/ui/icons";

type LightboxProps = {
  src: string;
  alt?: string;
  aspectRatio?: string;
  onClose: () => void;
};

/**
 * Modal sem bordas que exibe apenas a imagem em destaque.
 * Renderizado via portal para não ser limitado por overflow dos pais.
 * Fecha ao clicar fora, no botão X ou ao pressionar Esc.
 */
export default function Lightbox({ src, alt = "", aspectRatio, onClose }: LightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="motion-overlay-in fixed inset-0 z-[100] flex h-[100dvh] w-[100vw] items-center justify-center bg-black/90"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-white transition-base hover:text-[#AFAFAF]"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="motion-fade-in h-[100dvh] w-auto max-w-[100vw] object-contain"
        style={{
          animationDuration: "0.35s",
          ...(aspectRatio ? { aspectRatio } : {}),
        }}
      />
    </div>,
    document.body,
  );
}

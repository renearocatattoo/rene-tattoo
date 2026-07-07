"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/ui/icons";

type LightboxProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

/**
 * Modal sem bordas que exibe apenas a imagem em destaque.
 * Fecha ao clicar fora, no botão X ou ao pressionar Esc.
 */
export default function Lightbox({ src, alt = "", onClose }: LightboxProps) {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="motion-overlay-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-white transition-base hover:text-[#AFAFAF]"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(event) => event.stopPropagation()}
        className="motion-fade-in max-h-[90vh] max-w-[90vw] object-contain"
        style={{ animationDuration: "0.35s" }}
      />
    </div>
  );
}

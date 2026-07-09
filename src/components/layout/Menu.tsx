"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/site";
import { CloseIcon } from "@/components/ui/icons";

/**
 * Menu de navegação principal do site.
 * Desktop: barra horizontal com links e ícones sociais.
 * Mobile: menu hambúrguer que abre em tela cheia.
 */
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const mobileMenu =
    isOpen &&
    mounted &&
    createPortal(
      <div
        className="mobile-menu-overlay fixed inset-0 z-[60] flex flex-col bg-[#AFAFAF] text-black lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <button
          type="button"
          onClick={closeMenu}
          aria-label="Fechar menu"
          className="absolute right-[var(--spacing-container)] top-5 flex h-10 w-10 items-center justify-center"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-[var(--spacing-container)]">
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className="mobile-menu-link"
                style={{ animationDelay: `${0.05 + index * 0.05}s` }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-3xl font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-black"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full bg-black text-white motion-slide-down ${isOpen ? "max-lg:invisible" : ""}`}
      >
        <nav className="container-custom flex items-center justify-between py-5">
          <a href="#hero" onClick={closeMenu} className="text-xl font-bold tracking-widest">
            RENÊ AROCA TATTOO
          </a>

          {/* Navegação desktop */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-base hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Ícones sociais desktop */}
          <ul className="hidden items-center gap-3 lg:flex">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-white transition-base hover:bg-white hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          {/* Botão hambúrguer mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            className="flex flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="block h-0.5 w-7 bg-white" />
            <span className="block h-0.5 w-7 bg-white" />
          </button>
        </nav>
      </header>

      {mobileMenu}
    </>
  );
}

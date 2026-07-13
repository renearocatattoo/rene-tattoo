"use client";

import { useEffect, useState, type ReactNode } from "react";

type MediaSwitchProps = {
  query: string;
  match: ReactNode;
  fallback: ReactNode;
};

/**
 * Renderiza apenas um dos ramos conforme a media query,
 * evitando download de imagens escondidas por CSS.
 */
export default function MediaSwitch({ query, match, fallback }: MediaSwitchProps) {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  if (matches === null) return null;
  return <>{matches ? match : fallback}</>;
}

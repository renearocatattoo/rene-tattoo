import {
  WhatsAppIcon,
  InstagramIcon,
  LocationIcon,
  type IconProps,
} from "@/components/ui/icons";
import type { ComponentType } from "react";

const WHATSAPP_NUMBER = "5517991694656";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de mais informações.";

/** Informações de contato do estúdio. */
export const CONTACT = {
  whatsappDisplay: "(17) 99169-4656",
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  address: "Av. Angelo Martins Tristão, 189 - Centro, Colina - SP",
  instagram: "@rene_aroca",
  instagramUrl: "https://instagram.com/rene_aroca",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Angelo+Martins+Trist%C3%A3o+189+Colina+SP",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1915737.091494563!2d-47.560899436326736!3d-20.313756311544967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb93606a07d4ef%3A0x3be7753f74d8f668!2sHouse%20Tattoo%20Art!5e0!3m2!1spt-BR!2sbr!4v1783374091428!5m2!1spt-BR!2sbr",
} as const;

/** Itens de navegação e suas respectivas seções. */
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Estúdio", href: "#studio" },
  { label: "Galeria", href: "#gallery" },
  { label: "Sobre", href: "#about-us" },
  { label: "Contato", href: "#cta" },
] as const;

type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
};

/** Redes sociais e localização. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "WhatsApp", href: CONTACT.whatsappUrl, icon: WhatsAppIcon },
  { label: "Instagram", href: CONTACT.instagramUrl, icon: InstagramIcon },
  { label: "Localização", href: CONTACT.mapsUrl, icon: LocationIcon },
];

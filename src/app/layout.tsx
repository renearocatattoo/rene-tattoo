import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnchorScroll from "@/components/layout/AnchorScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rene Tattoo",
  description: "Estúdio de tatuagem",
  icons: {
    icon: "/images/logo-quadrada.png",
    apple: "/images/logo-quadrada.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} bg-background text-primary antialiased`}>
        <AnchorScroll />
        {children}
      </body>
    </html>
  );
}

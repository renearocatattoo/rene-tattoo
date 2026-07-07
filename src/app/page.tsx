import Menu from "@/components/layout/Menu";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Studio from "@/components/sections/Studio";
import TattooBreakdown from "@/components/sections/TattooBreakdown";
import Gallery from "@/components/sections/Gallery";
import AboutUs from "@/components/sections/AboutUs";
import Feedback from "@/components/sections/Feedback";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <Hero />
        <Studio />
        <TattooBreakdown />
        <Gallery />
        <AboutUs />
        <Feedback />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

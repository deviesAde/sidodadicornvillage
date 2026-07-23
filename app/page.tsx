import HeroSection from "@/components/HeroSection";
import VillageKnowledgeSection from "@/components/VillageKnowledgeSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VillageKnowledgeSection />
      <AboutSection />
      <ProductSection />
      <GallerySection />
      <LocationSection />
    </main>
  );
}

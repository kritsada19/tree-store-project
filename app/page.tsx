"use client";

import { FeatureHighlights } from "@/components/FeatureHighlights";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/components/Navbar";
import { products } from "@/lib/data/data";

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <main>
        <HeroSection />
        <FeatureHighlights />
        <ProductGrid products={featuredProducts} onAddToCart={addToCart} />
      </main>

      <Footer />
    </>
  );
}

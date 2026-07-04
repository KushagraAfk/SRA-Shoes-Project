import FeaturedCategories from "@/components/home/FeaturedCategories";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
}
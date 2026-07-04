import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturedProducts() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Featured"
        title="Popular Products"
        description="A glimpse of our premium leather footwear collection."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            slug={product.slug}
            category={product.category}
            description={product.description}
            image={product.images[0]}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/products"
          className="rounded-lg bg-neutral-900 px-8 py-4 text-white transition hover:bg-neutral-700"
        >
          View All Products
        </Link>
      </div>
    </Section>
  );
}
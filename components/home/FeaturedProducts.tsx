import Link from "next/link";
import ProductCard from "../products/ProductCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { client } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";

export default async function FeaturedProducts() {
  const products = await client.fetch(productsQuery);

  return (
    <Section>
      <SectionHeading
        eyebrow="Featured"
        title="Popular Products"
        description="A glimpse of our premium leather footwear collection."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {products.slice(0, 3).map((product: any) => (
          <ProductCard
            key={product._id}
            name={product.name}
            slug={product.slug.current}
            category={product.category}
            description={product.description}
            image={product.image}
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
import Section from "../ui/Section";
import ProductCard from "./ProductCard";
import { client } from "@/lib/sanity";
import { productsQuery } from "@/lib/queries";

export default async function ProductsGrid() {
  const products = await client.fetch(productsQuery);

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product: any) => (
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
    </Section>
  );
}
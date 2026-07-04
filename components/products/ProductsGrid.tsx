import Section from "../ui/Section";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductsGrid() {
  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
    </Section>
  );
}
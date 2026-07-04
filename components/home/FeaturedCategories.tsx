import { categories } from "@/data/categories";
import CategoryCard from "../products/CategoryCard";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function FeaturedCategories() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Collection"
        title="Explore Our Product Range"
        description="Browse our premium range of leather footwear for wholesalers, retailers and institutional buyers."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
            href={category.href}
          />
        ))}
      </div>
    </Section>
  );
}
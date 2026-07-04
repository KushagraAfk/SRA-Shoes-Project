import Section from "../ui/Section";

export default function ProductsHero() {
  return (
    <Section className="bg-stone-100">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Our Products
        </p>

        <h1 className="text-5xl font-bold">
          Browse Our Collection
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          Explore our range of premium leather footwear manufactured for
          wholesalers, retailers and institutional buyers.
        </p>
      </div>
    </Section>
  );
}
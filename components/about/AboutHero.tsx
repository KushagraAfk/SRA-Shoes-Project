import Section from "../ui/Section";

export default function AboutHero() {
  return (
    <Section className="bg-stone-100">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          About SRA Shoes
        </p>

        <h1 className="text-5xl font-bold text-neutral-900">
          Trusted Leather Footwear
          <br />
          Supplier Since 1988
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-600">
          SRA Shoes is a trusted supplier and distributor of premium leather
          footwear, serving retailers, wholesalers, and institutional buyers
          across India. By partnering with established manufacturers, we deliver
          quality products, competitive pricing, and dependable service tailored
          to our customers' needs.
        </p>
      </div>
    </Section>
  );
}
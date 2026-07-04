import Section from "../ui/Section";

export default function AboutHero() {
  return (
    <Section className="bg-stone-100">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          About Us
        </p>

        <h1 className="text-5xl font-bold text-neutral-900">
          Manufacturing Quality Leather Footwear Since 1988
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          We are a leather footwear manufacturer based in Agra, committed to
          delivering premium craftsmanship, dependable quality, and long-term
          partnerships with wholesalers, retailers, and institutional buyers.
        </p>
      </div>
    </Section>
  );
}
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const features = [
  "Experienced leather footwear manufacturer",
  "Bulk production capability",
  "Custom manufacturing",
  "Reliable quality control",
  "Timely delivery",
  "Competitive wholesale pricing",
];

export default function WhyChooseUs() {
  return (
    <Section className="bg-stone-100">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Businesses Trust Us"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold">{feature}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}
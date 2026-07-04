import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function OurStory() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Story"
        title="Built on Craftsmanship and Trust"
      />

      <div className="mx-auto max-w-4xl space-y-6 text-lg text-neutral-600">
        <p>
          Based in Agra, we have been manufacturing quality leather footwear
          for decades. Our focus has always been on delivering products that
          combine durability, comfort, and excellent craftsmanship.
        </p>

        <p>
          From formal shoes and boots to safety footwear and custom
          manufacturing, we work closely with wholesalers, retailers, and
          institutional buyers to meet diverse requirements with consistent
          quality.
        </p>

        <p>
          Every pair reflects our commitment to reliable manufacturing,
          attention to detail, and long-term business relationships.
        </p>
      </div>
    </Section>
  );
}
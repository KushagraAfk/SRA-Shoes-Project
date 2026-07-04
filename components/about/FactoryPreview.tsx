import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

export default function FactoryPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Manufacturing"
        title="Our Manufacturing Facility"
      />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative h-96 overflow-hidden rounded-2xl">
          <Image
            src="/images/factory.jpg"
            alt="Factory"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5 text-neutral-600">
          <p>
            Our manufacturing facility combines skilled craftsmanship with
            modern production techniques to produce premium leather footwear.
          </p>

          <p>
            We manufacture formal shoes, boots, safety shoes and customized
            products for businesses across India.
          </p>
        </div>
      </div>
    </Section>
  );
}
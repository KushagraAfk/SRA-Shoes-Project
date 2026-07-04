import Section from "../ui/Section";

export default function ContactHero() {
  return (
    <Section className="bg-stone-100">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          Contact Us
        </p>

        <h1 className="text-5xl font-bold">
          Let's Discuss Your Requirements
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          Looking for wholesale leather footwear or custom manufacturing? Get
          in touch with us today.
        </p>
      </div>
    </Section>
  );
}
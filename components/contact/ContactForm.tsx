import Section from "../ui/Section";

export default function ContactForm() {
  return (
    <Section className="bg-stone-100">
      <form className="mx-auto max-w-2xl space-y-4">
        <input
          className="w-full rounded-lg border p-4"
          placeholder="Name"
        />

        <input
          className="w-full rounded-lg border p-4"
          placeholder="Phone"
        />

        <input
          className="w-full rounded-lg border p-4"
          placeholder="Company"
        />

        <textarea
          className="h-40 w-full rounded-lg border p-4"
          placeholder="Your enquiry..."
        />

        <button className="rounded-lg bg-neutral-900 px-8 py-4 text-white">
          Send Enquiry
        </button>
      </form>
    </Section>
  );
}
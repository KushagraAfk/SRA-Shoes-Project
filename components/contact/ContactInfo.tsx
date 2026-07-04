import Section from "../ui/Section";

export default function ContactInfo() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-xl">Phone</h3>
            <p className="text-neutral-600">+91 XXXXX XXXXX</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="text-neutral-600">info@example.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Address</h3>
            <p className="text-neutral-600">
              Agra, Uttar Pradesh, India
            </p>
          </div>

          <button className="rounded-lg bg-green-600 px-6 py-3 text-white">
            Chat on WhatsApp
          </button>
        </div>

        <div className="flex h-80 items-center justify-center rounded-2xl bg-neutral-200">
          Google Maps Placeholder
        </div>
      </div>
    </Section>
  );
}
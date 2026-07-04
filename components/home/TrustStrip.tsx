import Container from "../ui/Container";
import { BadgeCheck } from "lucide-react";

const items = [
  "Since 1988",
  "Genuine Leather",
  "Bulk Orders",
  "Made in India",
  "Custom Manufacturing",
  "Pan India Supply",
];

export default function TrustStrip() {
  return (
    <section className="border-y bg-white py-6">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-sm font-medium"
            >
              <BadgeCheck className="h-5 w-5 text-amber-700" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
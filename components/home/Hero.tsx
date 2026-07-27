import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-stone-100">
      <Container>
        <div className="grid items-center gap-16 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Trusted Leather Footwear Supplier
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              Premium Leather
              <br />
              Shoes and Footwear
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 md:text-lg">
              SRA Shoes supplies premium leather footwear for wholesalers,
              retailers, distributors and institutional buyers. We partner with
              trusted manufacturers to deliver quality products, dependable service,
              and timely order fulfillment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
              >
                Explore Products
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                className="rounded-lg border border-neutral-900 px-8 py-4 transition hover:bg-neutral-900 hover:text-white"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-neutral-700">
              <span>✓ Bulk Supply</span>
              <span>✓ Premium Quality</span>
              <span>✓ Reliable Delivery</span>
            </div>
          </div>

          <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-xl md:h-[450px] lg:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
              alt="Premium leather footwear"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Section from "@/components/ui/Section";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Section className="bg-stone-100">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              {product.category}
            </p>

            <h1 className="mt-3 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-6 text-lg text-neutral-600">
              {product.description}
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-lg bg-neutral-900 px-8 py-4 text-white">
                Enquire Now
              </button>

              <button className="rounded-lg border px-8 py-4">
                Call Us
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
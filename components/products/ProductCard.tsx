import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export default function ProductCard({
  name,
  slug,
  category,
  description,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="block"
    >
      <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3 p-6">
          <span className="text-sm font-medium text-amber-700">
            {category}
          </span>

          <h3 className="text-2xl font-semibold">
            {name}
          </h3>

          <p className="text-neutral-600">
            {description}
          </p>

          <button className="mt-2 rounded-lg bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-700">
            Enquire Now
          </button>
        </div>
      </div>
    </Link>
  );
}
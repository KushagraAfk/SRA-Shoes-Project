import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>

        <p className="mt-2 text-sm text-neutral-600">
          View Collection
        </p>
      </div>
    </Link>
  );
}
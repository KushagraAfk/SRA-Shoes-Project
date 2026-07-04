interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-neutral-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
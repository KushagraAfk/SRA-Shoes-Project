import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const phone = "919999999999";
  const message = encodeURIComponent(
    "Hi, I'm interested in your leather footwear."
  );

  return (
    <Link
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={34} />
    </Link>
  );
}
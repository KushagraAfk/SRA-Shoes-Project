"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Container from "../ui/Container";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <div className="flex h-18 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide text-gray-900"
          >
            {siteConfig.companyName}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "font-semibold text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800 lg:flex"
          >
            <Phone size={18} />
            Call
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-t bg-white lg:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === item.href
                      ? "font-semibold text-black"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-2 rounded-lg bg-black px-4 py-2 text-center text-white"
              >
                Call Now
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
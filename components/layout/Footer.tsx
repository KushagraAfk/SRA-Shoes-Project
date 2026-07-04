import Link from "next/link";
import Container from "../ui/Container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-neutral-900 py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-2xl font-bold">
              {siteConfig.companyName}
            </h2>

            <p className="text-gray-400">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Contact</h3>

            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.address}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
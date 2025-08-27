import Link from "next/link";
import data from "@/public/data.json";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1623] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                  <Image
                              src="https://ik.imagekit.io/h7rza8886p/Ralphs%20Limousine/logo.png?updatedAt=1756281693357"
                              alt="Company Logo"
                              className="h-16 w-full object-cover"
                              width={200}
                              height={200}
                            />
              </div>
            </Link>
            <p className="text-sm text-white/70 max-w-prose my-4">
              Premium limousine and luxury car rental services with professional
              chauffeurs. Available 24/7 for airport transfers, corporate
              travel, and special events.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary font-semibold">24/7 Service</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">
                Emergency: {data.contact.emergency}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/airport-transportation"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  Airport Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-transportation"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  Corporate Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wedding-bachelor-bachelorette"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  Wedding & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-transportation"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  Executive Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  Our Fleet
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors text-white/70 "
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{data.company.phone}</li>
              <li>{data.company.email}</li>
              <li className="text-white/60">{data.company.hours}</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-primary text-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} {data.company.name}. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6 text-xs text-white/60">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

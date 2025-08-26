import Link from "next/link";
import data from "@/public/data.json";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <div>
                <span className="text-lg font-bold">{data.company.name}</span>
                <div className="text-sm text-white/70">{data.company.tagline}</div>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-prose mb-4">
              Premium limousine and luxury car rental services with professional chauffeurs. 
              Available 24/7 for airport transfers, corporate travel, and special events.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-primary font-semibold">24/7 Service</span>
              <span className="text-white/60">•</span>
              <span className="text-white/80">Emergency: {data.contact.emergency}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors text-white/70 hover:text-white">Airport Transfers</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-white/70 hover:text-white">Corporate Travel</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-white/70 hover:text-white">Event Chauffeur</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-white/70 hover:text-white">VIP & Security</Link></li>
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
              <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary text-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-200">
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
              © {new Date().getFullYear()} {data.company.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-xs text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

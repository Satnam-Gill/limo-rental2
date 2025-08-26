import Link from "next/link";
import { IconType } from "react-icons";
import { 
  FaCarSide, 
  FaCheck, 
  FaArrowRight, 
  FaUsers,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaClock,
  FaTools
} from "react-icons/fa";
import data from "@/public/data.json";

const iconMap: Record<string, IconType> = {
  car: FaCarSide,
  check: FaCheck,
  users: FaUsers,
  star: FaStar,
  shield: FaShieldAlt,
  clock: FaClock,
  tools: FaTools,
};

export default function FleetPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={data.fleet.bannerImage}
            alt="Luxury limousine fleet"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Our Luxury Fleet
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Experience the finest in automotive luxury and comfort. Our meticulously maintained fleet 
              features the latest models from world-renowned manufacturers, ensuring your journey is nothing short of extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
         <section className="py-20 bg-gradient-to-br from-primary/5 via-gray-50 to-secondary/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-lg tracking-tight">
        Explore Our Luxury Fleet
      </h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Handpicked vehicles for every occasion—arrive in style, comfort, and elegance.
      </p>
    </div>
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {data.fleets.map((service, idx) => (
        <div
          key={service.id}
          className="relative group p-0 rounded-3xl bg-white shadow-2xl hover:shadow-primary/30 transition-all duration-300 border-t-4 border-primary/20 hover:border-primary/60 overflow-hidden"
        >
          {/* Fleet Image */}
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={service.image || "/default-fleet.jpg"}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
            {/* <div className="absolute top-4 right-4 bg-primary/90 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg">
              {service.category || "Luxury"}
            </div> */}
          </div>
          <div className="relative z-10 p-8">
            <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {service.description}
            </p>
            <div className="flex items-center gap-3 mb-4">
          
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Fleet Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Fleet?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards to ensure your safety and comfort
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600 leading-relaxed">
                All vehicles undergo rigorous safety inspections and maintenance schedules
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always On Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Punctual service with real-time tracking and professional chauffeurs
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaTools className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Maintenance</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular servicing and cleaning to maintain pristine condition
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaStar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Luxury Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium amenities and comfort features for an exceptional journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Special Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored packages for different occasions and needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {data.pricing.packages.map((pkg) => (
              <div key={pkg.name} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-4">{pkg.price}</div>
                <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <FaCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200"
                >
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Custom Quote?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Contact us to discuss your specific requirements and get a personalized quote for your luxury transportation needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <FaPhone className="w-5 h-5 text-primary" />
                  <span>{data.company.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <FaEnvelope className="w-5 h-5 text-primary" />
                  <span>{data.company.email}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                  <span>{data.company.address}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact Form</h3>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-xl bg-primary text-secondary px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200"
                >
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

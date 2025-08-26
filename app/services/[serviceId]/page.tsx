import Link from "next/link";
import { notFound } from "next/navigation";
import { IconType } from "react-icons";
import { 
  FaShieldAlt, 
  FaCarSide, 
  FaClock, 
  FaCheck, 
  FaTools, 
  FaCrown, 
  FaGasPump, 
  FaUserTie, 
  FaArrowRight, 
  FaStar,
  FaPlane,
  FaBriefcase,
  FaMapMarkedAlt,
  FaPhone,
  FaListUl,
  FaUsers,
  FaMapPin,
  FaCalendarAlt,
  FaShieldAlt as FaSecurity
} from "react-icons/fa";
import data from "@/public/data.json";

const iconMap: Record<string, IconType> = {
  shield: FaShieldAlt,
  car: FaCarSide,
  clock: FaClock,
  check: FaCheck,
  tools: FaTools,
  crown: FaCrown,
  gas: FaGasPump,
  chauffeur: FaUserTie,
  plane: FaPlane,
  briefcase: FaBriefcase,
  map: FaMapMarkedAlt,
  phone: FaPhone,
  list: FaListUl,
  star: FaCrown,
  users: FaUsers,
  mapPin: FaMapPin,
  calendar: FaCalendarAlt,
  security: FaSecurity,
};

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = data.services.main.find(s => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] ?? FaCheck;

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={service.bannerImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Vehicles</h3>
                <div className="flex flex-wrap gap-3">
                  {service.vehicles.map((vehicle) => (
                    <span key={vehicle} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Book This Service
                  <FaArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center justify-center rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-primary/30"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a premium transportation experience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Service?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Book your {service.title.toLowerCase()} service today and enjoy the luxury transportation experience you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Now
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              <FaPhone className="mr-2 w-5 h-5" />
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

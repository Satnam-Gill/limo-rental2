import Link from "next/link";
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

export default function ServicesPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Stretch%20Limos.png?updatedAt=1755857567397"
            alt="Luxury limousine services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From airport transfers to special events, we provide comprehensive luxury transportation solutions 
              tailored to your specific needs. Experience excellence in every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.services.main.map((service) => {
              const Icon = iconMap[service.icon] ?? FaCheck;
              return (
                <div key={service.id} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden mb-6">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                          <FaCheck className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Available Vehicles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle) => (
                        <span key={vehicle} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                          {vehicle}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-3 text-lg"
                  >
                    Learn More <FaArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Service Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to book your luxury transportation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {data.steps.map((step, index) => {
              const Icon = iconMap[step.icon] ?? FaCheck;
              return (
                <div key={step.title} className="text-center group">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {index < data.steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-primary/30 transform translate-x-4"></div>
                    )}
                  </div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive rates for premium service
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Executive Sedans</h3>
              <div className="text-4xl font-bold text-primary mb-4">{data.pricing.baseRates.sedan}</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Professional chauffeur
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Premium amenities
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Flight tracking
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 border border-primary text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Luxury SUVs</h3>
              <div className="text-4xl font-bold mb-4">{data.pricing.baseRates.suv}</div>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-white" />
                  Spacious interior
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-white" />
                  Luggage capacity
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-white" />
                  Group travel ready
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Limousines</h3>
              <div className="text-4xl font-bold text-primary mb-4">{data.pricing.baseRates.limousine}</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Special events
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Premium bar setup
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="w-4 h-4 text-primary" />
                  Entertainment system
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Contact us today to discuss your transportation needs and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Get Quote
              </Link>
              <Link 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



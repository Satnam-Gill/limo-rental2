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
} from "react-icons/fa";
import data from "@/public/data.json";
import FaqItem from "./components/Faq";

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
};
export const metadata = {
  title: "Ralphs Limousine – Houston Luxury Limousine Service",
  description:
    "Experience VIP rides with Ralphs Limousine Service Houston. Book luxury limos, party buses, shuttle services today!",
};

export default function Home() {
  const About = [
    {
      id: "1",
      title: "Who we are",
      description:
        "We are committed to providing the highest quality limousine rental service in Houston. With 10+ years of experience in the luxury transportation industry, we have earned a reputation for reliability, professionalism, and customer satisfaction. Whether you need a party bus for a night out or an airport limousine service, we strive to deliver an unforgettable experience.",
      icon: "star",
    },
    {
      id: "1",
      title: "Our Mission",
      description:
        "Our mission is to provide luxury transportation services for our clients in Houston, and surrounding areas. We are dedicated to offering reliable, comfortable, and professional limo services for every occasion",
      icon: "briefcase",
    },
    {
      id: "1",
      title: "Our Vision",
      description:
        "Our vision is to be the premier provider of best limousine services in Houston. We aim to redefine the transportation industry by offering unparalleled service, top-of-the-line vehicles, and a commitment to customer satisfaction.",
      icon: "shield",
    },
  ];
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary px-4 py-2 text-sm font-semibold uppercase tracking-widest border border-primary/30">
                {data.hero.kicker}
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
                {data.hero.title}
              </h1>
              <p className="mt-6 text-xl text-white/80 max-w-prose leading-relaxed">
                {data.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href={data.hero.primary.href}
                  className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {data.hero.primary.label}
                </Link>
                <Link
                  href={data.hero.secondary.href}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                >
                  {data.hero.secondary.label}
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                {data.hero.highlights.map(
                  (h: { label: string; value: string }) => (
                    <div key={h.label} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {h.value}
                      </div>
                      <div className="text-sm text-white/70 font-medium">
                        {h.label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={data.hero.bannerImage}
                    alt="Luxury limousine fleet"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-primary/30"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="relative py-24 bg-gradient-to-br from-primary/5 via-gray-50 to-secondary/10 overflow-hidden">
        {/* Decorative background image */}
        <img
          src="/about-bg.jpg"
          alt="Limousine Service"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Left: Brand/Team Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Black%20Chrysler%20Limousine%20Up%20To%208%20Adults2.jpg?updatedAt=1755857560265"
                alt="Our Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Timeline/Steps */}
          <div className="w-full md:w-1/2">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-primary mb-4 drop-shadow-lg">
                About Us
              </h2>
              <p className="text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
                Houston Luxury Limousine Service
              </p>
            </div>
            <div className="space-y-8">
              {About.map((service, idx) => {
                const Icon = iconMap[service.icon] ?? FaCheck;
                return (
                  <div
                    key={service.id + idx}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-primary/10 text-primary rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      {idx < About.length - 1 && (
                        <div className="w-1 h-16 bg-primary/20 mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ralphs Limousine For Your Luxury Rides?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When it comes to luxury transportation in Houston, choosing the
              right limo service can make all the difference. At Ralphs Limousine, we go beyond simply providing a ride—we deliver an
              unforgettable experience.
            </p>
          </div>

          <div className="grid gap-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] ?? FaCheck;
              return (
                <div
                  key={feature.title}
                  className={`group relative p-8 rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300
          ${idx % 2 === 0 ? "lg:-translate-y-2" : "lg:translate-y-2"}
        `}
                  style={{
                    background:
                      "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary drop-shadow-lg animate-bounce" />
                  </div>
                  <h3 className="mt-10 text-2xl font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <FaCheck className="w-4 h-4 text-secondary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="absolute bottom-4 right-4 opacity-10 text-6xl pointer-events-none select-none">
                    <Icon />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From airport transfers to special events, we have you covered
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.services.main.slice(0, 6).map((service) => {
              const Icon = iconMap[service.icon] ?? FaCheck;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {/* 
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Available Vehicles:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.vehicles.map((vehicle) => (
                        <span
                          key={vehicle}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {vehicle}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-3"
                  >
                    Learn More <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Services <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-gray-50 to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-lg tracking-tight">
              Explore Our Luxury Fleet
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Handpicked vehicles for every occasion—arrive in style, comfort,
              and elegance.
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {data.fleets.slice(0, 6).map((service, idx) => (
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
                  <div className="flex items-center gap-3 mb-4"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View All Fleet <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {data.testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faq */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to common questions about our luxury limousine services
            </p>
          </div>
          <div className="space-y-6">
            {data.faqs.map((faq, idx) => (
              <FaqItem key={idx} faq={faq} />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Luxury Transportation?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Book your ride today and discover why we're the preferred choice
              for luxury transportation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Book Now
              </Link>
              <Link
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
    </div>
  );
}

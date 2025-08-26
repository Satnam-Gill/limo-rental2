import { FaCarSide, FaUserTie, FaCheckCircle, FaCrown, FaShieldAlt, FaDollarSign, FaStar } from "react-icons/fa";

export const metadata = {
  title: "Why Choose Us – Houston Luxury Limo Service | Ralphs Limousine Services",
  description: "Discover why Ralphs Limousine Services is Houston’s top choice for luxury limo service. Premium fleet, professional chauffeurs, safety, and customer satisfaction.",
};

const features = [
  {
    icon: <FaCarSide className="w-8 h-8 text-primary" />,
    title: "Luxury Fleet for Every Occasion",
    description:
      "Our fleet features premium vehicles—stretch limousines, Mercedes Sprinters, party buses, and luxury vans. Each is meticulously maintained for style, safety, and comfort. Enjoy leather interiors, premium sound, climate control, and privacy partitions for a true VIP experience.",
  },
  {
    icon: <FaUserTie className="w-8 h-8 text-primary" />,
    title: "Professional and Experienced Chauffeurs",
    description:
      "Our licensed, insured chauffeurs are trained for the highest level of service. We prioritize safety, punctuality, and discretion, ensuring a smooth, seamless journey every time.",
  },
  {
    icon: <FaCrown className="w-8 h-8 text-primary" />,
    title: "Customized Services to Fit Your Needs",
    description:
      "Every event is unique. We offer fully customizable services—choose your vehicle, route, and schedule. Specializing in weddings, corporate events, proms, parties, airport transfers, and more.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
    title: "Commitment to Safety and Reliability",
    description:
      "Safety is our top priority. Vehicles are regularly inspected and maintained to the highest standards. Comprehensive insurance and punctual service guarantee peace of mind.",
  },
  {
    icon: <FaDollarSign className="w-8 h-8 text-primary" />,
    title: "Affordable, Transparent Pricing",
    description:
      "No hidden fees. Transparent pricing with hourly rentals, full-day packages, and special event rates. Competitive quotes so you know exactly what to expect.",
  },
  {
    icon: <FaStar className="w-8 h-8 text-primary" />,
    title: "Customer Satisfaction Guaranteed",
    description:
      "Exceptional customer service from first call to final drop-off. We value feedback and strive to exceed expectations. With us, you’re choosing a luxury transportation partner you can trust.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 py-20">
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 drop-shadow-lg">
            Why Choose Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            When it comes to luxury transportation in Houston, choosing the right limo service can make all the difference. At <span className="font-semibold text-secondary">Ralphs Limousine Services</span>, we go beyond simply providing a ride—we deliver an unforgettable experience, tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm shadow">Weddings</span>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm shadow">Corporate Events</span>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm shadow">Sporting Events</span>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm shadow">City Tours</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine professionalism, comfort, and reliability to ensure your journey is exceptional from start to finish.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl border border-primary/10 hover:border-primary/40 transition-all duration-300
                  ${idx % 2 === 0 ? "lg:-translate-y-2" : "lg:translate-y-2"}
                `}
                style={{
                  background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
                }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mt-10 text-2xl font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a VIP Experience?</h2>
          <p className="text-lg text-white/80 mb-8">
            Book your luxury limo service today and let us make your next journey unforgettable.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-primary/90 hover:text-white transition-all duration-200 shadow-lg"
          >
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
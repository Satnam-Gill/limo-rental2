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
  FaShieldAlt as FaSecurity,
} from "react-icons/fa";
import data from "@/public/data.json";

interface AirportSpecificData {
  heroTitle: string;
  heroDescription: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceExtendedDescription: string;
  vehicleShowcase: {
    title: string;
    description: string;
    vehicles: {
      name: string;
      description: string;
      icon: string;
    }[];
    fleetDescription: string;
  };
  affordableSection: {
    title: string;
    description: string;
    extendedDescription: string;
    image: string;
    features: {
      title: string;
      description: string;
    }[];
  };
  bookingSection: {
    title: string;
    description: string;
    phoneNumber: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
  metaTitle: string;
  metaDescription: string;
}

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  vehicles: string[];
  image: string;
  bannerImage: string;
  Specific?: AirportSpecificData; // Using generic 'Specific' key as in JSON
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = data.services.main.find(
    (s) => s.id === serviceId
  ) as ServiceData;

  if (!service) {
    return {
      title: "Service Not Found | Ralphs Limousine Services",
      description: "The requested service could not be found.",
    };
  }

  const specificData = service.Specific;
  
  return {
    title: specificData?.metaTitle || `${service.title} | Ralphs Limousine Services Houston`,
    description: specificData?.metaDescription || service.description,
    alternates: {
      canonical: `${data.baseUrl}/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = data.services.main.find(
    (s) => s.id === serviceId
  ) as ServiceData;

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] ?? FaCheck;

  // Get the specific data if it exists
  const specificData = service.Specific || null;

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
            {specificData ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  {service.title}
                </h1>
                {/* <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {specificData.heroDescription}
                </p> */}
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                  {service.Specific?.heroTitle}
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {service.description}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {specificData ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.Specific?.heroTitle}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {specificData.serviceDescription}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {specificData.serviceExtendedDescription}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Service Overview
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Available Vehicles
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.vehicles.map((vehicle) => (
                    <span
                      key={vehicle}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                    >
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

      {/* Service Specific Section */}
      {specificData && (
        <section className="py-20 bg-luxury">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {specificData.vehicleShowcase.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {specificData.vehicleShowcase.description}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {specificData.vehicleShowcase.vehicles.map(
                (vehicle: any, index: number) => {
                  const VehicleIcon = iconMap[vehicle.icon] ?? FaCarSide;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                        <VehicleIcon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {specificData.vehicleShowcase.fleetDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Affordable & Reliable Service Section */}
      {specificData && (
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={specificData.affordableSection.image}
                    alt="Professional transportation service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-primary/30"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {specificData.affordableSection.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {specificData.affordableSection.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {specificData.affordableSection.extendedDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {specificData.affordableSection.features.map(
                    (feature: any, index: number) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FaCheck className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-luxury">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for a premium transportation experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/30 text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <FaCheck className="w-7 h-7 drop-shadow-sm" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature}
                  </h3>
                  <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {specificData ? (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {specificData.bookingSection.title}
              </h2>
              <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
                {specificData.bookingSection.description}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience Premium Service?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Book your {service.title.toLowerCase()} service today and enjoy
                the luxury transportation experience you deserve.
              </p>
            </>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {specificData
                ? specificData.bookingSection.primaryButtonText
                : "Book Now"}
              <FaArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="tel:+15551234567"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              <FaPhone className="mr-2 w-5 h-5" />
              {specificData
                ? specificData.bookingSection.secondaryButtonText
                : "Call Us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

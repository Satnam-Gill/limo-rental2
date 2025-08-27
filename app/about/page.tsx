import Link from "next/link";
import { 
  FaCarSide, 
  FaClock, 
  FaCheck, 
  FaUserTie, 
  FaStar,
  FaPhone,
  FaUsers,
  FaHeart
} from "react-icons/fa";
import data from "@/public/data.json";

export const metadata = {
  title: "About Us – Premium Limo Service in Houston, TX | Professional Transportation",
  description:
    "Learn about Ralphs Limousine Services, your trusted limo service in Houston. Offering luxury vehicles and affordable rates for all events. Book your ride today!",
  alternates: {
    canonical: `${data.baseUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={data.about.bannerImage}
            alt="About Elite Limousine Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              About Us – Limo Service in Houston, TX
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover our story of excellence, commitment to luxury, and dedication to providing 
              the finest transportation services in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Your Trusted Limo Service in Houston, TX
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are committed to providing the highest quality limo service in Houston, TX. With 10+ years of experience in the luxury transportation industry, we have earned a reputation for reliability, professionalism, and customer satisfaction. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you need a party bus for a night out or an airport limo service, we strive to deliver an unforgettable experience.
              </p>
             
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/White%20Chrysler%20Limousine%20Up%20To%208%20Adults2.png?updatedAt=1755857569500"
                  alt="Elite Limousine Excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-primary/40"></div>
          
              </div>
                </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaStar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for perfection in every aspect of our service, from vehicle maintenance 
                to customer experience, ensuring the highest standards are consistently met.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                Our love for luxury vehicles and exceptional service drives us to go above and 
                beyond, creating memorable experiences for every client.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct business with honesty, transparency, and respect, building lasting 
                relationships based on trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Team & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Our Fleet of Luxury Vehicles
              </h2>
           <p className="text-lg text-gray-600 leading-relaxed mb-6">
  We offer a wide range of vehicles to suit your needs, from stretch limousines to Mercedes Sprinters and luxury shuttle buses. All of our vehicles are maintained to the highest standards to ensure a safe and comfortable ride. Whether you're attending a wedding, corporate event, or sporting event, we have the perfect vehicle for you.
  <br /><br />
  We are proud to be Houston’s leading limo service, providing luxury transportation for all occasions. Contact us today to learn more about our services or to book your ride.
</p>
{/* <div className="space-y-4 mt-6">
  <div className="flex items-center gap-3">
    <FaCheck className="w-5 h-5 text-primary flex-shrink-0" />
    <span className="text-gray-700">Stretch limousines, Mercedes Sprinters, and luxury shuttle buses available</span>
  </div>
  <div className="flex items-center gap-3">
    <FaCheck className="w-5 h-5 text-primary flex-shrink-0" />
    <span className="text-gray-700">Vehicles maintained to the highest standards for safety and comfort</span>
  </div>
  <div className="flex items-center gap-3">
    <FaCheck className="w-5 h-5 text-primary flex-shrink-0" />
    <span className="text-gray-700">Perfect options for weddings, corporate events, and sporting events</span>
  </div>
  <div className="flex items-center gap-3">
    <FaCheck className="w-5 h-5 text-primary flex-shrink-0" />
    <span className="text-gray-700">Houston’s leading limo service for luxury transportation</span>
  </div>
  <div className="flex items-center gap-3">
    <FaCheck className="w-5 h-5 text-primary flex-shrink-0" />
    <span className="text-gray-700">Contact us today to learn more or book your ride</span>
  </div>
</div> */}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/White%20Chrysler%20Limousine%20Up%20To%208%20Adults2.png?updatedAt=1755857569500"
                  alt="Elite Limousine Excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-primary/40"></div>
          
              </div>
             </div>
       
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from satisfied customers who trust us with their transportation needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {data.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
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
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Elite Difference
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied clients who have chosen Elite Limousine for their 
              luxury transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



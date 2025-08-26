import Link from "next/link";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import data from "@/public/data.json";

export const metadata = {
  title: "Contact Us – Book Your Limo Service in Houston, TX | Affordable & Reliable",
  description:
    "Get in touch with Ralphs Limousine Services for affordable limo service in Houston. Call or book online for quick, reliable limo rentals for all events.",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={data.contact.bannerImage}
            alt="Contact Elite Limousine Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
               Get in Touch with Ralphs Limousine Services for Limo Service
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to book your luxury transportation? Contact us today for a personalized quote 
              and exceptional service that exceeds your expectations.
            </p>
          </div>
        </div>
      </section>
{/* Contact Intro Section - Place just below the banner */}
<section className="bg-white py-12">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
    
    {/* Right: Content */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
        {/* <FaPhone className="w-8 h-8 text-secondary" /> */}
        Contact Us – Book Your Limo Service in Houston, TX
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        We are always here to assist you with all your limo service needs in Houston, TX. Whether you’re looking to book a ride for a wedding, sporting event, or airport transportation, our team is ready to ensure your experience is seamless and stress-free.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="tel:+15551234567"
          className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg"
        >
          <FaPhone className="w-5 h-5" />
          Call Us Now
        </a>
        <a
          href="mailto:info@elitelimo.com"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-all duration-200"
        >
          <FaEnvelope className="w-5 h-5" />
          Email Us
        </a>
      </div>
    </div>
    {/* Left: Image */}
    <div className="flex-shrink-0 w-full md:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Black%20Chrysler%20Limousine%20Up%20To%208%20Adults2.jpg?updatedAt=1755857560265"
          alt="Houston Limo Service"
          className="w-full h-64 object-cover"
        />
      </div>
    </div>
  </div>
</section>
      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        required 
                        className="form-input"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        required 
                        className="form-input"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="form-input"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="form-label">Service Type</label>
                    <select id="service" name="service" className="form-input">
                      <option value="">Select a service</option>
                      <option value="airport-transfers">Airport Transfers</option>
                      <option value="corporate-travel">Corporate Travel</option>
                      <option value="event-chauffeur">Event Chauffeur</option>
                      <option value="hourly-service">Hourly As-Directed</option>
                      <option value="city-to-city">City-to-City Rides</option>
                      <option value="vip-security">VIP & Security</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="form-label">Travel Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      className="form-textarea"
                      placeholder="Tell us about your transportation needs..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full text-lg py-4"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Emergency Service */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <FaShieldAlt className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900">Emergency Service</h3>
                </div>
                <p className="text-red-700 mb-4">Need immediate assistance? Call our 24/7 emergency line:</p>
                <a 
                  href={`tel:${data.contact.emergency}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  {data.contact.emergency}
                </a>
              </div>
              
              {/* General Contact */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Phone</div>
                      <div className="font-semibold text-gray-900">{data.company.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Email</div>
                      <div className="font-semibold text-gray-900">{data.company.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Address</div>
                      <div className="font-semibold text-gray-900">{data.company.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-gray-600">Hours</div>
                      <div className="font-semibold text-gray-900">{data.company.hours}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link 
                    href="/services"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <FaArrowRight className="w-4 h-4" />
                    View Our Services
                  </Link>
                  <Link 
                    href="/fleet"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <FaArrowRight className="w-4 h-4" />
                    Explore Our Fleet
                  </Link>
                  <Link 
                    href="/about"
                    className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                  >
                    <FaArrowRight className="w-4 h-4" />
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve multiple cities with dedicated offices and local teams
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {data.contact.locations.map((location) => (
              <div key={location.city} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                    <FaMapMarkerAlt className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{location.city}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link 
                    href={`tel:${location.phone}`}
                    className="inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200"
                  >
                    Call This Office
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking at least 24-48 hours in advance for standard services. For special events or peak travel times, we suggest booking 1-2 weeks ahead.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-600">We offer flexible cancellation up to 24 hours before your scheduled service. Cancellations within 24 hours may incur a 50% charge.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you provide airport pickup?</h3>
              <p className="text-gray-600">Yes! We specialize in airport transfers with flight tracking, meet & greet service, and waiting time included in your booking.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Are your chauffeurs licensed and insured?</h3>
              <p className="text-gray-600">Absolutely. All our chauffeurs are professionally licensed, background-checked, and fully insured for your safety and peace of mind.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards, cash, and corporate accounts. Payment is typically collected at the end of your service.</p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer corporate accounts?</h3>
              <p className="text-gray-600">Yes, we provide corporate accounts with monthly billing, detailed reporting, and dedicated account managers for business clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Don't wait - contact us today to secure your luxury transportation and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-secondary px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                Call Now
              </Link>
              <Link 
                href="mailto:info@elitelimo.com"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




import React from "react";
import { FaQuestionCircle, FaPhone, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";
import FaqItem from "../components/Faq";
import data from "@/public/data.json"

export const metadata = {
  title: "FAQs – Houston Limo Service | Ralphs Limousine Services",
  description: "Find answers to common questions about booking, insurance, vehicle options, and more with Ralphs Limousine Services limo service in Houston.",
};

const faqs = [
  {
    question: "Why should I choose Ralphs Limousine Services over other limo service providers?",
    answer:
      "At Ralphs Limousine Services, we offer luxury transportation services that are reliable, affordable, and tailored to your specific needs. With a fleet of premium vehicles, including Mercedes Sprinters, stretch limousines, and party buses, we ensure that your Houston limo experience is nothing short of exceptional. Our professional chauffeurs and on-time service make us a top choice for events like weddings, corporate travel, and airport transfers. Choose us for a seamless, VIP experience every time.",
  },
  {
    question: "Are there any hourly minimums for booking a limo?",
    answer:
      "Yes, we have hourly minimums based on the type of service and vehicle. For airport transfers or short trips, the minimum rental time is typically 2 hours. For events like weddings or corporate functions, full-day bookings are often required. However, we offer flexible pricing options for shorter rentals. Contact us for a customized quote based on your specific needs.",
  },
  {
    question: "Are we insured when traveling with Ralphs Limousine Services?",
    answer:
      "Yes, all of our vehicles are fully insured and meet state and federal safety regulations. Our chauffeurs are trained professionals, and we ensure that your safety is our top priority. Whether you're in a stretch limo, party bus, or Mercedes Sprinter, you can rest assured that you're in safe hands during your ride with us.",
  },
  {
    question: "What if I forgot something in the limo?",
    answer:
      "If you forget an item in one of our vehicles, don’t worry! Simply contact us as soon as possible, and we’ll help you retrieve your lost belongings. Our customer service team will coordinate with the driver to check the vehicle and return your item to you at the earliest convenience. We value your personal items and will do everything we can to ensure their safe return.",
  },
  {
    question: "How quickly can I get a vehicle from Ralphs Limousine Services?",
    answer:
      "We pride ourselves on offering quick and efficient limo service. If you're in need of a last-minute booking, we can often accommodate same-day requests, depending on availability. For more complex events or large groups, we recommend booking 24-48 hours in advance. Regardless, we strive to ensure your Houston limo rental needs are met with speed and professionalism.",
  },
  {
    question: "What sets Ralphs Limousine Services apart from the competition?",
    answer:
      "What sets Ralphs Limousine Services apart is our commitment to quality, reliable service, and attention to detail. Our fleet of luxury vehicles, including Mercedes Sprinters, stretch limos, and party buses, is maintained to the highest standards. We provide competitive pricing, transparent booking, and personalized services for events ranging from weddings to corporate events. Our professional chauffeurs are dedicated to making your experience unforgettable.",
  },
  {
    question: "How many people can you accommodate in your vehicles?",
    answer: (
      <span>
        Our fleet is designed to accommodate a wide range of group sizes. Here’s an overview of our vehicle capacities:
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
          <li>Stretch Limos: Up to 8 passengers</li>
          <li>Mercedes Sprinter: Up to 14 passengers</li>
          <li>Luxury Vans: Up to 14 passengers</li>
          <li>Party Bus: Up to 18 passengers</li>
          <li>Shuttle Buses: Up to 22 passengers</li>
        </ul>
        Whether you're planning an intimate ride or a large group outing, we have the perfect vehicle to meet your needs.
      </span>
    ),
  },
  {
    question: "How can I visit Ralphs Limousine Services to book a limo?",
    answer: (
      <span>
        Booking your limo service with Ralphs Limousine Services is easy! You can visit our website to make reservations online or give us a call at <span className="font-semibold">[Your Phone Number]</span>. Our customer service team is ready to assist you with any questions and help you select the perfect vehicle for your event. If you'd like to discuss your transportation needs in person, feel free to stop by our office at <span className="font-semibold">[Your Address]</span>.
      </span>
    ),
  },
];



export default function FAQPage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Find answers to the most common questions about our Houston limo service. If you need more help, feel free to <a href="/contact" className="text-secondary font-semibold underline">contact us</a>.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} faq={faq} />
          ))}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href={`tel:${data.company.phone}`}
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg"
          >
            <FaPhone className="w-5 h-5" />
            Call Us
          </a>
          <a
            href="https://maps.google.com/?q=[Your Address]"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="w-5 h-5" />
            Visit Our Office
          </a>
        </div>
      </div>
    </div>
  );
}
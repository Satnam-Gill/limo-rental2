import React from "react";
import data from "@/public/data.json";

export const metadata = {
  title: "Terms & Conditions – Limo Service Booking for Houston, TX",
  description:
    "Review the Terms & Conditions for booking limo services in Houston. Learn about booking, payment, cancellations, and vehicle use policies.",
  alternates: {
    canonical: `${data.baseUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="font-sans">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/White%20Chrysler%20Limousine%20Up%20To%208%20Adults2.png?updatedAt=1755857569500"
            alt="Terms and Conditions"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Please read our terms and conditions carefully before booking our limo services. 
              These terms govern your use of our Houston transportation services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <div className="bg-white min-h-screen py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Terms & Conditions – Booking Limo Service with Ralphs Limousine
        </h2>
        <h2 className="text-2xl font-bold text-secondary mb-4">Booking and Payment</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>All bookings require a deposit to secure your reservation.</li>
          <li>Full payment is due at least 24 hours before the scheduled service.</li>
          <li>
            Cancellations must be made at least 48 hours in advance to receive a full refund. Cancellations made within 24 hours are subject to a cancellation fee.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-secondary mb-4">Services Provided</h2>
        <p className="text-gray-700 mb-8">
          We offer a wide range of limo services including wedding transportation, airport transfers, corporate travel, and sporting event transportation. We strive to provide the highest level of service, but we reserve the right to modify or cancel any reservation in case of unforeseen circumstances (e.g., vehicle breakdown, weather conditions).
        </p>
        <h2 className="text-2xl font-bold text-secondary mb-4">Liability</h2>
        <p className="text-gray-700 mb-8">
          While we take every precaution to ensure your safety, we are not responsible for personal injuries or property damage that occur during the service. Passengers are expected to comply with all safety rules and regulations while in the vehicle.
        </p>
        <h2 className="text-2xl font-bold text-secondary mb-4">Vehicle Use</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>Alcohol and drugs are prohibited in our vehicles unless legally permitted.</li>
          <li>The number of passengers must not exceed the vehicle’s capacity.</li>
          <li>Smoking is not permitted in any of our vehicles.</li>
        </ul>
        <h2 className="text-2xl font-bold text-secondary mb-4">Amendments</h2>
        <p className="text-gray-700 mb-8">
          We reserve the right to amend these Terms & Conditions at any time. Any changes will be communicated via our website.
        </p>
        <p className="text-sm text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Ralphs Limousine. All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export const metadata = {
  title: "Terms & Conditions – Limo Service Booking for Houston, TX",
  description:
    "Review the Terms & Conditions for booking limo services in Houston. Learn about booking, payment, cancellations, and vehicle use policies.",
};

export default function TermsPage() {
  return (
    <div className="font-sans bg-white min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-primary mb-6">
          Terms & Conditions – Booking Limo Service with Ralphs Limousine
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          By using our limo service in Houston, TX, you agree to the following Terms & Conditions. Please read carefully before booking any services with us.
        </p>
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
  );
}
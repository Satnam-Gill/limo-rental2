import React from "react";
import data from "@/public/data.json";

export const metadata = {
  title: "Privacy Policy – Protecting Your Data | Ralphs Limousine Services Limo Service Houston",
  description:
    "Learn how Ralphs Limousine Services protects your personal data. Read our privacy policy for limo service in Houston. Your privacy is our priority.",
  alternates: {
    canonical: `${data.baseUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="font-sans">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
        <div className="absolute inset-0 bg-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Black%20Chrysler%20Limousine%20Up%20To%208%20Adults2.jpg?updatedAt=1755857560265"
            alt="Privacy Policy"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We value your privacy and are committed to protecting your personal information. 
              Learn how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <div className="bg-white min-h-screen py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy – Protecting Your Personal Information
        </h2>
        <h2 className="text-2xl font-bold text-secondary mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>
            <span className="font-semibold">Personal Identification Information:</span> Name, phone number, email address, billing address.
          </li>
          <li>
            <span className="font-semibold">Payment Information:</span> Credit card details, payment method.
          </li>
          <li>
            <span className="font-semibold">Service Preferences:</span> Specific details about your limo service, including vehicle type, dates, and locations.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-secondary mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>
            <span className="font-semibold">Process Bookings:</span> To confirm and fulfill your limo service bookings.
          </li>
          <li>
            <span className="font-semibold">Communication:</span> To send booking confirmations, receipts, and customer service messages.
          </li>
          <li>
            <span className="font-semibold">Marketing:</span> To send you promotional offers related to our limo services (if you opt-in).
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-secondary mb-4">How We Protect Your Data</h2>
        <p className="text-gray-700 mb-8">
          We implement security measures to protect your personal data, including encryption, secure servers, and restricted access. Your information is used solely for business purposes and is never sold or shared with third parties without your consent.
        </p>
        <h2 className="text-2xl font-bold text-secondary mb-4">Third-Party Services</h2>
        <p className="text-gray-700 mb-8">
          We may share your information with trusted third parties who assist us in providing limo services, such as payment processors or marketing agencies. These third parties are required to maintain your privacy and security.
        </p>
        <h2 className="text-2xl font-bold text-secondary mb-4">Your Rights</h2>
        {/* <p className="text-gray-700 mb-8">
          You have the right to access, update, or delete your personal data. If you wish to exercise these rights, please contact us at <span className="font-semibold">[Your Email Address]</span>.
        </p> */}
        <p className="text-sm text-gray-500 mt-12">
          &copy; {new Date().getFullYear()} Ralphs Limousine Services. All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
}
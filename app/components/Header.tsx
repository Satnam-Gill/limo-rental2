"use client";

import Link from "next/link";
import { useState } from "react";
import data from "@/public/data.json";
import { IoCall } from "react-icons/io5";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#0f1623] text-foreground sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={closeMenu}
        >
          <div className="relative">
            <Image
              src="https://ik.imagekit.io/h7rza8886p/Ralphs%20Limousine/logo.png?updatedAt=1756281693357"
              alt="Company Logo"
              className="h-16 w-full object-cover"
              width={200}
              height={200}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex !text-white items-center gap-8 text-sm">
          <Link
            href="/"
            className="hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            href="/fleet"
            className="hover:text-primary transition-colors font-medium"
          >
            Fleet
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors font-medium"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="tel:+15551234567"
            className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors"
          >
            <span className="hidden lg:inline">Call Now</span>
            <span className="lg:hidden">
              <IoCall className="text-2xl" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary text-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Now
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-secondary/95 border-t border-white/10 px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-primary transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-primary transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/fleet"
            className="block text-white hover:text-primary transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            Fleet
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-primary transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-primary transition-colors font-medium py-2"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="tel:+15551234567"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              <IoCall className="text-2xl" /> Call Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

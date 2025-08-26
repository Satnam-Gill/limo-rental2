"use client";

import Link from "next/link";
import { useState } from "react";
import data from "@/public/data.json";
import { IoCall } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-secondary/95 text-foreground sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white/20 border-2 border-white/40"></div>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-wide text-white">{data.company.name}</span>
            <div className="text-xs text-white/70 -mt-1">{data.company.tagline}</div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex !text-white items-center gap-8 text-sm">
          <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
          <Link href="/services" className="hover:text-primary transition-colors font-medium">Services</Link>
          <Link href="/fleet" className="hover:text-primary transition-colors font-medium">Fleet</Link>
          <Link href="/about" className="hover:text-primary transition-colors font-medium">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="tel:+15551234567" className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-primary transition-colors">
            <span className="hidden lg:inline">Call Now</span>
            <span className="lg:hidden"><IoCall className="text-2xl" /></span>
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-primary text-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
            Book Now
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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

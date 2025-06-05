import React, { useState } from "react";
import {
  Globe,
  Phone,
  MapPin,
  Gift,
  HelpCircle,
  Headset,
  Languages,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white via-gray-50 to-white shadow-md sticky top-0 z-50 ">
      {/* Top Bar Container */}
      <div className="container mx-auto flex flex-row justify-between items-center px-4 py-2 md:py-3">
        {/* Left Side: Location + Phone */}
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-orange-500" />
            <span className="font-normal text-xs md:text-sm text-gray-800">
              Noida, 201301
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4 text-orange-500" />
            <a
              href="tel:9599548975"
              className="text-orange-500 font-normal text-xs md:text-sm hover:underline"
            >
              9599548975
            </a>
          </div>
        </div>

        {/* Right Side: Desktop Menu + Hamburger */}
        <div className="flex items-center">
          {/* Desktop Menu (md and above) */}
          <nav className="hidden md:flex items-center gap-10">
            {/* Offers */}
            <div className="relative flex items-center space-x-1 group cursor-pointer">
              <Gift className="w-4 h-4 text-red-500 group-hover:text-red-600" />
              <span className="text-red-500 font-normal group-hover:text-red-600 text-xs md:text-sm">
                Offers
              </span>
              <span className="absolute -top-1 -right-4 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                10
              </span>
            </div>

            {/* Live Tracking */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <Globe className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700 text-xs md:text-sm hover:text-blue-700">
                Live Tracking
              </span>
            </div>

            {/* FAQ */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <HelpCircle className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700 text-xs md:text-sm hover:text-blue-700">
                FAQ
              </span>
            </div>

            {/* Support */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <Headset className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700 text-xs md:text-sm hover:text-blue-700">
                Support
              </span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Languages className="w-4 h-4 text-gray-700" />
              <select className="bg-transparent focus:outline-none cursor-pointer text-xs md:text-sm text-gray-700">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </nav>

          {/* Hamburger Icon (small screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none ml-4"
            aria-label="Toggle header menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-2 rounded-b-md">
            {/* Offers */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Gift className="w-4 h-4 text-red-500" />
                <span className="text-xs text-red-500 font-normal">Offers</span>
              </div>
              <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                10
              </span>
            </div>

            {/* Live Tracking */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <Globe className="w-4 h-4 text-gray-700" />
              <span className="text-xs text-gray-700 hover:text-blue-700">
                Live Tracking
              </span>
            </div>

            {/* FAQ */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <HelpCircle className="w-4 h-4 text-gray-700" />
              <span className="text-xs text-gray-700 hover:text-blue-700">
                FAQ
              </span>
            </div>

            {/* Support */}
            <div className="flex items-center space-x-1 cursor-pointer transition-colors duration-200">
              <Headset className="w-4 h-4 text-gray-700" />
              <span className="text-xs text-gray-700 hover:text-blue-700">
                Support
              </span>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <Languages className="w-4 h-4 text-gray-700" />
              <select className="bg-transparent focus:outline-none cursor-pointer text-xs text-gray-700">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-4 
            sm:gap-6 
            md:gap-6 
            pb-10 
            text-center
            sm:text-left
            justify-items-center
            sm:justify-items-start
          "
        >
          {/* Brand Info */}
          <div className="text-center sm:text-left">
            <div className="sm:mx-0 max-w-sm mx-0">
              <img src={logo} alt="Logo" className="h-14 w-auto mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed ">
                We make travel joyful. <br />
                Trusted transport service provider in Delhi/NCR since 2003.
              </p>
              <div className="flex justify-center sm:justify-start mt-3 space-x-3">
                <a
                  href="#"
                  className="bg-[#FF5B22] text-blue-800 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition duration-200 shadow-md"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  className="bg-[#FF5B22] text-blue-800 w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition duration-200 shadow-md"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF5B22] mb-1 sm:mb-2">
              Our Services
            </h3>
            <ul className="text-gray-700 space-y-1.5 text-sm">
              <li className="hover:text-[#FF5B22] cursor-pointer">Home</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">Char Dham</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">Do Dham</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">Badrinath</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">Kedarnath</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">Book Now</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF5B22] mb-1 sm:mb-2">
              Company
            </h3>
            <ul className="text-gray-700 space-y-1.5 text-sm">
              <li className="hover:text-[#FF5B22] cursor-pointer">About Us</li>
              <li className="hover:text-[#FF5B22] cursor-pointer">
                Contact Us
              </li>
              <li className="hover:text-[#FF5B22] cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#FF5B22] mb-1 sm:mb-2 text-center sm:text-left">
              Contact
            </h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2 items-center text-center sm:text-left">
                <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                  <span className="bg-[#FF5B22] text-blue-800 w-10 h-10 sm:w-12 sm:h-12 rounded-full hover:scale-110 transition flex justify-center items-center">
                    <FaMapMarkerAlt size={18} />
                  </span>
                </div>
                <span className="sm:p-0 sm:bg-transparent w-full sm:w-auto">
                  B-128, Transport Nagar, Sector-69, Noida, 201301
                </span>
              </li>

              <li className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 items-center text-center sm:text-left">
                <span className="bg-[#FF5B22] text-blue-800 w-12 h-12 rounded-full hover:scale-110 transition inline-flex justify-center items-center">
                  <FaEnvelope size={18} />
                </span>
                <span className="sm:p-0 sm:bg-transparent w-full sm:w-auto">
                  booking@anttour.in
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 items-center text-center sm:text-left">
                <span className="bg-[#FF5B22] text-blue-800 w-12 h-12 rounded-full hover:scale-110 transition inline-flex justify-center items-center">
                  <FaPhoneAlt size={18} />
                </span>
                <span className="sm:p-0 sm:bg-transparent w-full sm:w-auto">
                  981199 2203
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="  flex-col sm:flex-row justify-center sm:justify-between items-center border-t pt-4 pb-6 text-sm text-gray-600 gap-4">
          <p>© 2025 ANT Travels. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>We Accept</span>
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="visa"
              className="h-5"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              alt="paypal"
              className="h-5"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/apple-pay.png"
              alt="apple-pay"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

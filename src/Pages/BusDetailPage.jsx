import React from "react";
import { CheckCircle } from "lucide-react";
import Car2 from "../assets/Car2.jpg";
import BusTariffPage from "../Pages/BusTariffPage";
import SeaterAc from "../Pages/SeaterAc";
import GallerySection from "../Pages/GallerySection";

const BusDetailPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-10 sm:px-6 md:px-12 lg:px-24 xl:px-36 space-y-16">
      {/* Intro Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
          Luxury AC Delux Bus - 27 Seater (2+2)
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Ride in comfort and style with our top-tier 27-seater AC Delux bus —
          the ultimate choice for{" "}
          <span className="font-semibold text-blue-800">
            weddings, pilgrimages, corporate tours,
          </span>{" "}
          and family vacations.
        </p>
      </div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Image & Gallery */}
        <div className="w-full lg:w-1/2 space-y-6">
          <img
            src={Car2}
            alt="AC Delux Bus"
            className="rounded-3xl w-full h-[300px] sm:h-[400px] object-cover shadow-2xl border border-blue-200"
          />
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={Car2}
                alt={`Bus gallery ${i + 1}`}
                className="w-28 h-20 sm:w-36 sm:h-24 object-cover rounded-xl border border-blue-200 shadow-md hover:scale-105 hover:shadow-lg transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Right - Info */}
        <div className="w-full lg:w-1/2 bg-white/60 backdrop-blur-md border border-blue-100 rounded-2xl shadow-xl p-6 space-y-6">
          <h2 className="text-3xl font-bold text-blue-900">
            AC Delux Bus 27 Seater (2+2)
          </h2>

          <div className="space-y-2 text-base sm:text-lg font-medium text-gray-800">
            <p>
              <span className="text-gray-500">Local Run (4 Hrs 40 km): </span>
              <span className="line-through text-red-500">₹7500</span>{" "}
              <span className="text-green-700 font-bold">₹6500/-</span>
            </p>
            <p>
              <span className="text-gray-500">Outstation Per Km: </span>
              <span className="line-through text-red-500">₹55</span>{" "}
              <span className="text-green-700 font-bold">₹45/-</span>
            </p>
          </div>

          <p className="text-gray-700 text-[15px] leading-relaxed">
            Our 27-seater bus ensures a premium travel experience with ambient
            lighting, smooth suspension, and powerful AC. Ideal for
            long-distance group travel with luggage space, safety features, and
            onboard convenience.
          </p>

          <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition duration-300">
            Book Now →
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6 border border-blue-100">
        <h3 className="text-2xl font-bold text-blue-800">
          Why Choose This Bus?
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 font-medium text-base">
          {[
            "Wide reclining pushback seats",
            "Powerful dual AC for full comfort",
            "Spacious for large groups & luggage",
            "Ideal for religious tours & weddings",
            "Doorstep pickup in Delhi-NCR",
            "Budget-friendly luxury ride",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tariff + Other Bus Types */}
      <>
        <SeaterAc />
        <BusTariffPage />
        <GallerySection />
      </>
    </div>
  );
};

export default BusDetailPage;

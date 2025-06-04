import React from "react";
import Spirital3 from "../assets/Spirital3.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <div className="w-full lg:max-w-xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          Begin Your Sacred Journey Today
        </h1>
        <p className="text-base sm:text-lg mb-8">
          The Char Dham Yatra season has begun! Book your transportation now to
          secure the best vehicles and experienced drivers for your pilgrimage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mx-auto w-full max-w-xs sm:max-w-none">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full transition duration-300 w-full sm:w-auto">
            Book Transportation
          </button>
          <button className="border border-white hover:bg-white hover:text-blue-800 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full transition duration-300 w-full sm:w-auto">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto relative rounded-xl overflow-hidden shadow-2xl">
        <img
          src={Spirital3}
          alt="Char Dham Yatra"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;

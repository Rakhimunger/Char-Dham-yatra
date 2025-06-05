import React from "react";
import Transport from "./Transport";
import Teertyatra from "./Teertyatra";
import Templeimg from "../assets/Templeimg.jpg";
import { motion } from "framer-motion";

const Badrinath = () => {
  return (
    <div>
      {/* 🛕 Banner Section with Responsive Heights */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden shadow-xl">
        <img
          src={Templeimg}
          alt="badrinathimg"
          className="w-full h-full object-cover object-center brightness-75"
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-3">
            Do Dham Yatra
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl max-w-xl mb-6 drop-shadow-md">
            Discover spiritual bliss with our comfortable travel services to the
            sacred Badrinath temple.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg transition"
          >
            Book Your Journey
          </motion.button>
        </motion.div>
      </div>

      {/* ✨ Introduction Text Section */}
      <section className="max-w-4xl mx-auto my-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Why Choose Our Badrinath Yatra Package?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Experience hassle-free travel with expert guides, comfortable
          vehicles, and flexible packages tailored for your spiritual journey.
          We ensure your trip is safe, smooth, and memorable.
        </p>
      </section>

      {/* 🚐 Transport and 📸 Teerth Yatra Sections */}
      <div>
        <Transport />
        <Teertyatra />
      </div>
    </div>
  );
};

export default Badrinath;

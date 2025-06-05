import React from "react";
import Transport from "./Transport";
import Teertyatra from "./Teertyatra";
import badrinathimg2 from "../assets/badrinathimg2.png";
import { motion } from "framer-motion";

const Badrinath = () => {
  return (
    <div>
      {/* Banner Section with Text Overlay */}
      <div className="relative w-full h-[80vh] overflow-hidden shadow-xl">
        <img
          src={badrinathimg2}
          alt="badrinathimg"
          className="w-full h-full object-cover brightness-75"
        />

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Badrinath Dham Yatra
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mb-8 drop-shadow-md">
            Discover spiritual bliss with our comfortable travel services to the
            sacred Badrinath temple.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Book Your Journey
          </motion.button>
        </motion.div>
      </div>

      {/* Intro Section */}
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

      {/* Transport & Teertyatra Sections */}
      <div>
        <Transport />
        <Teertyatra />
      </div>
    </div>
  );
};

export default Badrinath;

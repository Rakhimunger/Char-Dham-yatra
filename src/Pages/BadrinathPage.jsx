import React from "react";
import { motion } from "framer-motion";
import Dodhamimg from "../assets/Dodhamimg.jpg";

export default function DodhamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-8 sm:px-6 lg:px-12 flex flex-col items-center justify-center">
      {/* Intro Section */}
      <section className="text-center mb-12 max-w-3xl w-full">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl text-orange-600 font-semibold uppercase tracking-widest"
        >
          Sacred Destinations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mt-3 mb-4"
        >
          The Four Divine Abodes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 text-sm sm:text-base"
        >
          Explore the holy shrines of Char Dham, the most sacred pilgrimage
          circuit nestled in the Himalayas.
        </motion.p>
        <div className="mt-4 h-1 w-16 mx-auto bg-orange-500 rounded-full"></div>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between items-center text-center md:text-left"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
            Dodham
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex justify-center md:justify-start items-center">
              <span className="text-orange-600 mr-2">📍</span>
              Rudraprayag District, Uttarakhand
            </p>
            <p className="flex justify-center md:justify-start items-center">
              <span className="text-orange-600 mr-2">⛰️</span>
              Elevation: 3,583 meters
            </p>
          </div>

          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            One of the twelve Jyotirlingas of Lord Shiva, Dodham is nestled in
            the Garhwal Himalayan range. The temple is only accessible by a trek
            and offers a serene spiritual experience surrounded by nature.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-800 text-left md:text-left">
            {[
              "6-month opening period",
              "Helicopter services available",
              "Ancient stone temple",
              "Mandakini River origin",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start"
              >
                <span className="text-yellow-500 mr-2">✓</span> {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-4 inline-block text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Explore Dodham →
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-full flex justify-center"
        >
          <div className="aspect-[4/3] md:aspect-[5/4] w-full">
            <img
              src={Dodhamimg}
              alt="Dodham Temple"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

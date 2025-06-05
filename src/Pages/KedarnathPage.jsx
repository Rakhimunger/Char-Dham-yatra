import React from "react";
import { motion } from "framer-motion";
import Dodhamimg from "../assets/Dodhamimg.jpg";

export default function KedarnathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-0 sm:px-4 py-10 flex items-center justify-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full md:max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[420px] w-full"
        >
          <img
            src={Dodhamimg}
            alt="Chardham Temple"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between h-[420px]"
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3">
              Chardham
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center justify-center">
                <span className="text-orange-600 mr-2">📍</span>
                Rudraprayag District, Uttarakhand
              </p>
              <p className="flex items-center justify-center">
                <span className="text-orange-600 mr-2">⛰️</span>
                Elevation: 3,583 meters
              </p>
            </div>

            <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              One of the twelve Jyotirlingas of Lord Shiva, Kedarnath is nestled
              in the Garhwal Himalayan range. The temple is only accessible by a
              16 km trek from Gaurikund and remains closed during winter.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-gray-800 text-left sm:text-center">
              {[
                "6-month opening period",
                "Helicopter services available",
                "Ancient stone temple",
                "Mandakini River origin",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#"
            className="mt-4 inline-block text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-6 py-2 rounded-full font-semibold shadow-lg self-center"
          >
            Explore Chardham →
          </a>
        </motion.div>
      </section>
    </div>
  );
}

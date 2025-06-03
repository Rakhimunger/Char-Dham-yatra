import React from "react";
import { motion } from "framer-motion";
import Dodhamimg from "../assets/Dodhamimg.jpg";

export default function KedarnathPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-10 sm:px-6 lg:px-12">
      {/* Main Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl shadow-xl border border-gray-100 h-full overflow-hidden"
        >
          <img
            src={Dodhamimg}
            alt="Kedarnath Temple"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-5">
            Chardham
          </h3>

          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-center">
              <span className="text-orange-600 mr-2">📍</span>
              Rudraprayag District, Uttarakhand
            </p>
            <p className="flex items-center">
              <span className="text-orange-600 mr-2">⛰️</span>
              Elevation: 3,583 meters
            </p>
          </div>

          <p className="text-gray-700 mt-5 text-sm sm:text-base leading-relaxed">
            One of the twelve Jyotirlingas of Lord Shiva, Kedarnath is nestled
            in the Garhwal Himalayan range. The temple is only accessible by a
            16 km trek from Gaurikund and remains closed during winter due to
            heavy snowfall.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-800">
            {[
              "6-month opening period",
              "Helicopter services available",
              "Ancient stone temple",
              "Mandakini River origin",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-yellow-500 mr-2">✓</span> {item}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-6 inline-block w-fit text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300 px-4 py-2 rounded-full font-semibold shadow-lg"
          >
            Explore Chardham →
          </a>
        </motion.div>
      </section>
    </div>
  );
}

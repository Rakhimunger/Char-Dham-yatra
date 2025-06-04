import React from "react";
import {
  FaRegCalendarCheck,
  FaMapMarkedAlt,
  FaRupeeSign,
  FaRegCheckCircle,
  FaEnvelopeOpenText,
  FaPlaceOfWorship,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaRegCalendarCheck size={50} className="text-indigo-600" />,
    title: "Choose Destination",
    desc: "Select your Char Dham destination - Kedarnath, Badrinath, Gangotri, or Yamunotri.",
  },
  {
    icon: <FaMapMarkedAlt size={50} className="text-indigo-600" />,
    title: "Plan Route",
    desc: "Pick travel dates and plan the route with our expert guidance.",
  },
  {
    icon: <FaRupeeSign size={50} className="text-indigo-600" />,
    title: "Make Payment",
    desc: "Pay securely to confirm your Char Dham Yatra booking.",
  },
  {
    icon: <FaRegCheckCircle size={50} className="text-indigo-600" />,
    title: "Booking Confirmed",
    desc: "Receive a confirmation message with full itinerary and contacts.",
  },
  {
    icon: <FaEnvelopeOpenText size={50} className="text-indigo-600" />,
    title: "Travel Assistance",
    desc: "Our support team connects with you for any special requests.",
  },
  {
    icon: <FaPlaceOfWorship size={50} className="text-indigo-600" />,
    title: "Begin Yatra",
    desc: "Start your spiritual journey to Char Dham with our experienced team.",
  },
];

const Teertyatra = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-white to-indigo-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-10">
          🛕 Char Dham Yatra Booking Steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center border-t-4 border-indigo-600"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teertyatra;

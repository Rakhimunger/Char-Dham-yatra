import React from "react";
import {
  FaMountain,
  FaShieldAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMountain className="text-3xl text-white" />,
    title: "Mountain-Experienced Drivers",
    description:
      "Our drivers have years of experience navigating the challenging Himalayan terrain and are familiar with all routes to Char Dham.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-white" />,
    title: "Well-Maintained Vehicles",
    description:
      "All our vehicles undergo rigorous safety checks and are specially equipped for mountain travel with proper maintenance.",
  },
  {
    icon: <FaPhoneAlt className="text-3xl text-white" />,
    title: "24/7 Support Team",
    description:
      "Our dedicated support team is available round-the-clock to assist with any issues during your pilgrimage journey.",
  },
  {
    icon: <FaCalendarAlt className="text-3xl text-white" />,
    title: "Flexible Booking Options",
    description:
      "Choose from various vehicle types and customize your itinerary based on your group size and preferences.",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-white" />,
    title: "Local Knowledge",
    description:
      "Benefit from our deep understanding of local conditions, best stop points, and accommodation options throughout the route.",
  },
  {
    icon: <FaHeart className="text-3xl text-white" />,
    title: "Pilgrim-Focused Service",
    description:
      "Our services are specially designed considering the needs and comfort of pilgrims undertaking this sacred journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-semibold">WHY CHOOSE US</p>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mt-2">
          Travel Worry-Free with ANT Travels
        </h2>
        <p className="mt-2 text-gray-600">
          Experience the difference with our specialized Char Dham
          transportation services
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mx-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mb-4 hover:bg-orange-600">
              {item.icon}
            </div>
            <h3 className="font-semibold text-blue-800 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

// Pages/CharDhamServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import antbus from "../assets/antbus.jpg";
// import Teertyatra from "./Teertyatra";

const services = [
  {
    img: antbus,
    title: "AC Delux Bus 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationRate: "₹14200/- per km",
  },
  {
    img: antbus,
    title: "AC Delux Bus 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationRate: "₹14200/- per km",
  },
  {
    img: antbus,
    title: "AC Delux Bus 49 Seater (2+2)",
    city: "Delhi NCR",
    localRun: "4 Hours 40 km",
    localPrice: "₹14200/-",
    outstationRate: "₹14200/- per km",
  },
];

const CharDhamServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
        🚌 Our Luxury Bus Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300 p-4"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-40 w-full object-cover transform scale-x-[-1] rounded-md"
            />
            <div className="mt-4 space-y-2">
              <h3 className="text-lg font-bold text-blue-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">City:</span>{" "}
                <span className="text-red-600">{service.city}</span>
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Local Run:</span>{" "}
                {service.localRun} —{" "}
                <span className="text-blue-900 font-bold">
                  {service.localPrice}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Outstation Rate:</span> Per km —{" "}
                <span className="text-blue-900 font-bold">
                  {service.outstationRate}
                </span>
              </p>

              <div className="flex justify-between items-center mt-4">
                <Link to="/bus-details">
                  <button className="px-3 py-1.5 bg-white border border-blue-800 text-blue-800 text-sm font-semibold rounded-full hover:bg-blue-100 transition">
                    Details →
                  </button>
                </Link>
                <button className="px-3 py-1.5 bg-blue-800 text-white text-sm font-semibold rounded-full hover:bg-blue-900 transition">
                  Book Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-20">
        <Teertyatra />
      </div> */}
    </div>
  );
};

export default CharDhamServices;

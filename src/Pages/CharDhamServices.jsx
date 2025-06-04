import React from "react";
import Temple2 from "../assets/Temple2.jpg";
import Temple1 from "../assets/Temple1.jpg";
import Teertyatra from "../Pages/Teertyatra";
import Spirital3 from "../assets/Spirital3.jpg";

const services = [
  {
    img: Temple2,
    title: "Badrinath Dham",
    description:
      "Dedicated to Lord Vishnu, located in Uttarakhand. A key pilgrimage site among the Char Dhams.",
  },
  {
    img: Temple1,
    title: "Kedarnath Dham",
    description:
      "One of the twelve Jyotirlingas, located in the Himalayas, devoted to Lord Shiva.",
  },
  {
    img: Spirital3,
    title: "Gangotri Dham",
    description:
      "Source of River Ganga, dedicated to Goddess Ganga. Peaceful and divine atmosphere.",
  },
  {
    img: Temple2,
    title: "Yamunotri Dham",
    description:
      "Source of River Yamuna, and abode of Goddess Yamuna. Ideal for spiritual seekers.",
  },
  {
    img: Spirital3,
    title: "Yatra Assistance",
    description:
      "We provide complete guidance, travel help, and spiritual support during your journey.",
  },
  {
    img: Temple2,
    title: "Badrinath Dham",
    description:
      "Dedicated to Lord Vishnu, located in Uttarakhand. A key pilgrimage site among the Char Dhams.",
  },
];

const CharDhamServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-200 to-orange-100 px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
        SERVICES WE PROVIDE
      </h2>
      <p className="text-center text-black text-lg mb-10">
        Tailored Religious Assistance for Your Char Dham Yatra
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-yellow-300 rounded-xl overflow-hidden w-full max-w-xs text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-black text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Teertyatra />
      </div>
    </div>
  );
};

export default CharDhamServices;

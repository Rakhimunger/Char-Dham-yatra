import React from "react";
import { Link } from "react-router-dom";
import Car5 from "../assets/Car5.jpg";
import Car2 from "../assets/Car2.jpg";
import Car3 from "../assets/Car3.jpg";

const Transport = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-4">
        Transportation Options
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
        For Char Dham and Do Dham Yatra, we provide a range of well-maintained
        vans, buses, and cars to suit every group size and comfort level.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Car Section */}
        <div className="bg-gray-50 shadow rounded-xl overflow-hidden p-4">
          <img
            src={Car5}
            alt="Car Transportation"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            Our cars are ideal for Char Dham and Do Dham Yatra, offering comfort
            and flexibility for small groups and families.
          </p>
          <ul className="text-blue-800 list-disc pl-5 space-y-1">
            <li>Swift Dzire</li>
            <li>Ertiga</li>
            <li>Innova Crysta</li>
            <li>Fortuner</li>
            <li>Tata Nexon</li>
          </ul>
          <p className="mt-4 font-semibold text-blue-700">
            Starting from ₹15,000 per day
          </p>
        </div>

        {/* Van Section */}
        <div className="bg-gray-50 shadow rounded-xl overflow-hidden p-4">
          <img
            src={Car2}
            alt="Van Transportation"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            Perfect for Char Dham and Do Dham Yatra, our vans provide ample
            space and comfort for medium-sized groups.
          </p>
          <ul className="text-blue-800 list-disc pl-5 space-y-1">
            <li>Force Tempo Traveller 12+1</li>
            <li>Force Tempo Traveller 14+1</li>
            <li>Force Tempo Traveller 17+1</li>
            <li>Tempo Traveller Maharaja</li>
            <li>Tempo Traveller Deluxe</li>
          </ul>
          <p className="mt-4 font-semibold text-blue-700">
            Starting from ₹20,000 per day
          </p>
        </div>

        {/* Bus Section */}
        <div className="bg-gray-50 shadow rounded-xl overflow-hidden p-4">
          <img
            src={Car3}
            alt="Bus Transportation"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            For large groups on Char Dham and Do Dham Yatra, our luxury buses
            ensure a safe and comfortable pilgrimage.
          </p>
          <ul className="text-blue-800 list-disc pl-5 space-y-1">
            <li>AC Deluxe Bus 21 Seater (2+1)</li>
            <li>AC Deluxe Bus 27 Seater (2+2)</li>
            <li>AC Deluxe Bus 32 Seater (2+2)</li>
            <li>AC Deluxe Bus 40 Seater (2+2)</li>
          </ul>
          <p className="mt-4 font-semibold text-blue-700">
            Starting from ₹30,000 per day
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transport;

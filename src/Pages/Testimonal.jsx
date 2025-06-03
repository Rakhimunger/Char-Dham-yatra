import React from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "Family Group of 6",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "ANT Travels made our Char Dham journey unforgettable! The vehicle was luxurious and the driver handled mountain roads like a pro. Highly recommended for family trips!",
  },
  {
    name: "Sunita Sharma",
    title: "Senior Pilgrim Group",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "As seniors, comfort and safety were our biggest concerns. ANT Travels exceeded expectations with their hospitality and smooth arrangements. A truly divine journey.",
  },
  {
    name: "Amit Patel",
    title: "Corporate Trip Organizer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "Managing a group of 40 employees was stress-free thanks to ANT Travels. Excellent service, luxurious buses, and flawless coordination. Will book again!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F9FAFF] to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-bold text-sm tracking-widest uppercase">
          Real Experiences
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A2C79] mt-2 mb-6">
          What Pilgrims Say About Us
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Discover heartfelt experiences from travelers who trusted ANT Travels
          for their spiritual journey to the Char Dham.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition p-8 relative border border-gray-100"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-400"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[#1A2C79]">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mt-2">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

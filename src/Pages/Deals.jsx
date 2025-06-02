import React from "react";

const deals = [
  {
    title: "Early Bird Discount",
    highlight: "20% OFF for advance bookings",
    description:
      "Save big when you plan early! Book your Char Dham Yatra 2 months in advance and enjoy exclusive savings.",
    buttonText: "Book Now",
    badge: "Early Deal",
    footer: "⏰ Offer ends soon!",
    color: "from-orange-100 to-orange-200",
  },
  {
    title: "Group Yatra Offer",
    highlight: "15% OFF for 15+ Pilgrims",
    description:
      "Perfect for temple groups or large families. Join hands and journey together at discounted rates.",
    buttonText: "Group Booking",
    badge: "Group Special",
    footer: "👥 Limited slots available",
    color: "from-blue-100 to-blue-200",
  },
  {
    title: "Premium Package Bonus",
    highlight: "2 Nights FREE Hotel Stay",
    description:
      "Book a complete Char Dham package and get 2 nights of luxury hotel stay in Rishikesh absolutely free.",
    buttonText: "Claim Now",
    badge: "Bonus Deal",
    footer: "🏨 Premium Hotels Only",
    color: "from-purple-100 to-purple-200",
  },
];

const SpecialDeals = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-yellow-900 leading-snug">
          🕉️ Embark on a Divine Char Dham Journey 2025
        </h2>

        {/* Paragraph */}
        <p className="text-center text-sm sm:text-base md:text-lg mb-10 sm:mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Join the sacred pilgrimage to Char Dham and receive the divine
          blessings of the Lords. Experience peace, devotion, and spiritual
          awakening on this holy journey. Make your pilgrimage effortless and
          meaningful with our specially curated packages.
        </p>

        {/* Deals Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${deal.color} p-6 rounded-3xl shadow-xl relative overflow-hidden transition-transform hover:scale-105`}
            >
              <span className="absolute top-0 right-0 bg-black text-white text-xs px-3 py-1 rounded-bl-2xl font-semibold">
                {deal.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {deal.title}
              </h3>
              <p className="text-orange-600 font-semibold text-sm sm:text-base mb-3">
                {deal.highlight}
              </p>
              <p className="text-gray-700 text-sm sm:text-base mb-6">
                {deal.description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md w-full sm:w-auto">
                {deal.buttonText}
              </button>
              <div className="mt-4 text-xs text-gray-600">{deal.footer}</div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12">
          <a
            href="#"
            className="text-blue-700 hover:underline text-sm sm:text-base font-medium inline-flex items-center"
          >
            View All Packages &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;

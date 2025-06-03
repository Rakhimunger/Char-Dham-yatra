import React from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is the best time to undertake Char Dham Yatra?",
    answer:
      "The best time is from May to June and September to October. The temples reopen around May 1st after being closed in winter due to snowfall.",
  },
  {
    question: "Do you provide accommodation during the journey?",
    answer:
      "While we specialize in transportation, we also offer accommodation packages at hotels, guesthouses, and dharamshalas. Let us know your preferences while booking.",
  },
  {
    question: "What types of vehicles do you offer for Char Dham Yatra?",
    answer:
      "We offer SUVs (Innova, Scorpio), Tempo Travellers (9–14 seater), Mini Buses (20–30), and Luxury Buses (35–45), all based on group size and comfort.",
  },
  {
    question: "Are your vehicles suitable for the mountain terrain?",
    answer:
      "Absolutely. Our vehicles are specially maintained for hilly terrain, with powerful engines, ground clearance, and safety checks before every trip.",
  },
  {
    question: "What is included in your transportation packages?",
    answer:
      "Our packages include vehicle + driver, fuel, taxes, permits, driver stay, and 24/7 support. Premium options may add refreshments and onboard amenities.",
  },
  {
    question: "How do I book a vehicle for Char Dham Yatra?",
    answer:
      "Booking is easy via our website, phone call, or office visit. We recommend booking 1–2 months in advance, especially for peak season (May–June).",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancel 30+ days before: 90% refund, 15–29 days: 70%, 7–14 days: 50%, under 7 days: non-refundable. We follow a fair and transparent policy.",
  },
  {
    question: "Do you provide assistance if the vehicle breaks down?",
    answer:
      "Yes, we have service points across the route. In case of issues, we provide on-road assistance and arrange a backup vehicle immediately.",
  },
  {
    question: "Can I customize the Char Dham Yatra package?",
    answer:
      "Yes, you can customize your itinerary, choose vehicle types, add accommodation, and select temple timings based on your group's needs and preferences.",
  },
];

const FAQPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 via-orange-100 to-orange-50 py-8 px-3 sm:py-12 sm:px-6 lg:px-10">
      <div className="text-left sm:text-center mb-6 sm:mb-12 px-2 sm:px-0">
        <p className="text-orange-600 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
          🙏 Frequently Asked Questions
        </p>
        <h2 className="text-lg sm:text-3xl font-bold text-blue-900 drop-shadow leading-snug sm:leading-normal">
          Common Questions About Char Dham Yatra
        </h2>
        <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm max-w-xl sm:max-w-2xl mx-auto px-1 sm:px-0">
          Here are some frequently asked questions about our services for this
          spiritual journey. 🛕
        </p>
      </div>

      <div className="max-w-screen-xl mx-4 sm:mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 px-0 sm:px-2 md:px-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white border border-orange-200 shadow-md rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-lg overflow-hidden relative w-full max-w-full"
          >
            <div className="absolute top-2 right-3 text-orange-100 text-3xl sm:text-4xl select-none pointer-events-none">
              🕉️
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-orange-700 mb-2 flex items-start gap-2">
              {faq.question}
            </h3>
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQPage;

// import React, { useState } from "react";
// import {
//   Globe,
//   Phone,
//   MapPin,
//   Gift,
//   HelpCircle,
//   Headset,
//   Languages,
// } from "lucide-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white text-gray-800 border-b">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center px-4 py-2 text-sm flex-wrap md:flex-nowrap">
//         {/* Left Side */}
//         <div className="flex items-center gap-4 text-sm">
//           <div className="flex items-center space-x-1">
//             <MapPin className="w-4 h-4" />
//             <span>Noida, 201301</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Phone className="w-4 h-4 text-orange-500" />
//             <span className="text-orange-500 font-semibold">981199 2203</span>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } md:flex flex-wrap items-center gap-4 justify-center md:justify-end mt-2 md:mt-0 text-xs sm:text-sm`}
//         >
//           <div className="relative flex items-center space-x-1">
//             <Gift className="w-4 h-4 text-red-500" />
//             <span className="text-red-500 font-semibold">Offers</span>
//             <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
//               10
//             </span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Globe className="w-4 h-4" />
//             <span>Live Tracking</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <HelpCircle className="w-4 h-4" />
//             <span>FAQ</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Headset className="w-4 h-4" />
//             <span>Support</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Languages className="w-4 h-4" />
//             <select className="bg-transparent focus:outline-none cursor-pointer text-xs">
//               <option>English</option>
//               <option>Hindi</option>
//             </select>
//           </div>
//         </div>

//         {/* Hamburger */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-700 focus:outline-none"
//             aria-label="Toggle header menu"
//           >
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2.5}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 8h16M4 16h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

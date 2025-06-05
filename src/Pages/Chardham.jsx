import React from "react";
import Templeimg from "../assets/Templeimg.jpg";
import { motion } from "framer-motion";
import CharDhamServices from "../Pages/CharDhamServices";
import Transport from "./Transport";

const Chardham = () => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={Templeimg}
          alt="Temple"
          className="w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[550px] object-cover brightness-75"
        />

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center  px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-orange-600">
            Char Dham Yatra 2025
          </h1>
          <p className="max-w-2xl text-sm sm:text-base md:text-xl drop-shadow-md text-white">
            Embark on a sacred journey to the holy shrines of Yamunotri,
            Gangotri, Kedarnath & Badrinath nestled in the lap of Himalayas.
          </p>
        </motion.div>
      </div>
      <div>
        <Transport />
        <CharDhamServices />
      </div>
    </div>
  );
};

export default Chardham;

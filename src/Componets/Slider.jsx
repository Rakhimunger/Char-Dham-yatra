import React, { useState, useEffect } from "react";
import ked1 from "../assets/Images/Ked1.jpg";
import Spirital1 from "../assets/Images/Spirital1.jpg";
import Spirital3 from "../assets/Images/Spirital3.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ked1, Spirital1, Spirital3];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-6">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.8)]">
                  WELCOME TO ANT TRAVELS
                </h1>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-orange-300 mb-3 drop-shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
                  Char Dham Yatra
                </h2>
                <p className="text-md sm:text-lg md:text-xl font-medium text-white max-w-3xl mb-6 leading-relaxed drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
                  <span className="text-yellow-400 font-semibold">
                    Transportation Services
                  </span>{" "}
                  <br />
                  Reliable and comfortable transportation for your sacred
                  journey to{" "}
                  <span className="font-semibold text-orange-300">
                    Badrinath, Kedarnath, Gangotri
                  </span>
                  , and{" "}
                  <span className="font-semibold text-orange-300">
                    Yamunotri
                  </span>
                  .
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/vision">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition shadow-lg">
                      Book Your Vehicle
                    </button>
                  </Link>
                  <Link to="/donationForm">
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 transition shadow-lg">
                      View Service
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition"
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-75 hover:opacity-100 transition"
        aria-label="Next Slide"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;

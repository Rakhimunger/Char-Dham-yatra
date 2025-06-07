import React, { useState } from "react";
import Carimg from "../assets/Carimg.png";
import Carimg1 from "../assets/Carimg1.png";
import Carimg2 from "../assets/Carimg2.png";
import CharDhamServices from "../Pages/CharDhamServices";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: Carimg, label: "Luxury Coach Blue" },
    { src: Carimg1, label: "Mid-size Comfort Bus" },
    { src: Carimg2, label: "Premium White Tour Bus" },
    { src: Carimg, label: "Orange Express Bus" },
    { src: Carimg, label: "ANT Signature Bus" },
    { src: Carimg2, label: "Premium White Tour Bus" },
  ];

  return (
    <div>
      {/* Gallery Section */}
      <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-10 px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-900 mb-3">
            From our Gallery
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Discover our luxurious and comfortable fleet options — elegance on
            wheels.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              style={{ cursor: "zoom-in" }}
              className="relative overflow-hidden rounded-2xl shadow-xl group"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white text-base sm:text-lg font-semibold drop-shadow-lg z-10">
                {img.label}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
            <div className="relative max-w-5xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full max-h-[90vh] object-contain rounded-xl border-4 border-white shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold text-xl hover:bg-red-600 hover:text-white transition-all"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6 text-white text-xl font-semibold drop-shadow-xl">
                {selectedImage.label}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;

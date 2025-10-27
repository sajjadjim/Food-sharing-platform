import React from "react";
import { motion } from "framer-motion";

const FoodGallery = () => {
  const images = [
    { src: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg", name: "Burger" },
    { src: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg", name: "Salad" },
    { src: "https://images.pexels.com/photos/34447950/pexels-photo-34447950.jpeg", name: "Steck" },
    { src: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg", name: "Biriyani" },
    { src: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg", name: "Chicken" },
    { src: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg", name: "Pizza" },
  ];

  return (
    <section className="py-12 w-11/12 mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Delicious Moments
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={img.src}
              alt={`Food ${index + 1}`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Text overlay with black shadow behind */}
            <div className="absolute inset-0 hover:cursor-pointer bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                {img.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoodGallery;
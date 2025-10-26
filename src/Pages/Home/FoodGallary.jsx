import React from "react";
import { motion } from "framer-motion";
import food1 from "../../assets/food1.png";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import food4 from "../../assets/food4.jpg";
import food5 from "../../assets/food5.jpg";
import food6 from "../../assets/food6.jpg";



const FoodGallery = () => {
  const images = [food1, food2, food3, food4, food5, food6];

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
            className="overflow-hidden rounded-lg shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={img}
              alt={`Food ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoodGallery;

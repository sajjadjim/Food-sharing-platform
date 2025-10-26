
import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/icon-7797704_1280.png'


const reviews = [
  {
    id: 1,
    name: 'Sarah Ahmed',

    message: 'I found food for my family when we needed it most. Thank you!',
    rating: 5
  },
  {
    id: 2,
    name: 'Nursat Jahan',

    message: 'Sharing food has never been this easy. Great platform!',
    rating: 4
  },
  {
    id: 3,
    name: 'Jonny Islam',

    message: 'This app helped me reduce food waste in my restaurant. Amazing!',
    rating: 5
  }
];

const Review = () => {
  return (
    <div className=" py-16 px-6">
      <div className="w-11/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-black mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What People Are Saying
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-3xl p-6 shadow-lg border-t-8 border-l-8 border-[#1d4757] hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-orange-200 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <div className="text-yellow-400 text-xl mb-2">
                  {'⭐'.repeat(review.rating)}
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  “{review.message}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;



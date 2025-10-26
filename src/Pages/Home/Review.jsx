import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, UserRound } from "lucide-react";
import img from "../../assets/icon-7797704_1280.png";

const reviews = [
  {
    id: 1,
    name: "Sajjad Hossain Jim",
    message: "I found food for my family when we needed it most. Thank you!",
    rating: 5,
  },
  {
    id: 2,
    name: "Abu Bokor Siddique Siam",
    message: "Sharing food has never been this easy. Great platform!",
    rating: 4,
  },
  {
    id: 3,
    name: "Jonny Islam",
    message: "This app helped me reduce food waste in my restaurant. Amazing!",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-[#e4ebef] to-white">
      <div className="w-11/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-[#1d4757] mb-4 flex justify-center items-center gap-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserRound className="w-8 h-8" />
          What People Are Saying
        </motion.h2>

        <p className="text-gray-600 mb-14 text-lg">
          Real users sharing their heartwarming experiences ❤️
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-3xl p-6 relative shadow-lg border transition duration-300 hover:shadow-2xl hover:border-[#7BB661]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <Quote className="absolute top-3 left-3 text-gray-300 w-8 h-8" />

              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-[#7BB661] mb-4 shadow-md"
                />

                <h3 className="text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>

                {/* ⭐ stars */}
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" stroke="none" />
                  ))}
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
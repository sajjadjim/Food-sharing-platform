import React from "react";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-[#dbe8ed] to-[#e3eef1] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-[#1d4757] mb-3"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg max-w-3xl mx-auto"
        >
          At <strong className="text-[#1d4757]">Share A Bite</strong>, we aim to
          reduce food waste while supporting communities in need. By connecting
          generous donors with recipients, we help ensure that surplus food
          finds a meaningful purpose.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/40"
          >
            <FaBullseye className="text-[#1d4757] text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-[#1d4757] mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Creating a sustainable ecosystem where excess food reaches those
              who need it most.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/40"
          >
            <FaEye className="text-[#1d4757] text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-[#1d4757] mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A world with no edible food waste and access to nutritious meals
              for everyone.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-8 border border-white/40"
          >
            <FaHandsHelping className="text-[#1d4757] text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-[#1d4757] mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Thousands of successful donations have positively impacted
              families and communities.
            </p>
          </motion.div>

        </div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-[#1d4757] font-semibold text-lg"
        >
          Together, we can turn food waste into hope 💚
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
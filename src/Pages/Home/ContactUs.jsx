import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br ">
      
      {/* Header */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-[#1d4757] drop-shadow mb-14"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact <span className="text-orange-500">Us</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* ========= LEFT CONTACT INFO ========= */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            We’d love to hear from you! Whether you want to donate food, receive food, 
            or collaborate with us, feel free to contact.
          </p>

          {/* email */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-xl transition">
            <div className="bg-orange-100 p-3 rounded-full">
              <Mail className="text-orange-500" size={24} />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600 text-sm">foodshare@gmail.com</p>
            </div>
          </div>

          {/* phone */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-xl transition">
            <div className="bg-orange-100 p-3 rounded-full">
              <Phone className="text-orange-500" size={24} />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600 text-sm">+880 1736788394</p>
            </div>
          </div>

          {/* address */}
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl hover:shadow-xl transition">
            <div className="bg-orange-100 p-3 rounded-full">
              <MapPin className="text-orange-500" size={24} />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600 text-sm">1/A, Amborkhana, Sylhet</p>
            </div>
          </div>
        </motion.div>

        {/* ========= CONTACT FORM ========= */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-lg border border-white shadow-xl p-8 rounded-2xl space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#1d4757] hover:bg-[#143440] text-white px-5 py-3 w-full font-semibold rounded-xl transition shadow-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Send size={18} /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
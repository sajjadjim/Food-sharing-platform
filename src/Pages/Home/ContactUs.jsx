// import React from "react";
// import { motion } from "framer-motion";

// const ContactUs = () => {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="max-w-6xl mx-auto px-4  ">
//         <motion.h2
//                   className="text-4xl font-extrabold text-center text-black mb-14"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   Contact Us
//                 </motion.h2>
        

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//             className="space-y-4"
//           >
//             <p className="text-xl text-gray-700">
//               Have questions or want to get involved? We'd love to hear from you!
//             </p>
//             <div>
//               <p className="font-semibold">Email:</p>
//               <p className="text-gray-700">foodshare@gmail.com</p>
//             </div>
//             <div>
//               <p className="font-semibold">Phone:</p>
//               <p className="text-gray-700">+8801736788394</p>
//             </div>
//             <div>
//               <p className="font-semibold">Address:</p>
//               <p className="text-gray-700">1/A,Amborkhana,Sylhet</p>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//             className="space-y-4 bg-white p-6 rounded-lg shadow"
//           >
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows="4"
//                 className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-[#1d4757] text-white px-4 py-2 rounded hover:bg-[Contact Us] transition"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-lg text-gray-700">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-700">foodshare@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-700">+8801736788394</p>
          </div>
          <div>
            <p className="font-semibold">Address:</p>
            <p className="text-gray-700">1/A, Amborkhana, Sylhet</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 bg-white p-6 sm:p-8 rounded-lg shadow"
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#1d4757] text-white px-5 py-2 rounded hover:bg-[#163642] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;


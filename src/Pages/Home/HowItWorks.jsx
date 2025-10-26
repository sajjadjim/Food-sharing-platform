import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Sign Up',
    desc: 'Register as a donor or recipient to get started.',
    icon: '👤'
  },
  {
    title: 'Add Food',
    desc: 'List your surplus food with pickup info.',
    icon: '🍛'
  },
  {
    title: 'Request Food',
    desc: 'Find available food and request it easily.',
    icon: '🤝'
  },
  {
    title: 'Pick Up',
    desc: 'Meet up and reduce food waste together.',
    icon: '📦'
  }
];

const HowItWorks = () => {
  return (
    <div className="px-4 py-16 ">
      <section className="w-11/12 mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-14 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-xl p-6 border border-orange-100"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3, duration: 3, type: 'spring' }}
              viewport={{ once: true }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

import React from 'react';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import banner3 from '../../assets/banner-3.jpg';
import { motion } from 'framer-motion';

const DancingText = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="text-white text-2xl md:text-4xl font-bold text-center mb-12 px-4 flex flex-wrap justify-center">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mx-2"
          initial={{ y: 0 }}
          animate={{ y: [-5, 10, -5] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: index * 0.2,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="carousel w-11/12  h-[70vh] rounded-xl shadow-lg overflow-hidden">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <DancingText text="Share the Flavor. Savor the Moment." />
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide3" className="btn btn-circle bg-white text-black border-none shadow">❮</a>
            <a href="#slide2" className="btn btn-circle bg-white text-black border-none shadow">❯</a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <DancingText text="Tradition Served Fresh." />
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide1" className="btn btn-circle bg-white text-black border-none shadow">❮</a>
            <a href="#slide3" className="btn btn-circle bg-white text-black border-none shadow">❯</a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <DancingText text="Because Joy Is Best When Shared." />
          </div>
          <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide2" className="btn btn-circle bg-white text-black border-none shadow">❮</a>
            <a href="#slide1" className="btn btn-circle bg-white text-black border-none shadow">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


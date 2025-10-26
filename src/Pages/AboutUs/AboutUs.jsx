import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
        <p className="text-gray-700 text-lg mb-8">
          At <strong>Food Donation Hub</strong>, our mission is to reduce food waste
          and help communities in need. We connect generous donors with individuals
          who can make the best use of surplus food.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Our Mission</h3>
            <p className="text-gray-600">
              We strive to create a sustainable ecosystem where food finds its way
              to those who need it most.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Our Vision</h3>
            <p className="text-gray-600">
              A world where no edible food goes to waste and everyone has access
              to nutritious meals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Our Impact</h3>
            <p className="text-gray-600">
              Hundreds of successful donations have already made a positive
              difference in countless lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

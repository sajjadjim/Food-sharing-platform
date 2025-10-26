import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { motion } from 'framer-motion';

const FeaturedFood = ({ foodPromise }) => {
    const foods = use(foodPromise);
    const { user } = use(AuthContext);
    const navigate = useNavigate();



    const handleViewDetails = (_id) => {
        if (!user) {
            navigate('/login');
        } else {
            navigate(`/foods/${_id}`);
        }
    };

    return (
        <div className="">
            <section className="w-11/12 mx-auto my-10 px-4">
                <motion.h2
                    className="text-3xl md:text-4xl text-center font-bold mb-14 text-black"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Foods
                </motion.h2>


                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {foods.slice(0, 8).map((food) => (
                        <div
                            key={food._id}
                            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-48 object-cover transition duration-300 hover:brightness-90" />
                            <div className="p-4 space-y-2">
                                <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>

                                <p><strong>Pickup:</strong> {food.pickupLocation}</p>


                                {food.notes && (
                                    <p className="text-sm italic text-gray-600">"{food.notes}"</p>
                                )}
                                <button
                                    onClick={() => handleViewDetails(food._id)}
                                    className="btn bg-[#1d4757] rounded-2xl text-white hover:bg-[#1d4757] transition">
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => navigate('/availableFood')}
                        className="btn px-6 py-3 text-white border-none bg-[#1d4757] rounded-lg hover:bg-[#1d4757] transition duration-300 transform hover:scale-105">
                        Show All Foods
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FeaturedFood;


import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router';

const fetchFoods = async (sortOrder, searchTerm) => {
    const res = await fetch(`https://food-server-sajjadjim.vercel.app/foods?sort=${sortOrder}&search=${searchTerm}`);
    return res.json();
};

const AvailableFood = () => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [toggle, setToggle] = useState(true);

    const { data: foods = [], isLoading } = useQuery({
        queryKey: ['foods', sortOrder, searchTerm],
        queryFn: () => fetchFoods(sortOrder, searchTerm),
    });

    // 🌟 Loading Spinner Section
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#1d4757]"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-black">Available Foods</h2>

            {/* Search */}
            <div className="mb-4 flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by food name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-2 rounded w-full max-w-xs mr-4"
                />
            </div>

            {/* Sort & Layout Toggle */}
            <div className="mb-6 text-right flex justify-between ">
                <div>
                    <button onClick={() => setToggle(!toggle)} className='btn text-white bg-[#1d4757]'>
                        Change Layout
                    </button>
                </div>
                <div>
                    <label className="font-medium mr-2">Sort by Expire Date:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            {/* Food Cards */}
            <div className={`grid gap-6 ${toggle ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {foods.map((food) => (
                    <div
                        key={food._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                    >
                        <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
                        <div className="p-4 space-y-1">
                            <h3 className="text-xl font-semibold">{food.name}</h3>
                            <p><strong>Expires:</strong> {food.expireDate}</p>
                            <p><strong>Pickup:</strong> {food.pickupLocation}</p>

                            <div className="mt-3">
                                <Link to={`/foods/${food._id}`}>
                                    <button className="bg-[#1d4757] hover:bg-[#143540] cursor-pointer text-white py-1 px-4 rounded">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableFood;
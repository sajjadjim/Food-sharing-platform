import { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const FoodDetails = () => {

    const queryClient = useQueryClient();
    const food = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [notes, setNotes] = useState('');
    const { user } = use(AuthContext);
    const requestDate = new Date().toISOString().slice(0, 16);

    const mutation = useMutation({
        mutationFn: async () => {

            const requestData = {
                foodId: food._id,
                foodName: food.name,
                foodImage: food.image,
                donorEmail: food.donorEmail,
                donorName: food.donorName,
                userEmail: user.email,
                requestDate,
                pickupLocation: food.pickupLocation,
                expireDate: food.expireDate,
                notes,
                status: 'requested'
            };

            await fetch('https://food-server-sajjadjim.vercel.app/requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            });

            await fetch(`https://food-server-sajjadjim.vercel.app/foods/${food._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'requested' })
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['foods']);
            queryClient.invalidateQueries(['myRequests']);
            setShowModal(false);
        },
        onError: (error) => {
            console.error('Mutation failed:', error);
        }
    });

    const handleRequest = () => {
        mutation.mutate();
    };

    return (
        <div className='bg-gray-200 min-h-screen py-10'>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow">

                <img src={food.image} alt={food.name}
                    className="w-full h-64 object-cover rounded-lg mb-4" />

                <div className='text-center space-y-2'>
                    <h2 className="text-3xl font-bold">{food.name}</h2>
                    <p><strong>Quantity:</strong> {food.quantity}</p>
                    <p><strong>Pickup:</strong> {food.pickupLocation}</p>
                    <p><strong>Expires:</strong> {food.expireDate}</p>
                    <p><strong>Donor:</strong> {food.donorName}</p>
                    <p><strong>Email:</strong> {food.donorEmail}</p>
                    <p className="italic text-gray-600">{food.notes}</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="mt-6 btn bg-[#7BB661] text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Request
                    </button>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-2xl">

                        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">
                            Confirm Food Request
                        </h2>

                        {/* 2-COLUMN FORM */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* LEFT COLUMN */}
                            <div className="flex flex-col gap-2">
                                <label className="font-medium">Food Name</label>
                                <input disabled value={food.name}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">Food Image</label>
                                <input disabled value={food.image}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">Food ID</label>
                                <input disabled value={food._id}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">Donor Email</label>
                                <input disabled value={food.donorEmail}
                                    className="input input-bordered bg-gray-100 w-full" />
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="flex flex-col gap-2">
                                <label className="font-medium">Donor Name</label>
                                <input disabled value={food.donorName}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">User Email</label>
                                <input disabled value={user.email}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">Pickup Location</label>
                                <input disabled value={food.pickupLocation}
                                    className="input input-bordered bg-gray-100 w-full" />

                                <label className="font-medium">Expire Date</label>
                                <input disabled value={food.expireDate}
                                    className="input input-bordered bg-gray-100 w-full" />
                            </div>

                        </div>

                        {/* FULL ROW NOTES */}
                        <div className="mt-4">
                            <label className="font-medium">Additional Notes</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Add extra instructions..."
                                className="textarea textarea-bordered w-full"
                            />
                        </div>

                        {/* BUTTONS */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button onClick={handleRequest}
                                className="btn bg-[#7BB661] text-white">
                                Request
                            </button>
                            <button onClick={() => setShowModal(false)}
                                className="btn btn-outline">
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetails;
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

            await fetch('https://food-sharing-platform-server.vercel.app/requests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify(requestData)
            });

            await fetch(`https://food-sharing-platform-server.vercel.app/foods/${food._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
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
        <div className='bg-gray-300 min-h-screen py-10'>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl">


                <img src={food.image} alt={food.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <div className='text-center space-y-2'>
                    <h2 className="text-3xl font-bold">{food.name}</h2>
                    <p><strong>Quantity:</strong> {food.quantity}</p>
                    <p><strong>Pickup:</strong> {food.pickupLocation}</p>
                    <p><strong>Expires:</strong> {food.expireDate}</p>
                    <p><strong>Donor:</strong> {food.donorName}</p>
                    <p><strong>Donor Email:</strong> {food.donorEmail}</p>
                    <p className="italic text-gray-600">{food.notes}</p>
                    <button
                        onClick={() => setShowModal(true)}
                        className="mt-6 btn bg-[#7BB661] text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                        Request
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-[#88b4cd] bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-xl w-full shadow-xl relative">
                        <h2 className="text-xl font-semibold mb-4 text-center">Confirm Request</h2>

                        <div className="space-y-3">
                            <label>Food Name</label>
                            <input
                                type="text"
                                value={food.name || ''}
                                disabled
                                className="input input-bordered w-full"
                            />
                            <label>Food Image</label>
                            <input type="text" value={food.image} disabled className="input input-bordered w-full" />
                            <label>Food ID</label>
                            <input type="text" value={food._id} disabled className="input input-bordered w-full" />
                            <label>Food Donator Name </label>
                            <input type="text" value={food.donorName} disabled className="input input-bordered w-full" />
                            <label>Food Donator email</label>
                            <input type="text" value={food.donorEmail} disabled className="input input-bordered w-full" />
                            <label>User email</label>
                            <input type="text" value={user?.email} disabled className="input input-bordered w-full" />
                            <label>Request Date</label>
                            <input type="datetime-local" value={requestDate} disabled className="input input-bordered w-full" />
                            <label>Pickup Location</label>
                            <input type="text" value={food.pickupLocation} disabled className="input input-bordered w-full" />
                            <label>Expire Date</label>
                            <input type="text" value={food.expireDate} disabled className="input input-bordered w-full" />
                            <label>Additional Notes</label>
                            <textarea
                                placeholder="Additional Notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>

                        <div className="mt-5 flex justify-end gap-3">
                            <button onClick={handleRequest} className="btn btn-success">Request</button>
                            <button onClick={() => setShowModal(false)} className="btn btn-outline">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetails;


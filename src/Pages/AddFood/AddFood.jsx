import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Image, MapPin, Calendar, Pencil, Package, User, Mail, Camera } from 'lucide-react';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddFood = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.foodName.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expireDate = form.expireDate.value;
        const notes = form.notes.value;

        const foodData = {
            name,
            image,
            quantity,
            pickupLocation,
            expireDate,
            notes,
            donorName: user.displayName,
            donorEmail: user.email,
            donorImage: user.photoURL,
            status: 'available',
        };

        try {
            const token = await user.getIdToken();
            const res = await fetch('https://food-server-sajjadjim.vercel.app/foods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(foodData),
            });

            if (res.ok) {
                form.reset();
                navigate('/availableFood');
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md my-10 border">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#1d4757]">🍱 Add New Food Item</h2>

            <form onSubmit={handleAddFood} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Food Name */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Package size={18}/> Food Name</label>
                    <input type="text" name="foodName" placeholder="Food Name" className="input input-bordered w-full" required />
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Image size={18}/> Image URL</label>
                    <input type="url" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                </div>

                {/* Quantity */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Package size={18}/> Quantity</label>
                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                </div>

                {/* Pickup Location */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><MapPin size={18}/> Pickup Location</label>
                    <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" required />
                </div>

                {/* Expire Date */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Calendar size={18}/> Expire Date</label>
                    <input type="date" name="expireDate" className="input input-bordered w-full" required />
                </div>

                {/* Notes */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Pencil size={18}/> Additional Notes</label>
                    <textarea name="notes" placeholder="Write notes..." className="textarea textarea-bordered w-full"></textarea>
                </div>

                {/* Donor Name */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><User size={18}/> Donor Name</label>
                    <input type="text" value={user?.displayName || 'User'} readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                </div>

                {/* Donor Email */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Mail size={18}/> Donor Email</label>
                    <input type="email" value={user?.email || ''} readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                </div>

                {/* Donor Image */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium flex items-center gap-2"><Camera size={18}/> Donor Image URL</label>
                    <input type="text" value={user?.photoURL || 'photo url'} readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                </div>

                {/* Status */}
                <div className="flex flex-col gap-1">
                    <label className="font-medium">Food Status</label>
                    <input type="text" value="available" readOnly className="input input-bordered w-full bg-gray-100 text-gray-500" />
                </div>
            </form>

            <button type="submit" onClick={(e)=>document.querySelector('form').dispatchEvent(new Event('submit', {cancelable: true, bubbles: true}))} className="btn bg-[#1d4757] text-white w-full mt-8 text-lg">
                ➕ Add Food
            </button>
        </div>
    );
};

export default AddFood;
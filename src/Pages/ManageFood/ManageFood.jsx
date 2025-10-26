import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const fetchFoods = async () => {
      if (user?.email) {
        console.log(user?.email)
        try {
          const token = await user.getIdToken();
          const res = await fetch(`https://food-sharing-platform-server.vercel.app/myFood?email=${user.email}`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        );
          const data = await res.json();
          setFoods(data);
        } catch (error) {
          console.error('Error fetching foods:', error);
        }
      }
    };

    fetchFoods();
  }, [user]);


  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete your food item permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e3342f',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const token = await user.getIdToken();
        const res = await fetch(`https://food-sharing-platform-server.vercel.app/foods/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.deletedCount > 0) {
          Swal.fire('Deleted!', 'Your food item has been deleted.', 'success');
          setFoods(foods.filter(food => food._id !== id));
        }
      } catch (error) {
        console.error('Error deleting food:', error);
      }
    }
  };

  const openUpdateModal = (food) => {
    setSelectedFood(food);
    setShowModal(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {
      name: form.name.value,
      quantity: form.quantity.value,
      pickupLocation: form.pickupLocation.value,
      expireDate: form.expireDate.value,
      notes: form.notes.value,
    };

    try {
      const token = await user.getIdToken();
      const res = await fetch(`https://food-sharing-platform-server.vercel.app/foods/${selectedFood._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedFood),
      });

      const data = await res.json();
      if (data.modifiedCount > 0) {
        Swal.fire('Updated!', 'Your food item has been updated.', 'success');
        const updatedFoods = foods.map(food =>
          food._id === selectedFood._id ? { ...food, ...updatedFood } : food
        );
        setFoods(updatedFoods);
        setShowModal(false);
      }
    } catch (error) {
      console.error('Error updating food:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Manage My Foods</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white rounded-lg shadow-md">
          <thead className="bg-[#1d4757] text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Pickup</th>
              <th>Expires</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expireDate}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => openUpdateModal(food)}
                    className="btn btn-sm bg-[#2d657c] text-white "
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm bg-[#143441] text-white "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {foods.length === 0 && (
          <p className="text-center mt-8 text-gray-600">No foods added yet.</p>
        )}
      </div>

      {showModal && selectedFood && (
        <div className="fixed inset-0 bg-[#99dbf3] bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-center">Update Food</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                defaultValue={selectedFood.name}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="quantity"
                defaultValue={selectedFood.quantity}
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="pickupLocation"
                defaultValue={selectedFood.pickupLocation}
                className="input input-bordered w-full"
                required
              />
              <input
                type="date"
                name="expireDate"
                defaultValue={selectedFood.expireDate}
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="notes"
                defaultValue={selectedFood.notes}
                className="textarea textarea-bordered w-full"
              ></textarea>
              <div className="flex justify-end gap-3 mt-4">
                <button type="submit" className="btn btn-success">Update</button>
                <button onClick={() => setShowModal(false)} type="button" className="btn btn-outline">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFood;


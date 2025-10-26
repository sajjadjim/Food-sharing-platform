import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchFoods = async () => {
      if (user?.email) {
        try {
          const token = await user.getIdToken();
          const res = await fetch(
            `https://food-server-sajjadjim.vercel.app/myFood?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await res.json();
          setFoods(data);
        } catch (error) {
          console.error("Error fetching foods:", error);
        }
      }
    };

    fetchFoods();
  }, [user]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete this food!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      try {
        const token = await user.getIdToken();
        const res = await fetch(
          `https://food-server-sajjadjim.vercel.app/foods/${id}`,
          {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Food has been removed.", "success");
          setFoods(foods.filter((food) => food._id !== id));
        }
      } catch (error) {
        console.error(error);
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
      const res = await fetch(
        `https://food-server-sajjadjim.vercel.app/foods/${selectedFood._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedFood),
        }
      );

      const data = await res.json();
      if (data.modifiedCount > 0) {
        Swal.fire("Updated!", "Food updated successfully.", "success");
        setFoods(
          foods.map((food) =>
            food._id === selectedFood._id ? { ...food, ...updatedFood } : food
          )
        );
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h2 className="text-4xl font-extrabold text-center text-[#1d4757] drop-shadow-sm mb-8">
        🍽 Manage My Foods
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-xl backdrop-blur-lg bg-white/70">
        <table className="table w-full text-gray-800">
          <thead className="bg-[#1d4757] text-white text-base">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Pickup</th>
              <th>Expires</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food, index) => (
              <tr
                key={food._id}
                className="hover:bg-[#e6f0f5] transition-all cursor-pointer"
              >
                <td>{index + 1}</td>
                <td className="font-semibold">{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.pickupLocation}</td>
                <td className="text-red-500">{food.expireDate}</td>

                <td className="flex gap-3 mt-2">
                  <button
                    onClick={() => openUpdateModal(food)}
                    className="btn btn-sm bg-[#2d657c] text-white flex items-center gap-2 hover:bg-[#234d5d]"
                  >
                    <FiEdit2 /> Edit
                  </button>

                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-sm bg-[#c82333] text-white flex items-center gap-2 hover:bg-[#a31826]"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {foods.length === 0 && (
          <p className="text-center text-gray-600 py-6 text-lg">
            😢 No food added yet.
          </p>
        )}
      </div>

      {/* ✅ Animated Modal */}
      <AnimatePresence>
        {showModal && selectedFood && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              className="bg-white p-6 rounded-xl max-w-md w-full shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-center mb-4 text-[#1d4757]">
                ✏ Update Food
              </h2>

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

                <div className="flex justify-end gap-3">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="btn btn-error btn-outline"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageFood;
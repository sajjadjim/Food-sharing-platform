import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';


const RequestFood = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  

  useEffect(() => {
    if (!user) return;

    const fetchRequests = async () => {
      try {
        const token = await user.getIdToken();
        const res = await fetch(`https://food-sharing-platform-server.vercel.app/myRequests?email=${user.email}`
            , {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, [user]);

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-semibold text-gray-600">
          Please log in to view your requested foods.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-6 text-black">My Food Requests</h2>

      {requests.length === 0 ? (
        <p className="text-center text-black">No food requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full bg-white rounded-lg shadow-md">
            <thead className="bg-[#1d4757] text-white">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((item, index) => (
                <tr key={item._id} className="hover:bg-gray-100">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <img
                        src={item.foodImage}
                        alt={item.foodName}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span>{item.foodName}</span>
                    </div>
                  </td>
                  <td>{item.pickupLocation}</td>
                  <td>{item.expireDate}</td>
                  <td>{new Date(item.requestDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestFood;




import React from "react";

const UserProfile = () => {
  const orders = [
    { id: 1, date: "2023-01-15", total: "$120" },
    { id: 2, date: "2023-02-23", total: "$240" },
    { id: 3, date: "2023-03-11", total: "$50" },
    // ... more order data
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600'>
      <div className='container mx-auto p-4 md:p-0 min-h-screen grid place-items-center'>
        <div className='bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl w-full max-w-4xl'>
          <h1 className='font-bold text-2xl mb-6 text-center'>User Profile</h1>
          <div className='flex items-center justify-center mb-6'>
            <img
              src='https://source.unsplash.com/random/200x200'
              alt='Profile'
              className='w-32 h-32 rounded-full object-cover'
            />
          </div>
          <div className='text-center mb-6'>
            <h2 className='font-semibold text-xl'>John Doe</h2>
            <p className='text-gray-700'>john.doe@example.com</p>
          </div>
          <h3 className='font-bold text-xl mb-4'>Order History</h3>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr>
                <th className='border-b py-2 font-bold'>Order ID</th>
                <th className='border-b py-2 font-bold'>Date</th>
                <th className='border-b py-2 font-bold'>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className='border-b py-2'>{order.id}</td>
                  <td className='border-b py-2'>{order.date}</td>
                  <td className='border-b py-2'>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

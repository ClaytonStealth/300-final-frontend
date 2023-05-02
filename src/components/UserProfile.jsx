import React from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = ({ isOpen, onClose }) => {
  const orders = [
    { id: 1, date: "2023-01-15", total: "$120" },
    { id: 2, date: "2023-02-23", total: "$240" },
    { id: 3, date: "2023-03-11", total: "$50" },
  ];
  const user = useSelector((state) => state.user);
  console.log(user.orders);
  const getFileNameFromPath = (path) => {
    const pathParts = path.split("/");
    const fileNameWithHash = pathParts[pathParts.length - 1];
    console.log(fileNameWithHash);
    return fileNameWithHash.split(".")[0];
  };
  return (
    <Transition show={isOpen} as={Fragment}>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='fixed inset-0 bg-black opacity-30' onClick={onClose} />

        <div className='min-h-screen flex items-center justify-center'>
          <div className='inline-block bg-white p-6 rounded-xl shadow-2xl w-full sm:w-auto max-w-[600px] min-w-[500px] z-[60]'>
            <h1 className='font-bold text-2xl mb-6 text-center'>
              User Profile
            </h1>
            <div className='flex items-center justify-center mb-6'>
              <img
                src='https://source.unsplash.com/random/200x200'
                alt='Profile'
                className='w-32 h-32 rounded-full object-cover'
              />
            </div>
            <div className='text-center mb-6'>
              <h2 className='font-semibold text-xl'>{user.name}</h2>
              <p className='text-gray-700'>{user.email}</p>
            </div>
            <h3 className='font-bold text-xl mb-4'>Orderd Images</h3>
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr>
                    <th className='border-b py-2 font-bold px-4'>BG</th>
                    <th className='border-b py-2 font-bold px-4'>Weap</th>
                    <th className='border-b py-2 font-bold px-4'>Model</th>
                    <th className='border-b py-2 font-bold px-4'>Helm</th>
                  </tr>
                </thead>
                <tbody>
                  {user.orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td className='border-b py-2 px-4'>
                          {getFileNameFromPath(order.background)}
                        </td>
                        <td className='border-b py-2 px-4'>{getFileNameFromPath(order.weap)}</td>
                        <td className='border-b py-2 px-4'>{getFileNameFromPath(order.model)}</td>
                        <td className='border-b py-2 px-4'>{getFileNameFromPath(order.helm)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default UserProfile;

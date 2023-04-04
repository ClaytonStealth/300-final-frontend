import React, { useState } from "react";

const RegistrationPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleView = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <main className='min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 flex items-center'>
      <div className='container mx-auto p-4 md:p-0 max-w-md bg-white bg-opacity-90 rounded-xl shadow-2xl'>
        <h1 className='font-bold text-2xl mb-6 text-center'>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <div className='pb-4'>
          {/* Show full name input only in the sign-up view */}
          {isSignUp && (
            <label className='block mb-4'>
              <span className='text-gray-700 text-lg block text-center pl-4'>
                Full Name
              </span>
              <input
                type='text'
                className='mt-1 block w-3/4 mx-auto rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-50 px-4 py-2'
                required
              />
            </label>
          )}
          <label className='block mb-4'>
            <span className='text-gray-700 text-lg block text-center pl-4'>
              Email
            </span>
            <input
              type='email'
              className='mt-1 block w-3/4 mx-auto rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-50 px-4 py-2'
              required
            />
          </label>
          <label className='block mb-4'>
            <span className='text-gray-700 text-lg block text-center pl-4'>
              Password
            </span>
            <input
              type='password'
              className='mt-1 block w-3/4 mx-auto rounded-lg border-2 border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-blue-50 px-4 py-2'
              required
            />
          </label>
          <div className='text-center'>
            <button
              className='w-3/4 bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg text-xl font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300'
              onClick={() => {
                // Add your onClick function here
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
        <div className='text-center mt-4'>
          <button
            className='text-blue-500 hover:text-blue-600 font-semibold'
            onClick={toggleView}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;

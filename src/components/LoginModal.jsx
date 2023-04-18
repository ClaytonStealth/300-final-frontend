import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext } from "react";
import { LoginContext, LoginDispatchContext } from "../context/LoginContext";
import {
  deleteUser,
  fetchLogin,
  logout,
  register,
} from "../context/LoginContextFuncs";
import { checkAuthToken } from "../lib/checkAuthToken";
import { AuthContext, AuthDispatchContext } from "../context/AuthContext";

function LoginModal({ isOpen, onClose }) {
  const auth = useContext(AuthContext);
  const authDispatch = useContext(AuthDispatchContext);
  const login = useContext(LoginContext);
  const dispatch = useContext(LoginDispatchContext);
  const [loginState, setLoginState] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    aitoken: 0,
  });
  const [isRegistration, setIsRegistration] = useState(false);
  const onChangeHandler = (e) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto'
        onClose={onClose}
      >
        <div className='min-h-screen flex items-center justify-center'>
          <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

          <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded'>
            <Dialog.Title
              as='h3'
              className='text-lg font-medium leading-6 text-gray-900'
            >
              {isRegistration ? "Register" : "Sign In"}
            </Dialog.Title>

            {isRegistration ? (
              <>
                {/* Registration form */}
                <div className='mt-2'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='username'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Username
                    </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                    {login.message}
                    <br/>
                    {login.name}
                    <br/>
                    {login.username}
                    <br/>
                    {login.email}
                    <br/>
                    {login.token}
                  </div>
                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => {
                        register(dispatch, loginState, authDispatch);
                        // onClose();
                      }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Login form */}
                <div className='mt-2'>
                  <div className='mt-4'>
                    {login.message}
                    <label
                      htmlFor='username'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Username
                    </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='mt-4'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      className='mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      onChange={onChangeHandler}
                    />
                  </div>
                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => {
                        fetchLogin(dispatch, loginState, authDispatch);
                        onClose();
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className='mt-4'>
              <button
                type='button'
                className='inline-flex justify-center text-sm font-medium text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={() => setIsRegistration(!isRegistration)}
              >
                {isRegistration
                  ? "Already a member? Click here to login"
                  : "Not a member yet? Click here to register"}
              </button>
              {/* {(auth.isAuth) ? onClose(): null} */}
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default LoginModal;

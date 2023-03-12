import React from 'react';
import loginbg from '../assets/loginbg.jpg';

function Login() {
  return (
    <div className="grid grid-cols sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object cover" src={loginbg} alt="" />
      </div>

      <div className="bg-gray-900 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg">
          <h2 className="text-6x1 text-white font-bold text-center">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label> Email </label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label> Password </label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-400">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal 500/40 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

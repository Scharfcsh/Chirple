import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import useLogin from '../hooks/useLogin';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const {loading,  login}= useLogin();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    
  };

  return (
    <>
      <div className="relative w-full z-30 max-w-lg">
        <div className="absolute top-[20rem] -right-[20rem]  w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
        <div className="absolute -right-[4px]  w-60 h-60 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
        <div className="absolute top-1/2 -right-[30rem] w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
      </div>
      <section className=" bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex z-40 items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-16 h-16  mr-2"
              src="./src/assets/icons8-chat-64.png"
              alt="logo"
            />
            ChatApp
          </a>
          <div className="w-full backdrop-blur-3xl z-30 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6 z-40"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-900/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Amanad23"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-900/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:border-gray-100 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline hover:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  className="flex w-full items-center justify-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                  disabled={ loading }
                >
                  
                  {loading ?  <span className="loading loading-spinner"></span>:<BiLogIn className="text-xl mr-2" /> }
                  Login
                </button>

                <p className="text-sm text-center font-light text-gray-100">
                  Don’t have an account yet?
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 ml-2  hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;

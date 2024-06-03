import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdBusinessCenter } from "react-icons/md";
import useSignup from "../hooks/useSignup.js";
import { MdOutlineAssignmentInd } from "react-icons/md";

function Register() {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  function ReloadLocation() {
    location.reload();
}

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
    ReloadLocation();
  };

  const handleCheckboxChange = (value) => {
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    if (male.checked) {
      setInput({ ...input, gender: value });
    }
    if (female.checked) {
      setInput({ ...input, gender: value });
    }
  };
  return (
    <div className="relative ">
      <div className="relative object-contain w-full z-30 max-w-lg">
        <div className="absolute top-[20rem] -right-[20rem]  w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
        <div className="absolute -right-[4px]  w-60 h-60 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
        <div className="absolute top-1/2 -right-[30rem] w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
      </div>
      <section className=" dark:bg-gray-900">
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
          <div className="w-full z-30 bg-transparent backdrop-blur-3xl rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={input.username}
                    onChange={(e) =>
                      setInput({ ...input, username: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="Full Name"
                    name="Full Name"
                    id="Full Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Aman Adhikari"
                    // required="true"
                    value={input.fullname}
                    onChange={(e) =>
                      setInput({ ...input, fullname: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required="true"
                    value={input.password}
                    onChange={(e) =>
                      setInput({ ...input, password: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="Confirm password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // required="true"
                    value={input.confirmpassword}
                    onChange={(e) =>
                      setInput({ ...input, confirmpassword: e.target.value })
                    }
                  />
                </div>

                {/* <Checkbox
                  selectedgender={input.gender}
                  onCheckboxChange={handleCheckboxChange}
                /> */}
                <div className="align-middle items-start ">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </label>
                  <div className="flex flex-row justify-around ">
                    <div className="flex flex-row gap-4">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="female"
                        onChange={() => {
                          handleCheckboxChange("male");
                        }}
                      />{" "}
                      <span> Male</span>
                    </div>

                    <div className="flex flex-row gap-4">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={() => {
                          handleCheckboxChange("female");
                        }}
                      />{" "}
                      <span> Female</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      // required="true"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`flex w-full items-center justify-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900`}
                  // onSubmit={
                  //   <svg
                  //     class="animate-spin h-5 w-5 mr-3 ..."
                  //     viewBox="0 0 24 24"
                  //   ></svg>
                  // }
                >
                  <MdOutlineAssignmentInd className="text-xl mr-2" />
                  {loading ?<span className="loading loading-spinner"></span>:"Sign Up"}
                  
                </button>
                <p className="text-sm font-light text-center  dark:text-gray-100">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium  text-primary-600 ml-2 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;

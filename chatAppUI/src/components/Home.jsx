import React from "react";
import TypeWriter from "./TypeWriter";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const routeChangeLogin = () => {
    let path = `/login`;
    navigate(path);
  };
  const routeChangeSignUp = () => {
    let path = `/register`;
    navigate(path);
  };
  return (
    <section>
      <div className="bg-gray-900 z-10 min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full z-30 max-w-lg">
          <div className="absolute top-32 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-28 -right-6 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className=" flex  flex-col items-center justify-center h-screen">
            <img src="..\src\assets\icons8-chat-64.png" alt="logo" className="z-10 size-40"/>
            <div className=" text-5xl z-40 font-black text-center text-white mb-5">
              Elevate Your Conversations.
            </div>
            <p className="text-white text-center z-30 text-2xl mb-7">
              Your Destination for Quick Chats and Lasting Bonds. Join us for
              instant connections and meaningful chats!
            </p>
            <div className="flex z-40 gap-4">
              {/* <button
                type="button"
                onClick={routeChangeLogin}
                className="rounded-md border-2 border-black px-3 py-2 text-mg font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
              >
                Login
              </button> */}
              <button className="flex w-full items-center justify-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 " type="button"
                onClick={routeChangeLogin}>
                  <BiLogIn className="text-xl mr-2"/>
                  
                  Login
                </button>

              <button className="flex w-full items-center justify-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 " type="button"
                onClick={routeChangeSignUp}>
                  <MdOutlineAssignmentInd className="text-xl mr-2"/>
                  
                  Signup
                </button>
              {/* <button
                type="button"
                onClick={routeChangeSignUp}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Sign Up
              </button> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
}
// }

export default Home;

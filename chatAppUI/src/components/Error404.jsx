import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };
  const routeChangecontact = () => {
    let path = `/contact`;
    navigate(path);
  };
  return (
    <div class=" h-screen bg-gray-900 flex items-center justify-center px-2  md:px-0">
      <div class="lg:flex lg:items-center lg:space-x-10">
        {/* <img
          src="src/assets/404.png"
          alt="question-mark"
          class="h-[300px] w-auto"
        /> */}
        <svg
          fill="white"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className=" text-9xl items-center justify-center"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2M9 10h.01M15 10h.01M9.5 15.05a3.5 3.5 0 015 0" />
        </svg>
        <div>
          <p class="mt-6 text-2xl font-semibold text-red-400">404 ERROR</p>
          <h1 class="mt-3 text-2xl font-semibold text-white md:text-3xl">
            We can&#x27;t find that page
          </h1>
          <p class="mt-4 text-blue-200">
            Sorry, the page you are looking for doesn&#x27;t exist or has been
            moved.
          </p>
          <div class="mt-6 flex items-center space-x-3">
            <button
              type="button"
              onClick={routeChange}
              class="inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Go back
            </button>
            {/* <button
              type="button"
              onClick={routeChangecontact}
              class="rounded-md bg-[#3A088A] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </button> */}

            <button
              type="button"
              onClick={routeChangecontact}
              class="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;

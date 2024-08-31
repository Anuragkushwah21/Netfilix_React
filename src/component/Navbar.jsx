import React from "react";
import { LanguageIcon } from "@heroicons/react/16/solid";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center py-5 px-8">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="md:w-[148px] w-[89px]"
          />
        </div>
        <div className="right flex items-center md:gap-3">
          <div className="select text-white bg-[#111112] mx-4 md:px-5 py-1 rounded-md border-[1.5px] border-gray-600 hover:ring-2 hover:ring-gray-200 opacity-80 px-1">
            <select name="" id="" className="bg-transparent outline-none">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg> */}
              <option value="" className="text-black">
                English
              </option>
              <option value="" className="text-black">
                हिन्दी
              </option>
            </select>
          </div>
          <button className="bg-red-700 text-white py-1 px-3 rounded-md hover:bg-red-500">
            Sign In
          </button>
        </div>
      </nav>
      <div className="lg:mt-40 md:mt-20 sm:mt-[5]">
        <div>
          <h1 className="text-white text-center lg:text-5xl sm:text-2xl text-3xl px-5 font-bold lg:px-20 mb-5">
            Unlimited movie, TV shows and more
          </h1>
          <p className="text-center text-white lg:text-2xl md:text-2xl text-xl mb-5">
            Watch anywhere. Cancel anytime
          </p>
          <p className="text-center text-white lg:text-xl md:text-xl text-xl mb-5">
            {" "}
            Ready to watch? Enter your email to{" "}
            <br className="lg:hidden md:hidden" /> create or restart your
            membership
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            <input
              type="text"
              placeholder="Email address"
              className="text-lg py-3 px-3 w-80 lg:w-96 rounded-md  text-white bg-[#111112] mx-4 md:px-5 border-[1.5px] border-gray-600 hover:ring-1 hover:ring-gray-300 opacity-80 "
            />
            <button className="bg-red-700 flex item-center gap-2 py-3 px-5 mt-2 rounded-lg  hover:bg-red-500">
              {" "}
              <p className="text-white font-bold text-lg">Get Started</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

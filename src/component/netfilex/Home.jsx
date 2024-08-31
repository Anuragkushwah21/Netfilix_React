import React from "react";
import HeroSection from "../HeroSection";
import Enjoy from "../Enjoy";
import Download from "../Download";
import Watch from "../Watch";
import CreateProfile from "../CreateProfile";
import Faq from "../Faq";
import { FaqData } from "../../data/FaqData";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Enjoy />
      <Download />
      <Watch />
      <CreateProfile />

      <div className="bg-black py-5">
        <h2 className="text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold py-10 ">
          Frequently Asked
          <br className="lg:hidden md:hidden" />
          Questions
        </h2>
        <div className="mb-10"></div>
        {FaqData.map((item, index) => {
          const { title, desc } = item;
          return <Faq title={title} desc={desc} />;
        })}
        <p className="text-center text-white lg:text-xl md:text-xl text-xl mb-5">
          {" "}
          Ready to watch? Enter your email to{" "}
          <br className="lg:hidden md:hidden" /> create or restart your
          membership
        </p>
        <div className="bg-black flex flex-wrap justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="Email address"
            className="text-lg py-3 px-3 w-80 lg:w-96 rounded-md  text-white bg-[#111112] mx-4 md:px-5 border-[1.5px] border-gray-600 hover:ring-1 hover:ring-gray-300 opacity-80 "
          />
          <button className="bg-red-700 flex item-center gap-1 py-3 px-5 mt-2 rounded-lg  hover:bg-red-500">
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
      <div className="hr_line"></div>
      <Footer/>
    </>
  );
}

export default Home;

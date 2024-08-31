import React from "react";

function Download() {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-wrap-reverse justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
          <div className="left mb-10 lg:mb-0 md:mb-0">
            <img
              src="../../public/image/mobile-0819.jpg"
              alt="Mobile"
              className="w-[30em] sm:object-top"
            />
          </div>
          <div className="right">
            <div className="left mb-10 lg:mb-0 md:mb-0 sm:flex-wrap ">
              <h2 className="text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start">
                Download your shows <br /> to watch offline
              </h2>
              <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Save your favourites easily and always have
                <br className="hidden lg:block md:block" />
                something to watch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default Download;

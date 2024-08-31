import React from 'react'

function Watch() {
  return (
   <>
      <div className="bg-black">
        <div className="flex flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
          <div className="left mb-10 lg:mb-0 md:mb-0">
            <h2 className="text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start">
            Watch everywhere{" "}
            </h2>
            <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
              {" "}
              Stream unlimited movies and TV shows on your
              <br className="hidden lg:block md:block" />
              phone,tablet,laptop,and TV.
            </p>
          </div>
          <div className="right">
            <div className="">
              <img src="../../public/image/mobile-0819.jpg"className="lg:w-[35em] md:w-[35] w-[30]" alt="" />
              {/* <video className="lg:w-[35em] md:w-[35] w-[30]" autoPlay={true} muted> <source src="" type="video/mp4"/></video> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hr_line"></div>
   </>
  )
}

export default Watch

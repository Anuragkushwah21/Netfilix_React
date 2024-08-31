import React from "react";

function CreateProfile() {
  return (
    <>
      <div className="bg-black">
        <div className="flex  flex-wrap-reverse justify-evenly items-center lg:py-20 md:py-20 py-10 px-5">
          <div className="left mb-10 lg:mb-0 md:mb-0">
            <img
              src="../../public/image/childern.png"
              alt=""
              className="w-[35em]"
            />
          </div>
          <div className="right ">
            <div className="left mb-10 lg:mb-0 md:mb-0">
              <h2 className="text-white lg:text-5xl md:text-5xl text-3xl font-bold mb-5 text-center lg:text-start md:text-start">
                Create profiles for kids
              </h2>
              <p className="text-white lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start">
                Send childern on adventures with their favourite
                <br className="hidden lg:block md:block" />
                with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hr_line"></div>
    </>
  );
}

export default CreateProfile;

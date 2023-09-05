import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-[800px] mt-[35px] w-full mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-4xl sm:2xl text-2xl font-bold md:pt-6 pb-2 text-sky-500">
          Kyoai Medical Services
        </h1>
        <div>
          <p className="md:4xl sm:3xl text-xl italic font-semibold text-sky-500 pb-3">
            "Care From Heart"
          </p>
          <button className="bg-sky-500 w-[170px] rounded-lg font-bold my-1 mx-auto py-2 text-white md:text-xl text-[18px]">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import img1 from "../assets/img/promo1.png";

const Content = () => {
  return (
    <div className="w-full bg-white pt-5">
      <h1 className="text-sky-500 text-center font-bold md:text-2xl sm:text-base text-xl mb-8 capitalize">
        Promo
      </h1>
      <div className="w-full bg-sky-500 py-4 px-4">
        <div className="max-w-[1240] mx-auto px-3 grid md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-white font-bold md:text-xs text-xs">
              Some of the Benefits You Get
            </p>
            <h1 className="md:text-2xl sm:text-xl text-lg font-bold py-2 text-white">
              Japanese standard
            </h1>
            <p className="text-white md:text-sm">
              Get world-class medical services, the expertise of qualified
              doctors, accredited medical practitioners, and all the
              conveniences with us
            </p>
          </div>
          <img
            className="w-[550px] my-2 mx-auto rounded-xl"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Content;

import React from "react";
import drumum from "../../assets/img/drumum1.png";

const Practitioner = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <img src={drumum} alt="slider" />
      <div className="w-full mx-auto px-2 py-2 my-2">
        <h1 className="text-sky-500 text-center font-bold py-4 text-lg lg:text-2xl">
          General Practitioner
        </h1>
        <p className="font-semibold text-slate-500">
          Our general practitioners are experienced and professional in dealing
          with various health problems. They can examine you directly at the
          clinic, via Email (info@kyoaihealthcare.com) or come directly to your
          location*.
        </p>
      </div>
    </div>
  );
};

export default Practitioner;

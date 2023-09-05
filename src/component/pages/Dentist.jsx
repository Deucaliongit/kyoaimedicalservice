import React from "react";
import drumum from "../../assets/img/drgigi.png";

const Dentist = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <img src={drumum} alt="slider" />
      <div className="w-full mx-auto px-2 py-2 my-2">
        <h1 className="text-sky-500 text-center font-bold py-4 text-lg lg:text-2xl">
          Dentist
        </h1>
        <p className="font-semibold text-slate-500">
          We have an experienced dentist, accompanied by the Japanese Language
          translators when needed. The tools used in accordance with the
          Japanese standard. Our clinic is very pay attention to the principle
          of control and prevention of infection, and for that sterilization of
          equipment and instruments is carried out periodically.
        </p>
      </div>
    </div>
  );
};

export default Dentist;

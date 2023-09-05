import React from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaTooth, FaUserNurse } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-full py-6">
      <div className="max-w-[1240px] mx-auto sm:px-4 grid sm:grid-cols-3 md:grid-cols-3 justify-center gap-6">
        <a
          href="#"
          className="group block max-w-xs md:max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="block items-center space-x-3">
            <h1 className="group-hover:text-white text-xl font-bold text-sky-500 text-center">
              Medical Checkup
            </h1>
          </div>
          <div className="block text-center items-center space-x-3">
            <AiFillMedicineBox
              size={35}
              className="group-hover:text-white  max-w-xs md:max-w-sm mx-auto text-sky-500 text-center"
            />
          </div>

          <p className="font-semibold text-slate-500 group-hover:text-white text-sm capitalize">
            By doing laboratory checks and medical check-ups regularly
          </p>
        </a>

        <a
          href="#"
          className="group block  max-w-xs md:max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="block items-center space-x-3">
            <h3 className="group-hover:text-white text-xl font-bold text-sky-500 text-center">
              Dental Clinic
            </h3>
          </div>
          <div className="block text-center items-center space-x-3">
            <FaTooth
              size={35}
              className="group-hover:text-white  max-w-xs md:max-w-sm mx-auto text-sky-500 text-center"
            />
          </div>
          <p className="font-semibold text-slate-500 group-hover:text-white text-sm capitalize ">
            Consult your dental problems, and do periodic checks. With our
            professional service
          </p>
        </a>

        <a
          href="#"
          className="group block max-w-xs md:max-w-sm lg:max-w-md mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
        >
          <div className="block items-center space-x-3">
            <h3 className="group-hover:text-white text-xl font-bold text-sky-500 text-center">
              Outpatient
            </h3>
          </div>
          <div className="block text-center items-center space-x-3">
            <FaUserNurse
              size={35}
              className="group-hover:text-white  max-w-xs md:max-w-sm mx-auto text-sky-500 text-center"
            />
          </div>
          <p className="font-semibold capitalize text-slate-500 group-hover:text-white text-sm">
            check your disease here, with our best doctors, Japanese language is
            available
          </p>
        </a>
      </div>
    </div>
  );
};

export default Services;

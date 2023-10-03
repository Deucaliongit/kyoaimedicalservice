import React from "react";
import lab from "../../assets/img/lab.png";

const Lab = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <img src={lab} alt="slider" />
      <div className="w-full mx-auto px-2 py-2 my-2">
        <h1 className="text-sky-500 text-center font-bold py-4 text-lg lg:text-2xl">
          Laboratory
        </h1>
        <p className="font-semibold text-slate-500">
          Our clinic can meet the needs of your family or company to get
          laboratory tests. Our laboratory can perform various tests with
          results in less than 30 minutes, including complete hematology,
          influenza, dengue, typhoid, etc. With support from partner
          laboratories and a variety of complete and up-to-date laboratory
          equipment, tests can be carried out with accurate results.
        </p>
      </div>
    </div>
  );
};

export default Lab;

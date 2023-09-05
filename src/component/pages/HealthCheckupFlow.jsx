import React from "react";
import images1 from "../../assets/img/flow1.png";

const HealthCheckupFlow = () => {
  return (
    <div className="w-full">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Medical Checkup Flow</h1>
          <p className="text-sm py-5 max-w-lg">健診の流れ</p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-5">
        <div className="bg-white shadow-md my-4 px-4 mx-2 py-4 rounded-md flex items-center space-x-4">
          <div className="font-semibold sm:text-lg md:text-sm text-xs grid grid-cols-2 text-gray-600 w-full">
            <div className="text-left text-lg fw-bold">健診の流れ</div>
            <div className="text-right my-auto">Updated 07/06/2022</div>
          </div>
        </div>
        <div className="border my-4 px-4 mx-2 py-4 flex items-center space-x-4">
          <div className="max-w-[720px] items-center mx-auto">
            <img src={images1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckupFlow;

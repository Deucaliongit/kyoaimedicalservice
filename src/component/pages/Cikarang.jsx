import React from "react";
import img1 from "../../assets/img/jakarta.png";

const Cikarang = () => {
  return (
    <div className="w-full">
      <img className="w-full mx-auto" src={img1} alt="" />
      <div className="mx-auto px-4 py-2 my-4">
        <h1 className="text-lg lg:text-2xl font-bold text-slate-500 text-center">
          Kyoai Medical Services Cikarang
        </h1>
        <p className="mx-auto font-semibold text-slate-500 px-4 py-2 my-2 text-center">
          "Established since 1995, KYOAI MEDICAL SERVICES has been providing a
          variety of pathological tests and healthcare services for the medical
          fraternity and the general public. Previously, our focus was on
          providing excellent access and services for Japanese expatriates. In
          2007, we revised our vision by changing our company name to Kyoai
          Healthcare. Our goal is to offer medical services with international
          standards for both local and foreign clients.
        </p>
      </div>
    </div>
  );
};

export default Cikarang;

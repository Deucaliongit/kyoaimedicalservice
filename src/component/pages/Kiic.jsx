import React from "react";
import img1 from "../../assets/img/kiic.png";

const Kiic = () => {
  return (
    <div>
      {" "}
      <img className="w-full mx-auto" src={img1} alt="" />
      <div className="mx-auto px-4 bg-gray-50">
        <h1 className="text-lg lg:text-2xl font-bold text-gray-600 text-center py-4">
          Kyoai Medical Services Karawang ( KIIC )
        </h1>
        <p className="mx-auto leading-loose text-xs lg:text-lg p-2 font-semibold text-gray-600 px-4 py-4 text-center">
          "Established since 1995, KYOAI MEDICAL SERVICES has been providing a
          variety of pathological tests and healthcare services for the medical
          fraternity and the general public. Previously, our focus was on
          providing excellent access and services for Japanese expatriates. In
          2007, we revised our vision by changing our company name to Kyoai
          Healthcare. Our goal is to offer medical services with international
          standards for both local and foreign clients.
        </p>
      </div>
      <div className="max-w-screen">
        <div className="w-full mx-auto px-2 my-4 text-center">
          <h1 className="font-bold text-sky-500 text-md lg:text-2xl mb-4">
            Information
          </h1>
          <div className="max-w-[1280px] grid lg:grid-cols-2 mx-auto gap-4 justify-center">
            <div className="bg-sky-500 shadow-sm py-4 font-semibold text-white px-2">
              Branch : KIIC
            </div>
            <div className="bg-sky-500 shadow-sm py-4 font-semibold text-white px-2">
              Gedung Sentra KIIC Unit No.40 Lt.1, Jl Permata Raya Lot CA-1
              Karawang (KIIC) 41361,
            </div>
            <div className="bg-sky-500 shadow-sm py-4 font-semibold text-white px-2">
              Consultation Hours
            </div>
            <div className="bg-sky-500 shadow-sm py-4 font-semibold text-white px-2">
              Monday～Friday//08:00-18:00、Saturday//08:00-13:00 Sunday//Holiday
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <h1 className="text-center font-bold text-sky-500 lg:text-2xl text-lg py-4">
          Maps
        </h1>
        <div className="flex justify-center py-4 px-2 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.284278527429!2d106.8019376742331!3d-6.226199560975415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f194f63b2305%3A0xc9285b218cd9c279!2sKYOAI%20MEDICAL%20SERVICES%20-%20KIIC!5e0!3m2!1sid!2sid!4v1691384542982!5m2!1sid!2sid"
            width="1280"
            height="600"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kiic;

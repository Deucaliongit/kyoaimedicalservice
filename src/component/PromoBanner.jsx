import React, { useEffect, useRef } from "react";
import banner from "../assets/img/promo1.png";
import banner2 from "../assets/img/promoMobile.png";
import { AiFillCloseSquare } from "react-icons/ai";

const PromoBanner = ({ onClose }) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleClickInside = (event) => {
      // Cek apakah event target adalah elemen div yang memiliki ref
      if (bannerRef.current && bannerRef.current.contains(event.target)) {
        // Klik di dalam elemen div, tutup banner
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickInside);

    return () => {
      document.removeEventListener("mousedown", handleClickInside);
    };
  }, [onClose]);

  return (
    <div
      ref={bannerRef}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 text-white p-4 text-center z-50"
    >
      <div className="relative w-[800px] h:[500px] md:h-[400px] mx-auto">
        <button
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-400 focus:outline-none"
          onClick={onClose}
        >
          <AiFillCloseSquare />
        </button>
        <img
          src={banner}
          alt="Promo Banner"
          className="hidden md:inline-block w-full h-auto"
        />
        <img
          src={banner2}
          alt="Promo Banner 2"
          className="md:hidden w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PromoBanner;

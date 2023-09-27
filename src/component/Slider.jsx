import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/slider1.png";
import img2 from "../assets/img/slider2.png";
import img3 from "../assets/img/slider1.png";
import img4 from "../assets/img/slider7.webp";

const Slider = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="w-full select-none">
      <motion.div
        initial={{ opacity: 0, duration: 10 }}
        animate={{ opacity: 1, duration: 10 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 2 }}
        className="aspect-w-16 aspet-h-9 relative"
      >
        <img src={images[3]} alt="slider" />
        <div className="hidden md:inline-block absolute py-2.5 md:left-10 lg:left-20 left-5 top-5 lg:top-1/4  capitalize text-sky-500 text-xs sm:text-sm md:text-xl font-semibold text-center leading-4">
          Kyoai medical services
        </div>
        <div className="hidden max-w-xs lg:max-w-lg absolute md:inline-block md:left-10 lg:left-20 left-5 top-[32%] capitalize text-sky-500 text-xs sm:text-lg md:text-4xl lg:font-black lg:text-6xl font-bold text-left leading-4">
          <h1>YOUR HEALTH</h1>
          <p>IS OUR PRIORITY</p>
          {/* <p className="max-w-[140px] lg:max-w-[400px] text-xs lg:text-xl font-normal lg:mt-2">
            For Japanese people living in Indonesia, We provide safe and secure
            medical care.
          </p> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Slider;

import React from "react";
// import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/img/Bgnew1.webp";
import img2 from "../assets/img/Bgnew2.webp";
import imgK1 from "../assets/img/BGkicik1.webp";
import imgK2 from "../assets/img/BGkicik2.webp";

const Slider = () => {
  // const images = [img1, img2];

  return (
    <div className="w-full select-none">
      {/* <motion.div
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
          <p className="max-w-[140px] lg:max-w-[400px] text-xs lg:text-xl font-normal lg:mt-2">
            For Japanese people living in Indonesia, We provide safe and secure
            medical care.
          </p>
        </div>
      </motion.div> */}
      <div className="hidden md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="slider1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slider2" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-sky-500">
            <img src={imgK1} alt="sliderkicik1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={imgK2} alt="sliderkicik2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

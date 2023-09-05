import React from "react";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { RiSmartphoneFill } from "react-icons/ri";

const Location = () => {
  const location = [
    {
      id: 1,
      title: "Jakarta",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-572-4330",
      contacticon2: <MdPhone />,
      contact2: "021-5790-5850",
      alamat: "Wisma Keiai 6th floor, Jend Sudirman Kav 3-4",
    },
    {
      id: 2,
      title: "Cikarang",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-896-77310",
      contacticon2: "",
      contact2: "",
      alamat: "Ejip CENTER 2nd Floor, Plot 3A, Cikarang , Jawa Barat",
    },
    {
      id: 3,
      title: "Bali",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "0853-3883-3787",
      contacticon2: <RiSmartphoneFill />,
      contact2: "0853-3883-3878",
      alamat: "Ruko Sunset Jaya No.5, Jl Mertanadi, Sunset Road Kuta",
    },
    {
      id: 4,
      title: "Summitmas",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "0877-8979-7773",
      contacticon2: "",
      contact2: "",
      alamat:
        "Gedung Summitmas Parking Area, Jl Jend Sudirman Kav 61-62, Jakarta Selatan",
    },
    {
      id: 5,
      title: "Karawang",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-3042-4008",
      contacticon2: "",
      contact2: "",
      alamat: "Manor Office Park 2nd Floor, Surya Utama Kav, C-1 Karawang",
    },
    {
      id: 6,
      title: "Delta Mas",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-572-4330",
      contacticon2: <MdPhone />,
      contact2: "021-5790-5850",
      alamat: "Wisma Keiai 6th floor, Jend Sudirman Kav 3-4",
    },
    {
      id: 7,
      title: "Sentra KIIC",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-2956-9381",
      contacticon2: "",
      contact2: "",
      alamat:
        "Kota Delta Mas, Sektor 1, Sub Sector 1.25, Blok 1/5 Cikarang Pusat",
    },
    {
      id: 8,
      title: "Axia",
      path: "./",
      contacticon1: <MdPhone />,
      contact1: "021-572-4330",
      contacticon2: "",
      contact2: "",
      alamat:
        "Axia Building South Cikarang, Jl Pajajaran No 7, Sukaresmi, Kab Bekasi",
    },
  ];
  return (
    <div className="w-full bg-white">
      <h1 className="text-center font-bold text-sky-500 text-xl md:text-2xl mx-auto py-8">
        Our Location
      </h1>
      <div className="max-w-[800px] py-4 md:py-4 px-4 mx-auto sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5">
        {location.map((locklinik, index) => (
          <a
            href="#"
            className="group block max-w-xs md:max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
            key={index}
          >
            <div className="flex grid-cols-2 items-center space-x-3">
              <MdLocationOn
                className="group-hover:text-white text-sky-500"
                size={20}
              />
              <h1 className="group-hover:text-white text-lg font-bold text-sky-500 text-center items-center">
                {locklinik.title}
              </h1>
            </div>
            <p className="text-slate-500 group-hover:text-white md:text-xs text-sm">
              {locklinik.alamat}
            </p>
            <div className="flex grid-cols-2 items-center space-x-3">
              <div className="group-hover:text-white text-sky-500" size={20}>
                {locklinik.contacticon1}
              </div>

              <h1 className="group-hover:text-white text-sm md:text-xs sm:text-[xs] font-bold text-sky-500 text-center items-center">
                {locklinik.contact1}
              </h1>
            </div>
            <div className="flex grid-cols-2 items-center space-x-3">
              <div className="group-hover:text-white text-sky-500" size={20}>
                {locklinik.contacticon2}
              </div>

              <h1 className="group-hover:text-white text-sm md:text-xs sm:text-xs font-bold text-sky-500 text-center items-center">
                {locklinik.contact2}
              </h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Location;

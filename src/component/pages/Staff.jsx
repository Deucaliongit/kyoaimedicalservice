import React from "react";

import lili from "../../assets/img/babeh.png";
import pilipus from "../../assets/img/pilipus.png";
import sungkono from "../../assets/img/sungkono.png";
import sudirman from "../../assets/img/sudirman.png";
import laura from "../../assets/img/laura.png";
import bjp from "../../assets/img/jplear.png";
import bpjn from "../../assets/img/jpori.png";
import ben from "../../assets/img/eng.png";

const Staff = () => {
  const Doctor = [
    {
      foto: lili,
      bahasa1: bpjn,
      bahasa2: ben,
      education: "(Radiologic Technologist)",
      nameDrjp: "名前:リリ",
      nameDr: "Mr. Lili",
      about:
        "She has studied abroad in Japan before. She trained at Okayama University. She has been working at Kyoai Medical since 1995. she likes to travel",
    },
    {
      foto: pilipus,
      bahasa1: bjp,
      bahasa2: ben,
      education: "(physiotherapist)",
      nameDrjp: "名前: フィリップス ",
      nameDr: "Mr PHILIPUS",
      about:
        "I'm taciturn, but I understand Japanese. i like to travel I have been working at Kyoai Medical since 2003.",
    },
    {
      foto: sungkono,
      bahasa1: bpjn,
      bahasa2: ben,
      education: "(clinical laboratory technician)",
      nameDrjp: "名前:スンコノ",
      nameDr: "Mr. Sungkono",
      about:
        "After attending a Japanese language class in Jakarta, train at Okayama University did I have been working at Kyoai Medical since 1995. i like to travel",
    },
    {
      foto: sudirman,
      bahasa1: bpjn,
      bahasa2: ben,
      education: "(Radiologic Technologist)",
      nameDrjp: "名前:スディルマン",
      nameDr: "Mr. Sudirman",
      about:
        "I have been working at Kyoai Medical since 2007. She will help you with x-rays and barium in Japanese. He is the father of 3 children. he likes to draw",
    },
    {
      foto: laura,
      bahasa1: bjp,
      bahasa2: ben,
      education: "(Head Nurse)",
      nameDrjp: "名前: フランシスカ医師",
      nameDr: "Ms. Laura",
      about:
        " She likes traveling and shopping. She has two beautiful daughters. She loves noodles. We strictly train our staff.",
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Staff</h1>
          <p className="text-sm py-5 max-w-lg capitalize">
            Our medical staff who are professional in their fields will assist
            you in this
          </p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto my-4">
        <div className="max-w-[1280px] px-4 mx-auto grid grid-col md:grid-cols-2 py-4 gap-5">
          {Doctor.map((drlist, index) => (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-80 w-full object-cover md:h-60 md:w-52"
                    src={drlist.foto}
                  ></img>
                </div>
                <div className="p-4">
                  <div className="flex mb-2">
                    <div className="w-[60px]">
                      <img
                        className="h-10 w-full object-scale-down"
                        src={drlist.bahasa1}
                      ></img>
                    </div>
                    <div className="w-[60px]">
                      <img
                        className="h-10 w-full object-scale-down"
                        src={drlist.bahasa2}
                      ></img>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold px-2">
                      {drlist.nameDrjp}
                    </div>
                    <p className="blocktext-lg leading-tight font-medium text-black hover:underline px-2">
                      ({drlist.nameDr})
                    </p>
                  </div>
                  <p className="mt-2 text-slate-500 font-bold px-2">
                    {drlist.education}
                  </p>
                  <p className="mt-2 text-slate-500 px-2 md:text-xs">
                    {drlist.about}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-[1280px] mx-auto my-4 px-2">
        <h1 className="px-2 py-2 text-sky-600 font-bold text-center text-lg lg:text-3xl">
          Our Staff
        </h1>
      </div> */}
    </div>
  );
};

export default Staff;

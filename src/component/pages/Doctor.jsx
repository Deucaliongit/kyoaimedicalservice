import React from "react";

import julia from "../../assets/img/drjulia.png";
import aini from "../../assets/img/drai.png";
import joshua from "../../assets/img/drjo.png";
import khalida from "../../assets/img/drkhalida.png";
import sisca from "../../assets/img/drsisca.png";
import amelia from "../../assets/img/dramel.png";
import audi from "../../assets/img/draudi.png";
import bjp from "../../assets/img/jplear.png";
import ben from "../../assets/img/eng.png";

const Doctor = () => {
  const Doctor = [
    {
      foto: julia,
      bahasa1: bjp,
      bahasa2: ben,
      education:
        " AtmaJaya Universityschool of medicine Graduated from Osaka University School of Medicine, Department of Clinical Genetics",
      nameDrjp: "名前 : ジュリア博士",
      nameDr: "Dr. Julia",
      about:
        " I will examine you in Japanese. He also speaks Osaka dialect. His hobby is traveling. My strong point is honesty.",
    },
    {
      foto: aini,
      bahasa1: bjp,
      bahasa2: ben,
      education: "Graduated from Universitas Kristen Indonesia",
      nameDrjp: "名前:アイニ医師",
      nameDr: "Dr AINI",
      about:
        "I am studying Japanese.This is the chief of the kyoai medical room. Calm, honest, tolerant and adaptable. I tend to feel happy, but I watch sad movies I cry right away. i like to travel",
    },
    {
      foto: khalida,
      bahasa1: bjp,
      bahasa2: ben,
      education: "Graduated from YARSI University",
      nameDrjp: "名前: カリダ医師",
      nameDr: "Dr. Khalida",
      about:
        "I am studying Japanese. I am a cheerful and energetic doctor. I like Japanese food.",
    },
    {
      foto: joshua,
      bahasa1: bjp,
      bahasa2: ben,
      education: "Graduated from University of Indonesia",
      nameDrjp: "名前: ジョシュア医師",
      nameDr: "Dr. JOSHUA",
      about:
        "I am studying Japanese. I aspire to become a dermatologist. My favorite food is pizza.",
    },
    {
      foto: sisca,
      bahasa1: bjp,
      bahasa2: ben,
      education: "Krida Wacana Christian University",
      nameDrjp: "名前: フランシスカ医師",
      nameDr: "Dr. Fransiska",
      about:
        " I am studying Japanese.I like all kinds of food so i love it. I like giraffes too.",
    },
    {
      foto: amelia,
      bahasa1: bjp,
      bahasa2: ben,
      education: "Graduated from Trisakti University",
      nameDrjp: "名前: アメリア医師(歯科)",
      nameDr: "Dr. Amelia",
      about:
        " I am studying Japanese. i like to travel and see flower , I like eating and sleeping.",
    },
    {
      foto: audi,
      bahasa1: bjp,
      bahasa2: ben,
      education:
        "Graduated from YARSI University. Master of Hospital Management/Administration",
      nameDrjp: "名前: オウディ医師",
      nameDr: "Dr. Audi",
      about:
        "I am studying Japanese. I am always positive and lucky. meditation wellness, I like cooking and eating.",
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Doctor</h1>
          <p className="text-sm py-5 max-w-lg capitalize">
            some of our doctors are ready to help you in managing your health
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
    </div>
  );
};

export default Doctor;

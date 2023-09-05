import React from "react";
import vac from "../../assets/img/vacine2.png";
import consul from "../../assets/img/consull.png";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Vaccine = () => {
  const [open, setOpen] = useState(0);
  const syaratvaksin = [
    {
      head: "General Precautions",
      p1: "1. If you feel unwell on the day of your appointment, please do not overdo it and try to get vaccinated when you feel well",
      p2: "2. Be sure to bring your maternal and child health handbook and vaccination handbook (only if you have one).",
      p3: "3. Fill out the pre-examination form responsibly.",
    },
    {
      head: "People Who Cannot be Vaccinated",
      p1: "1. Those who have a clear fever (body temperature is 37.5 degrees or higher)",
      p2: "2. Those who are clearly suffering from a serious acute illness",
      p3: "3. Those who have had a severe allergic reaction (anaphylaxis) to the vaccination received on that day or to the ingredients contained in the vaccination",
      p4: "4. Currently taking antibiotics.",
      p5: "5. Others who are deemed inappropriate by a doctor",
    },
    {
      head: "People who must consult with a doctor when receiving vaccinations",
      p1: "1. Those who are receiving treatment for heart disease, kidney disease, liver disease, blood disease, developmental disorders, etc.",
      p2: "2. Those who have had an allergic reaction such as fever, rash, hives, etc. within 2 days after receiving a previous vaccination.",
      p3: "3. Those who have ever had convulsions",
      p4: "4. Those who have been diagnosed with immune status in the past and have been found to be abnormal",
      p5: "5. Those who have an abnormality that seems to be an allergic reaction to the ingredients contained in the vaccine, antibiotics, or stabilizers",
    },
    {
      head: "Precautions After Vaccination",
      p1: "1. Observe for 10 to 15 minutes after vaccination to see if any abnormalities appear on the spot",
      p2: "2. You may take a bath, but do not rub the injection site.",
      p3: "3. Avoid strenuous exercise on the day of vaccination.",
      p4: "4. Please refrain from drinking alcohol on the day of the event.",
    },
    {
      head: "Japanese Encephalitis Vaccine",
      p1: "The Japanese encephalitis vaccine (IMOJEV) distributed in Indonesia and the Japanese encephalitis vaccine (JEBIK V) distributed in Japan differ in the number of vaccinations and the timing of vaccination until basic immunity is obtained. Therefore, they cannot be used together.",
    },
  ];

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const tableservices = [
    {
      no: "1",
      vaccine: "インフルエンザ(Influenza)Quadrivalen",
      harga: "575,000",
    },
    {
      no: "2",
      vaccine: "A型肝炎 (Hepatitis A):Avaxim",
      harga: "843,500",
    },
    {
      no: "3",
      vaccine: "B型肝炎 (Hepatitis B)：ENGERIX-B",
      harga: "401,200",
    },
    {
      no: "4",
      vaccine: "AB肝炎ミックス（Twinrix）",
      harga: "940,000",
    },
    {
      no: "5",
      vaccine: "腸チフス(Typhoid )",
      harga: "570,000",
    },
    {
      no: "6",
      vaccine: "破傷風 (Tetanus-Toxoid)",
      harga: "284,600",
    },
    {
      no: "7",
      vaccine: "狂犬病 (Rabies:Verorab)",
      harga: "600,000",
    },
    {
      no: "8",
      vaccine: "混合 (ジフテリア,破傷風 )D.T Diphtheria,Tetanus",
      harga: "324,900",
    },
    {
      no: "9",
      vaccine: "子宮頚がん（1回分料金）Gradasil vaccine",
      harga: "1,797,900",
    },
    {
      no: "10",
      vaccine: "子宮頸がん(3回分料金) 1Gradasil vaccine",
      harga: "5,150,000",
    },
    {
      no: "11",
      vaccine: "日本脳炎(Japanese Encephalitis)",
      harga: "725,000",
    },
    {
      no: "12",
      vaccine: "MR(麻疹・風疹）",
      harga: "1,272,500",
    },
    {
      no: "13",
      vaccine: "MMR（麻疹・おたふくかぜ・風疹）",
      harga: "859,000",
    },
    {
      no: "14",
      vaccine: "ポリオ (Polio)",
      harga: "882,600",
    },
    {
      no: "15",
      vaccine: "水痘(Chiken pox)",
      harga: "現在取り扱いなし",
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Vaccination</h1>
          <p className="text-sm py-5">
            We also offer vaccination services for various types of vaccines
            with appropriate requirements.
          </p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto">
        {/* <div className="max-w-[800px] py-10 mx-auto text-center">
          <span className="md:text-2xl text-xl inline-block py-1 px-2.5 text-center font-bold bg-sky-500 text-white rounded">
            予防接種
          </span>
        </div> */}
        <div className="mx-auto max-w-[800px] px-4 py-4 text-center">
          <div className="bg-white shadow-md my-4 px-4 mx-2 py-4 rounded-md flex items-center space-x-4">
            <div>
              <img src={vac} className="max-w-[100px]" />
            </div>
            <div className="font-semibold sm:text-lg md:text-sm text-xs text-left text-gray-600">
              Our clinic uses imported vaccines. (Except for tetanus) Price
              fluctuates depending on the vaccine used, so please contact us for
              details. Also, he has the stock status of vaccines, etc., so
              please make a reservation.
            </div>
          </div>
          <div className="bg-white shadow-md my-10 px-4 mx-2 rounded-md flex items-center space-x-4">
            <Fragment>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0"
                >
                  <div className="font-semibold sm:text-lg text-xs md:text-sm text-gray-600 hover:text-sky-500">
                    In order to be vaccinated, there are some conditions for
                    vaccinated persons, both Japanese patients and local
                    patients.
                  </div>
                  <div>
                    <img src={consul} className="max-w-[100px]" />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <h1 className="inline-block rounded-md px-2.5 text-center bg-sky-500 font-semibold text-white py-2 md:text-sm">
                    Precautions when receiving vaccination
                  </h1>
                  {syaratvaksin.map((vaksin, index) => (
                    <div key={index}>
                      <h2 className="text-left md:text-sm mt-2 font-semibold text-gray-800 ">
                        {vaksin.head}
                      </h2>
                      <div className="text-left pl-4 my-4 md:text-xs space-y-6">
                        <p>{vaksin.p1}</p>
                        <p>{vaksin.p2}</p>
                        <p>{vaksin.p3}</p>
                        <p>{vaksin.p4}</p>
                        <p>{vaksin.p5}</p>
                      </div>
                    </div>
                  ))}
                  <p className="md:text-xs text-left text-sm pl-4 p-2">
                    ・The number of basic vaccinations for JEVIC V is 3 times
                    (0, 1-4 weeks, 12 months)
                  </p>
                  <p className="md:text-xs text-left text-sm pl-4 p-2">
                    ・The basic number of vaccinations for IMOJEV is 2 times (0,
                    12 months).
                  </p>
                  <p className="md:text-xs text-left pl-4 p-2">
                    I have been inoculated with the Japanese encephalitis
                    vaccine for the second time, but is it possible to receive
                    the third vaccination in Indonesia? The answer to the
                    question is NO for him. In order to acquire basic immunity
                    against Japanese encephalitis, it is necessary to have the
                    third vaccination in Japan or to start over from the first
                    time in Indonesia (total of two vaccinations).
                  </p>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        </div>
        <div className="max-w-[800px] px-4 py-4 mx-auto">
          <div className="max-w-[800px] px-2 md:px-4 py-4 mx-auto border">
            <table className="table-fixed w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-[12%] px-4 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    No
                  </th>
                  <th className="w-[65%] px-4 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    Vaccine
                  </th>
                  <th className="w-[25%] px-4 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    診察代含む(IDR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableservices.map((tdata, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-center text-gray-600 ">
                      {tdata.no}
                    </td>
                    <td className="px-6 py-4 text-sm text-left text-gray-600 ">
                      {tdata.vaccine}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-600 ">
                      {tdata.harga}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;

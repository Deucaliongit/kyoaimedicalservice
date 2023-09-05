import React from "react";
import t1 from "../../assets/img/medicine.png";
import t2 from "../../assets/img/dentistry.png";
import t3 from "../../assets/img/ct-scan.png";
import t4 from "../../assets/img/fisio.png";
import t5 from "../../assets/img/lungs.png";
import t6 from "../../assets/img/ophthalmology.png";
import t7 from "../../assets/img/dentist.png";
import t8 from "../../assets/img/spots.png";
import t9 from "../../assets/img/labicon.png";
import t10 from "../../assets/img/mcu.png";

const Treatment = () => {
  const tableservices = [
    {
      no: "1",
      bagian: "Outpatient",
      jambuka: "○",
      asuransi: "○",
      deskripsi:
        "General internal medicine practice, general examination. Please make a reservation before coming.",
    },
    {
      no: "2",
      bagian: "歯科",
      jambuka: "○",
      asuransi: "☓",
      deskripsi:
        "General treatment, oral surgery, tartar removal, etc. The doctor is full-time, but does not see patients in the evening. Reservations are required.",
    },
    {
      no: "3",
      bagian: "Radiology",
      jambuka: "○",
      asuransi: "○",
      deskripsi:
        "We have facilities for X-ray, barium examination, and ultrasonic examination. We do not have MRI, CT scan or mammography facilities.",
    },
    {
      no: "4",
      bagian: "Physiotherapy",
      jambuka: "○",
      asuransi: "○",
      deskripsi:
        "electrotherapy, etc. Full-time physiotherapist. Physical therapy can be done after seeing a doctor. You can see a doctor after consulting with a doctor.",
    },
    {
      no: "5",
      bagian: "Respiratory Medicine	",
      jambuka: "△",
      asuransi: "○",
      deskripsi:
        "examination and treatment, etc. A doctor is not stationed. Reservation is required.",
    },
    {
      no: "6",
      bagian: "Ophthalmology",
      jambuka: "△",
      asuransi: "○",
      deskripsi:
        "Appointments are required as the doctor is not stationed. Facilities such as fundus and tonometer are available.",
    },
    {
      no: "7",
      bagian: "Otolaryngology",
      jambuka: "△",
      asuransi: "○",
      deskripsi: "Appointments are required as the doctor is not stationed.",
    },
    {
      no: "8",
      bagian: "Dermatology",
      jambuka: "△",
      asuransi: "☓",
      deskripsi:
        "Appointments are required at Clinic Suisse across from Kyoai. We cannot respond in Japanese. Overseas cashless insurance does not apply. Please make a reservation by phone directly. 021-5790-5890",
    },
  ];
  const treatment = [
    {
      id: 1,
      title: "Medical Checkup",
      path: "./",
      treatmenticon: t10,
    },
    {
      id: 2,
      title: "Dentist",
      path: "./",
      treatmenticon: t2,
    },
    {
      id: 3,
      title: "Radiology",
      path: "./",
      treatmenticon: t3,
    },
    {
      id: 4,
      title: "Physiotherapy",
      path: "./",
      treatmenticon: t4,
    },
    {
      id: 5,
      title: "Pulmonology",
      path: "./",
      treatmenticon: t5,
    },
    {
      id: 6,
      title: "Ophthalmology",
      path: "./",
      treatmenticon: t6,
    },
    {
      id: 7,
      title: "ENT",
      path: "./",
      treatmenticon: t7,
    },
    {
      id: 8,
      title: "Dermatology",
      path: "./",
      treatmenticon: t8,
    },
    {
      id: 9,
      title: "Pharmacy",
      path: "./",
      treatmenticon: t1,
    },
    {
      id: 9,
      title: "Laboratory",
      path: "./",
      treatmenticon: t9,
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Treatment</h1>
          <p className="text-sm py-5 max-w-lg">
            Kyoai Medical Services Jakarta Has several medical departments as
            follows. ( Some medical departments require advance reservation )
          </p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="max-w-[800px] py-4 md:py-4 px-4 mx-auto my-4 sm:px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-center gap-5">
          {treatment.map((treatmentmenu, index) => (
            <a
              href="#"
              className="hover:scale-105 group block px-4 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-md"
              key={index}
            >
              <div className="grid grid-cols-4">
                <div className="col-start-2 col-span-2">
                  <img src={treatmentmenu.treatmenticon} />
                </div>
              </div>

              <h1 className="text-lg mt-4 font-bold text-gray-600 text-center items-center">
                {treatmentmenu.title}
              </h1>
            </a>
          ))}
        </div>
        <div className="max-w-[800px] mx-auto py-4">
          <h1 className="font-semibold text-center text-gray-600 my-3 mx-auto py-4 text-xl">
            About our medical facilities
          </h1>
          <div className="max-w-[800px] px-4 py-4 mx-auto md:border">
            <table className="table-fixed w-full border md:border-none">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-[10%] px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    No
                  </th>
                  <th className="w-[15%] px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    Clinic
                  </th>
                  <th className="w-[15%] px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    All The Time
                  </th>
                  <th className="w-[15%] px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    Insurance Coverage
                  </th>
                  <th className="w-[45%] px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">
                    Remarks
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
                      {tdata.bagian}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600 ">
                      {tdata.jambuka}
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-600">
                      {tdata.asuransi}
                    </td>
                    <td className="px-6 py-4 text-sm text-left font-medium text-gray-600">
                      {tdata.deskripsi}
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

export default Treatment;

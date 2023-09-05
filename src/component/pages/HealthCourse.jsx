import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import samplePDF from "../../assets/testjp.pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Import the main component
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library
import pdfFile from "../../assets/JKMC_2023_Japan_indonesia_作成中.pdf";
import pdfFile2 from "../../assets/RM-BALI 2019.pdf";

const HealthCourse = () => {
  const [defaultPdfFile] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="w-full">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Medical Checkup</h1>
          <p className="text-sm py-5 max-w-2xl">
            Medical Check-up examination (examination available at our clinic)
            for information on examination of each branch, please contact in
            advance. for details please download the file below
          </p>
          <a href="https://kyoai123.co.id/regreport/mcu">
            <button className="bg-white w-[170px] text-sky-500 hover:bg-slate-100 rounded-lg font-bold my-1 mx-auto py-2 md:text-xl text-[18px]">
              Register Now
            </button>
          </a>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-5">
        <div className="bg-white shadow-md my-4 px-4 mx-4 md:mx-2 py-4 rounded-md flex items-center space-x-4">
          <div className="font-semibold sm:text-lg md:text-sm text-xs grid grid-cols-2 text-gray-600 w-full">
            <div className="text-left text-lg fw-bold">
              Medical Checkup
              <span className="text-xs block text-red-400">
                The examinations below are only applicable for the main clinic.
                Please contact us if the examinations are conducted at our
                branches. For details, please download the file below.
              </span>
            </div>
            <div className="text-right my-auto">Updated 07/06/2022</div>
          </div>
        </div>
        <div className="border my-4 px-4 md:mx-2 mx-4 py-4 flex items-center space-x-4">
          {defaultPdfFile && (
            <>
              <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js">
                <Viewer
                  theme="dark"
                  fileUrl={pdfFile}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}
        </div>
        <div className="ml-2 px-2 flex gap-4">
          <a href="https://kyoai123.co.id/regreport/mcu">
            <button className="bg-sky-500 rounded-xl hover:bg-sky-600 px-2 font-bold text-white md:text-lg text-[18px]">
              Registration
            </button>
          </a>
          <a href={pdfFile} without rel="noopener noreferrer" target="_blank">
            <button
              className="bg-sky-500 rounded-xl px-2 font-bold hover:bg-sky-600 text-white md:text-lg text-[18px]"
              trailingIcon="picture_as_pdf"
              label="Resume"
            >
              Download
            </button>
          </a>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-5">
        <div className="bg-white shadow-md my-4 px-4 mx-4 md:mx-2 py-4 rounded-md flex items-center space-x-4">
          <div className="font-semibold sm:text-lg md:text-sm text-xs grid grid-cols-2 text-gray-600 w-full">
            <div className="text-left text-lg fw-bold">
              Medical Checkup
              <span className="text-xs block text-red-400">
                The examinations below are only available for clinics in Bali.
                Please contact the Bali contact number for further information.
                For examination details, please download the file below.
              </span>
            </div>
            <div className="text-right my-auto">Updated 07/06/2022</div>
          </div>
        </div>
        <div className="border my-4 px-4 md:mx-2 mx-4 py-4 flex items-center space-x-4">
          {defaultPdfFile && (
            <>
              <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js">
                <Viewer
                  theme="dark"
                  fileUrl={pdfFile2}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthCourse;

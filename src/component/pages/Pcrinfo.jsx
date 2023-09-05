import React from "react";
import { Document, Page, Outline } from "react-pdf";
import { useState } from "react";
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

import pdfFile from "../../assets/tutorialregisjepang.pdf";
const Pcrinfo = () => {
  const [defaultPdfFile] = useState(pdfFile);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="w-full">
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>Info Registration PCR/Rapid</h1>
          <p className="text-sm pt-5 pb-2 max-w-lg capitalize">
            For PCR Or Rapid Antigen Registration, Please Read The Document
            Below
          </p>
          <p className="text-sm max-w-lg capitalize py-2">Or Click Here</p>
          <a href="https://kyoai123.co.id/regreport/">
            <button className="bg-white w-[170px] text-sky-500 hover:bg-slate-100 rounded-lg font-bold my-1 mx-auto py-2 md:text-xl text-[18px]">
              Register Now
            </button>
          </a>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto py-5">
        <div className="bg-white shadow-md my-4 px-4 mx-4 md:mx-2 py-4 rounded-md flex items-center space-x-4">
          <div className="font-semibold sm:text-lg md:text-sm text-xs grid grid-cols-2 text-gray-600 w-full">
            <div className="text-left">Info Registration PCR/Rapid</div>
            <div className="text-right">Updated 07/06/2022</div>
          </div>
        </div>
        <div className="border my-4 px-4 mx-4 md:mx-2 py-4 flex items-center space-x-4">
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
        <div className="mx-auto px-4">
          <a href={pdfFile} without rel="noopener noreferrer" target="_blank">
            <button
              className="bg-sky-500 hover:bg-sky-600 w-[100px] rounded-lg font-bold mx-auto text-white md:text-md text-[18px]"
              trailingIcon="picture_as_pdf"
              label="Resume"
            >
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pcrinfo;

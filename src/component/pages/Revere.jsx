import React, { useState, useRef } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import Loading from "../Loading";

const Revere = () => {
  const [startDate, setStartDate] = useState(null);
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Mulai animasi loading

    emailjs
      .sendForm(
        "service_fdmgskw",
        "template_80owhqr",
        form.current,
        "Rekb5tE1Txv5PWTdu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification("Email sent successfully");

          form.current.reset();
          setLoading(false); // Berhenti animasi loading setelah selesai

          setTimeout(() => {
            setNotification(null);
          }, 3000); // Hide notification after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setNotification("Email could not be sent");
          setLoading(false); // Berhenti animasi loading jika terjadi kesalahan
        }
      );
  };
  return (
    <div className="w-full">
      {loading && <Loading />}
      {/* <Loading /> */}
      {/* Tampilkan animasi loading jika loading === true */}
      <div className="w-full py-8 mx-auto bg-sky-500">
        <div className="max-w-[1080px] mx-auto my-4 px-8 py-2 items-center font-bold sm:text-lg md:text-3xl text-xl text-left text-white">
          <h1>BOOK AN APPOINTMENT</h1>
          <p className="text-sm py-5 max-w-lg">Kyoai Medical Services</p>
        </div>
      </div>
      <div className="w-full flex justify-center mx-auto py-5 bg-white">
        <div className="w-[1080px] md:mx-2 mx-4 py-2 bg-white">
          <div className="my-4 px-6 mx-2 block items-center space-x-4 text-sm">
            {notification && (
              <div className="text-green-500">
                {" "}
                <div
                  id="alert-border-3"
                  className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                  role="alert"
                >
                  <div className="ml-3 text-sm font-medium">{notification}</div>
                </div>
                {notification}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                  placeholder=""
                  required
                  name="user_email"
                />
              </div>
              <div className="w-full block md:flex md:flex-cols-3 gap-6">
                <div className="mb-6 md:w-1/2">
                  <label
                    htmlFor="name"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                    placeholder=""
                    required
                    name="user_name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="dob"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tanggal Lahir
                  </label>
                  <Datepicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    id="dob"
                    name="dob"
                    className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                    placeholderText=""
                    showYearDropdown={true}
                    yearDropdownItemNumber={10} // Tentukan jumlah tahun yang ditampilkan
                    scrollableYearDropdown={true} // Aktifkan scroll pada dropdown tahun
                  />
                </div>
                <div className="mb-6 md:w-1/2">
                  <label
                    htmlFor="notelp"
                    className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    id="notelp"
                    className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                    placeholder=""
                    required
                    name="notelp"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Company"
                  className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company/Personal
                </label>
                <input
                  type="Company"
                  id="Company"
                  className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                  placeholder="PT ABC etc"
                  required
                  name="company"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="services"
                  className="bg-transparent border-b border-gray-300 text-gray-900 text-sm w-full outline-none"
                  name="services"
                >
                  <option value="" selected disabled>
                    Choose a services
                  </option>
                  <option value="MCU">Medical Checkup</option>
                  <option value="Dental">Dental</option>
                  <option value="Doctor">Doctor Consult</option>
                  <option value="Lab">Lab</option>
                  <option value="Pharmacy">Pharmacy</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                value="Send"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revere;

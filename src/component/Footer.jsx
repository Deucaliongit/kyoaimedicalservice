import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-[1240] mx-auto mt-10 py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-sky-500">
      <div className="px-2">
        <h1 className="w-full text-2xl md:text-xl font-bold text-white">
          Kyoai Medical Services
        </h1>
        <p className="py-2">
          皆様に心からのサービスを提供します。詳細についてはすぐに予約してください
        </p>
        <div className="flex md:w-[75%] gap-8 my-6">
          <BsFacebook size={20} />
          <BsInstagram size={20} />
          <BsTwitter size={20} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between text-sm md:text-lg px-2">
        <div>
          <h6 className="font-bold text-white">Our Services</h6>
          <ul>
            <li>
              <Link to="/" className="py-2 text-sm hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 text-sm hover:text-white">
                Treatment
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 text-sm hover:text-white">
                PCR
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 text-sm hover:text-white">
                Dental
              </Link>
            </li>
            <li>
              <Link to="/" className="py-2 text-sm hover:text-white">
                Medical Checkup
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white">Location</h6>
          <ul>
            <li>
              <Link to="/jakarta" className="py-2 text-sm hover:text-white">
                Jakarta
              </Link>
            </li>
            <li>
              <Link to="/bali" className="py-2 text-sm hover:text-white">
                Bali
              </Link>
            </li>
            <li>
              <Link to="/summitmas" className="py-2 text-sm hover:text-white">
                Summitmas
              </Link>
            </li>
            <li>
              <Link to="/deltamas" className="py-2 text-sm hover:text-white">
                Delta Mas
              </Link>
            </li>
            <li>
              <Link to="/axia" className="py-2 text-sm hover:text-white">
                Axia
              </Link>
            </li>
            <li>
              <Link to="/kiic" className="py-2 text-sm hover:text-white">
                Karawang (KIIC)
              </Link>
            </li>
            <li>
              <Link to="/suryacipta" className="py-2 text-sm hover:text-white">
                Karawang (suryacipta)
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white">Facilities</h6>
          <ul>
            <li className="py-2 text-sm">MCU</li>
            <li className="py-2 text-sm">Dental Clinic</li>
            <li className="py-2 text-sm">Pharmacy</li>
            <li className="py-2 text-sm">Laboratorium</li>
          </ul>
        </div>
        {/* <div>
          <h6 className="font-bold text-white">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Vision</li>
            <li className="py-2 text-sm">Mission</li>
            <li className="py-2 text-sm">News</li>
          </ul>
        </div> */}
      </div>
      <div className="lg:col-span-3 md:col-span-3">
        <h1 className="text-sm text-center">
          ©2023 Kyoai Medical Services. All Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;

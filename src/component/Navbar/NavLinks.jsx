import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((links, id) => (
        <div key={id}>
          <div key={id} className="px-4 text-left md:cursor-pointer group">
            <h1
              className="font-semibold text-slate-800 font-sans uppercase py-4 flex justify-between items-center md:pr-0 pr-5 hover:text-sky-500"
              onClick={() =>
                heading !== links.name ? setHeading(links.name) : setHeading("")
              }
            >
              <div className="block text-center justify-center">
                {links.name}
                <p className="text-slate-700 px-2 text-xs hover:text-sky-500">
                  {links.jp}
                </p>
              </div>
              <span className="text-sm md:mt-1 md:ml-2 inline">
                <ion-icon
                  name={`${
                    heading === links.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </h1>

            {links.submenu && (
              <div>
                <div className="absolute top-15 hidden group-hover:md:block hover:md:block shadow-lg font-sans text-slate-800">
                  <div className="bg-white p-3 rounded-sm shadow-sm">
                    {links.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <li className="font-semibold text-sm text-gray-600 my-2.5 hover:text-sky-500">
                          <Link to={mysublinks.link}>{mysublinks.Head}</Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*Mobile View*/}

          <div
            className={`
          ${heading === links.name ? "md:hidden" : "hidden"}
          `}
          >
            {links.sublinks.map((slinks, index) => (
              <div key={index}>
                <li className="bg-gray-100 py-4 pl-7 md:pr-0 pr-5">
                  <Link to={slinks.link}>{slinks.Head}</Link>
                </li>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

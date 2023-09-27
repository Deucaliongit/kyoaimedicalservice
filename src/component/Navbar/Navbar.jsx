import React from "react";
import { useState, useEffect, useRef } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <nav className="bg-white sticky top-0 shadow-md z-50">
      <div
        className="flex items-center font-medium justify-around"
        ref={menuRef}
      >
        <div className="z-50 p-3 md:w-auto w-full bg-white flex justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="px-2 md:cursor-pointer w-[90px] md:w-[130px] md:h-[62px]"
          />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-1 md:text-sm font-[Poppins]">
          <li className="block justify-center text-center">
            <Link
              to="/"
              className="font-sans text-slate-800 py-4 px-2 inline-block font-semibold"
            >
              HOME
              <p className="px-2 text-xs">ホーム</p>
            </Link>
          </li>
          <NavLinks />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-[60%] top-0 overflow-y-auto bottom-0 py-20
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link
              to="/"
              className="py-3 px-4 inline-block font-semibold"
              onClick={() => setOpen(!open)}
            >
              HOME
            </Link>
          </li>
          <NavLinks onClick={() => setOpen(!open)} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";
import React, { useState } from "react";
const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <>
      <nav className="bg-gray-700 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <a href="/" className=" text-red-400 text-3xl  lg:text-5xl ">
                  M.Anees
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-5 lg:space-x-20">
                <a
                  href="/"
                  className="text-white lg:text-3xl  md:text-xl hover:underline decoration-[#2AD87F] hover:text-red-400 hover:text-balance  "
                >
                  Home
                </a>
                <a
                  href="#About"
                  className="text-white lg:text-3xl  md:text-xl hover:underline decoration-[#2AD87F] hover:text-red-400 hover:text-balance "
                >
                  About
                </a>
                <a
                  href="#Contact"
                  className="text-white lg:text-3xl  md:text-xl hover:underline decoration-[#2AD87F] hover:text-red-400 hover:text-balance "
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden flrx items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white
                hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-red-400 block hover:bg-[#2AD87F] hover:text-balance rounded-sm p2"
              >
                Home
              </a>
              <a
                href="#About"
                className="text-red-400 block  hover:bg-[#2AD87F] hover:text-balance rounded-sm p2"
              >
                About
              </a>
              <a
                href="#Contact"
                className="text-red-400 block hover:bg-[#2AD87F] hover:text-balance rounded-sm p2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
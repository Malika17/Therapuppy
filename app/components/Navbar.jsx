"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="bg-transparent relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className=" font-title text-[#e33529] text-xl font-light"
              >
                THERAPUPPY
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="font-[400] font-title ml-4 flex items-center space-x-4">
              <Link
                href="/About"
                className=" font-title text-[#e33529] block rounded-md p-2"
              >
                ABOUT US
              </Link>
              <Link
                href="/Donation"
                className="leading-tight font-title tracking-tight text-[#e33529] block rounded-md p-2"
              >
                DONATE
              </Link>

              <Link
                href="/Contact"
                className="leading-tight font-title tracking-tight text-[#e33529] block rounded-md p-2"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 7h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 7h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    fill="#e33529"
                  />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 8h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 7h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 7h24a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    fill="#e33529"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="leading-tight font-[600] text-5xl flex flex-col justify-center md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/About"
            className="mx-auto duration-700 hover:text-6xl font-title tracking-tight text-[#e33529] block rounded-md p-2"
          >
            ABOUT US
          </Link>
          <Link
            href="/Donation"
            className="mx-auto duration-700 hover:text-6xl font-title tracking-tight text-[#e33529] block rounded-md p-2"
          >
            DONATE
          </Link>
          <Link
            href="/Adoption"
            className="mx-auto duration-700 hover:text-6xl font-title tracking-tight text-[#e33529] block rounded-md p-2"
          >
            ADOPT
          </Link>
          <Link
            href="/Contact"
            className="mx-auto duration-700 hover:text-6xl font-title tracking-tight text-[#e33529] block rounded-md p-2"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

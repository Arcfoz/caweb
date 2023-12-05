"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import RegistrationButton from "./ui/registration-button";

const slot = 1;

const NavHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    background: `#f4f4f4`,
    boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
  };
  const handleDaftarClick = () => {
    if (slot == 1) {
      // Allow registration if there are available slots
      window.open("https://bit.ly/CYBERACADEMY2324", "_blank");
    } else {
      // Show a pop-up notification if the maximum limit is reached
      window.location.href = "/fullform";
    }
  };

  return (
    <>
      <div className="navbar md:h-20" style={navbarStyle}>
        <div className="navbar-start md:ml-2 lg:ml-5 ">
          <div className="hidden lg:flex flex-row items-center">
            <a
              className="font-viga font-bold mt-1 text-[22px] xl:text-[28px]"
              style={{ color: "#ba2025" }}
              href="/"
              rel="noopener noreferrer"
            >
              CYBER ACADEMY
            </a>
          </div>
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost drawer-button -ml-2 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:hidden"
                  style={{ color: "#231f20" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block h-9 w-9"
                  style={{ color: "#231f20" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul
                className="menu p-4 space-y-3 w-52 min-h-full text-base-content md:w-80 md:space-y-5"
                style={{
                  background: "#f4f4f4",
                  color: "#231f20",
                }}
              >
                {/* Sidebar content here */}
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <a
                    onClick={handleDaftarClick}
                    style={{
                      fontSmooth: "true",
                      offset: "-100",
                      animationDuration: "500",
                    }}
                  >
                    Register
                  </a>
                </li>
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <ScrollLink
                    to="about"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>About</button>
                  </ScrollLink>
                </li>
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <ScrollLink
                    to="benefit"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Benefit</button>
                  </ScrollLink>
                </li>
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <ScrollLink
                    to="course"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Course</button>
                  </ScrollLink>
                </li>
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px] md:hidden">
                  <ScrollLink
                    to="daftar"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Requirement</button>
                  </ScrollLink>
                </li>
                <li className="hidden md:block font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <ScrollLink
                    to="skberkas"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Requirement</button>
                  </ScrollLink>
                </li>
                <li className="font-plus-jakarta-sans font-semibold text-[17px] md:text-[21px]">
                  <ScrollLink
                    to="partner"
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button>Media Partner</button>
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a
            className="text-[23px] font-viga font-bold md:text-[28px] lg:hidden"
            style={{ color: "#ba2025" }}
            href="/"
            rel="noopener noreferrer"
          >
            CYBER ACADEMY
          </a>
          <div
            className="hidden lg:block items-center justify-end -mt-[1px] text-[17px] lg:text-[20px]"
            style={{ color: "#231f20" }}
          >
            <ul className="flex space-x-6">
              <li className="font-plus-jakarta-sans font-semibold text-[19px] xl:text-[21px]">
                <ScrollLink
                  to="about"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>About</button>
                </ScrollLink>
              </li>
              <li className="font-plus-jakarta-sans font-semibold text-[19px] xl:text-[21px]">
                <ScrollLink
                  to="benefit"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Benefit</button>
                </ScrollLink>
              </li>
              <li className="font-plus-jakarta-sans font-semibold text-[19px] xl:text-[21px]">
                <ScrollLink
                  to="course"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Course</button>
                </ScrollLink>
              </li>
              <li className="font-plus-jakarta-sans font-semibold text-[19px] xl:text-[21px]">
                <ScrollLink
                  to="skberkas"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Requirement</button>
                </ScrollLink>
              </li>
              <li className="font-plus-jakarta-sans font-semibold text-[19px] xl:text-[21px]">
                <ScrollLink
                  to="partner"
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <button>Media Partner</button>
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="navbar-end md:mr-0 lg:mr-5 "
          style={{ color: "#231f20" }}
        >
          <div className="hidden lg:block lg:scale-90 xl:scale-100">
            <RegistrationButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavHome;

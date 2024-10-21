"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.svg";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [mob, setMob] = useState(false);

  return (
    <>
      {/* Header start */}
      <header
        id="home"
        className="z-50 text-gray-400 bg-transparent top-0 body-font w-full h-24 flex justify-between items-center"
        style={{
          position: "fixed",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-column justify-between items-center">
          <a
            href="#home"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <Image
              src={logo}
              alt="logo"
              className="w-36 object-cover cursor-pointer"
            />
          </a>
          <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex">
            {/* Desktop Nav */}
            <div className="menu-items hidden md:flex justify-center items-center">
              <Link
                passHref
                href="/"
                className={
                  pathname === "/"
                    ? "mr-5 cursor-pointer hover:text-white text-white"
                    : "mr-5 cursor-pointer hover:text-white"
                }
              >
                Home
              </Link>
              <Link
                passHref
                href="/about"
                className={
                  pathname === "/about"
                    ? "mr-5 cursor-pointer hover:text-white text-white"
                    : "mr-5 cursor-pointer hover:text-white"
                }
              >
                About
              </Link>
              <Link
                passHref
                href="/event"
                className={
                  pathname === "/event"
                    ? "mr-5 cursor-pointer hover:text-white text-white"
                    : "mr-5 cursor-pointer hover:text-white"
                }
              >
                Events
              </Link>
              <Link
                passHref
                href="/resources"
                className={
                  pathname === "/resources"
                    ? "mr-5 cursor-pointer hover:text-white text-white"
                    : "mr-5 cursor-pointer hover:text-white"
                }
              >
                Resources
              </Link>
              <Link passHref href="/contact">
                <button
                  className="contact-btn h-10 mr-2 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange text-rose-50  focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
                  style={{ transitionDuration: "0.5s" }}
                >
                  Contact Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="md:hidden z-50">
              <button
                className="text-xl"
                onClick={() => {
                  setMob(!mob);
                }}
              >
                <i className={mob ? "ri-close-line" : "ri-menu-line"}></i>
              </button>
            </div>
          </nav>
          {/* Mobile Nav */}
          {mob && (
            <div className={"md:hidden fixed top-0 left-0 z-40 h-screen w-full bg-xounity-blue"}>
              <div className="h-full w-full flex flex-col items-center justify-evenly">
                <Link
                  passHref
                  href="/"
                  onClick={()=>{setMob(!mob);}}
                  className={
                    pathname === "/"
                      ? "mr-5 cursor-pointer text-white"
                      : "mr-5 cursor-pointer"
                  }
                >
                  Home
                </Link>
                <Link
                  passHref
                  href="/about"
                  onClick={()=>{setMob(!mob);}}
                  className={
                    pathname === "/about"
                      ? "mr-5 cursor-pointer text-white"
                      : "mr-5 cursor-pointer"
                  }
                >
                  About
                </Link>
                <Link
                  passHref
                  href="/event"
                  onClick={()=>{setMob(!mob);}}
                  className={
                    pathname === "/event"
                      ? "mr-5 cursor-pointer text-white"
                      : "mr-5 cursor-pointer"
                  }
                >
                  Events
                </Link>
                <Link
                  passHref
                  href="/resources"
                  onClick={()=>{setMob(!mob);}}
                  className={
                    pathname === "/resources"
                      ? "mr-5 cursor-pointer text-white"
                      : "mr-5 cursor-pointer"
                  }
                >
                  Resources
                </Link>
                <Link
                  passHref
                  href="/contact"
                  onClick={()=>{setMob(!mob);}}
                  className="contact-btn h-10 mr-2 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange text-rose-50  focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
                  style={{ transitionDuration: "0.5s" }}
                >
                  Contact Us
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Header end */}
      {/* Goto Top button */}
      <a href="#home" id="myBtn" title="Go to Top">
        <i className="fa fa-angle-up" />
      </a>
      {/* home section */}
    </>
  );
};

export default Header;

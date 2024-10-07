import React, { useState } from "react";
import logo from "../images/logo.svg";

export const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header className="w-full h-[15%] bg-gray-950 text-white flex justify-between items-center p-4">
      <img className="w-[20%] md:w-[10%]" src={logo} alt="logo" />
      <div className="hamburger md:hidden text-2xl" onClick={toggleMobileMenu}>
        <i className="ri-menu-line"></i>
      </div>
      <div id="desktop" className="hidden md:flex">
        <ul className="flex gap-9">
          <li className="text-lg font-medium">
            <a href="/">Home</a>
          </li>
          <li className="text-lg font-medium">
            <a href="/about">About Us</a>
          </li>
          <li className="text-lg font-medium">
            <a href="/event">Events</a>
          </li>
          <li className="text-lg font-medium">
            <a href="/res">Resources</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-orange-500 text-black font-semibold rounded-md left-1/2">
          <a href="/link">Join Us</a>
        </button>
      </div>
      {isMobileMenuVisible && (
        <div
          id="mobile"
          className="md:hidden absolute top-[15%] left-0 w-full bg-gray-950 text-white">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="text-lg font-medium">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-medium">
              <a href="/about">About Us</a>
            </li>
            <li className="text-lg font-medium">
              <a href="/event">Events</a>
            </li>
            <li className="text-lg font-medium">
              <a href="/res">Resources</a>
            </li>
          </ul>
          <div className="flex justify-center p-5">
            <button className="px-4 py-2 bg-orange-500 text-black font-semibold rounded-md left-1/2">
              <a href="/link">Join Us</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

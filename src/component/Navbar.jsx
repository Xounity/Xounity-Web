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
    <header className="w-full h-[15%] bg-transparent backdrop-blur-md text-white flex justify-between items-center p-4">
      <img className="w-[28%] md:w-[12%]" src={logo} alt="logo" />
      <div className="hamburger md:hidden text-2xl" onClick={toggleMobileMenu}>
        <i className="ri-menu-line"></i>
      </div>
      <div id="desktop" className="hidden md:flex gap-5">
        <ul className="flex items-center gap-9">
          <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
            <a href="/">Home</a>
          </li>
          <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
            <a href="/about">About Us</a>
          </li>
          <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
            <a href="/event">Events</a>
          </li>
          <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
            <a href="/res">Resources</a>
          </li>
        </ul>
        <button className="px-4 py-2 bg-xounity-orange text-black font-semibold rounded-md left-1/2 ease-in-out duration-500 hover:bg-yellow-400 hover:text-white">
          <a href="https://www.whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y" target="_blank" rel="noreferrer">Join Us</a>
        </button>
      </div>
      {isMobileMenuVisible && (
        <div
          id="mobile"
          className="md:hidden absolute top-[15%] left-0 w-full bg-xounity-blue text-white">
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
              <a href="/">Home</a>
            </li>
            <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
              <a href="/about">About Us</a>
            </li>
            <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
              <a href="/event">Events</a>
            </li>
            <li className="text-md font-light ease-in-out duration-500 hover:text-xounity-orange">
              <a href="/res">Resources</a>
            </li>
          </ul>
          <div className="flex justify-center p-5">
            <button className="px-4 py-2 bg-xounity-orange text-black font-semibold rounded-md left-1/2 ease-in-out duration-500 hover:bg-yellow-400 hover:text-white">
              <a href="https://www.whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y" target="_blank" rel="noreferrer">Join Us</a>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

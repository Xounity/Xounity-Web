import React, { useState } from 'react';
import logo from "../images/logo.svg";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
      <header className="w-screen h-28 bg-transparent backdrop-blur-md text-white flex justify-between items-center p-5 flex-nowrap border border-gray-600 border-b-[1px] border-t-0 border-r-0 border-l-0 sticky top-0 z-50">
        <a className="w-2/3 md:w-[20%]" href="/">
          <img className="w-[50%]" src={logo} alt="Logo" />
        </a>
        <div className="hamburger md:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className="ri-menu-line"></i>
        </div>
        <div id="desktop" className="hidden md:flex gap-5 items-center">
          <ul className="flex gap-9">
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500">
              <a href="/about">About</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500">
              <a href="/events">Events</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500">
              <a href="/resources">Resources</a>
            </li>
          </ul>
          <div>
            <button className='border-2 border-xounity-orange px-5 py-2 rounded-md font-medium text-white ease-in-out duration-700 hover:bg-xounity-orange'>
              <a href='https://www.whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y'>Join Us</a>
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuVisible && (
        <div id="mobile" className="md:hidden fixed inset-0 bg-transparent backdrop-blur-lg text-white flex flex-col items-center justify-center z-50">
          <div className="absolute top-5 right-5 text-2xl" onClick={toggleMobileMenu}>
            <i className="ri-close-line"></i>
          </div>
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500 underline underline-offset-2 decoration-xounity-orange">
              <a href="/">Home</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500 underline underline-offset-2 decoration-xounity-orange">
              <a href="/about">About</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500 underline underline-offset-2 decoration-xounity-orange">
              <a href="/events">Events</a>
            </li>
            <li className="text-lg font-medium text-white hover:text-xounity-orange ease-in-out duration-500 underline underline-offset-2 decoration-xounity-orange">
              <a href="/resources">Resources</a>
            </li>
          </ul>
          <div>
            <button className='border-2 border-xounity-orange px-5 py-2 rounded-md font-medium text-white ease-in-out duration-700 hover:bg-xounity-orange'>
              <a href='https://www.whatsapp.com/channel/0029VaYhJmD9cDDVJLuqao0Y'>Join Us</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
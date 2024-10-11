import React, { useState } from 'react';
import logo from "images/logo.svg";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <>
  {/* Header start */}
  <header
    id="home"
    className="text-gray-400 bg-transparent top-0 body-font w-full h-24 flex justify-between items-center"
    style={{
      position: "fixed",
      zIndex: 1000,
      backdropFilter: "blur(5px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
    }}
  >
    <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-column justify-between items-center">
      <a
        href="#home"
        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
      >
        <img
          src={logo}
          alt="logo"
          className="w-36 object-cover cursor-pointer"
        />
      </a>
      <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex ">
        
        {/* Desktop Nav */}
        <div className="menu-items hidden md:flex justify-center items-center">
          <a
            href="#home"
            className="mr-5 cursor-pointer nav-link active hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="mr-5 cursor-pointer nav-link hover:text-white"
          >
            About
          </a>
          <a
            href="events.html"
            className="mr-5 cursor-pointer nav-link hover:text-white"
          >
            Events
          </a>
          <a
            href="resources.html"
            className="mr-5 cursor-pointer nav-link hover:text-white"
          >
            Resources
          </a>
          <a href="#contact">
            <button
              className="contact-btn h-10 mr-2 inline-flex items-center border-solid border-xounity-orange border-2 text-rose-50  focus:outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
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
          </a>
        </div>
      </nav>
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

export default Navbar;
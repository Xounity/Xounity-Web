"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from "@/app/images/logo.svg"
import Link from 'next/link'


const Header = () => {

  const pathname = usePathname();

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
      <Image
        src={logo}
        alt="logo"
        className="w-36 object-cover cursor-pointer"
      />
    </a>
    <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex">
      
      {/* Desktop Nav */}
      <div className="menu-items hidden md:flex justify-center items-center">
        <Link passHref
          href="/"
          className={pathname === '/' ? "mr-5 cursor-pointer hover:text-white text-white" : "mr-5 cursor-pointer hover:text-white"}
        >
          Home
        </Link>
        <Link passHref
          href="/About"
          className={pathname === '/About' ? "mr-5 cursor-pointer hover:text-white text-white" : "mr-5 cursor-pointer hover:text-white"}
        >
          About
        </Link>
        <Link passHref
          href="/Events"
          className={pathname === '/Events' ? "mr-5 cursor-pointer hover:text-white text-white" : "mr-5 cursor-pointer hover:text-white"}
        >
          Events
        </Link>
        <Link passHref
          href="/Resources"
          className={pathname === '/Resources' ? "mr-5 cursor-pointer hover:text-white text-white" : "mr-5 cursor-pointer hover:text-white"}
        >
          Resources
        </Link>
        <Link passHref href="/Contact">
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
  )
}

export default Header
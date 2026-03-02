"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import darklogo from "@/app/images/logo_dark.webp";
import lightlogo from "@/app/images/logo_light.webp";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mob, setMob] = useState(false);

  // scroll lock
  useEffect(() => {
    if (mob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mob]);

  const getLinkClass = (path: string) => {
    const baseClass =
      "mr-5 cursor-pointer transition-colors duration-300 hover:text-xounity-orange text-lg md:text-base";
    return pathname === path ? baseClass : `${baseClass} text-gray-400`;
  };

  return (
    <>
      <header
        className="z-50 bg-transparent top-0 body-font w-full h-24 flex justify-between items-center"
        style={{
          position: "fixed",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-column justify-between items-center">
          <Link href="#" className="flex items-center">
            <Image
              src={lightlogo}
              alt="logo"
              className="logo-light w-28 md:w-32 h-20 object-cover"
            />
            <Image
              src={darklogo}
              alt="logo"
              className="logo-dark w-28 md:w-32 h-20 object-cover"
            />
          </Link>
          <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex">
            <div className="menu-items hidden md:flex justify-center items-center">
              <Link passHref href="/" className={getLinkClass("/")}>
                Home
              </Link>
              <Link passHref href="/about" className={getLinkClass("/about")}>
                About
              </Link>
              <Link passHref href="/event" className={getLinkClass("/event")}>
                Events
              </Link>
              <Link
                passHref
                href="/contact"
                className={getLinkClass("/contact")}
              >
                Contact
              </Link>
            </div>

            <button
              className="ml-2 mr-5 md:mr-0 cursor-pointer p-2"
              onClick={toggleTheme}
              title="Toggle theme"
            >
              <i
                className={
                  theme === "light"
                    ? "ri-moon-fill text-black"
                    : "ri-sun-fill text-white"
                }
              ></i>
            </button>

            {/* HAMBURGER OPEN BUTTON */}
            <div className="md:hidden z-50">
              <button
                className="text-2xl p-4 -mr-4 cursor-pointer" // BIGGER TOUCH AREA
                onClick={() => setMob(true)}
                title="Open menu"
              >
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {mob && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={
                  theme === "light"
                    ? "bg-background-light md:hidden fixed top-0 left-0 z-60 h-screen w-full"
                    : "bg-background-dark md:hidden fixed top-0 left-0 z-60 h-screen w-full"
                }
              >
                <div className="absolute top-5 right-5">
                  <button
                    className="text-3xl p-6 cursor-pointer"
                    onClick={() => setMob(false)}
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>

                <div className="h-full w-full flex flex-col items-center justify-evenly py-20">
                  <Link
                    passHref
                    href="/"
                    onClick={() => setMob(false)}
                    className={getLinkClass("/")}
                  >
                    Home
                  </Link>
                  <Link
                    passHref
                    href="/about"
                    onClick={() => setMob(false)}
                    className={getLinkClass("/about")}
                  >
                    About
                  </Link>
                  <Link
                    passHref
                    href="/event"
                    onClick={() => setMob(false)}
                    className={getLinkClass("/event")}
                  >
                    Events
                  </Link>
                  <Link
                    passHref
                    href="/contact"
                    onClick={() => setMob(false)}
                    className={getLinkClass("/contact")}
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;

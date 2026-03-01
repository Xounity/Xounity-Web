"use client";
import React, { useState } from "react";
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
          <div>
            <Image
              src={theme === "dark" ? darklogo : lightlogo}
              alt="logo"
              className="w-28 md:w-32 h-20 object-cover"
            />
          </div>
          <nav className="md:ml-auto flex-wrap flex items-center text-base justify-center menu-items md:flex">
            {/* Desktop Nav */}
            <div className="menu-items hidden md:flex justify-center items-center">
              <Link
                passHref
                href="/"
                className={
                  pathname === "/"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Home
              </Link>
              <Link
                passHref
                href="/about"
                className={
                  pathname === "/about"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                About
              </Link>
              <Link
                passHref
                href="/event"
                className={
                  pathname === "/event"
                    ? "mr-5 cursor-pointer "
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Events
              </Link>
              <Link
                passHref
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "mr-5 cursor-pointer"
                    : "mr-5 cursor-pointer text-gray-400"
                }
              >
                Contact
              </Link>
            </div>

            <button
              className="ml-2 mr-5 md:mr-0"
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

            <div className="md:hidden z-50">
              <button
                className="text-xl"
                onClick={() => setMob(!mob)}
                title={mob ? "Close menu" : "Open menu"}
              >
                <i className={mob ? "ri-close-line" : "ri-menu-line"}></i>
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {/* Mobile Nav */}
            {mob && (
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: 0 }}
                exit={{ left: "-100%" }}
                transition={{ duration: 0.2 }}
                className={
                  theme === "light"
                    ? "bg-[var(--background-light)] md:hidden fixed top-0 left-0 z-40 h-screen w-full"
                    : "bg-[var(--background-dark)] md:hidden fixed top-0 left-0 z-40 h-screen w-full"
                }
              >
                <div className="h-full w-full flex flex-col items-center justify-evenly">
                  <Link
                    passHref
                    href="/"
                    onClick={() => setMob(!mob)}
                    className={
                      pathname === "/"
                        ? "mr-5 cursor-pointer"
                        : "mr-5 cursor-pointer text-gray-400"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    passHref
                    href="/about"
                    onClick={() => setMob(!mob)}
                    className={
                      pathname === "/about"
                        ? "mr-5 cursor-pointer"
                        : "mr-5 cursor-pointer text-gray-400"
                    }
                  >
                    About
                  </Link>
                  <Link
                    passHref
                    href="/event"
                    onClick={() => setMob(!mob)}
                    className={
                      pathname === "/event"
                        ? "mr-5 cursor-pointer"
                        : "mr-5 cursor-pointer text-gray-400"
                    }
                  >
                    Events
                  </Link>
                  <Link
                    passHref
                    href="/contact"
                    onClick={() => setMob(!mob)}
                    className={
                      pathname === "/contact"
                        ? "mr-5 cursor-pointer"
                        : "mr-5 cursor-pointer text-gray-400"
                    }
                  >
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <Link href="#home" target="_self" id="myBtn" title="Go to Top">
        <i className="fa fa-angle-up" />
      </Link>
    </>
  );
};

export default Header;

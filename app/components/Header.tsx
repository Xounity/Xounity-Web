"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import darklogo from "@/app/images/logo_dark.webp";
import lightlogo from "@/app/images/logo_light.webp";
import Link from "next/link";
import { useTheme } from "../ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mob, setMob] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {/* Header start */}
      <header
        className="z-50 bg-transparent top-0 body-font w-full h-24 flex justify-between items-center"
        style={{
          position: "fixed",
          backdropFilter: "blur(5px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-column justify-between items-center">
          {/* <Link
            href="/"
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            title="Home"
          > */}
          <Image
            src={theme === "dark" ? darklogo : lightlogo}
            alt="logo"
            className="w-36 h-20 object-cover"
          />
          {/* </Link> */}
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
              {session ? (
                <details className="flex flex-col items-center justify-center relative">
                  <summary className="cursor-pointer">
                    {session.user?.name}
                  </summary>
                  <ul className="border border-xounity-orange overflow-hidden text-center rounded-md absolute top-[100%] left-[50%] translate-x-[-50%]">
                    <li className="hover:bg-xounity-orange p-1 cursor-pointer border-b-2 border-b-xounity-orange">
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li
                      onClick={() => {
                        signOut({ redirect: false, callbackUrl: "/" });
                      }}
                      className="hover:bg-xounity-orange p-1 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </details>
              ) : (
                <div className="relative pb-1 w-[100%]">
                  <Link href="/signin">
                    <button
                      className="join-btn tracking-wider h-10 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange outline-none hover:bg-transparent py-1 px-3 rounded text-base mt-4 md:mt-0"
                      style={{ transitionDuration: "0.5s" }}
                    >
                      Sign In
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
              )}
            </div>

            {session ? (
              <details className="flex flex-col items-center ml-2 mr-2 md:hidden justify-center relative">
                <summary className="cursor-pointer">
                  {session.user?.name}
                </summary>
                <ul className="border border-xounity-orange overflow-hidden text-center rounded-md absolute top-[100%] left-[50%] translate-x-[-50%]">
                  <li className="hover:bg-xounity-orange p-1 cursor-pointer border-b-2 border-b-xounity-orange">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li
                    onClick={() => {
                      signOut({ redirect: false, callbackUrl: "/" });
                    }}
                    className="hover:bg-xounity-orange p-1 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </details>
            ) : (
              <div className="relative ml-2 mr-2 md:hidden">
                <Link href="/signin">
                  <button
                    className="join-btn tracking-wider h-10 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange outline-none hover:bg-transparent py-1 px-3 rounded text-base  md:mt-0"
                    style={{ transitionDuration: "0.5s" }}
                  >
                    Sign In
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
            )}

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
                onClick={() => {
                  setMob(!mob);
                }}
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
                    onClick={() => {
                      setMob(!mob);
                    }}
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
                    onClick={() => {
                      setMob(!mob);
                    }}
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
                    onClick={() => {
                      setMob(!mob);
                    }}
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
                    onClick={() => {
                      setMob(!mob);
                    }}
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

      {/* Header end */}
      {/* Goto Top button */}
      <Link href="#home" target="_self" id="myBtn" title="Go to Top">
        <i className="fa fa-angle-up" />
      </Link>
      {/* home section */}
    </>
  );
};

export default Header;

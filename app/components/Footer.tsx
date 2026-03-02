import React from "react";
import darklogo from "@/app/images/logo_dark.webp";
import lightlogo from "@/app/images/logo_light.webp";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="body-font border-t border-gray-800/30">
      <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center"
        >
          <Image
            src={lightlogo}
            alt="logo"
            className="logo-light w-24 object-cover cursor-pointer transition-opacity duration-300"
          />
          <Image
            src={darklogo}
            alt="logo"
            className="logo-dark w-24 object-cover cursor-pointer transition-opacity duration-300"
          />
        </Link>

        <p className="text-xs text-gray-500 sm:ml-4 sm:pl-4 sm:mt-0 mt-2">
          © {currentYear} Xounity —
          <Link
            href="https://linktr.ee/xounity"
            target="_blank"
            className="text-gray-600 ml-1 hover:text-xounity-orange transition-colors duration-300"
            rel="noopener noreferrer"
          >
            @xounity1
          </Link>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://www.facebook.com/xounity1"
            target="_blank"
            className="text-gray-500 hover:text-xounity-orange transition-colors duration-300"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </Link>

          <Link
            href="https://www.instagram.com/xounity1"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-xounity-orange transition-colors duration-300"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/company/xounity"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-xounity-orange transition-colors duration-300"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import mirza from "@/app/images/mirza.webp";
import muhaddis from "@/app/images/Muhaddis-mob.webp";
import ahmed from "@/app/images/Ahmed-mob.webp";
import junaid from "@/app/images/junaid.webp";
import hafeez from "@/app/images/hafeez.webp";
import furqan from "@/app/images/furqan.webp";
import noman from "@/app/images/noman.webp";

const About = () => {
  return (
    <>
      {/* About Desktop */}

      <section id="about" className="body-font hidden md:flex mt-8">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400"
              style={{ transitionDelay: "0.3s" }}
            >
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </div>
          {/* default 200x200 pic */}
          <div className="flex flex-wrap -m-4 justify-center">
            {/* member 1 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={noman}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Noman Ahmed
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Community Lead
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Software Engineer | Flutter | App Developer | SMIU Student
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/nomanpb234/"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/NomanAhmed234"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/itz_nomanahmed"
                      target="_blank"
                      className=" text-xounity-blue socials2 ml-2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 2 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center bg-zinc-300 "
                  src={furqan}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Muhammad Furqan Khalil
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Lead Content Writer
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Web Developer | Freelancer | Creative | Hardworking
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/FurqanHun"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/FurqanHun"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/furqan_hi_hun"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 3 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={ahmed}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Ahmed Zaheer
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Onsite Event Manager
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Good Communication | Confident | Organizer
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/ahmed-zaheer-5564b4282/"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/ahmed-khan033"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/ahmmedkhan03"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 4 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={hafeez}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Hafizullah Khokhar
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Community Manager
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Social | Active | Youtuber | Aesthetic | Photographer
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/hafizullahkhokhar1/"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a href="#" className="ml-2 text-xounity-blue socials2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/hafizullahkhokhar1"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 5 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={muhaddis}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Muhaddis Afzal
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Tech Team Lead
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Front-End Developer | Fast Learner | Problem Solver
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/M-U-H-A-D-D-I-S-bbb65a222/"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/Dantesos33"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/muhaddis004"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 6 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={mirza}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Mirza Zain
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Tech Team
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    MERN Developer | Tech Enthusiast | Motivated
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/mirza-zain269/"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/mirza-zain"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/mirza_zain43"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* member 7 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="image-card flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
                  src={junaid}
                />
                <div className="w-full image-content">
                  <h2 className="title-font font-medium text-lg text-rose-50">
                    Junaid Rashid
                  </h2>
                  <h3 className="text-xounity-blue mb-3 font-medium">
                    Social Media Manager
                  </h3>
                  <p className="mb-4 text-xounity-blue font-medium">
                    Social | Designer | Formal | Well Dressed
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/junaidrashid5955/"
                      target="_blank"
                      className="text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/mirza-zain"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/junaidrashid5955"
                      target="_blank"
                      className="ml-2 text-xounity-blue socials2"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Mobile */}
      <section id="mob-about" className="body-font md:hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Member 1 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={noman}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Noman Ahmed
                  </h2>
                  <h3 className="text-gray-400 mb-3">Community Lead</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/nomanpb234/"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/NomanAhmed234"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/itz_nomanahmed"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 2 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2 bg-zinc-300"
                  src={furqan}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Furqan Khalil
                  </h2>
                  <h3 className="text-gray-400 mb-3">Lead Content Writer</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/FurqanHun"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/FurqanHun"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/furqan_hi_hun"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 3 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={ahmed}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Ahmed Zaheer
                  </h2>
                  <h3 className="text-gray-400 mb-3">Onsite Event Manager</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/ahmed-zaheer-5564b4282/"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/ahmed-khan033"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/ahmmedkhan03"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 4 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={hafeez}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Hafizullah Khokhar
                  </h2>
                  <h3 className="text-gray-400 mb-3">Manager</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/hafizullahkhokhar1/"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a href="#" target="_blank" className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/hafizullahkhokhar1"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 5 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={muhaddis}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Muhaddis Afzal
                  </h2>
                  <h3 className="text-gray-400 mb-3">Tech Team Lead</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/muhaddis-afzal-bbb65a222/"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/Dantesos33"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/muhaddis004"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 6 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={mirza}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">Mirza Zain</h2>
                  <h3 className="text-gray-400 mb-3">Tech Team</h3>
                  <p className="mb-4">Mern Developer | Crazy Tech Enthusiast</p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/mirza-zain269"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/mirza-zain"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/mirza_zain43"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* Member 7 */}
            <div
              className="p-4 lg:w-1/4 md:w-1/2 side"
              style={{ transitionDelay: "0.6s" }}
            >
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
                  src={junaid}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg">
                    Junaid Rashid
                  </h2>
                  <h3 className="text-gray-400 mb-3">Social Media Manager</h3>
                  <p className="mb-4">
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className="inline-flex">
                    {/* linkedin hollow logo */}
                    <a
                      href="https://www.linkedin.com/in/junaidrashid5955"
                      target="_blank"
                      className="text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          stroke="currentColor"
                          fill="none"
                        />
                      </svg>
                    </a>
                    {/* github hollow logo */}
                    <a
                      href="https://github.com/mirza-zain"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.79.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.1-.65.35-1.1.64-1.35-2.24-.25-4.58-1.12-4.58-5.01 0-1.11.39-2.02 1.03-2.73-.1-.25-.45-1.3.1-2.7 0 0 .86-.27 2.82 1.05a9.34 9.34 0 012.48-.34c.84.01 1.69.11 2.48.34 1.96-1.32 2.82-1.05 2.82-1.05.55 1.4.2 2.45.1 2.7.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.01.36.31.68.93.68 1.87l-.01 2.78c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
                      </svg>
                    </a>
                    {/* instagram hollow logo*/}
                    <a
                      href="https://www.instagram.com/junaidrashid5955"
                      target="_blank"
                      className="ml-2 text-gray-500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About end */}
    </>
  );
};

export default About;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Loading from "@/app/loading";
const url = process.env.NEXT_PUBLIC_ROOT_URL + '/api/team';

console.log(url)

interface TeamCardProps {
  name: string;
  image: string;
  description: string;
  title: string;
  linkedinSrc: string;
  githubSrc: string;
  instaSrc: string;
}

export const TeamCard: React.FC = () => {
  const [data, setData] = useState<TeamCardProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        //console.log(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    {data.length > 0 ?
    <div className="flex flex-wrap justify-center">
      {data.map((item, index) => (
        <motion.div
          key={index}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-4 lg:w-1/4 md:w-1/2"
        >
          <div className="image-card flex flex-col items-center text-center">
            <Image
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center"
              src={item.image}
              width={500}
              height={300}
            />
            <div className="w-full image-content">
              <h2 className="title-font font-medium text-lg text-rose-50">
                {item.name}
              </h2>
              <h3 className="text-xounity-blue mb-3 font-medium">
                {item.title}
              </h3>
              <p className="mb-4 text-xounity-blue font-medium">
                {item.description}
              </p>
              <span className="inline-flex">
                <Link
                  href={item.linkedinSrc}
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
                </Link>
                <Link
                  href={item.githubSrc}
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
                </Link>
                <Link
                  href={item.instaSrc}
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
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    : <Loading />
    }
    </>
  );
  
};

export const TeamCardMobile: React.FC = () => {
  const [data, setData] = useState<TeamCardProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        //console.log(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    {data.length > 0 ? 
    <div className="">
      {data.map((item, index) => (
        <motion.div
          key={index}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-4 lg:w-1/4 md:w-1/2"
        >
          <div className="h-full flex flex-col items-center text-center">
            <Image
              loading="lazy"
              alt="team"
              className="flex-shrink-0 rounded-lg w-full h-[60%] object-cover object-center mb-2"
              src={item.image}
              width={500}
              height={300}
            />
            <div className="w-full">
              <h2 className="title-font font-medium text-lg">{item.name}</h2>
              <h3 className="text-gray-400 mb-3">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <span className="inline-flex">
                <Link
                  href={item.linkedinSrc}
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
                </Link>
                <Link
                  href={item.githubSrc}
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
                </Link>
                <Link
                  href={item.instaSrc}
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
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    : <Loading />}
    </>
  );
  
};

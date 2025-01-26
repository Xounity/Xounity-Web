"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Loading from "@/app/loading";
const url = process.env.NEXT_PUBLIC_ROOT_URL + '/api/events';

interface EventItemProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
  watchLink: string;
}

const EventItem: React.FC<EventItemProps> = ({
  href,
  imgSrc,
  title,
  description,
  watchLink,
}) => (
  <div className="p-4 transition-delay-03">
    <Link
      className="rounded-lg overflow-hidden drop-shadow-lg"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <Image
        loading="lazy"
        alt="event"
        className="object-cover object-center max-h-64 w-full cursor-pointer hover:scale-110"
        src={imgSrc}
        width={500}
        height={300}
        style={{ transition: "all 0.5s" }}
      />
    </Link>
    <h2 className="text-xl font-medium title-font mt-5">{title}</h2>
    <p className="text-base font-normal leading-relaxed text-gray-400 mt-2">
      {description}
    </p>
    <Link href={watchLink} target="_blank" rel="noopener noreferrer">
      <button className="text-xounity-orange inline-flex items-center mt-3 hover:text-orange-600 duration-300 ease-in-out font-medium">
        Watch Now
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </Link>
  </div>
);

const Events: React.FC = () => {
  const [data, setData] = useState<EventItemProps[]>([]);
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
      <section className="body-font mt-10">
        {/* Current Events start */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-4">
            <motion.h1
              className="text-center text-3xl font-medium title-font mb-2"
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Recent Events
            </motion.h1>
          </div>
          {data.length > 0 ? (
            <div className="container mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                <motion.div
                  className="flex flex-wrap justify-center"
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {data.map((item) => {
                    return (
                      <EventItem
                        href={item.href}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description}
                        watchLink={item.watchLink}
                        key={item.title}
                      />
                    );
                  })}
                </motion.div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
        {/* Current Events end */}
      </section>
    </>
  );
};

export default Events;

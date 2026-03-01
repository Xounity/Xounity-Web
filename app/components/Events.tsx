"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { eventsData } from "../../data/eventData";

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
  <div className="p-4 md:w-1/3 transition-delay-03">
    <Link
      className="rounded-lg overflow-hidden drop-shadow-lg block"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {/* ASPECT-VIDEO fixes the cropping.
          Standard YT thumbnails are 16:9.
          h-64 was too tall, causing the zoom-in crop.
      */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          loading="lazy"
          alt="event"
          className="object-cover object-center w-full h-full cursor-pointer hover:scale-110"
          src={imgSrc}
          width={500}
          height={300}
          style={{ transition: "all 0.5s" }}
        />
      </div>
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

interface EventsProps {
  limit?: number;
}

const Events: React.FC<EventsProps> = ({ limit }) => {
  const displayedEvents = [...eventsData].reverse();
  const eventsToShow = limit
    ? displayedEvents.slice(0, limit)
    : displayedEvents;

  return (
    <section className="body-font mt-10">
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
        <div className="container mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {eventsToShow.map((item) => (
              <EventItem
                href={item.href}
                imgSrc={item.imgSrc}
                title={item.title}
                description={item.description}
                watchLink={item.watchLink}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

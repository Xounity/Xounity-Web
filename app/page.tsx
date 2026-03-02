import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Event from "@/app/components/Events";
import Hero from "@/app/components/Hero";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="border-gray-800" />

      <Event limit={3} />

      <div className="flex justify-center items-center mb-12">
        <Link passHref href="/event">
          <button
            className="h-10 inline-flex items-center bg-transparent border-solid border-xounity-orange border-2 hover:bg-xounity-orange focus:outline-none cursor-pointer py-1 px-8 rounded text-base transition-all ease-in-out"
            style={{ transitionDuration: "0.5s" }}
          >
            More Events
          </button>
        </Link>
      </div>

      <hr className="border-gray-800" />
      <About />

      <hr className="border-gray-800" />
      <Contact />
    </>
  );
}

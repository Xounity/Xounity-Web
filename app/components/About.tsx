"use client"
import React from "react";
import { TeamCard } from "@/app/components/TeamCard";
import { TeamCardMobile } from "@/app/components/TeamCard";
import { motion } from "motion/react";

const About = () => {

  return (
    <>
      {/* About Desktop */}

      <section id="about" className="body-font hidden md:flex mt-8">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            className="flex flex-col text-center w-full mb-20"
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </motion.div>
          <div className="flex flex-wrap -m-4 justify-center">
            <TeamCard />
          </div>
        </div>
      </section>

      {/* About Mobile */}
      <section id="mob-about" className="body-font md:hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full pt-10 pb-20">
            <h1 className="text-3xl font-medium title-font mb-4">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Get to know the faces shaping Xounity - our team of diverse
              visionaries.
            </p>
          </div>
          <div>
            {/* member 1 */}
            <TeamCardMobile/>
          </div>
        </div>
      </section>
      {/* About end */}
    </>
  );
};

export default About;

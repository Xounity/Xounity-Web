"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Contact = () => {
  // 1. Manage form state
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // We cast to HTMLFormElement so TypeScript doesn't cry about 'currentTarget'
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // The 'as any' is a shortcut because URLSearchParams doesn't
        // strictly map to the FormData type in some TS configs
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-transparent body-font relative mt-8"
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Get in touch via our contact form or drop us an email – we'd love to
            hear from you!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto reveal">
          {/* 3. Handle the onSubmit manually */}
          <form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* HIDDEN INPUTS FOR NETLIFY BOT */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm">
                    Name
                  </label>
                  <input
                    required
                    autoComplete="name"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xo-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm">
                    Email
                  </label>
                  <input
                    required
                    autoComplete="email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xo-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-xo-orange focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="send-btn flex mx-auto border-solid border-2 border-xo-orange py-2 px-8 focus:outline-none rounded text-lg hover:bg-xo-orange transition duration-300"
                >
                  Send
                </button>
              </div>

              {/* Status Message Display */}
              {status === "SUCCESS" && (
                <p className="text-green-500 text-center w-full mt-4">
                  Message sent successfully!
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-red-500 text-center w-full mt-4">
                  Something went wrong. Try again.
                </p>
              )}

              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <Link
                  href="mailto:xounity1@gmail.com"
                  className="text-xo-orange"
                >
                  xounity1@gmail.com
                </Link>
                <p className="leading-normal my-5 text-gray-400">
                  Based in Karachi, Pakistan
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

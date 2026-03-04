import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-transparent body-font relative mt-8 animate-fade-in-up scroll-mt-24"
    >
      <div className="container px-5 py-24 mx-auto">
        {/* Same Heading Position */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4">
            Need help or have any queries?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-400">
            Just drop us a mail and we will get back to you soon. Don't worry, a
            real human will reply to you! :)
          </p>
        </div>

        {/* Centered Email - No Form, No Bloat */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <span className="text-gray-500 uppercase tracking-widest text-xs">
              Mail us at
            </span>
            <Link
              href="mailto:xounity1@gmail.com"
              className="text-2xl md:text-5xl font-bold text-xounity-orange hover:text-white transition-all duration-300 border-b-4 border-xounity-orange/20 hover:border-xounity-orange pb-2"
            >
              xounity1@gmail.com
            </Link>
          </div>

          {/* Additional line REMOVED - Leads directly to Footer now */}

          <div className="p-2 w-full text-center mt-12">
            <p className="leading-normal text-gray-500 text-sm">
              Based in Karachi, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section id="contact" className="bg-transparent body-font relative mt-8">
      <div className="container px-5 py-24 mx-auto h-screen flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl">Access Denied!</h1>
        <Link href="/" className="flex mx-auto border-solid border-2 border-xounity-orange py-2 px-8 focus:outline-none rounded text-lg hover:bg-xounity-orange transition duration-300">
          Go back to Home Page
        </Link>
      </div>
    </section>
  );
};

export default page;

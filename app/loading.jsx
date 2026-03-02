import Image from "next/image";
import React from "react";
import darklogo from "@/app/images/logo_dark.webp";
import lightlogo from "@/app/images/logo_light.webp";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-transparent">
      <Image
        priority
        src={lightlogo}
        alt="loading"
        className="logo-light w-36 object-cover load"
      />
      <Image
        priority
        src={darklogo}
        alt="loading"
        className="logo-dark w-36 object-cover load"
      />
    </div>
  );
};

export default Loading;

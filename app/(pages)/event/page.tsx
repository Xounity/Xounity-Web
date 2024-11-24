"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";
import Events from "../../components/Events";

const EventPage = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(!loading);
    }, 100);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Events />
      </>
    );
  }
};

export default EventPage;

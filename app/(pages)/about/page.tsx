"use client"

import React, { useEffect, useState } from 'react'
import About from '@/app/components/About'
import Loading from '@/app/loading'

const AboutPage = () => {
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
        <About />
      </>
  )
}
}

export default AboutPage
"use client"

import React, { useEffect, useState } from 'react'
import Loading from '@/app/loading'
import Contact from '../../components/Contact'

const ContactPage = () => {
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
    <Contact />
    </>
  )
}
}

export default ContactPage
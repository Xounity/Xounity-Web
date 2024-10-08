import React from 'react'
import { Helmet } from "react-helmet"
import replace from "../images/replacement.jpg"

export const metadata = {
  title: "Xounity - Home"
}


export const Hero = () => {
  return (
    <div className='flex-1'>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
        <div className='flex flex-col md:flex-row justify-center items-center p-5'>
          <div className='w-full md:w-1/2'>
            <img className='w-full md:w-2/3 pb-5 md:p-0' src={replace} alt='logo' />
          </div>
          <div className='w-full md:w-1/2 '>
            <h1 className='text-white font-semibold text-2xl md:text-4xl pb-4 text-center md:text-start mx-0 md:mx-7'>Diverse Minds - One Vision</h1>
            <p className='md:w-3/4 text-center text-white text-sm md:text-lg font-normal'>Join us at Xounity, where diverse minds foster innovation and unite under one vision. Together, we're creating a zone for an inclusive future.</p>
          </div>
        </div>
        
    </div>
  )
}

import React from 'react'
import { Helmet } from "react-helmet"
import logo from "../images/logo.svg"

export const metadata = {
  title: "Xounity - Home"
}


export const Hero = () => {
  return (
    <div className='flex-1'>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>
        <div className='flex'>
          <div className='w-1/2'>
            <h1 className='text-white'>hello</h1>
          </div>
          <div className='w-1/2'>
            <img className='w-[20%]' src={logo} alt='logo' />
          </div>
        </div>
        
    </div>
  )
}

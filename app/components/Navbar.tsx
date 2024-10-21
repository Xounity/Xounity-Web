"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "@/app/images/logo.svg"

const Navbar = () => {
    const [mob, setMob] = useState(false)
    return (
        <>
                        <header className='w-full h-24 p-4 fixed bg-transparent backdrop-blur-md flex justify-between items-center text-gray-400 border border-gray-400 border-t-0 border-b-1 border-l-0 border-r-0 z-50'>
                <a href='/' target='_self' rel='noopener' title='Home'>
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-36 object-cover cursor-pointer"
                    />
                </a>
                <button className='md:hidden text-xl z-50' type='button' onClick={() => setMob(!mob)} title={mob ? 'close' : 'open'}>
                    <i className={mob ? "ri-close-line" : "ri-menu-line"}></i>
                </button>
                <div className='hidden md:flex justify-between items-center gap-8'>
                    <ul className='flex justify-between items-center gap-8'>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/' title='Home'>Home</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/about' title='About'>About</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/event' title='Event'>Event</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/resources' title='Resources'>Resources</a></li>
                    </ul>
                    <a href='/contact' title='Contact'>
                        <button className='text-white px-5 py-1.5 rounded-md border-2 border-xounity-orange hover:bg-xounity-orange ease-in-out duration-700'>Contact <i className="ri-arrow-right-line"></i></button>
                    </a>
                </div>
            </header>
            {mob && (
                <div className='w-full h-full text-white fixed top-0 left-0 bg-xounity-blue backdrop-blur-sm flex flex-col justify-center items-center gap-5 z-40 md:hidden'>
                    <ul className='flex flex-col justify-between items-center gap-5'>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/'>Home</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/about'>About</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/event'>Event</a></li>
                        <li className='text-md hover:text-white ease-in-out duration-500'><a href='/resources'>Resources</a></li>
                    </ul>
                    <a href='/contact'>
                        <button className='text-white px-6 py-2 rounded-md border-2 border-xounity-orange font-medium hover:bg-xounity-orange ease-in-out duration-700'>Contact <i className="ri-arrow-right-line"></i></button>
                    </a>
                </div>
            )}
        </>
    )
}

export default Navbar
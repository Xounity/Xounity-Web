import React from 'react';
import logo from "../images/logo.svg"

export const Footer = () => {
  const year = new Date()
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center bg-xounity-blue p-2 border border-gray-600 border-t-[1px] border-b-0 border-r-0 border-l-0'>
        <a className='flex items-center ' href='/'><img className='w-[100px]' src={logo} alt='logo'/><span className='text-white font-semibold text-md'>| © {year.getFullYear()} Xounity</span></a>
      <div>
        <ul className='flex justify-center items-center text-white gap-5'>
          <li className='ease-in-out duration-700 hover:text-xounity-orange text-2xl'><a href='https://www.instagram.com/xounity1' target='_blank' rel='noreferrer'><i class="ri-instagram-line"></i></a></li>
          <li className='ease-in-out duration-700 hover:text-xounity-orange text-2xl'><a href='https://www.facebook.com/xounity1' target='_blank' rel='noreferrer'><i class="ri-facebook-fill"></i></a></li>
          <li className='ease-in-out duration-700 hover:text-xounity-orange text-2xl'><a href=' https://www.linkedin.com/company/xounity/' target='_blank' rel='noreferrer'><i class="ri-linkedin-box-fill"></i></a></li>
          <li className='ease-in-out duration-700 hover:text-xounity-orange text-2xl'><a href=' https://discord.com/invite/V9mJaQUAu4' target='_blank' rel='noreferrer'><i class="ri-discord-fill"></i></a></li>
          <li className='ease-in-out duration-700 hover:text-xounity-orange text-2xl'><a href=' https://www.youtube.com/@xounity1' target='_blank' rel='noreferrer'><i class="ri-youtube-fill"></i></a></li>
        </ul>
      </div>
    </footer>
  )
}

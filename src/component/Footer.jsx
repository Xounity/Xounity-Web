import React from 'react'

export const Footer = () => {
  const year = new Date()
  return (
    <footer className='flex flex-col justify-center items-center bg-gray-950 p-4'>
      <div>
        <h3 className='text-orange-400 font-semibold text-xl'>Follow our team</h3>
      </div>
      <div>
        <p className='text-white text-sm'>Xounity Copyrights@{year.getFullYear()} </p>
      </div>
    </footer>
  )
}

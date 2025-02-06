'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCalendar, FaPowerOff, FaUser, FaUserTie } from 'react-icons/fa'

const Sidebar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <div className='border border-solid border-xounity-orange rounded-md overflow-hidden p-2 hidden md:block'>
      <p className='bg-transparent p-2 mb-4 rounded-sm font-bold'>Dashboard</p>
        <div className='mb-4'>
          <h2 className='p-2 font-bold'>Menu</h2>
          <ul className='flex flex-col justify-center gap-2'>
            <Link href="/dashboard/users" className={`${pathname === '/dashboard/users' ? 'bg-xounity-orange' : 'bg-transparent'} hover:bg-xounity-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer`} ><FaUser />Users</Link>
            <Link href="/dashboard/admins" className={`${pathname === '/dashboard/admins' ? 'bg-xounity-orange' : 'bg-transparent'} hover:bg-xounity-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer`}><FaUserTie />Admins</Link>
            <Link href="/dashboard/events" className={`${pathname === '/dashboard/events' ? 'bg-xounity-orange' : 'bg-transparent'} hover:bg-xounity-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer`}><FaCalendar />Events</Link>
          </ul>
        </div>
        <div>
          <h2 className='p-2 font-bold'>Settings</h2>
          <ul className='flex flex-col justify-center gap-2'>
            <li className='bg-transparent hover:bg-xounity-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer'><FaPowerOff />Logout</li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar
'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaCalendar, FaPowerOff, FaUser, FaUserTie } from 'react-icons/fa'

const Sidebar = () => {
    const pathname = usePathname()
  return (
    <div className='border-r border-xounity-orange'>
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
            <li onClick={()=>{ signOut({redirect: true, callbackUrl: '/'}) }} className='bg-transparent hover:bg-xounity-orange p-2 rounded-sm flex items-center gap-2 cursor-pointer'><FaPowerOff />Logout</li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar
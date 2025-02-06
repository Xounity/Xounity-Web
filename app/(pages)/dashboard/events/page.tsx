import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const events = () => {
  return (
    <>
    <section className='w-full h-screen mt-8 mb-4'>
      <div className='mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]'>
      <Sidebar />
      <div className='border border-solid border-xounity-orange rounded-md grid  gap-4 grid-cols-2 place-items-center'>
        Events Page
      </div>
      </div>
    </section>
    </>
  )
}

export default events
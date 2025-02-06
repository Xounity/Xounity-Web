import Sidebar from '@/app/components/Sidebar'
import React from 'react'


const DashboardPage = () => {
  return (
    <>
    <section className='w-full h-screen mt-8 mb-4'>
      <div className='mx-auto gap-2 px-4 mt-28 h-screen grid grid-flow-row grid-cols-1 md:grid-cols-[200px,1fr]'>
      <Sidebar />
      <div className='border border-solid border-xounity-orange rounded-md grid  gap-4 grid-cols-2 place-items-center'>
        <div className='rounded-md bg-xounity-orange h-[200px] w-[200px] flex flex-col items-center justify-center'>
          <h2 className='font-bold'>
          Users
          </h2>
          <div>
            106
          </div>
        </div>
        <div className='rounded-md bg-xounity-orange h-[200px] w-[200px] flex flex-col items-center justify-center'>
        <h2 className='font-bold'>
          Admins
          </h2>
          <div>
            1
          </div>
        </div>
        <div className='rounded-md bg-xounity-orange h-[200px] w-[200px] flex flex-col items-center justify-center'>
        <h2 className='font-bold'>
          Team Members
          </h2>
          <div>
            7
          </div>
        </div>
        <div className='rounded-md bg-xounity-orange h-[200px] w-[200px] flex flex-col items-center justify-center'>
        <h2 className='font-bold'>
          Events
          </h2>
          <div>
            3
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}


export default DashboardPage
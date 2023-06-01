import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import React from 'react'

const Round = () => {
  return (
    <div className=' h-screen w-full'>
      <Navbar title='Select Round' />
      <Sidebar />
      <div className='bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]  top-0 relative left-[5%] w-[95%] h-[88%]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-black-500 text-3xl'> Rounds Selection</h1>
          <div className='flex '>
            <div className='flex flex-col'>
              <div className='bg-white rounded-md mt-6 pl-2 text-bold  pt-1 text-2xl h-9 w-[80%]'>
                {' '}
                <button>General Round</button>
              </div>
              <div className='bg-white rounded-md pl-3  mt-6 text-2xl  pt- h-15 w-[60%] '>
                <button> Rapid Fire</button>
              </div>
              <div className='bg-white rounded-md   pl-2 mt-6  text-2xl h-15  w-[90%]'>
                <button> Multiple Question</button>
              </div>
              <div className='bg-white rounded-md  pl-2 mt-5 text-2xl h-15  w-30  pr-2'>
                {' '}
                <button>General Knowledge</button>
              </div>
              <div className='pl-12 pt-12  '>
                <button className='text-2xl font-bold text-blue-500 h-10 w-20  bg-yellow-500 '>
                  {' '}
                  Next
                </button>
              </div>
            </div>
            <Image
              height='400'
              width='400'
              src='/images/computer1.svg'
              alt='comp'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Round

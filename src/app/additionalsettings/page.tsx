'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { useState, useEffect } from 'react'
const AdditionalSettings = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(true)
  // this is used to have boolean value true for issidebarshown
 
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 768) {
        setIsSidebarShown(false)
        //this makes the sidebar hidden
      } else {
        setIsSidebarShown(true)
      }
    }

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className=' h-screen w-screen z-0 '>
      {/* this is to make the div have full screen as the page */}

      <div className='absolute left-0 top-0 z-20 w-full '>
        {/* this makes from left side 0 and from top side 0 with absolute */}
        <div className=''>
          <Navbar
            title='AdditionalSettings'
          />{' '}
        </div>
      </div>
      <div className='absolute left-0 top-0 z-30 h-full'>
        <Sidebar isSidebarShown={isSidebarShown} />
      </div>
      <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]'>
        <div className='  mt-[8%]   absolute backdrop-blur-4xl  border-2 border-purple-500 rounded-3xl w-[80%] h-[80%] ml-[15%]   '>
          <div className='flex flex-col justify-center '>
            <h1 className='text-3xl font-medium text-custom-White pl-[18%] pt-5 pb-5'>
              There are 4 teams:
            </h1>
            <div className=' flex flex-row  '>
              <div className=' text-white text-3xl font-medium ml-[10%]'>
                <h1 className='pl-[10%] backdrop-blur-md  w-[130%]'>SN</h1>
                <div className='flex flex-row    h-14 w-30'>
                  <h2>Team 1:</h2>
                  <div className='bg-red-500 h-10 w-14 ml-4 mt-2  rounded-md'></div>
                </div>
                <div className=' flex flex-row mt-3'>
                  <h3>Team 2:</h3>
                  <div className='bg-[#57CC99] h-10 w-14  ml-3 mt-2  rounded-md'></div>
                </div>
                <div className=' flex flex-row mt-3'>
                  <h4>Team 3:</h4>
                  <div className='bg-[#23A6F0] h-10 w-14  ml-3 mt-2  rounded-md'></div>
                </div>
                <div className='  flex flex-row mt-5'>
                  <h5 className=''>Team 4:</h5>
                  <div className='bg-[#FFDD1F] h-10 w-14  ml-3 mt- rounded-md'></div>
                </div>
              </div>
              <div className=' text-3xl pl-[8%]'>
                <h1 className='text-white mb-2  flex justify-center font-medium '>
                  Team Name
                </h1>
                <div className='text-black'>
                  <h2 className='bg-white w-[100%] pb-2 flex justify-center rounded-md '>
                    {' '}
                    Red House
                  </h2>
                  <h3 className='bg-white w-80  pb-2 flex justify-center rounded-md mt-5 '>
                    Green House
                  </h3>
                  <h4 className='bg-white w-80 pb-2 flex justify-center rounded-md mt-5'>
                    Blue House
                  </h4>
                  <h5 className='bg-white w-80 pb-2 flex justify-center rounded-md mt-5'>
                    {' '}
                    Yellow House
                  </h5>
                </div>
              </div>
              <div className='pl-[8%] '>
                <h1 className='text-white text-3xl  font-medium mb-2'>
                  Game Order
                </h1>
                <div className=' text-black text-2xl items-center pl-3'>
                  <h2 className='bg-white flex justify-center rounded-md pb-2 w-50'>
                    {' '}
                    3
                  </h2>
                  <h3 className='bg-white flex justify-center rounded-md  pb-2 w-50 mt-6'>
                    {' '}
                    4{' '}
                  </h3>
                  <h4 className='bg-white flex justify-center rounded-md  pb-2  w-50 mt-7'>
                    2
                  </h4>
                  <h5 className='bg-white flex justify-center rounded-md pb-2 w-50 mt-6'>
                    1
                  </h5>
                </div>
                <div>sc</div>
              </div>
            </div>
            <button className='text-black text-3xl bg-[#57CC99] rounded-full w-20 flex items-center justify-center  ml-[50%]  pb-2 mt-[7%]'>
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalSettings

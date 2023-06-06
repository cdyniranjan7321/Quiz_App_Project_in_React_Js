import React, { useState } from "react"
import { BiArrowBack as BackArrow } from "react-icons/bi"
import { AiFillSetting as Setting } from "react-icons/ai"
import { AiOutlineHome as Home } from "react-icons/ai"
import Link from "next/link"

const Sidebar = () => {
  return (
    <div className='bg-gradient-to-r from-[#10002B] to-[#300559] w-[6%] h-[98vh] md:w-[9%] lg:w-[6%] rounded-sm top-0 absolute hidden md:block lg:block'>
      
      <div className="flex flex-col justify-center items-center gap-7 pt-8">
        <div className='font-white-300 text-gray-200 text-bold text-4xl  '>
          <button>
            <BackArrow />
          </button>
        </div>
        <Link href='/' className=' text-white text-bold text-4xl'>
          <div className='hidden md:block lg:block'>
            <Home />
          </div>
        </Link>
        <h1 className='text-gray-300  hidden md:block lg:block'>Home</h1>
        <Link
          href='/settings'
          className=' text-bold text-white text-4xl'
        >
          <div className='hidden md:block lg:block'>
            <Setting />
          </div>
        </Link>
        <h2 className='text-gray-300 hidden md:block lg:block'>Settings</h2>
      </div>
    </div>
  )
}

export default Sidebar

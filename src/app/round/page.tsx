"use client";
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import React from "react"

const Round = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar title='Select Round' />
      <Sidebar />
      <div className='bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E] top-0  left-[5%] w-[100%] h-[88%]'>
        <div className="flex flex-row justify-around align-items-center pt-[13%] md:pl-[12%] md:pt-[19%] lg:pt-[7%]">
          <div className="flex-col justify-content:center align-items:center pt-11">
            <div className='bg-white rounded-md mt-6 pl-2 text-bold text-2xl h-9 w-[80%]'>
              {" "}
              <button>General Round</button>
            </div>
            <div className='bg-white rounded-md pl-2 mt-6 text-2xl pt- h-15 w-[60%]'>
              <button>Rapid Fire</button>
            </div>
            <div className='bg-white rounded-md pl-1 mt-7 pt-1 text-2xl h-10 w-[90%]'>
              <button>Multiple Question</button>
            </div>
            <div className='bg-white rounded-md pl-2 mt-5 text-2xl h-9 w-[100%] pr-2'>
              <button>General Knowledge</button>
            </div>
            <div className=' pt-12'>
              <button className='text-2xl font-bold text-black h-10 w-[26%] bg-[#57CC99] rounded-md'>
                Next
              </button>
            </div>
          </div>
          <div className=" hidden md:block">
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

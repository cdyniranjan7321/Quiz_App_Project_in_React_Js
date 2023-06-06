"use client"
import React, { useState, useEffect } from 'react';
import { FaBars, FaBeer } from 'react-icons/fa';
import { BiArrowBack as BackArrow } from "react-icons/bi"
import { AiFillSetting as Setting } from "react-icons/ai"
import { AiOutlineHome as Home } from "react-icons/ai"
import Link from "next/link"

type NavProps = {
  title: String
}

const Navbar = (props: NavProps) => {
  const { title } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className='bg-gradient-to-r from-[#C77DFF] to-[#000000] w-full h-[10%]  '>
      <div className=' flex flex-row justify-center items-center'>
      <div className="text-bold text-3xl  text-white flex pt-6 pl-4 w-[20%] md:hidden  lg:hidden">
        <FaBars onClick={toggleMenu} />
      </div>
      <div className='w-[80%]   ml-[25%] md:ml-[45%]'>



      <h1 className=' text-3xl md:pt-7 lg:text-5xl lg:pt-2  pt-5 font-bold text-white     '>{title}</h1>
      </div>
      </div>
      {isMenuOpen && (
        <div className='flex justify-left  mt-[6%]   '>
        <div className=" flex flex-col bg-gradient-to-r from-[#10002B] to-[#300559] w-[15%] h-[88vh] rounded-sm ">
          <div className='font-white-300 text-gray-200 text-bold pl-4 pt-3 text-4xl'>
            <button>
              <BackArrow />
            </button>
          </div>

          <Link href='/' className='pt-3 pl-5 text-white text-bold text-4xl'>
            <div className="">
              <Home />
            </div>
          </Link>
          <h1 className='text-gray-300 pl-3'>Home</h1>
          <Link href='/settings' className='pt-7 pl-4 text-bold text-white text-4xl'>
            <div className="">
              <Setting />
            </div>
          </Link>
          <h2 className='text-gray-300 pl-3'>Settings</h2>
         
        </div>
        </div>
      )}
    </div>
  )
}

export default Navbar

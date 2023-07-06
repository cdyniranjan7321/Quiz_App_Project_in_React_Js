'use client'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import BackArrowButton from './BackArrowButton'
import Image from 'next/image'
type NavProps = {
  title: string
  toggleMenu?: () => void
  isSidebarShown?: boolean
  isBackArrow?: boolean
  isRapidFirePage?: boolean
}
const Navbar = (props: NavProps) => {
  const { title, toggleMenu, isSidebarShown, isBackArrow, isRapidFirePage } =
    props
    const handleBackClick=()=>{
      window.history.back();
    }
  return (
    <div className='bg-gradient-to-r from-[#C77DFF] to-[#000000] rounded-lg rounded-t-none'>
      <div className='flex justify-between items-center gap-4'>
        {!isSidebarShown && !isBackArrow && (
          <div className='ml-6 text-bold text-3xl text-white md:hidden'>
            <FaBars onClick={toggleMenu} />
          </div>
        )}
        {isBackArrow && (
          <div className='ml-7'>
          <button onClick={handleBackClick}>
          <BackArrowButton />
          </button>
          
          </div>
        )}
        <div className='flex-grow flex justify-center gap-2'>
          <div className='text-center text-xl lg:text-5xl p-3 font-bold text-white '>
            {title}
          </div>
          {isRapidFirePage && (
            <div className='mt-4'>
              <Image
                src='/images/bolt.svg'
                alt='some bolt'
                width={30}
                height={30}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar

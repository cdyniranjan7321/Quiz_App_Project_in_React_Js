import { Italiana } from 'next/font/google'
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      className=' bottom-0 w-full py-16 px-4 gap-8 text-[#E3DCE8]'
      style={{ backgroundColor: '#16083B' }}
    >
      <div className='flex flex-col sm:flex-row px-5 gap-5'>
        <div className='w-full sm:w-1/4'>
          <h1 className='w-full text-3xl font-bold text-[#E3DCE8] font-italiana'>
            Quiz app
          </h1>
        </div>
        <div className='w-full sm:w-1/4'>
          <ul>
            <li className='py-2 text-sm'>ABOUT</li>
            <li className='py-2 text-sm'>NEWS</li>
            <li className='py-2 text-sm'>SERVICES</li>
            <li className='py-2 text-sm'>CAREER</li>
            <li className='py-2 text-sm'>CONTACT</li>
          </ul>
        </div>
        <div className='flex my-8 w-full sm:w-1/4 gap-2'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaYoutubeSquare size={30} />
        </div>
        <div className='flex flex-col justify-between my-8 w-full sm:w-1/4'>
          <div>
            <p>
              Sign up for our newsletter and get a discount for your first order
            </p>
          </div>
          <div className='flex flex-row'>
            <input
              className='p-2 flex  border-0 border-b-2 bg-transparent outline-none text-white'
              type='email'
              placeholder='Type Email here'
            />
            <button className='text-[#E3DCE8] w-[5px] h-auto rounded-md font-medium my-1 mx-auto bg-transparent '>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='flex items-center'>
          <p className='mr-2'>Site Credits</p>
          <p>@2023 aakar e-solution</p>
        </div>
        <div className='flex flex-row gap-3 w-full sm:w-1/4'>
          <p>Privacy Policy</p>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

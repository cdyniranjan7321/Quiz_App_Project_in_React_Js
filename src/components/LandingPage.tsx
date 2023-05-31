'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className=' bg-gradient-to-b from-[#C77DFF] to-[#3C096C] h-[100%] w-full absolute '>
      <Navbar />
      <Sidebar />
      {/* <Footer /> */}
    </div>
  )
}

export default LandingPage

'use client'
import Navbar from '@/components/Navbar'
import React, { useState, ChangeEvent } from 'react'
import AdditionalSettings from '../additionalsettings/page'
const Settings = () => {
  return (
    <div className='overflow-hidden flex bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E] h-screen w-screen'>
      {/* starting navbar and main page  */}
      <div className=' flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <div className='z-20'>
          <Navbar title='Settings' isBackArrow={true} />
        </div>
        {/* end navbar */}
        <AdditionalSettings />
      </div>
    </div>
  )
}
export default Settings

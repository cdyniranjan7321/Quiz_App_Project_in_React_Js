'use client'
import Navbar from '@/components/Navbar'
import React, {useState, ChangeEvent} from 'react'
import AdditionalSettings from '../additionalsettings/page'
const Settings = () => {

  return (
    
    <div className=' bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E] h-screen w-full'>
      <Navbar title='Settings' />
      <div className=' flex flex-col   items-center justify-center pt-4 w-full'>
        
        <AdditionalSettings />
      </div>
    </div>
  )
}
export default Settings

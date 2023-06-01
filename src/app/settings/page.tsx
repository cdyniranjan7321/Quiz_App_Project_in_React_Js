import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Settings = () => {
  return (
    <div className=' bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E] h-screen w-full'>
      <Navbar title='Settings' />
      <Sidebar />
      <h1>Settings</h1>
    </div>
  )
}

export default Settings

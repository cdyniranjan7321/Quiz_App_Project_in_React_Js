'use client'
import React from 'react'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'
import { FcManager } from 'react-icons/fc'

const AdminPanel = () => {
  return (
    <div className='h-screen w-screen flex flex-row    overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-950'>
      <div className='flex flex-col bg-[#300559] text-white w-[15%] rounded-3xl rounded-bl-none rounded-tl-none'>
        <h1 className='text-5xl bold-md pl-11 pt-[20%] pb-2'>Quiz</h1>
        <hr></hr>
        <div className='text-sm  flex flex-col pt-[15%] mt-[30%] pb-5 pl-11 '>
          <button className='pt-4 flex flex-row'>
            <Home  size={30} className=' pr-2 pb-2' /> Home
          </button>
          <button className='pt-4  flex flex-row'>
            <MdExtension size={28} className='pr-2 pb-2' />
            Rounds
          </button>
          <button className='pt-4  flex flex-row'>
            <Quesation size={28} className='pr-1 pb-2' />
            Question
          </button>
          <button className='pt-4  flex flex-row'>
            <Team size={34} className='pr-2 pb-3 text-white ' />
            Teams
          </button>
        </div>
        <div className=' pt-[72%] flex flex-col   text-sm'>
          <button className='pb-3  flex flex-row  pl-10'>
            {' '}
            <Setting size={28}  className='pr-2 pb-2' />
            Settings
          </button><hr></hr>
 
          <button className='mb-[17%]  pl-11 pt-3  flex flex-row'>
            <MdLogout  size={28}  className='pr-2 pb-2'/>
            Logout
          </button>
        </div>
      </div>
      {/* beside part */}
       
      <div className='  flex flex-col'> 
      <div className=' pl-[10%] pt-8'>
       <div className='flex flex-row  text-gray-500  '>< FcManager size={34} className=''/> <h1 className=''>Admin</h1></div>
       </div>
   
      </div>
      
      
      </div>
   
  )
}
{/*  */}
export default AdminPanel

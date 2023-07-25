'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'

const AdminPanel = () => {
  const dummyData = [
    { id: 1, roundName: 'General Round' },
    { id: 2, roundName: 'Rapid fire' },
    { id: 3, roundName: '50/50' },
    { id: 3, roundName: 'Audio Visual ' },
    // Add more data as needed
  ];
  return (
    <div className='h-screen w-screen flex flex-row    overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-950'>
      <div className='flex flex-col bg-[#300559] text-white w-[15%] rounded-3xl rounded-bl-none rounded-tl-none'>
        <h1 className='text-5xl bold-md pl-11 pt-[20%] pb-2'>Quiz</h1>
        <hr></hr>
        <div className='text-sm  flex flex-col pt-[15%] mt-[30%] pb-5 pl-11 '>
          <button className='pt-4 flex flex-row'>
            <Home size={30} className=' pr-2 pb-2' /> Home
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
            <Setting size={28} className='pr-2 pb-2' />
            Settings
          </button>
          <hr></hr>

          <button className='mb-[17%]  pl-11 pt-3  flex flex-row'>
            <MdLogout size={28} className='pr-2 pb-2' />
            Logout
          </button>
        </div>
      </div>
      <div className='flex flex-col'>
       <div className='ml-[120%] w-11'>
          <div className='flex flex-row  pt-6  '>
            <Image
              src='/images/11.svg'
              alt='Admin im'
              width={30}
              height={30}
              className='mr-2'
            />
            <h1 className='text-2xl pt-2 text-gray'>Admin</h1>
          </div>
        </div>
      {/* table */}
       <div className='pt-[8%]  pl-9  '>
       <div className='bg-gray-600  w-[140%] rounded-md pl-[25%] pr-[15%]  pt-[10%]  '>
       <table className=' text-2xl'>
          <thead>
            <tr>
              <th className='text-white text-left px-4 py-2 pl-6 pr-11 border border-white'>
                SN
              </th>
              <th className='text-white text-left pl-11 pr-11 py-4 border border-white'>
                Round Name
              </th>
              <th className='text-white text-left px-4 py-4 pl-[18%] pr-[18%] border border-white'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data) => (
              <tr key={data.id}>
                <td className='text-white px-4 py-2 border border-white'>
                  {data.id}
                </td>
                <td className='text-white px-4 py-2 border border-white'>
                  {data.roundName}
                </td>
                <td className='text-white px-4 py-2 border border-white'>
                  <div className='flex items-center space-x-2'>
                    <div className='flex items-center border border-white rounded pl-9 pr-9 pl-3 ml-3'>
                      {/* View Button */}
                      <button className='text-white ml-6 mr-6 py-1 '>
                        View...
                      </button>
                    </div>
                    <div className='flex items-center border border-white rounded pl-3 ml-3'>
                      {/* Delete Button */}
                      <button className='text-white  ml-11 mr-11 py-1 '>
                        Edit
                      </button>
                    </div> 
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pt-[10%] pb-6'>
        <button className='bg-[#417468] text-2xl text-white  w-[14%] rounded-2xl flex justify-center  ml-[40%] '>
               Save
         </button>
         </div>
       </div>
      </div>
    </div>
    </div>
  )
}

export default AdminPanel

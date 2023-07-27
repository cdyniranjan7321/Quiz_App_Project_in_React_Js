'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { AiOutlineEdit as Edit } from 'react-icons/ai'
import { AiOutlineUpload as Upload } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'

const AdminPanel = () => {
  const dummyData = [
    { id: 1, roundName: 'what is your name i want to know ' },
    { id: 2, roundName: 'ho ' },
    { id: 3, roundName: ' k' },
    { id: 3, roundName: 'timi ' },
    // Add more data as needed
  ]
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
      <div className='flex flex-col w-[65%]'>
        <div className='ml-[115%] w-11'>
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
        <div className='pt-5  pl-7  '>
          <div className='bg-gray-600  w-[130%] rounded-md pl-[14%] pr-10  pt-10  '>
            <label className=' text-white text-2xl pl-[30%]'>
              Enter the no.of question:
            </label>{' '}
            <input type='text' className='bg-white text-black w-6 h-6'></input>
            <hr className='pb-3 w-[90%] h-5'></hr>
            <div className='flex pb-4'>
              <div className='flex items-center border  border-white bg-white rounded ml-[25%]'>
                {/* Delete Button */}
                <button className=' ml-11 mr-11 py-1 text-black flex'>
                  <Edit className='pr-2 text-2xl' /> Edit all
                </button>
              </div>
              <div className='flex items-center text-white  bg-white border border-white rounded pl-3 ml-3'>
                {/* Delete Button */}
                <button className=' ml-11 mr-11 py-1 text-black flex '>
                  <Upload className='pr-2 text-2xl' /> upload
                </button>
              </div>
            </div>
            <table className=' text-2xl'>
              <thead>
                <tr>
                  <th className='text-white text-left px-4 py-2 pl-6 pr-11 border border-white'>
                    SN
                  </th>
                  <th className='text-white text-left pl-5 pr-5 py-3 border border-white w-32'>
                    <h1>50/50 Round</h1>
                  </th>
                  <th className='text-white text-left px-4 py-4 pl-[28%] pr-[28%] border border-white'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((data) => (
                  <tr key={data.id} className=''>
                    <td className='text-white px-4 py-2 border border-white'>
                      {data.id}
                    </td>
                    <td className='text-blue px-4 py-2 border border-white max-w-xs w-3/4 truncate'>
                      {data.roundName}
                    </td>
                    <td className='text-white px-4 py-2 border border-white'>
                      <div className='flex items-center space-x-2'>
                        <div className='flex items-center border border-white rounded pl-9 pr-9 ml-3'>
                          {/* View Button */}
                          <button className='text-white  py-1 '>View...</button>
                        </div>
                        <div className='flex items-center border border-white rounded pl-3 ml-3'>
                          {/* Delete Button */}
                          <button className='text-white  ml-11 mr-11 py-1 '>
                            Edit
                          </button>
                        </div>
                        <div className='flex items-center border border-white rounded pl-3 ml-3'>
                          {/* Delete Button */}
                          <button className='text-red-500  ml-9 mr-9 py-1 '>
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pt-[5%] pb-5'>
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

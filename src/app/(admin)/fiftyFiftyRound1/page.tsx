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

const audioVisualSet = () => {
  const dummyData = [
    { id: 1, roundName: 'SET A' },
    { id: 2, roundName: ' SET B' },
    { id: 3, roundName: ' SET C' },
    { id: 3, roundName: ' SET D' },
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
   
        <div className='pt-9 pl-7  '>
          <div className='bg-gray-600  w-[130%] rounded-md pl-[14%] pr-10  pt-10  '>
            <h1 className='pl-[28%] text-4xl text-white font-bold pb-2 mt-10'>
              50/50 Round
            </h1>
            <hr className='pb-3 mt-4 w-[83%]'></hr>
            <div className='flex flex-col'>
              <div className='flex flex-row pl-[15%] mt-5'>
                <label className='text-white text-2xl '>Question 1:</label>
                <input
                  type='text'
                  className='bg-white ml-3 w-[38%] h-7 rounded-md'
                ></input>
              </div>
              <div className='flex flex-row text-2xl text-white pl-[16%] pt-7'>
                <h1>Answer 1:</h1>{' '}
                <div className='flex flex-col pl-3'>
                  <div className='flex flex-row'>
                    <h1 className='flex flex-row'>
                      option 1:
                      <div className='bg-red-600 w-11 rounded-md ml-2 h-6'></div>
                    </h1>
                    <h1 className='flex flex-row pl-4'>
                      option 2:
                      <div className='bg-green-600 h-6 w-11 rounded-md ml-2'></div>
                    </h1>
                  </div>
                  <div className='flex flex-row pt-3 '>
                    <h1 className='flex flex-row '>
                      option 3:
                      <div className='bg-green-600  h-6 w-11 rounded-md ml-2'></div>
                    </h1>
                    <h1 className='flex flex-row pl-4'>
                      option 4:
                      <div className='bg-green-600 w-11 h-6 rounded-md ml-2'></div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-[14%] pb-5'>
              <button className='bg-[#417468] text-2xl text-white  w-[14%] rounded-2xl flex justify-center  ml-[31%] '>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default audioVisualSet

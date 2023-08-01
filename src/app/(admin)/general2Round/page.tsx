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
import { TiTick } from 'react-icons/ti'
import { BiArrowBack as BackArrow } from 'react-icons/bi'

const general2Round = () => {
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
            <Team size={39} className='pr-2 pb-3 text-white ' />
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
        <div className='ml-[111%] w-11 pt-7'>
          <div className='flex flex-row  pt-2  '>
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

        <div className='pt-2 pl-7  '>
          <div className='bg-gray-600  w-[130%] rounded-md  pr-10  pt-1  flex-col '>
            <div className=' text-4xl text-white font-bold pb-2 mt-5 flex'>
              <BackArrow size={44} className='pl-4 ' />
              <h1 className='pl-[38%]'> General Round</h1>
            </div>
            <hr className='w-[55%] ml-[28%]'></hr>
            <div className='flex text-white pt-7 pb-4 text-3xl pl-[28%]'>
              <label>Question 1:</label>
              <input
                type='text'
                className=' rounded-md ml-2 text-md text-black'
              ></input>
            </div>
            <div className=' flex text-white text-3xl pl-[29.5%] pt-2'>
              {' '}
              <label> Answer 1:</label>
              <input
                type='text'
                className=' rounded-md w-[15%]  text-md text-black ml-2 '
              ></input>
            </div>

            <div className='flex text-white pt-7 pb-4 text-3xl pl-[28%]'>
              <label>Question 2:</label>
              <input
                type='text'
                className=' rounded-md ml-2 text-sm text-black'
              ></input>
            </div>
            <div className=' flex text-white text-3xl pl-[29.5%] pt-2'>
              {' '}
              <label> Answer 2:</label>
              <input
                type='text'
                className=' rounded-md w-[15%]  text-sm text-black ml-2 '
              ></input>
            </div>

            <div className='flex text-white pt-7 pb-4 text-3xl pl-[28%]'>
              <label>Question 3:</label>
              <input
                type='text'
                className=' rounded-md ml-2 text-md text-black'
              ></input>
            </div>
            <div className=' flex text-white text-3xl pl-[29.5%] pt-2'>
              {' '}
              <label> Answer 3:</label>
              <input
                type='text'
                className=' rounded-md w-[15%]  text-md text-black ml-2 '
              ></input>
            </div>

            <div className='mt-6 pb-3'>
              <button className='bg-[#417468] text-3xl text-white  w-[14%] rounded-2xl flex justify-center  ml-[45%] '>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default general2Round

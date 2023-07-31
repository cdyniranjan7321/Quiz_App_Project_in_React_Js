// Importing necessary modules and components

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'

// Define the AdminPanel component
const AdminPanel = () => {
  // State variables to manage button colors
  const [generalColor, setGeneralColor] = useState<string>('')
  const [fiftyfiftyColor, setFiftyfiftyColor] = useState<string>('')
  const [rapidfireColor, setRapidfireColor] = useState<string>('')
  const [avColor, setAVColor] = useState<string>('')

  // Event handlers for clicking on buttons
  const handleGeneralClick = () => {
    setGeneralColor('green')
  }
  const handleFiftyfiftyClick = () => {
    setFiftyfiftyColor('green')
  }
  const handleRapidfireClick = () => {
    setRapidfireColor('green')
  }
  const handleAVClick = () => {
    setAVColor('green')
  }
  const handleGeneralunClick = () => {
    setGeneralColor('red')
  }
  const handleFiftyfiftyunClick = () => {
    setFiftyfiftyColor('red')
  }
  const handleRapidfireunClick = () => {
    setRapidfireColor('red')
  }
  const handleAVunClick = () => {
    setAVColor('red')
  }

  // Render thee component
  return (
    // Main container with a flex layout
    <div className='h-screen w-screen flex flex-row    overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-950'>
      {/* Left Sidebar */}
      <div className='flex flex-col bg-[#300559] text-white w-[15%] rounded-3xl rounded-bl-none rounded-tl-none'>
        {/* Logo */}
        <h1 className='text-5xl bold-md pl-11 pt-[20%] pb-2'>Quiz</h1>
        <hr></hr>
        {/* Sidebar navigation */}
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
      {/* beside part */}
      <div className=' '>
        <div className='ml-[170%] w-11'>
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
        {/* downside */}
        <div className=' bg-[#1c1818] opacity-69 ml-5 flex flex-col rounded-md w-[200%] mt-9 text-white'>
          <div>
            <h1 className='text-4xl bold-4xl pt-6 text-white font-semibold flex justify-center items-center'>
              Select The Round To Be Played
            </h1>
          </div>
          <div className='flex  flex-col pt-11  pl-[25%]'>
            {/* Row for General Rounds */}
            <div className='flex flex-row pt-3 pb-3 ml-11'>
              {/* General Round button */}
              <h1
                style={{ backgroundColor: generalColor }}
                className='text-2xl bg-white text-black flex justify-center rounded-md w-[50%] pt-1 pb-1 p'
              >
                General round
              </h1>
              {/* Tick icon for general */}
              <Image
                src='/images/tick.svg'
                alt='tick '
                width={30}
                height={30}
                className='mx-2 text-2xl'
                onClick={handleGeneralClick}
              />
              {/* Delete icon General Round */}
              <Image
                src='/images/del.svg'
                alt='delete '
                width={30}
                height={30}
                className='mx-2 text-2xl'
                onClick={handleGeneralunClick}
              />
            </div>
            {/* Row for Rapid Fire Round */}
            <div className='flex flex-row pt-3 pb-3 pl-11'>
              {/* Rapid Fire Round button */}
              <h1
                style={{ backgroundColor: rapidfireColor }}
                className='text-2xl bg-white text-black pl-[16%] rounded-md w-[50%]'
              >
                Rapid Fire
              </h1>
              {/* Tick icon for Rapid Fire Round */}
              <Image
                src='/images/tick.svg'
                alt='tick '
                width={30}
                height={30}
                className='mx-2 text-2xl hover:bg-violet-600 '
                onClick={handleRapidfireClick}
              />
              {/* Delete icon for Rapid Fire Round */}
              <Image
                src='/images/del.svg'
                alt='delete '
                width={30}
                height={30}
                className='mx-2 text-2xl '
                onClick={handleRapidfireunClick}
              />
            </div>

            {/* Row for 50/50 Round  */}
            <div className='flex flex-row pt-3 pb-3 pl-11'>
              {/* 50/50 Round button */}
              <h1
                style={{ backgroundColor: fiftyfiftyColor }}
                className='text-2xl bg-white text-black pl-[16%] rounded-md w-[50%]'
              >
                50/50
              </h1>
              {/* Tick icon for 50/50 Round */}
              <Image
                src='/images/tick.svg'
                alt='tick '
                width={30}
                height={30}
                className='mx-2 text-2xl'
                onClick={handleFiftyfiftyClick}
              />
              {/* Delete icon for 50/50 Round */}
              <Image
                src='/images/del.svg'
                alt='delete '
                width={30}
                height={30}
                className='mx-2 text-2xl'
                onClick={handleFiftyfiftyunClick}
              />
            </div>

            {/* Row for Audio/Visual Round */}
            <div className='flex flex-row pt-3 pb-3 pl-11'>
              {/* Audio/Visual Round button */}
              <h1
                style={{ backgroundColor: avColor }}
                className='text-2xl bg-white text-black pl-[16%] rounded-md w-[50%]'
              >
                Audio/visual
              </h1>
              {/* Tick icon Audio/Visual Round */}
              <Image
                src='/images/tick.svg'
                alt='tick '
                width={30}
                height={30}
                className='mx-2 text-3xl'
                onClick={handleAVClick}
              />
              {/* Delete icon for Audio/Visual Round */}
              <Image
                src='/images/del.svg'
                alt='delete '
                width={30}
                height={30}
                className='mx-2 text-3xl'
                onClick={handleAVunClick}
              />
            </div>

            {/* Save button */}
            <button className='bg-[#417468] text-2xl  w-[10%] rounded-2xl flex justify-center items-center ml-[30%] mt-[10%] mb-3'>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

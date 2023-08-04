// Importing necessary modules and components

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import AdminSidebar from '@/components/AdminSidebar'

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
    <div>
      <div className='absolute'>
        <AdminSidebar />
      </div>
      {/* downside */}
      <div className='absolute bg-[#1c1818] opacity-69 flex flex-col rounded-md w-[70%] ml-80 mt-36 text-white'>
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
  )
}

export default AdminPanel;

'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
const RapidFireRound = () => {
  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='Rapid Fire Round'/>
        {/* end navbar */}
        <Question isRapidFirePage={true}/>
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default RapidFireRound

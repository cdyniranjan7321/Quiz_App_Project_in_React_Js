'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import AvailableQuestions from '@/components/AvailableQuestions'
import { useSearchParams } from 'next/navigation'

const GeneralQuestions = () => {
  const searchParams = useSearchParams()
  const totalQuestions = searchParams.get('totalquestions')
  console.log('search : ', typeof totalQuestions)
  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='General round' isGeneralQuestionsPage={true} />
        {/* end navbar */}
        <AvailableQuestions totalQuestions={totalQuestions} />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default GeneralQuestions

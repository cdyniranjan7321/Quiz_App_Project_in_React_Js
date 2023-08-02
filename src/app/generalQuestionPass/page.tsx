'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { useSearchParams } from 'next/navigation'
const GeneralQuestionsPass = () => {
  const searchParams = useSearchParams()
  const questionNumber = searchParams.get('questionNumber')
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0
  //to conditionally check if the number is null since it came from somewhere
  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='General round' isBackArrow={true} />
        {/* end navbar */}
        <Question roundId={2} />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default GeneralQuestionsPass
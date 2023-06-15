'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { useSearchParams } from 'next/navigation'
const GeneralQuestionsA = () => {
  const searchParams = useSearchParams()
  const questionNumber = searchParams.get('questionNumber')
  console.log('questionNumber :', questionNumber)
  const questionNum = parseInt(questionNumber)
  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='General round' isGeneralQuestionsPage={true} />
        {/* end navbar */}
        <Question isGeneralAPage={true} questionNum={questionNum} />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default GeneralQuestionsA

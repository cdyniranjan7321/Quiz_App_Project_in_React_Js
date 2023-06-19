'use client'
import React, { useState } from 'react'
import { QuestionI } from '../../types'

type AvailableProps = {
  isGeneralAPage?: boolean
  isRapidFirePage?: boolean
  questionNum?: number
  qn: QuestionI | undefined
}
const Question = (props: AvailableProps) => {
  const { isGeneralAPage, isRapidFirePage, questionNum, qn } = props
  const [showText, setShowText] = useState(false)
  const handlePassButtonClick = () => {
    setShowText(true)
  }
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row h-full justify-between'>
        <div className='w-[70%] ml-24 mt-8 '>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              {isGeneralAPage && (
                <span className='text-3xl lg:text-5xl p-4 font-italiana'>
                  General round
                  {showText && <span className='pl-2'>pass question</span>}
                </span>
              )}
              <div className='flex'>
                <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-4 ml-5'>
                  Round for: Red house{' '}
                  <button className='ml-4 mr-2 mb-1 bg-red-500 w-12 h-6 rounded-xl py-2'></button>
                </span>
              </div>
            </div>
          </div>
          <div className='text-2xl lg:text-4xl p-3 font-italiana'>
            {' '}
            Question {questionNum} : {qn?.question}
          </div>
          <div className='text-2xl lg:text-4xl pl-9 font-italiana'>
            {' '}
            Answer : {qn?.answer}
          </div>
        </div>
        {/* starting second part  */}
        {!isRapidFirePage && (
          <div className='flex flex-col w-[30%] gap-12  '>
            {/* top part of right side */}
            <div className='flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-4 mr-8 rounded-lg pl-3 pr-2 py-4 ml-auto'>
              <span className='font-italiana text-xl'>Next question for:</span>
              <span>
                Blue house{' '}
                <button className='ml-2 bg-blue-500 w-12 h-6 rounded-xl py-2'></button>
              </span>
            </div>
          </div>
        )}
        {isRapidFirePage && (
          <div className=' bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-4 w-22 h-12 mr-6 '>
            Set : A
          </div>
        )}
      </div>
      <div className=' flex justify-center mt-64 mb-4'>
        <button className=' bg-green-500 rounded-2xl mr-10 px-7 py-4 w-32 text-xl'>
          Correct
        </button>
        <button className='bg-red-500 rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'>
          Incorrect
        </button>
        <button
          className='bg-custom-brown rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
          onClick={handlePassButtonClick}
        >
          Pass
        </button>
        {isRapidFirePage && (
          <button
            className=' bg-blue-700 rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
            onClick={handlePassButtonClick}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
export default Question

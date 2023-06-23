'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useRequest'

const FiftyFiftyQuestion = () => {
  const searchParams = useSearchParams()
  const roundId = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0

  const { question } = useRequest(questionNum, round_id)
  console.log('data from fiftyfifty fetcher : ', question)

  const [selectedOption, setSelectedOption] = useState(0)

  const handleOptionClick = (optionIndex: any) => {
    //The 'handleOptionClick' function is call when an option is clicked and updates the selected option state.
    setSelectedOption(optionIndex)
  }

  const isAnswerCorrect = (optionIndex: Number) => {
    //The 'isAnswerCorrect' function determines whether the selected option is coorect.You may need to replace this with your own logic.
    // Replace this with your answer correctness logic
    return optionIndex === 1 // Assuming option 1 is the correct answer
  }

  return (
    <div className='h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800'>
      {' '}
      {/* The component starts with a div that covers the entire screen and has a gradient background. */}
      {/* starting navbar and main page where main component is wrapped in a flex container with a vertical column layout.*/}
      <div className='flex flex-col w-full'>
        <Navbar title='Fifty-fifty Round' isBackArrow={true} />

        {/* starting main page */}
        <div className='flex flex-col md:flex-row h-full'>
          {/* starting first part */}
          <div className='md:w-[70%] md:ml-24 mt-8'>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-3'>
                  Round for: Red house
                  <button className='ml-2 bg-red-500 w-10 h-6 rounded-xl py-2'></button>
                </span>
              </div>
            </div>
            <div className='text-2xl lg:text-4xl p-3 font-italiana'>
              {' '}
              Question {question?.id} : {question?.question}
            </div>
            <div className='text-2xl lg:text-4xl pl-9 font-italiana'>
              {' '}
              Answer : {question?.answer}
            </div>
            <div className='mt-10 ml-20 flex justify-center'>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-center'>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 0
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(0)}
                  >
                    A. {question?.option1}
                  </button>
                  <div style={{ marginLeft: '2rem' }}></div>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 1
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(1)}
                  >
                    B. {question?.option2}
                  </button>
                </div>
                <div className='flex justify-center'>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 2
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(2)}
                  >
                    C. {question?.option3}
                  </button>
                  <div style={{ marginLeft: '2rem' }}></div>
                  <button
                    className={`option rounded-lg p-2 text-xl w-[10rem] h-16 ${
                      selectedOption === 3
                        ? isAnswerCorrect(selectedOption)
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => handleOptionClick(3)}
                  >
                    D. {question?.option4}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ending first part */}

          {/* starting second part Where second part of the main page contains the details for next question.*/}
          <div className='flex flex-col w-[30%] gap-12'>
            <div className='flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-4 mr-6 rounded-lg pl-3 py-4 md:ml-60'>
              <span className='font-italiana text-xl'>Next question for:</span>
              <span>
                Blue house{' '}
                <button className='ml-2 bg-blue-500 w-10 h-6 rounded-xl py-2'></button>
              </span>
            </div>
          </div>
          {/* ending second part */}
        </div>
        {/* ending main page */}
      </div>
      {/* ending navbar and main page */}
    </div>
  )
}

export default FiftyFiftyQuestion

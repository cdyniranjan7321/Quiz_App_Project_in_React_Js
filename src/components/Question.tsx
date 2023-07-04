'use client'
import { toast } from 'react-toastify'
import { QuestionI } from '../../types'
import { useRouter } from 'next/navigation'
import { TimerContext } from '@/app/providers'
import React, { useState, useContext } from 'react'
import TimerIndicator from './TimerIndicator'

type AvailableProps = {
  isGeneralAPage?: boolean
  isRapidFirePage?: boolean
  qn?: QuestionI | undefined
  set?: string | null
  questionNumber?: number
  setQuestionNumber?: (value: number) => void
}

const Question = (props: AvailableProps) => {
  const {
    isGeneralAPage,
    isRapidFirePage,
    qn,
    set,
    questionNumber,
    setQuestionNumber,
  } = props

  const { timefirst, timesecond, timethird } = useContext(TimerContext)
 
  const router = useRouter()

  const [passCount, setPassCount] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

  const handlePassButtonClick = () => {
    setShowText(true)
    setPassCount((prevCount) => prevCount + 1)
  }

  const handleNextButtonClick = (answerCheck: String) => {
    if (
      setQuestionNumber !== undefined &&
      questionNumber !== undefined &&
      questionNumber < 6
    ) {
      setQuestionNumber(questionNumber + 1)
    }
    if (answerCheck === 'correct') {
      setCorrectAnswerCount(correctAnswerCount + 1)
      if (questionNumber === 6) {
        toast.success(
          `Congratulations your total correct answer is : ${
            correctAnswerCount + 1
          }`
        )
        router.push('/round')
      }
    }
    if (questionNumber === 6 && answerCheck === 'incorrect') {
      if (correctAnswerCount === 0) {
        toast.error('Oops! 0 score recorded!')
      } else
        toast.success(
          `Congratulations your total correct answer is : ${correctAnswerCount}`
        )
      router.push('/round')
    }
  }

  let timerStartFrom = 0
  if (timefirst !== undefined) {
    timerStartFrom = timefirst
    if (passCount === 1) {
      timerStartFrom = timesecond
    } else if (passCount > 1) {
      timerStartFrom = timethird
    }
  }
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row h-full justify-between mb-28'>
        <div className='w-[70%] ml-24 mt-8 '>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              {isGeneralAPage && (
                <span className='text-3xl lg:text-5xl p-4 font-italiana'>
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
            Question {qn?.id} : {qn?.question}
          </div>
          {showAnswer && (
            <div className='text-2xl lg:text-4xl pl-9 font-italiana'>
              Answer : {qn?.answer}
            </div>
          )}
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
            {set}
          </div>
        )}
      </div>
      <div className='fixed bottom-6 left-0 right-0 '>
        <div className='fixed right-8 bottom-4 flex justify-center  mb-2 rounded-2xl mr-10 px-7 py-4 text-xl'>
          <TimerIndicator startFrom={timerStartFrom} />
        </div>
        <div className=' flex justify-center'>
          {!isRapidFirePage && (
            <>
              <button
                className=' bg-blue-400 rounded-2xl mr-10 px-7 py-4 w-auto text-xl'
                onClick={() => setShowAnswer(!showAnswer)}
              >
                {showAnswer ? (
                  <span>Hide Answer</span>
                ) : (
                  <span>Show Answer</span>
                )}
              </button>
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
            </>
          )}
          {isRapidFirePage && (
            <>
              <button
                className=' bg-green-500 rounded-2xl mr-10 px-7 py-4 w-32 text-xl'
                onClick={() => handleNextButtonClick('correct')}
              >
                Correct
              </button>
              <button
                className='bg-red-500 rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
                onClick={() => handleNextButtonClick('incorrect')}
              >
                Incorrect
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default Question

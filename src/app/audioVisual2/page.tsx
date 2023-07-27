'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useQuestionRequest'

const AudioVisualRound2 = () => {
  const searchParams = useSearchParams()
  const roundId = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0

  const { question } = useRequest(questionNum, round_id)
  console.log('data from General Question fetcher : ', question)
  //to conditionally check if the number is null since it came from somewhere
  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='Audio Visual Round' isBackArrow={true} />
        {/* end navbar */}
        <Question isAudioVisualPage={true} qn={question} />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default AudioVisualRound2
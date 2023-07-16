'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import AvailableQuestions from '@/components/AvailableQuestions'

const AudioVisualQuestion = () => {
  const searchParams = useSearchParams()
  const totalQuestions = searchParams.get('totalquestions')
  const roundId = searchParams.get('roundId')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const total_questions = totalQuestions !== null ? parseInt(totalQuestions) : 0

  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='Audio Visual Round' isBackArrow={true} />
        {/* end navbar */}
        <AvailableQuestions
          totalQuestions={total_questions}
          roundId={round_id}
          roundName='Audio Visual'
        />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default AudioVisualQuestion

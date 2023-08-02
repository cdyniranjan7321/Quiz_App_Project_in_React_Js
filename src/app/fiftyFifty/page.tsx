'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import AvailableQuestions from '@/components/AvailableQuestions'

const FiftyFifty = () => {
  const searchParams = useSearchParams()
  const totalQuestions = searchParams.get('totalquestions')
  const roundId = searchParams.get('roundId')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const total_questions = totalQuestions !== null ? parseInt(totalQuestions) : 0

  return (
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      <div className='flex flex-col w-full'>
        <Navbar title='Fifty-fifty Round' isBackArrow={true} />
        <AvailableQuestions
          isMultipleQuestionsPage={true}
          totalQuestions={total_questions}
          roundId={round_id}
          roundName='fiftyFifty'
        />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default FiftyFifty

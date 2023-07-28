'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useQuestionRequest'

const RapidFireRound = () => {
  const [questionNumber, setQuestionNumber] = useState(1)

  const searchParams = useSearchParams()
  const set = searchParams.get('set')
  const round_id = searchParams.get('roundId')
  const roundId = round_id ? parseInt(round_id) : 0

  const { question } = useRequest(questionNumber, roundId)

  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar
          title='Rapid Fire Round'
          isRapidFirePage={true}
          isBackArrow={true}
        />
        {/* end navbar */}
        <Question
          isRapidFirePage={true}
          set={set}
          qn={question}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default RapidFireRound

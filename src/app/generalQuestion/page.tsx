'use client'
import useSWR from 'swr'
import React from 'react'
import Loading from '../loading'
import Navbar from '@/components/Navbar'
import Question from '@/components/Question'
import { useSearchParams } from 'next/navigation'

const GeneralQuestionsA = () => {
  const searchParams = useSearchParams()
  const questionNumber = searchParams.get('questionNumber')
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0
  //to conditionally check if the number is null since it came from somewhere

  const fetcher = (url: string) => fetch(url).then((res) => res.json())

  const url = `http://localhost:3000/api/getQuestion?questionNumber=${questionNum}`
  const { data: question, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <Loading />
  console.log('data from generalquestion fetcher : ', question?.question)

  return (
    // starting whole page
    <div className='h-screen w-screen overflow-hidden flex bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      {/* starting navbar and main page  */}
      <div className='flex flex-col w-full'>
        {/* start navbar  and main page*/}
        <Navbar title='General round' isBackArrow={true} />
        {/* end navbar */}
        <Question
          isGeneralAPage={true}
          questionNum={questionNum}
          qn={question?.question}
        />
      </div>
      {/* ending navbar and main page  */}
    </div>
  )
}
export default GeneralQuestionsA

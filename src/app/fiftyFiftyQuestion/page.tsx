'use client'
import React, { useState,useEffect,useRef,useContext } from 'react'
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useQuestionRequest'
import TimerIndicator from '@/components/TimerIndicator'
import { TimerContext } from '../providers'
import { ColorFormat,useCountdown } from 'react-countdown-circle-timer'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'

const FiftyFiftyQuestion = () => {
  const searchParams = useSearchParams()
  const roundId = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0

  const { question } = useRequest(questionNum, round_id)
  console.log('data from fiftyfifty fetcher : ', question)

  const [showAnswer, setShowAnswer] = useState(false)
  const [isOption1Active, setIsOption1Active] = useState(false)
  const [isOption2Active, setIsOption2Active] = useState(false)
  const [isOption3Active, setIsOption3Active] = useState(false)
  const [isOption4Active, setIsOption4Active] = useState(false)
  const [isFiftyFifty, setIsFiftyFifty] = useState(false)
  const [isfiftyfiftypage,setIsfiftyfiftypage]=useState(true)
  const { timefirst, timesecond, timethird } = useContext(TimerContext)
  
  const [passCount, setPassCount] = useState(0)
  let timerStartFrom = 0
  if (timefirst !== undefined) {
    timerStartFrom = timefirst
    if (passCount === 1) {
      timerStartFrom = timesecond
    } else if (passCount > 1) {
      timerStartFrom = timethird
    }
  }

  const startFrom=timerStartFrom
  const [time, setTime] = useState(startFrom)
  const [isRunning, setIsRunning] = useState(false)
  const path = useRef<SVGPathElement | null>(null)
  const [strokeDashoffset, setShowStrokeDashoffset] = useState(0)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return (
      <div>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    )
  }
  const handlePlayClick = () => {
    setIsRunning(true)
  }
  const handlePauseClick = () => {
    setIsRunning(false)
  }
  const handleResetClick = () => {
    setTime(startFrom)
    setIsRunning(false)
    setShowStrokeDashoffset(0)
  }
  const [color, setColor] = useState<ColorFormat>('#22C55E'); // Default color

useEffect(() => {
  if (time<= 5) {
    setColor('#FF0000'); // Change color to red
  } else if(time<=10){
    setColor('#FFFF00'); // Change color to yellow
  }
  else{
    setColor('#22C55E'); // Change color to green
  }
}, [time]);
  const { stroke, size, strokeWidth, pathLength } = useCountdown({
    isPlaying: isRunning,
    duration: startFrom,
    colors:color,
    size: 135,
  })
  
  const [offsetps, setOffsetps] = useState(0);
  
  useEffect(() => {
    setTime(startFrom)
    const newOffsetps = pathLength / (startFrom * 2);
  setOffsetps(newOffsetps);
  setShowStrokeDashoffset((prevOffset) => prevOffset - newOffsetps); // Update the strokeDashoffset immediately
  
  }, [startFrom,pathLength])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let animationInterval: NodeJS.Timeout
    const pathRef=path.current;
    const incrementOffset = () => {
      setShowStrokeDashoffset((prevOffset) => prevOffset -offsetps)
      if (pathRef) {
        pathRef.style.strokeDashoffset = String(strokeDashoffset)
      }
      if (strokeDashoffset <= 0) {
        clearInterval(animationInterval)
      }
    }

    if (isRunning && time > 0) {
      incrementOffset()
      animationInterval = setInterval(incrementOffset, 100)
    }
    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1)
        } else {
          setIsRunning(false)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
      if (pathRef) {
        pathRef.style.strokeDashoffset = '0'
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, time, path, startFrom])
  
  useEffect(() => {
    if (time<= 1) {
       setShowStrokeDashoffset(-841.946)
    }
  }, [strokeDashoffset, time]);
  useEffect(() => {
    setShowStrokeDashoffset(0); // Execute setShowStrokeDashoffset(0) when startFrom changes
  }, [startFrom]);
  
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
            {showAnswer && (
              <div className='text-2xl lg:text-4xl pl-9 font-italiana'>
                Answer : {question?.answer}
              </div>
            )}
            <div className='mt-10 ml-20 flex flex-col justify-center'>
              <div className='flex flex-col gap-4'>
                {!isFiftyFifty ? (
                  <>
                    <div className='flex justify-center'>
                      <button
                        className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                          !isOption1Active
                            ? 'bg-gray-200'
                            : isOption1Active &&
                              question?.option1 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() => setIsOption1Active(true)}
                      >
                        A. {question?.option1}
                      </button>
                      <div style={{ marginLeft: '2rem' }}></div>
                      <button
                        className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                          !isOption2Active
                            ? 'bg-gray-200'
                            : isOption2Active &&
                              question?.option2 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() => setIsOption2Active(true)}
                      >
                        B. {question?.option2}
                      </button>
                    </div>
                    <div className='flex justify-center'>
                      <button
                        className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                          !isOption3Active
                            ? 'bg-gray-200'
                            : isOption3Active &&
                              question?.option3 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() => setIsOption3Active(true)}
                      >
                        C. {question?.option3}
                      </button>
                      <div style={{ marginLeft: '2rem' }}></div>
                      <button
                        className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                          !isOption4Active
                            ? 'bg-gray-200'
                            : isOption4Active &&
                              question?.option4 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() => setIsOption4Active(true)}
                      >
                        D. {question?.option4}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className='flex justify-center'>
                    <button
                      className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                        !isOption1Active
                          ? 'bg-gray-200'
                          : isOption1Active &&
                            question?.fiftyOption1 === question?.answer
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                      }`}
                      onClick={() => setIsOption1Active(true)}
                    >
                      A. {question?.fiftyOption1}
                    </button>
                    <div style={{ marginLeft: '2rem' }}></div>
                    <button
                      className={`option rounded-lg p-2 text-xl w-[10rem] h-16  ${
                        !isOption2Active
                          ? 'bg-gray-200'
                          : isOption2Active &&
                            question?.fiftyOption2 === question?.answer
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                      }`}
                      onClick={() => setIsOption2Active(true)}
                    >
                      B. {question?.fiftyOption2}
                    </button>
                  </div>
                )}
              </div>
              <div className='fixed top-52 right-0  transform -translate-x-1/2 '>
                <TimerIndicator startFrom={30} isfiftyfiftypage={isfiftyfiftypage} time={time} isRunning={isRunning} strokeDashoffset={strokeDashoffset} formatTime={formatTime} handlePlayClick={handlePlayClick} handlePauseClick={handlePauseClick} handleResetClick={handleResetClick}/>
              </div>
              <div className='fixed flex justify-center bottom-8 left-1/2 transform -translate-x-1/2'>
                <button
                  className=' bg-green-400 rounded-2xl mr-10 px-7 py-4 w-auto text-xl'
                  onClick={() => {
                    setIsFiftyFifty(true)
                  }}
                >
                  Use fifty-fifty
                </button>
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
                <div className='flex flex-row '>
      <div
                className={`bg-black ${
                  isRunning
                    ? 'px-2 py-3 text-green-700 text-3xl'
                    : 'px-2 py-3 text-white text-3xl'
                }`}
                onClick={handlePlayClick}
              >
                <MdPlayArrow className='text-4xl'/>
              </div>
              <div
                className={`bg-black ${
                  isRunning
                    ? 'px-2 py-3 text-3xl text-white'
                    : ' px-2 py-3 text-green-700 text-3xl'
                }`}
                onClick={handlePauseClick}
              >
                <MdPause className='text-4xl'/>
              </div>
            <div
                className='bg-black text-white px-3 py-4 text-3xl'
                
                onClick={handleResetClick}
              >
                <MdRefresh style={{ transform: 'rotate(-90deg)' }}/>
              </div>
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

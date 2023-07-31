'use client'
import { QuestionI } from '../../types'
import { useRouter } from 'next/navigation'
import { TimerContext } from '@/app/providers'
import React, { useState, useContext, useEffect, useRef } from 'react'
import Success from './Success'
import Fail from './Fail'
import TimerIndicator from './TimerIndicator'
import {
  ColorFormat,
  ColorHex,
  useCountdown,
} from 'react-countdown-circle-timer'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'

type AvailableProps = {
  isGeneralAPage?: boolean
  isRapidFirePage?: boolean
  isAudioVisualPage?: boolean
  qn?: QuestionI | undefined
  set?: string | null
  questionNumber?: number
  setQuestionNumber?: (value: number) => void
}
const totalquestion = 6
console.log('totalquestion', totalquestion)

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
<<<<<<< Updated upstream

=======
  const router = useRouter()
  const isinitialRender = useRef(true)
>>>>>>> Stashed changes
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

  const startFrom = timerStartFrom
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
  const [color, setColor] = useState<ColorFormat>('#22C55E') // Default color

  useEffect(() => {
    if (time <= 5) {
      setColor('#FF0000') // Change color to red
    } else if (time <= 10) {
      setColor('#FFFF00') // Change color to yellow
    } else {
      setColor('#22C55E') // Change color to green
    }
  }, [time])
  const { stroke, size, strokeWidth, pathLength } = useCountdown({
    isPlaying: isRunning,
    duration: startFrom,
    colors: color,
    size: 135,
  })

  const [offsetps, setOffsetps] = useState(0)

  useEffect(() => {
    setTime(startFrom)
    const newOffsetps = pathLength / (startFrom * 2)
    setOffsetps(newOffsetps)
    setShowStrokeDashoffset((prevOffset) => prevOffset - newOffsetps) // Update the strokeDashoffset immediately
  }, [startFrom, pathLength])

  useEffect(() => {
    let interval: NodeJS.Timeout
    let animationInterval: NodeJS.Timeout
    const pathRef = path.current
    const incrementOffset = () => {
      setShowStrokeDashoffset((prevOffset) => prevOffset - offsetps)
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
    if (time <= 1) {
      setShowStrokeDashoffset(-841.946)
    }
  }, [strokeDashoffset, time])
  useEffect(() => {
    setShowStrokeDashoffset(0) // Execute setShowStrokeDashoffset(0) when startFrom changes
  }, [startFrom])

  // const { timefirst, timesecond, timethird } = useContext(TimerContext)
  const router = useRouter()
  const isinitialRender = useRef(true)
  // const [passCount, setPassCount] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [showCorrectPop, setShowCorrectPop] = useState(false)
  const [showInCorrectPop, setShowInCorrectPop] = useState(false)
  const [showRapidFinalMessage, setShowRapidFinalMessage] = useState({
    message: 'tehe',
    totalcorrectanswer: 0,
  })
  const [showGeneralMessage, setSHowGeneralMessage] = useState({
    message: 'hello',
  })
  const [correctClickCount, setCorrectClickCount] = useState(0)
  const [incorrectClickCount, setIncorrectClickCount] = useState(0)
  const handlePassButtonClick = () => {
    setShowText(true)
    setPassCount((prevCount) => prevCount + 1)
  }
  useEffect(() => {
    setShowRapidFinalMessage((prevMessage) => ({
      ...prevMessage,
      totalcorrectanswer: correctAnswerCount,
    }))
  }, [correctAnswerCount])

  // add oclick handler for correct and incorrect button click
  const handleCorrectButtonClick = () => {
    if (
      setQuestionNumber !== undefined &&
      questionNumber !== undefined &&
      questionNumber < 6
    ) {
      setQuestionNumber(questionNumber + 1)
    }
    if (correctClickCount + incorrectClickCount < totalquestion) {
      setCorrectAnswerCount((prevCount) => prevCount + 1)
      setCorrectClickCount((prevCount) => prevCount + 1)
    }
  }
  const handleIncorrectButtonClick = () => {
    if (
      setQuestionNumber !== undefined &&
      questionNumber !== undefined &&
      questionNumber < 6
    ) {
      setQuestionNumber(questionNumber + 1)
    }
    if (correctClickCount + incorrectClickCount < totalquestion) {
      setIncorrectClickCount((prevCount) => prevCount + 1)
    }
  }
  const handleCorrectButtonClick1 = () => {
    setShowCorrectPop(true)
    setSHowGeneralMessage({
      message: `Congratulations you have received 1 point`,
    })
    setShowInCorrectPop(false)
  }
  const handleIncorrectButtonClick1 = () => {
    setSHowGeneralMessage({ message: `Sorry!! you have received 0 point` })
    setShowInCorrectPop(true)
    setShowCorrectPop(false)
  }
  useEffect(() => {
    console.log('isRapidFirePage:', isRapidFirePage)
    console.log('isGeneralPage:', isGeneralAPage)
    console.log('correctClickCount:', correctClickCount)
    console.log('incorrectClickCount:', incorrectClickCount)
    console.log('questionNumber:', questionNumber)
    console.log('correctAnswerCount:', correctAnswerCount)
    if (!isRapidFirePage && !isinitialRender.current) {
      handleCorrectButtonClick1()
      handleIncorrectButtonClick1()
    }
    isinitialRender.current = false
    if (isRapidFirePage) {
      if (
        correctClickCount + incorrectClickCount >= totalquestion &&
        correctAnswerCount !== 0
      ) {
        setShowCorrectPop(true)
        setShowRapidFinalMessage({
          message: `Congratulations your total correct answer is : `,
          totalcorrectanswer: correctAnswerCount,
        })
      } else if (
        correctClickCount + incorrectClickCount >= totalquestion &&
        correctAnswerCount == 0
      ) {
        setShowInCorrectPop(true)
        setShowRapidFinalMessage({
          message: `Oops! 0 score received!`,
          totalcorrectanswer: 0,
        })
      } else {
        setShowCorrectPop(false)
        setShowInCorrectPop(false)
      }
    }
  }, [
    isRapidFirePage,
    correctClickCount,
    incorrectClickCount,
    questionNumber,
    correctAnswerCount,
    isGeneralAPage,
  ])
  let housename = 'Red'
  let housecolor = 'red'
  if (passCount == 1) {
    housename = 'Blue'
    housecolor = 'blue'
  } else if (passCount == 2) {
    housename = 'Green'
    housecolor = 'green'
  } else if (passCount == 3) {
    housename = 'Yellow'
    housecolor = 'yellow'
  } else if (passCount == 4) {
    housename = 'White'
    housecolor = 'white'
  } else if (passCount == 5) {
    housename = 'Purple'
    housecolor = 'purple'
  } else if (passCount == 6) {
    housename = 'Orange'
    housecolor = 'orange'
  } else if (passCount == 7) {
    housename = 'Pink'
    housecolor = 'pink'
  } else if (passCount == 8) {
    housename = 'Brown'
    housecolor = 'brown'
  } else if (passCount == 9) {
    housename = 'Cyan'
    housecolor = 'cyan'
  } else if (passCount == 10) {
    housename = 'Indigo'
    housecolor = 'indigo'
  }

  let housename2 = 'Blue'
  let housecolor2 = 'blue'
  if (passCount == 1) {
    housename2 = 'Green'
    housecolor2 = 'green'
  } else if (passCount == 2) {
    housename2 = 'Yellow'
    housecolor2 = 'yellow'
  } else if (passCount == 3) {
    housename2 = 'White'
    housecolor2 = 'white'
  } else if (passCount == 4) {
    housename2 = 'Purple'
    housecolor2 = 'purple'
  } else if (passCount == 5) {
    housename2 = 'Orange'
    housecolor2 = 'orange'
  } else if (passCount == 6) {
    housename2 = 'Pink'
    housecolor2 = 'pink'
  } else if (passCount == 7) {
    housename2 = 'Brown'
    housecolor2 = 'brown'
  } else if (passCount == 8) {
    housename2 = 'Cyan'
    housecolor2 = 'cyan'
  } else if (passCount == 9) {
    housename2 = 'Indigo'
    housecolor2 = 'indigo'
  } else if (passCount == 10) {
    housename2 = 'No more Team or'
    housecolor2 = ''
  }
  // let timerStartFrom = 0
  // if (timefirst !== undefined) {
  //   timerStartFrom = timefirst
  //   if (passCount === 1) {
  //     timerStartFrom = timesecond
  //   } else if (passCount > 1) {
  //     timerStartFrom = timethird
  //   }
  // }
  const handleFailClose = () => {
    setShowInCorrectPop(false)
    if (isRapidFirePage) {
      router.push('/round')
    }
  }

  const handleSuccessClose = () => {
    setShowCorrectPop(false)
    if (isRapidFirePage) {
      router.push('/round')
    }
  }
  return (
    <div>
      {''}
      {showCorrectPop && (
        <div className='fixed left-[20%] top-[20%]'>
          <Success
            onClose={handleSuccessClose}
            showRapidFinalMessage={showRapidFinalMessage}
            isRapidFirePage={isRapidFirePage}
            showGeneralMessage={showGeneralMessage}
          />
        </div>
      )}
      {showInCorrectPop && (
        <div className='fixed left-[20%] top-[20%]'>
          <Fail
            onClose={handleFailClose}
            showRapidFinalMessage={showRapidFinalMessage}
            isRapidFirePage={isRapidFirePage}
            showGeneralMessage={showGeneralMessage}
          />
        </div>
      )}
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row h-full justify-between mb-28'>
          <div className='w-[70%] ml-24 mt-8 '>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <div className='flex'>
                  <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-4 ml-5'>
                    Round for: {housename} house
                    <button
                      className={`ml-4 mr-2 mb-1 ${
                        housecolor === 'white'
                          ? `bg-${housecolor} w-12 h-6 rounded-xl py-2`
                          : `bg-${housecolor}-600 w-12 h-6 rounded-xl py-2`
                      }`}
                    ></button>
                  </span>
                </div>
                {isGeneralAPage && (
                  <span className='text-3xl lg:text-5xl p-4 font-italiana'>
                    {showText && <span className='pl-2'>pass question</span>}
                  </span>
                )}
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
            <div className='fixed right-0 flex flex-col w-[30%] gap-12  '>
              {/* top part of right side */}
              <div className='flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-12 mr-8 rounded-lg pl-3 pr-2 py-4 ml-auto'>
                <span className='font-italiana text-xl'>
                  Next question for:
                </span>
                <span>
                  {housename2} house
                  <button
                    className={`ml-2 ${
                      housecolor2 === 'white'
                        ? `bg-${housecolor2} w-12 h-6 rounded-xl py-2`
                        : `bg-${housecolor2}-600 w-12 h-6 rounded-xl py-2`
                    }`}
                  ></button>
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
          <div
            className={`fixed right-0  flex justify-center  mb-2 rounded-2xl px-7 py-4 text-xl ${
              isRapidFirePage ? 'top-40' : 'top-52'
            }`}
          >
            <TimerIndicator
              startFrom={timerStartFrom}
              israpifirepage={isRapidFirePage}
<<<<<<< Updated upstream
              time={time}
              isRunning={isRunning}
              strokeDashoffset={strokeDashoffset}
              formatTime={formatTime}
              handlePlayClick={handlePlayClick}
              handlePauseClick={handlePauseClick}
              handleResetClick={handleResetClick}
=======
>>>>>>> Stashed changes
            />
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
                <button
                  className=' bg-green-500 rounded-2xl mr-10 px-7 py-4 w-32 text-xl'
                  onClick={handleCorrectButtonClick1}
                >
                  Correct
                </button>
                <button
                  className='bg-red-500 rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
                  onClick={handleIncorrectButtonClick1}
                >
                  Incorrect
                </button>
                <button
                  className='bg-custom-brown rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
                  onClick={handlePassButtonClick}
                >
                  Pass
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
                    <MdPlayArrow className='text-4xl' />
                  </div>
                  <div
                    className={`bg-black ${
                      isRunning
                        ? 'px-2 py-3 text-3xl text-white'
                        : ' px-2 py-3 text-green-700 text-3xl'
                    }`}
                    onClick={handlePauseClick}
                  >
                    <MdPause className='text-4xl' />
                  </div>
                  <div
                    className='bg-black text-white px-3 py-4 text-3xl'
                    onClick={handleResetClick}
                  >
                    <MdRefresh style={{ transform: 'rotate(-90deg)' }} />
                  </div>
                </div>
              </>
            )}
            {isRapidFirePage && (
              <>
                <button
                  className=' bg-green-500 rounded-2xl mr-10 px-7 py-4 w-32 text-xl'
                  onClick={() => {
                    handleCorrectButtonClick()
                  }}
                >
                  Correct
                </button>
                <button
                  className='bg-red-500 rounded-2xl mr-10 px-7 py-4 w-32 text-white text-xl'
                  onClick={() => {
                    handleIncorrectButtonClick()
                  }}
                >
                  Incorrect
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
                    <MdPlayArrow className='text-4xl' />
                  </div>
                  <div
                    className={`bg-black ${
                      isRunning
                        ? 'px-2 py-3 text-3xl text-white'
                        : ' px-2 py-3 text-green-700 text-3xl'
                    }`}
                    onClick={handlePauseClick}
                  >
                    <MdPause className='text-4xl' />
                  </div>
                  <div
                    className='bg-black text-white px-3 py-4 text-3xl'
                    onClick={handleResetClick}
                  >
                    <MdRefresh style={{ transform: 'rotate(-90deg)' }} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Question

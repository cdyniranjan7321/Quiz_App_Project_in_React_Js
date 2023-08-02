'use client'
import { QuestionI } from '../../types'
import { useRouter } from 'next/navigation'
import { TimerContext } from '@/app/providers'
import React, { useState, useContext, useEffect, useRef } from 'react'
import Success from './Success'
import Fail from './Fail'
import RapidFireRound from '@/app/rapidFire/page'
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
  roundId: number
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
    roundId,
    set,
    questionNumber,
    setQuestionNumber,
  } = props
  const { timefirst, timesecond, timethird } = useContext(TimerContext)
  const [teamData, setteamData] = useState<
    Array<{ gameOrder: number; teamName: string }>
  >([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('') //checked
  const [numTeams, setNumTeams] = useState(2)
  const teamNames = Array.from({ length: numTeams }, (_, index) =>
    teamData.length > index ? teamData[index].teamName : ''
  )

  const [passCount, setPassCount] = useState(0) //checked
  const selectedTeamName = teamNames[passCount % numTeams]
  let housename = ''
  if (passCount >= 0 && passCount < numTeams) {
    housename = teamNames[passCount]
  } else {
    housename = 'No more Team'
  }
  let housename2 = ''
  if (passCount + 1 >= 0 && passCount + 1 < numTeams) {
    housename2 = teamNames[passCount + 1]
  } else {
    housename2 = 'No more Team'
  }

  useEffect(() => {
    const fetchteamData = async () => {
      try {
        const response = await fetch('/api/getTeams')
        const data = await response.json()
        if (response.ok) {
          setteamData(data.teams)
          setNumTeams(data.teams.length)
          if (data.teams.length > 0) {
            setTid(data?.teams[0].gameOrder)
          }
        } else {
          setError(data.error || 'Failed to fetch data')
        }
        setIsLoading(false)
      } catch (error) {
        setError('Error fetching data.Try again later.')
        setIsLoading(false)
      }
    }
    fetchteamData()
  }, [])
  useEffect(() => {
    const currentTeam = teamData.find((team) => team.teamName === housename)
    if (currentTeam) {
      setTid(currentTeam?.gameOrder)
    }
  }, [housename, teamData])

  const [tid, setTid] = useState<number>(0)
  const createScore = (
    score: number,
    roundId: number,
    tid: number,
    qid: number,
    qroundId: number
  ) => {
    fetch('/api/createScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: score,
        roundId: roundId,
        tid: tid,
        qid: qid,
        qroundId: qroundId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('response network was not ok')
        }
        return response.json() // Parse the response data as JSON
      })
      .then((data) => {
        console.log('data to score:', data)
        // Handle the response data if needed (optional)
        console.log('Score created successfully:', data)
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error creating score:', error)
      })
  }
  const updateScore = (
    scoreId: number,
    score: number,
    roundId: number,
    tid: number,
    qid: number,
    qroundId: number
  ) => {
    fetch(`/api/updateScore/${roundId}/${tid}`, {
      method: 'PATCH', // Use the Patch method for updating existing data
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: score, // Send the updated score value in the request body as JSON
        roundId: roundId,
        tid: tid,
        qid: qid,
        qroundId: qroundId,
      }),
    })
      .then((response) => response.json()) // Parse the response data as JSON
      .then((data) => {
        console.log('Score updated using updateScore successfully:', data)
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error updating score:', error)
      })
  }
  const handleCorrectButtonClick1 = () => {
    setShowCorrectPop(true)
    setSHowGeneralMessage({
      message: `Congratulations you have received 1 point`,
    })
    setShowInCorrectPop(false)

    const qid = qn?.id || 0
    const qroundId = roundId
    const tidval = tid
    let scoreIncrement = 0
    if (roundId === 1) {
      if (passCount === 0) {
        scoreIncrement = 30
      } else if (passCount === 1) {
        scoreIncrement = 15
      } else {
        scoreIncrement = 10
      }
    }
    const score = scoreIncrement
    fetch(`/api/getScore?roundId=${roundId}&tid=${tid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(' check for Data table:', data)

        let foundEntry = false

        // If no matching entry was found, create a new entry
        if (!foundEntry) {
          console.log(
            'sc',
            score,
            'roun',
            roundId,
            'tidv',
            tidval,
            'qid',
            qid,
            'qroun',
            qroundId
          )
          createScore(score, roundId, tidval, qid, qroundId)
        }
        for (const entry of data.score) {
          if (entry.tid === tid && entry.roundId === roundId) {
            // Found a matching entry for the team and round
            const previousScore = entry.score
            // Calculate the updated score by adding scoreIncrement to the previous score
            const score = scoreIncrement + previousScore
            // Call the updateScore function with the id of the matching entry and the updated score
            updateScore(entry.id, score, roundId, tidval, qid, qroundId)
            foundEntry = true
            break // Exit the loop s
          }
        }
      })
      .catch((error) => {
        console.error('Error checking score:', error)
      })
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
  const router = useRouter()
  const isinitialRender = useRef(true)
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
  const handleCorrectButtonClick = () => {
    if (correctClickCount + incorrectClickCount < totalquestion) {
      setCorrectAnswerCount((prevCount) => prevCount + 1)
      setCorrectClickCount((prevCount) => prevCount + 1)
    }
  }
  const handleIncorrectButtonClick = () => {
    if (correctClickCount + incorrectClickCount < totalquestion) {
      setIncorrectClickCount((prevCount) => prevCount + 1)
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isRapidFirePage,
    correctClickCount,
    incorrectClickCount,
    questionNumber,
    correctAnswerCount,
    isGeneralAPage,
  ])
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
                  <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white py-4 px-2 rounded-lg text-xl my-4 ml-5 '>
                    Round for: {housename}
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
            <div className='fixed right-0 top-16 flex flex-col gap-12  '>
              {/* top part of right side */}
              <div className='flex flex-row items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-12 mr-8 rounded-lg px-2 pr-2 py-4'>
                <span className='font-italiana text-xl'>
                  Next question for: {housename2}
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
              time={time}
              isRunning={isRunning}
              strokeDashoffset={strokeDashoffset}
              formatTime={formatTime}
              handlePlayClick={handlePlayClick}
              handlePauseClick={handlePauseClick}
              handleResetClick={handleResetClick}
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

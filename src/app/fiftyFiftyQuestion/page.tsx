'use client'
import React, { useState,useEffect,useRef,useContext } from 'react'
import Navbar from '@/components/Navbar'
import { useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useQuestionRequest'
import TimerIndicator from '@/components/TimerIndicator'
import { TimerContext } from '../providers'
import { ColorFormat,useCountdown } from 'react-countdown-circle-timer'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'
import { QuestionI } from '../../../types'
type FiftyFiftyProps={
  qn?:QuestionI | undefined
}
const FiftyFiftyQuestion = (props:FiftyFiftyProps) => {
  const {qn,}=props
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
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
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
    setColor('#FF0000'); //color to red
  } else if(time<=10){
    setColor('#FFFF00'); //color to yellow
  }
  else{
    setColor('#22C55E'); //color to green
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
  const [teamData, setteamData] = useState<
    Array<{ gameOrder: number; teamName: string }>
  >([])
  const [numTeams, setNumTeams] = useState(2)
  const teamNames = Array.from({ length: numTeams }, (_, index) =>
    teamData.length > index ? teamData[index].teamName : ''
  )
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
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('') //checked
  
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
  const handleoptionclick=(optionNumber:number)=>{
    setSelectedOption(optionNumber);
    const roundId=round_id
    const qid=question?.id || 0
    const qroundId=roundId
    const tidval=tid
    let scoreIncrement = 0;
    console.log('roundi',roundId)
    
    if (
      (optionNumber === 1 && question?.option1 === question?.answer) ||
      (optionNumber === 2 && question?.option2 === question?.answer) ||
      (optionNumber === 3 && question?.option3 === question?.answer) ||
      (optionNumber === 4 && question?.option4 === question?.answer) ||
      (optionNumber === 5 && question?.fiftyOption1 === question?.answer) ||
      (optionNumber === 6 && question?.fiftyOption2 === question?.answer)
    ) {
      scoreIncrement = 10;
    }
    const score=scoreIncrement
    fetch(`/api/getScore?roundId=${roundId}&tid=${tid}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(' check for Data table:', data)
        let foundEntry = false
        if (!foundEntry) {
          console.log(
            'sc', score,
            'roun',            roundId,
            'tidv',            tidval,
            'qid',  
               qid,
            'qroun',qroundId)
          createScore(score, roundId, tidval, qid, qroundId)
        }
        for (const entry of data.score) {
          if (entry.tid === tid && entry.roundId === roundId) {
            const previousScore = entry.score
            const score = scoreIncrement + previousScore
            updateScore(entry.id, score, roundId, tidval, qid, qroundId)
            foundEntry = true
            break
          }
        }
      })
      .catch((error) => {
        console.error('Error checking score:', error)
      })
  }
  return (
    <div className='h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800'>
      <div>
        
      </div>
      <div className='flex flex-col w-full'>
        <Navbar title='Fifty-fifty Round' isBackArrow={true} />
        <div className='flex flex-row justify-between w-screen'>
                <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-3 rounded-lg text-xl mt-8 ml-24'>
                  Round for: {housename}
                </span>
                <span className=' bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-3 rounded-lg text-xl font-italiana mt-8 mr-12'>
                  Next question for: {housename2}
                </span>
            </div>

            <div className='flex flex-col mt-12' >
            <div className='w-[70vw]'>
            <div className='ml-24'>
            <div className=' text-2xl p-3 font-italiana '>
              Question {question?.id} : {question?.question}
            </div>
            {showAnswer && (
              <div className='fixed text-2xl p-3 font-italiana'>
                Answer : {question?.answer}
              </div>
            )}
            </div>
          
            

          {/* choices section */}

                <div className=' flex items-center justify-center mt-20'>
                {!isFiftyFifty ? (
                  
                  <div className='flex flex-col'>
                    <div className='flex flex-row'>
                      <button
                        className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16 ${
                          !isOption1Active
                            ? 'bg-gray-200'
                            : isOption1Active &&
                              question?.option1 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={
                          () => {
                          setIsOption1Active(true);
                          handleoptionclick(1)
                        }
                      }
                      >
                        <span className='fixed text-left'>A. </span><span className='text-center ml-4'>{question?.option1}</span>
                      </button>
                      <button
                        className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16  ${
                          !isOption2Active
                            ? 'bg-gray-200'
                            : isOption2Active &&
                              question?.option2 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() =>{
                          setIsOption2Active(true)
                          handleoptionclick(2)
                        }}
                      >
                      <span className='fixed text-left'>B. </span><span className='text-center ml-4'>{question?.option2}</span>
                      </button>
                    </div>
                    <div className='flex flex-row'>
                      <button
                        className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16  ${
                          !isOption3Active
                            ? 'bg-gray-200'
                            : isOption3Active &&
                              question?.option3 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() => {
                          setIsOption3Active(true)
                          handleoptionclick(3)
                        }
                      }
                      >
                        <span className='fixed text-left'>C. </span><span className='ml-4 text-center'>{question?.option3}</span>
                        
                      </button>
                      <button
                        className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16  ${
                          !isOption4Active
                            ? 'bg-gray-200'
                            : isOption4Active &&
                              question?.option4 === question?.answer
                            ? 'bg-[#B1DE76]'
                            : 'bg-[#FF0000]'
                        }`}
                        onClick={() =>{ setIsOption4Active(true)
                          handleoptionclick(4)
                        }}
                      >
                        <span className='fixed text-left'>D. </span><span className='ml-4 text-center'>{question?.option4}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div >
                    <button
                      className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16  ${
                        !isOption1Active
                          ? 'bg-gray-200'
                          : isOption1Active &&
                            question?.fiftyOption1 === question?.answer
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                      }`}
                      onClick={() => {setIsOption1Active(true)
                      handleoptionclick(5)
                      }}
                    >
                      <span className='fixed text-left'>A. </span><span className='ml-4 text-center'>{question?.fiftyOption1}</span>
                      
                    </button>
                    <div style={{ marginLeft: '2rem' }}></div>
                    <button
                      className={`option rounded-lg p-2 m-5 text-base w-[300px] h-16  ${
                        !isOption2Active
                          ? 'bg-gray-200'
                          : isOption2Active &&
                            question?.fiftyOption2 === question?.answer
                          ? 'bg-[#B1DE76]'
                          : 'bg-[#FF0000]'
                      }`}
                      onClick={() => {
                        setIsOption2Active(true)
                      handleoptionclick(6)
                      }}
                    >
                      <span className='fixed text-left'>B. </span><span className='ml-4 text-center'>{question?.fiftyOption2}</span>
                    
                    </button>
                  </div>
                  
                )}
              </div>
              {/* last section */}
            </div>
            
              <div className='w-[30vw]'>
            
            <div className='fixed top-56 right-0 transform -translate-x-1/2 '>
              
                <TimerIndicator startFrom={30} isfiftyfiftypage={isfiftyfiftypage} time={time} isRunning={isRunning} strokeDashoffset={strokeDashoffset} formatTime={formatTime} handlePlayClick={handlePlayClick} handlePauseClick={handlePauseClick} handleResetClick={handleResetClick}/>
              </div>
          </div>
          </div>
          {/* timer indi section with question answer */}
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
  )
}
export default FiftyFiftyQuestion
'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'

type ControllerProps = {
    startFrom: number,
  }
  
const TimerController = (props: ControllerProps) => {
    const {
        startFrom,
      } = props

      const [time, setTime] = useState(startFrom)
    const [isRunning, setIsRunning] = useState(false)
  const [strokeDashoffset, setShowStrokeDashoffset] = useState(0)

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
  
  return (
    <div className='flex flex-row'>
<div
                className={`bg-purple-900  ${
                  isRunning
                    ? 'px-2 py-3 text-green-700 text-3xl'
                    : 'px-2 py-3 text-white text-3xl'
                }`}
                onClick={handlePlayClick}
              >
                <MdPlayArrow />
              </div>
              <div
                className={`bg-purple-900 ${
                  isRunning
                    ? 'px-2 py-3 text-3xl'
                    : ' px-2 py-3 text-green-700 text-3xl'
                }`}
                onClick={handlePauseClick}
              >
                <MdPause />
              </div>
              <div
                className='bg-purple-900 text-white px-4 py-3 text-3xl'
                onClick={handleResetClick}
              >
                <MdRefresh style={{ transform: 'rotate(-90deg)' }}
                />
              </div>
    </div>
  )
}
export default TimerController
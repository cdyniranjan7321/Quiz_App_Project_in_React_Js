import React, { useEffect, useState } from 'react'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'

const Timer: React.FC = () => {
  const [time, setTime] = useState(30)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

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
    }
  }, [isRunning, time])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`
  }

  const handlePlayClick = () => {
    setIsRunning(true)
  }

  const handlePauseClick = () => {
    setIsRunning(false)
  }

  const handleResetClick = () => {
    setTime(30)
    setIsRunning(false)
  }

  return (
    <div className='flex flex-row gap-1'>
      <div className='bg-purple-900 px-3 py-4 text-white text-3xl'>
        {formatTime(time)}
      </div>
      <div
        className={`bg-purple-900  ${
          isRunning ? 'px-3 py-4 text-green-700 text-4xl' : 'px-3 py-4 text-white text-4xl'
        }`}
        onClick={handlePlayClick}
      >
        <MdPlayArrow />
      </div>
      <div
        className={`bg-purple-900 ${
          isRunning ? 'px-3 py-4  text-4xl' : ' px-3 py-4 text-green-700 text-4xl'
        }`}
        onClick={handlePauseClick}
      >
        <MdPause />
      </div>
      <div
        className='bg-purple-900 text-white px-3 py-4 text-4xl'
        onClick={handleResetClick}
      >
        <MdRefresh />
      </div>
    </div>
  )
}

export default Timer

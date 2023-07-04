'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'
import { useCountdown } from 'react-countdown-circle-timer'
interface TimerProps {
  startFrom: number
}
const TimerIndicator: React.FC<TimerProps> = ({ startFrom }) => {
  const [time, setTime] = useState(startFrom)
  const [isRunning, setIsRunning] = useState(true)
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
    if (path && path.current) {
      path.current.style.strokeDashoffset = '0'
    }
  }
  useEffect(() => {
    setTime(startFrom)
  }, [startFrom])
  useEffect(() => {
  
    let interval: NodeJS.Timeout
    let animationInterval: NodeJS.Timeout

    const incrementOffset = () => {
      const offsetPerSecond = pathLength/(startFrom*2)
      const offsetps = offsetPerSecond

      setShowStrokeDashoffset((prevOffset) => prevOffset -offsetps)
      if (path && path.current) {
        path.current.style.strokeDashoffset = String(strokeDashoffset)
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
      if (path && path.current) {
        path.current.style.strokeDashoffset = '0'
      }
    }
  }, [isRunning, time, path, startFrom])
  const { stroke, size, strokeWidth, pathLength } = useCountdown({
    isPlaying: isRunning,
    duration: startFrom,
    colors: '#00FF00',
    size: 280,
  })
  return (
    <div>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        xmlns='http://www.w3.org/2000/svg'
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          fill='none'
          stroke='#d9d9d9'
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          fill='none'
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={pathLength}
          strokeDashoffset={strokeDashoffset}
        />

        <foreignObject x={0} y={0} width={size} height={size}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              color: 'white',
            }}
          >
            <div
              className='flex flex-row gap-1'
              style={{ transform: 'rotate(90deg)' }}
            >
              <div className='bg-purple-900 px-2 py-3 text-white text-2xl'>
                {formatTime(time)}
              </div>
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
                className='bg-purple-900 text-white px-3 py-3 text-3xl'
                style={{ transform: 'rotate(-90deg)' }}
                onClick={handleResetClick}
              >
                <MdRefresh />
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
export default TimerIndicator

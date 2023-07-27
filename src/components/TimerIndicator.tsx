'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'
import { ColorFormat, ColorHex, useCountdown } from 'react-countdown-circle-timer'
interface TimerProps {
  startFrom: number,
  isRunning:boolean,
  strokeDashoffset:number
}
const TimerIndicator: React.FC<TimerProps> = ({ startFrom,isRunning,strokeDashoffset }) => {
  const [time, setTime] = useState(startFrom)
  const path = useRef<SVGPathElement | null>(null)
  const [strokeDashoffsetvalue, setShowStrokeDashoffset] = useState(0)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return (
      <div>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    )
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
          // setIsRunning(false)
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
              <div className='bg-purple-900 px-2 py-3 text-white text-2xl border-2 border-black rounded-xl'>
                {formatTime(time)}
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
export default TimerIndicator
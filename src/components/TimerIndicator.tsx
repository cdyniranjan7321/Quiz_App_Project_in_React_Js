'use client'
import React, { useEffect, useState, useRef } from 'react'
import { MdPause, MdPlayArrow, MdRefresh } from 'react-icons/md'
import { ColorFormat, ColorHex, useCountdown } from 'react-countdown-circle-timer'
interface TimerProps {
  time:number,
  isRunning:boolean,
  strokeDashoffset:number,
  formatTime:(time: number) => React.ReactNode,
  handlePlayClick:()=>void,
  handlePauseClick:()=>void,
  handleResetClick:()=>void,
  startFrom: number,
  isfiftyfiftypage?:boolean,
  israpifirepage?:boolean
}
const TimerIndicator: React.FC<TimerProps> = ({time,isRunning,strokeDashoffset,formatTime,handlePlayClick,handlePauseClick,handleResetClick, startFrom,isfiftyfiftypage,israpifirepage }) => {

  const path = useRef<SVGPathElement | null>(null)
  const [color, setColor] = useState<ColorFormat>('#22C55E');

useEffect(() => {
  if (time<= 5) {
    setColor('#FF0000');
  } else if(time<=10){
    setColor('#FFFF00');
  }
  else{
    setColor('#22C55E');
  }
}, [time]);
  const { stroke, size, strokeWidth, pathLength } = useCountdown({
    isPlaying: isRunning,
    duration: startFrom,
    colors:color,
    size: 135,
  })
  const [offsetps, setOffsetps] = useState(0);
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
            </div>
          </div>
        </foreignObject>
      </svg>
    </div>
  )
}
export default TimerIndicator
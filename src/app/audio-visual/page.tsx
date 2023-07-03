'use client'
import React, { useRef, useState } from 'react'
import { BiArrowBack as BackArrow } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const AudioVisualRound = () => {
  const videoRef = useRef(null) // Reference to the video element
  const audioRef = useRef(null) //Reference to the video element
  const imageRef = useRef(null) //Reference to the picture element

  const [questionType, setQuestionType] = useState('null')

  const videoSource = 'your-video-source.mp4' // Replace with your video source URL
  const audioSource = 'your-audio-source.mp3' // Replace with your audio source URL
  const imageSource = 'your-image-source.jpg' // replace with your image source URL

  //Function to determine which section to display based on the question type
  const renderContent = () => {
    if (questionType === 'video') {
      return (
        <div className='w-3/4 max-w-md h-100 bg-[#4E4545]'>
          <video
            ref={videoRef}
            src={videoSource}
            className='w-full h-full'
            controls
          />
        </div>
      )
    } else if (questionType === 'audio') {
      return (
        <div className='w-3/4 max-w-md h-100 bg-[#4E4545]'>
          <audio
            ref={audioRef}
            src={audioSource}
            className='w-full h-full'
            controls
          />
        </div>
      )
    } else if (questionType === 'image') {
      return (
        <div
          className='w-3/4 max-w-md h-[350px] bg-[#EFEFF0]'
          style={{
            display: 'flex',
            width: '100%',
            maxWidth: '535px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img ref={imageRef} src={imageSource} className='w-full h-full' />
        </div>
      )
    }
  }

  return (
    <div className='h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800'>
      <div className='flex flex-col w-full'>
        {/* Start navbar */}
        <div className='bg-gradient-to-br from-[#C77DFF] to-[#000000] h-14 w-full flex justify-between items-center'>
          <div className='text-white-300 text-gray-200 text-bold text-4xl'>
            <button className='self-start'>
              <BackArrow size={30} color='#FFFFFF' />
            </button>
          </div>

          <div className='flex justify-center items-center'>
            <span className='text-white font-bold text-4xl'>
              Audio Visual Round
            </span>
          </div>

          <div>
            <button>
              <AiOutlineClose size={30} color='#FFFFFF' />
            </button>
          </div>
        </div>
        {/* End navbar */}

        {/* Main content */}
        <div className='flex flex-col items-center justify-center h-full  space-y-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64'>
          {/* Display the appropriate content based on question type */}
          {renderContent()}

          {/* Next button */}
          <Link
            href='/audio-visual1'
            className='bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 mt-4'
            style={{ backgroundColor: '#3A00E5' }}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AudioVisualRound

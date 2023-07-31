'use client'
import React, { useRef, useState, useEffect } from 'react'
import { BiArrowBack as BackArrow } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import useRequest from '../../../utils/useQuestionRequest'
import Navbar from '@/components/Navbar'

const AudioVisualRound1 = () => {
  const searchParams = useSearchParams()
  const roundId = searchParams.get('roundId')
  const questionNumber = searchParams.get('questionNumber')
  const round_id = roundId !== null ? parseInt(roundId) : 0
  const questionNum = questionNumber !== null ? parseInt(questionNumber) : 0
  const router = useRouter()

  const { question } = useRequest(questionNum, round_id)
  console.log('question data from audiovisualquestion fetcher : ', question)

  const videoRef = useRef<HTMLVideoElement | null>(null) // Reference to the video elements.
  const audioRef = useRef<HTMLAudioElement | null>(null) // Reference to the audio elements.
  const imageRef = useRef<HTMLImageElement | null>(null) // Reference to the image elements.

  const videoSource = 'your-video-source.mp4' // Replace with your video source URL.
  const audioSource = 'your-audio-source.mp3' // Replace with your audio source URL.
  const imageSource = question?.uri // Replace with your image source URL.

  console.log('image uri : ', imageSource)

  useEffect(() => {
    // Automatically play the video when the question type is set to 'video'
    if (question?.questionType === 'video' && videoRef.current) {
      videoRef.current.play()
    }

    // Automatically play the audio when the question type is set to 'audio'
    if (question?.questionType === 'audio' && audioRef.current) {
      audioRef.current.play()
    }
    // No autoplay for image question type
  }, [question?.questionType])

  const handleClick = () => {
    router.push(
      `/audioVisual2?questionNumber=${questionNum}&roundId=${round_id}`
    )
  }

  return (
    <div className='h-screen w-screen overflow-hidden flex bg-gray-900 bg-gradient-to-b from-gray-100 to-purple-800'>
      <div className='flex flex-col w-full'>
        {/* Start navbar */}
        <Navbar title='Audio Visual Round' isBackArrow={true} />
        {/* End navbar */}

        {/* Main content */}
        <div className='flex flex-col items-center justify-center h-full  space-y-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64'>
          {/* Display the appropriate content based on question type */}
          {question?.questionType === 'image' ? (
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
              {/* <Image src={imageSource} alt='picture' className='w-full h-full' /> */}
              <Image
                src={question?.uri}
                alt='picture'
                className='w-full h-full'
                width='400'
                height='400'
              />
            </div>

          ) : question?.questionType === 'video' ? (
            <div className='w-3/4 max-w-md h-100 bg-[#4E4545]'>
              <video
                ref={videoRef}
                src={question?.uri}
                className='w-full h-full'
                controls //Add the controls attribute for video playback controls.
              />
            </div>

          ) : question?.questionType === 'audio' ? (
            <div>
              <audio
                ref={audioRef}
                src={question?.uri}
                className='w-full h-full'
                controls //Add the controls attribute for audio playback controls.
              />
            </div>
            
          ) : (
            <></>
          )}

          {/* Next button */}
          <button
            className='bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 mt-4'
            style={{ backgroundColor: '#3A00E5' }}
            onClick={() => handleClick()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
export default AudioVisualRound1

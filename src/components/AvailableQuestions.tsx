'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import CloseIconButton from './CloseIconButton'
type AvailableProps = {
  isMultipleQuestionsPage?: boolean
}
const AvailableQuestions = (props: AvailableProps) => {
  const { isMultipleQuestionsPage } = props

  const totalQuestions = 40 //Total number of questions
  const [numRows, setNumRows] = useState(5)
  //this number determines how many rows are shown
  const [numCols, setNumCols] = useState(10)
  //this number determines how many columns are shown

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNumCols(8) // Set 10 columns for large screens
        setNumRows(5)
      } else {
        setNumCols(5) // Set 5 columns for small screens
        setNumRows(8)
      }
    }
    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize)
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Generate the grid of numbers
  const grid = []
  let count = 1
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numCols; j++) {
      if (count <= totalQuestions) {
        row.push(count++)
      } else {
        break
      }
    }
    grid.push(row)
  }
  return (
    <div className='flex flex-row h-full'>
      <div className='w-[70%] ml-24 mt-8 '>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            {isMultipleQuestionsPage && (
              <span className='text-3xl lg:text-5xl p-4'>
                Multiple Choice question
              </span>
            )}
            <div className='flex'>
              <span className='bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white p-2 rounded-lg text-xl my-4 ml-5'>
                Round for: Red house{' '}
                <button className='ml-4 mr-2 mb-1 bg-red-500 w-12 h-6 rounded-xl py-2'></button>
              </span>
            </div>
          </div>
        </div>
        <div className='text-3xl lg:text-5xl p-4 '>Available Questions:</div>
        <NumberGrid grid={grid} />
      </div>
      {/* starting second part  */}
      <div className='flex flex-col w-[30%] gap-12  '>
        {/* top part of right side */}
        <div className='flex flex-col items-center bg-gray-900 bg-gradient-to-b from-gray-700 to-purple-900 text-white mt-4 mr-8 rounded-lg pl-3 pr-2 py-4 ml-auto'>
          <span className='font-italiana text-xl'>Next question for:</span>
          <span>
            Blue house{' '}
            <button className='ml-2 bg-blue-500 w-12 h-6 rounded-xl py-2'></button>
          </span>
        </div>
        {/* end of top part of right side */}
        <div className='left-32 lightbulbside relative'>
          <Image
            src='/images/file1.svg'
            alt='some filings'
            width={400}
            height={400}
            className='mx-0 w-full max-h-96 left-4'
          />
        </div>
      </div>
    </div>
  )
}
type NumberGridProps = {
  grid: number[][]
}
const NumberGrid = ({ grid }: NumberGridProps) => {
  const [clickedButtons, setClickedButtons] = useState<number[]>([])
  const handleClick = (number: number) => {
    setClickedButtons((prevButtons: number[]) => [...prevButtons, number])
  }
  return (
    <div className='flex flex-col gap-4 lg:gap-6 ml-0 mt-4 w-full mb-4 lg:mb-10'>
      {grid.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex flex-row justify-between md:justify-start gap-3 md:gap-4'
        >
          {row.map((number) => (
            <div key={number} className='relative flex items-center'>
              {clickedButtons.includes(number) && (
                <div className=' absolute z-50 pt-3'>
                  <CloseIconButton />
                </div>
              )}
              <div className='relative z-20 pl-2'>
                <button
                  className={`px-2 mr-2 rounded-2xl rounded-bl-none w-18 md:w-20 text-6xl font-sansi font-semibold italic border-2 border-black ${
                    clickedButtons.includes(number)
                      ? ' bg-gray-500 text-black'
                      : 'bg-blue-600  text-white'
                  }`}
                  onClick={() => handleClick(number)}
                >
                  {number}
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default AvailableQuestions

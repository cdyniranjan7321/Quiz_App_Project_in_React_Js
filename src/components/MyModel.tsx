'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { RoundI } from '../../types'

type MyModelProps = {
  setModel: Function
  rounds: RoundI[]
}

const MyModel = (props: MyModelProps) => {
  const { setModel, rounds } = props
  const router = useRouter()

  const handleClick = (roundName: String, round: RoundI) => {
    router.push(
      `/rapidFire?totalquestions=${round.totalquestions}&roundId=${round.id}&set=${roundName}`
    )
  }

  return (
    <div className='absolute w-full h-screen flex justify-center items-center z-50 '>
      <div className=' absolute backdrop-blur-md  w-[78%] h-[65%] border-2 border-purple-500 rounded-md'>
        <button
          className='absolute right-3 mt-4 mr-3'
          onClick={() => setModel(false)}
        >
          <AiOutlineClose className='text-white text-4xl text-bold ' />
        </button>
        <div className='mt-[5%] '>
          <button className='text-white  relative text-5xl   ml-[40%]'>
            Set Selection
          </button>
          <div className='  flex flex-col text-black font-bold text-2xl pt-5 '>
            {rounds.map((round) => {
              return (
                round.issubcategory && (
                  <button
                    key={round.id}
                    className=' bg-white w-[18%] h-16 font-bold  rounded-md ml-[40%] mt-5 '
                    onClick={() => {
                      handleClick(round.roundname, round)
                    }}
                  >
                    {round.roundname}
                  </button>
                )
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyModel

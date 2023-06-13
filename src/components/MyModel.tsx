"use client"
import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

type MyModelProps = {
  setModel: Function
}

const MyModel = (props: MyModelProps) => {
  const { setModel } = props
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
            <button className=' bg-white w-[18%] h-16 ml-[40%]  rounded-md '>
              Set A
            </button>
            <button className=' bg-white w-[18%] h-16 font-bold  rounded-md ml-[40%] mt-5 '>
              Set B
            </button>
            <button className='  bg-white w-[18%] font-bold h-16 ml-[40%]  rounded-md mt-5'>
              Set C
            </button>
            <button className=' bg-white w-[18%]  font-bold h-16 ml-[40%]  rounded-md mt-5 mb-7'>
              Set D
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyModel

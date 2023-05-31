"use client"
import React, { useState } from "react"
import { BiArrowBack as BackArrow } from "react-icons/bi"
import { AiFillSetting as Setting } from "react-icons/ai"
import { AiOutlineHome as Home } from "react-icons/ai"

const SelectionPage = () => {
  return (
    <div className='  bg-fixed bg-gradient-to-b from-[#C77DFF] to-[#3C096C] '>
      <div className='bg-purple-800  text-center  w-full h-[13%]'>
        <h1 className='text-4xl font-bold pt-2 pb-1 text-white'> Quiz App</h1>
      </div>

      <div className='flex justify-between items-center  '>

        <div className=' bg-purple-500 w-[8%] h-screen rounded-sm'>
          <div className='font-white-300   text-gray-200 text-bold pl-6 pt-5 text-4xl'>
          <button> <BackArrow /></button> 
          </div>
          <div className='pt-7 pl-6   text-gray-200 text-bold text-4xl'>
           <button ><Home /></button>
          </div>
          <div className='pt-7 pl-6 text-bold  text-gray-200 text-4xl'>
            <button><Setting /></button>
          </div>
        </div>

        <div  className=" flex-col pt-10 pl-10 ">
        <h1 className="text-black-500 text-3xl">  Round Selection</h1>
        <h2  className="bg-white rounded-md mt-6 pl-2 text-bold  pt-2 text-2xl h-12 w-[80%]"> <button>General Round</button></h2>
        <h3  className="bg-white rounded-md pl-3  mt-6 h-6 w-25 text-2xl  pt-3 h-14 w-[60%] "><button> Rapid Fire</button></h3>
        <h4  className="bg-white rounded-md   pl-4 mt-6 h-6 w-25  text-2xl h-14 pt-3 w-30"><button> Multiple Question</button></h4>
        <h5  className="bg-white rounded-md  pl-2 mt-5 h-6 w-25 text-2xl h-14 pt-3 w-30  pr-2"> <button>General Knowledge</button></h5>
        <div className="pl-12 pt-12  ">
          <button className="text-2xl font-bold text-blue-500 h-10 w-20  bg-yellow-500 "> Next</button>
        </div>
        </div>
        <div>
        <img className=' p-7 w-[90%] h-[60%]'
                  src='./Other 07.png '
                  alt='' />
        </div>
        

      </div>
    
     
      <div className="text-3xl text-white-300 bg-purple-500"> </div>
    </div>
  )
}

export default SelectionPage

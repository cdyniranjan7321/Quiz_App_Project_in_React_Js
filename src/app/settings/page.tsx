"use client"
import Navbar from "@/components/Navbar"
import { AiFillSetting as Setting } from "react-icons/ai"
import React, {ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"

const Settings = () => {
const router=useRouter()
const [numberOfTeams, setNumberOfTeams] = useState("")

const handleadditionalsettingsClick = (numberOfTeams:number) => {
  router.push(`/additionalsettings?numberOfTeams=${numberOfTeams}`)
}
const handleNumberOfTeamsChange = (event: ChangeEvent<HTMLInputElement>) => {
  setNumberOfTeams(event.target.value);
};

  return (
    <div className=' bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E] h-screen w-full'>
      <Navbar title='Settings' />

      <div className=' flex flex-col   items-center justify-center  pt-[16%] w-full'>
        <div className='  flex justify-center gap-3 items-center'>
          <span className='text-2xl text-white  '> Number of Teams:</span>
         
          <input
            type='number'
            className='rounded-md px-2 py-1  text-xl  h-[100%] w-[50%]  outline-none '
            id=''
            placeholder='Enter number of teams'max={10} value={numberOfTeams} onChange={handleNumberOfTeamsChange}
          />
        </div>
        <div className='flex-row h-[9vh] w-[38%] bg-[#3C096C] flex justify-center items-center mt-8 rounded-full'>
          <button className='text-white text-3xl' onClick={()=>handleadditionalsettingsClick(parseInt(numberOfTeams))}> Additional settings</button>
          <div className='text-white pl-4 text-3xl '>
            <Setting />
          </div>
        </div>
        <button className='mt-[6%] bg-[#57CC99] h-10 w-[6%] text-bold text-2xl rounded-full outline-none border-none'>
          Save
        </button>
      </div>
    </div>
  )
}

export default Settings

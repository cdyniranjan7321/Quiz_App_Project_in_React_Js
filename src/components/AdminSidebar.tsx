"use client";
import React from "react";
import Link from "next/link";
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'
import Image from 'next/image'

const AdminSidebar = () => {

  return (
    <div className="'h-screen bg-blue-gray-900 to-purple-950' h-screen w-screen flex flex-row justify-between overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-950">
      <div className='flex flex-col bg-[#300559] text-white w-[15%] rounded-3xl rounded-bl-none rounded-tl-none'>
        <h1 className='text-5xl bold-md pl-11 pt-[20%] pb-2'>Quiz</h1>
        <hr></hr>
        {/* Sidebar navigation */}
        <div className='text-sm  flex flex-col pt-[15%] mt-[30%] pb-5 pl-11 '>
          {/* Use Link component from Next.js */}
          <Link href="/adminhome">
          <button className='pt-4 flex flex-row'>
            <Home size={30} className=' pr-2 pb-2' /> Home
          </button>
          </Link>

          <Link href="/adminrounds">
          <button className='pt-4  flex flex-row'>
            <MdExtension size={28} className='pr-2 pb-2' />
            Rounds
          </button>
          </Link>
          <Link href="/questionsettings">
          <button className='pt-4  flex flex-row'>
            <Quesation size={28} className='pr-1 pb-2' />
            Question
          </button>
          </Link>
          <Link href="/teams">
          <button className='pt-4  flex flex-row'>
            <Team size={34} className='pr-2 pb-3 text-white ' />
            Teams
          </button>
          </Link>
        </div>
        <div className=' pt-[72%] flex flex-col   text-sm'>

          <Link href="/settings">
          <button className='pb-3  flex flex-row  pl-10'>
            <Setting size={28} className='pr-2 pb-2' />
            Settings
          </button>
          </Link>
          <hr></hr>
          <Link href="/login">
          <button className='mb-[17%]  pl-11 pt-3  flex flex-row'>
            <MdLogout size={28} className='pr-2 pb-2' />
            Logout
          </button>
          </Link>
        </div>
      </div>
      <div className="">
          <div className='flex flex-row pt-6 mr-8'>
            <Image
              src='/images/11.svg'
              alt='Admin im'
              width={40}
              height={40}
              className='mr-2'
            />
            <h1 className='text-2xl pt-2 text-gray'>Admin</h1>
          </div>
        </div>
    </div>
  );
};
export default AdminSidebar;

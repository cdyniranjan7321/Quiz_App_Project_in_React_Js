import React from 'react'
import { BiArrowBack as BackArrow } from 'react-icons/bi'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className=' bg-gradient-to-r from-[#10002B] to-[#300559] w-[5%] h-screen rounded-sm top-0 absolute'>
      <div className='font-white-300   text-gray-200 text-bold pl-4 pt-5 text-4xl'>
        <button>
          {' '}
          <BackArrow />
        </button>
      </div>
      <div className='pt-7 pl-4   text-gray-200 text-bold text-4xl'>
        <button>
          <Home />
        </button>
      </div>
      <div className='pt-7 pl-4 text-bold  text-gray-200 text-4xl'>
        <button>
          <Setting />
        </button>
      </div>
    </div>
  )
}

export default Sidebar

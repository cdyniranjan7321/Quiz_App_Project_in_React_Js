'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillSetting as Setting } from 'react-icons/ai'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { AiOutlineQuestion as Quesation } from 'react-icons/ai'
import { AiOutlineTeam as Team } from 'react-icons/ai'
import { AiOutlineEdit as Edit } from 'react-icons/ai'
import { AiOutlineUpload as Upload } from 'react-icons/ai'
import { MdExtension } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { BiArrowBack as BackArrow } from 'react-icons/bi'


const FiftyFiftyRound3 = () => {
  // State variables to keep track of the correct trics for each option
  const [showcorrecttick1, setshowcorrecttick1] = useState(false)
  const [showcorrecttick2, setshowcorrecttick2] = useState(false)
  const [showcorrecttick3, setshowcorrecttick3] = useState(false)
  const [showcorrecttick4, setshowcorrecttick4] = useState(false)

   // Event handlers to set the correct tick state vairables 
  const handlecorrectclick1 = () => {
    setshowcorrecttick1(true)
  }
  const handlecorrectclick2 = () => {
    setshowcorrecttick2(true)
  }
  const handlecorrectclick3 = () => {
    setshowcorrecttick3(true)
  }
  const handlecorrectclick4 = () => {
    setshowcorrecttick4(true)
  };

  // Dummy data for rounds 
  const dummyData = [
    { id: 1, roundName: 'SET A' },
    { id: 2, roundName: ' SET B' },
    { id: 3, roundName: ' SET C' },
    { id: 3, roundName: ' SET D' },
    // Add more data as needed
  ];

  // Return thre JSX elements for rendering 
  return (
    <div className='h-screen w-screen flex flex-row    overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-950'>
      <div className='flex flex-col bg-[#300559] text-white w-[15%] rounded-3xl rounded-bl-none rounded-tl-none'>
        <h1 className='text-5xl bold-md pl-11 pt-[20%] pb-2'>Quiz</h1>
        <hr></hr>
        <div className='text-sm  flex flex-col pt-[15%] mt-[30%] pb-5 pl-11 '>
          <button className='pt-4 flex flex-row'>
            <Home size={30} className=' pr-2 pb-2' /> Home
          </button>
          <button className='pt-4  flex flex-row'>
            <MdExtension size={28} className='pr-2 pb-2' />
            Rounds
          </button>
          <button className='pt-4  flex flex-row'>
            <Quesation size={28} className='pr-1 pb-2' />
            Question
          </button>
          <button className='pt-4  flex flex-row'>
            <Team size={39} className='pr-2 pb-3 text-white ' />
            Teams
          </button>
        </div>
        <div className=' pt-[72%] flex flex-col   text-sm'>
          <button className='pb-3  flex flex-row  pl-10'>
            <Setting size={28} className='pr-2 pb-2' />
            Settings
          </button>
          <hr></hr>

          <button className='mb-[17%]  pl-11 pt-3  flex flex-row'>
            <MdLogout size={28} className='pr-2 pb-2' />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content*/}
      <div className='flex flex-col w-[65%]'>
        <div className='ml-[115%] w-11'>
          <div className='flex flex-row  pt-2  '>
            <Image
              src='/images/11.svg'
              alt='Admin im'
              width={30}
              height={30}
              className='mr-2'
            />
            <h1 className='text-2xl pt-2 text-gray'>Admin</h1>
          </div>
        </div>

        <div className='pt-2 pl-7  '>
          <div className='bg-gray-600  w-[130%] rounded-md  pr-10  pt-1  '>
            <div className=' text-4xl text-white font-bold pb-2 mt-5 flex'>
              <BackArrow size={44} className='pl-4 ' />
              <h1 className='pl-[38%]'> 50/50 Round</h1>
            </div>
            <div className='pl-[12%]'>
              <hr className='pb-2 mt-1  w-[90%]'></hr>
              <div className='flex flex-col'>
                <div className='flex flex-row pl-1 mt-1'>
                  <label className='text-white text-3xl  font-bold'>
                    Question 1:
                  </label>
                  <input
                    type='text'
                    className='bg-white ml-3 w-[70%] h-9 rounded-md'
                  ></input>
                </div>
                <div className='flex flex-row text-2xl text-white  pt-3'>
                  <h2 className='font-bold text-2xl'> Answer1:</h2>
                  <div className='flex flex-col '>
                    <div className='flex flex-row pl-6'>
                      <div className='flex flex-col'>
                        <div className='flex text-2xl '>
                          <h1 className='text-2xl font-bold'> option 1:</h1>
                          <input
                            type='text'
                            className='h-9 w-[35%] rounded-md ml-2 text-black '
                          ></input>
                        </div>
                        <div className=' flex flex-row pt-1  pl-[39%]'>
                          <div
                            className='bg-white w-6 h-4 rounded-md z-0'
                            onClick={handlecorrectclick1}
                          >
                            <TiTick
                              className={` ${
                                showcorrecttick1
                                  ? 'z-10 bg-blue-500'
                                  : 'z-10 bg-blue-500 hidden'
                              }`}
                            />
                          </div>
                          <h2 className='text-sm pl-1'>Correct Answer</h2>
                        </div>
                        <div className=' flex flex-row  pl-[39%]'>
                          <div className='bg-white w-6 h-4 rounded-md'></div>
                          <h2 className='text-sm pl-1'>50/50 Selection</h2>
                        </div>
                      </div>
                      <div className='flex flex-col ml-2'>
                        <div className='flex '>
                          <h1 className='text-2xl font-bold'> option 2:</h1>
                          <input
                            type='text '
                            className='h-9 w-[35%] rounded-md ml-2 text-black '
                          ></input>
                        </div>
                        <div className=' flex flex-row pt-1  pl-[39%]'>
                          <div
                            className='bg-white w-6 h-4 rounded-md z-0'
                            onClick={handlecorrectclick2}
                          >
                            <TiTick
                              className={` ${
                                showcorrecttick2
                                  ? 'z-10 bg-blue-500'
                                  : 'z-10 bg-blue-500 hidden'
                              }`}
                            />
                          </div>
                          <h2 className='text-sm pl-1'>Correct Answer</h2>
                        </div>
                        <div className=' flex flex-row pt- pl-[39%]'>
                          <div className='bg-white w-6 h-4 rounded-md'></div>
                          <h2 className='text-sm pl-1'>50/50 Selection</h2>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-row pt-1 pl-6 '>
                      <div className='flex flex-col'>
                        <div className='flex '>
                          <h1 className='text-2xl font-bold'> option 3:</h1>
                          <input
                            type='text '
                            className='h-9 w-[35%] rounded-md ml-2 text-black '
                          ></input>
                        </div>
                        <div className=' flex flex-row pt-1  pl-[39%]'>
                          <div
                            className='bg-white w-5 h-4 rounded-md z-0'
                            onClick={handlecorrectclick3}
                          >
                            <TiTick
                              className={` ${
                                showcorrecttick3
                                  ? 'z-10 bg-blue-500'
                                  : 'z-10 bg-blue-500 hidden'
                              }`}
                            />
                          </div>
                          <h2 className='text-sm pl-1'>Correct Answer</h2>
                        </div>
                        <div className=' flex flex-row pt-  pl-[39%]'>
                          <div className='bg-white w-5 h-4 rounded-md'></div>
                          <h2 className='text-sm pl-1'>50/50 Selection</h2>
                        </div>
                      </div>
                      <div className='flex flex-col '>
                        <div className='flex '>
                          <h1 className='text-2xl font-bold'> option 4:</h1>
                          <input
                            type='text '
                            className='h-9 w-[35%] rounded-md ml-2  text-black Ttexr-2xl'
                          ></input>
                        </div>
                        <div className=' flex flex-row pt-1 pl-[39%]'>
                          <div
                            className='bg-white w-6 h-4 rounded-md z-0'
                            onClick={handlecorrectclick4}
                          >
                            <TiTick
                              className={` ${
                                showcorrecttick4
                                  ? 'z-10 bg-blue-500'
                                  : 'z-10 bg-blue-500 hidden'
                              }`}
                            />
                          </div>
                          <h2 className='text-sm pl-1'>Correct Answer</h2>
                        </div>
                        <div className=' flex flex-row  pl-[39%]'>
                          <div className='bg-white w-6 h-4 rounded-md'></div>
                          <h2 className='text-sm pl-1'>50/50 Selection</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addition */}
              <div className='flex flex-row pl-1 mt-1'>
                <label className='text-white text-3xl  font-bold'>
                  Question 2:
                </label>
                <input
                  type='text'
                  className='bg-white ml-3 w-[70%] h-9 rounded-md'
                ></input>
              </div>
              <div className='flex flex-row text-2xl text-white  pt-3'>
                <h2 className='font-bold text-1xl'> Answer2:</h2>
                <div className='flex flex-col '>
                  <div className='flex flex-row pl-6'>
                    <div className='flex flex-col'>
                      <div className='flex text-2xl '>
                        <h1 className='text-2xl font-bold'> option 1:</h1>
                        <input
                          type='text'
                          className='h-9 w-[35%] rounded-md ml-2 text-black '
                        ></input>
                      </div>
                      <div className=' flex flex-row pt-1 pl-[39%]'>
                        <div
                          className='bg-white w-6 h-4 rounded-md z-0'
                          onClick={handlecorrectclick1}
                        >
                          <TiTick
                            className={` ${
                              showcorrecttick1
                                ? 'z-10 bg-blue-500'
                                : 'z-10 bg-blue-500 hidden'
                            }`}
                          />
                        </div>
                        <h2 className='text-sm pl-1'>Correct Answer</h2>
                      </div>
                      <div className=' flex flex-row   pl-[39%]'>
                        <div className='bg-white w-6 h-4 rounded-md'></div>
                        <h2 className='text-sm pl-1'>50/50 Selection</h2>
                      </div>
                    </div>
                    <div className='flex flex-col ml-2'>
                      <div className='flex '>
                        <h1 className='text-2xl font-bold'> option 2:</h1>
                        <input
                          type='text '
                          className='h-9 w-[35%] rounded-md ml-2 text-black '
                        ></input>
                      </div>
                      <div className=' flex flex-row pt-1  pl-[39%]'>
                        <div
                          className='bg-white w-6 h-4 rounded-md z-0'
                          onClick={handlecorrectclick2}
                        >
                          <TiTick
                            className={` ${
                              showcorrecttick2
                                ? 'z-10 bg-blue-500'
                                : 'z-10 bg-blue-500 hidden'
                            }`}
                          />
                        </div>
                        <h2 className='text-sm pl-1'>Correct Answer</h2>
                      </div>
                      <div className=' flex flex-row   pl-[39%]'>
                        <div className='bg-white w-6 h-4 rounded-md'></div>
                        <h2 className='text-sm pl-1'>50/50 Selection</h2>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row pt-1 pl-6 '>
                    <div className='flex flex-col'>
                      <div className='flex '>
                        <h1 className='text-2xl font-bold'> option 3:</h1>
                        <input
                          type='text '
                          className='h-9 w-[35%] rounded-md ml-2 text-black '
                        ></input>
                      </div>
                      <div className=' flex flex-row pt-1  pl-[39%]'>
                        <div
                          className='bg-white w-5 h-4 rounded-md z-0'
                          onClick={handlecorrectclick3}
                        >
                          <TiTick
                            className={` ${
                              showcorrecttick3
                                ? 'z-10 bg-blue-500'
                                : 'z-10 bg-blue-500 hidden'
                            }`}
                          />
                        </div>
                        <h2 className='text-sm pl-1'>Correct Answer</h2>
                      </div>
                      <div className=' flex flex-row   pl-[39%]'>
                        <div className='bg-white w-5 h-4 rounded-md'></div>
                        <h2 className='text-sm pl-1'>50/50 Selection</h2>
                      </div>
                    </div>
                    <div className='flex flex-col '>
                      <div className='flex  '>
                        <h1 className='text-2xl font-bold'> option 4:</h1>
                        <input
                          type='text '
                          className='h-9 w-[35%] rounded-md ml-2  text-black Ttexr-2xl'
                        ></input>
                      </div>
                      <div className=' flex flex-row pt-1 pl-[39%]'>
                        <div
                          className='bg-white w-6 h-4 rounded-md z-0'
                          onClick={handlecorrectclick4}
                        >
                          <TiTick
                            className={` ${
                              showcorrecttick4
                                ? 'z-10 bg-blue-500'
                                : 'z-10 bg-blue-500 hidden'
                            }`}
                          />
                        </div>
                        <h2 className='text-sm pl-1'>Correct Answer</h2>
                      </div>
                      <div className=' flex flex-row  pl-[39%]'>
                        <div className='bg-white w-6 h-4 rounded-md'></div>
                        <h2 className='text-sm pl-1'>50/50 Selection</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 pb-4'>
              <button className='bg-[#417468] text-3xl text-white  w-[14%] rounded-2xl flex justify-center  ml-[45%] '>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiftyFiftyRound3;

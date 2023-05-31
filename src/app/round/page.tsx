import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Round = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
      <div  className=" flex-col pt-10 pl-10 ">
        <h1 className="text-black-500 text-3xl">  Round Selection</h1>
        <h2  className="bg-white rounded-md mt-6 pl-2 text-bold  pt-1 text-2xl h-9 w-[80%]"> <button>General Round</button></h2>
        <h3  className="bg-white rounded-md pl-3  mt-6 text-2xl  pt- h-15 w-[60%] "><button> Rapid Fire</button></h3>
        <h4  className="bg-white rounded-md   pl-2 mt-6  text-2xl h-15  w-[90%]"><button> Multiple Question</button></h4>
        <h5  className="bg-white rounded-md  pl-2 mt-5 text-2xl h-15  w-30  pr-2"> <button>General Knowledge</button></h5>
        <div className="pl-12 pt-12  ">
          <button className="text-2xl font-bold text-blue-500 h-10 w-20  bg-yellow-500 "> Next</button>
        </div>
        </div>
        <div>
        <img className=' p-7 w-[90%] h-[60%]'
                  src='./Other 07.png '
                  alt='' />
        </div>
        

        <div className="text-3xl text-white-300 bg-purple-500"> </div>
      </div>
  )
}

export default Round

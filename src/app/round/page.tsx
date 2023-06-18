'use client'
import MyModel from '@/components/MyModel'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Round } from '@prisma/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import Router, { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

async function getRound() {
  const res = await fetch(`http://localhost:3000/api/getRound`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Round = async () => {
  const router = useRouter()
  const [showModel, setModel] = useState(false)

  const [isSidebarShown, setIsSidebarShown] = useState(true)
  // this is used to have boolean value true for issidebarshown
  const toggleMenu = () => {
    setIsSidebarShown(!isSidebarShown)
    // this function changes the value of issidebarshown
  }
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 768) {
        setIsSidebarShown(false)
        //this makes the sidebar hidden
      } else {
        setIsSidebarShown(true)
      }
    }

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleRapidFireModel = (roundName: String, round: Round) => {
    if (roundName === 'Rapid-fire') {
      setModel(true)
    } else {
      router.push(
        `/${roundName.toLocaleLowerCase()}?totalquestions=${
          round.totalquestions
        }`
      )
    }
  }
  const [rounds, setRounds] = useState([])
  useEffect(() => {
    const myRound = async () => {
      const availableRounds = await getRound()
      console.log('round : ', availableRounds)
      setRounds(availableRounds)
    }
    myRound()
  }, [])

  return (
    <div className=' h-screen w-screen z-0 '>
      {/* this is to make the div have full screen as the page */}

      <div className='absolute left-0 top-0 z-20 w-full'>
        {/* this makes from left side 0 and from top side 0 with absolute */}
        <Navbar
          title='Select Round'
          toggleMenu={toggleMenu}
          isSidebarShown={isSidebarShown}
        />
      </div>
      <div className='absolute left-0 top-0 z-30 h-full'>
        <Sidebar isSidebarShown={isSidebarShown} />
      </div>
      <div className='absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]'>
        {/* this makes the item have full width and height as its container */}

        {showModel && <MyModel setModel={setModel} rounds={rounds} />}

        <div className='flex flex-row justify-around align-items-center pt-[12%] md:pl-[12%]'>
          <div className='flex-col justify-content:center align-items:center pt-11'>
            {rounds.map((round: Round) => {
              return (
                !round.issubcategory && (
                  <button
                    className='bg-white rounded-md p-2 mt-6 text-2xl h-15 w-[60%]'
                    key={round.id}
                    onClick={() => handleRapidFireModel(round.roundname, round)}
                  >
                    {round.roundname} Round
                  </button>
                )
              )
            })}
          </div>

          <div className=' hidden md:block z-40'>
            <Image
              height='400'
              width='400'
              src='/images/computer1.svg'
              alt='comp'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Round

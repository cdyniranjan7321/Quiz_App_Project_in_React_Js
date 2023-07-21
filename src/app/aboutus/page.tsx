'use client'
import React,{useEffect,useState} from 'react'

import { AiFillSetting as Setting } from "react-icons/ai";
import Image from 'next/image'
import { AiOutlineHome as Home } from 'react-icons/ai'
import { BiArrowBack as BackArrow } from 'react-icons/bi'
import BackArrowButton from '@/components/BackArrowButton';
import Link from 'next/link';

const About = () => {
  const [aboutUsData, setAboutUsData] = useState<Array<{ id: number; Title: string; organization: string; field1: string; field2: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getAboutUs'); // Make a GET request to the server-side API route
        const data = await response.json();
        if (response.ok) {
          setAboutUsData(data.aboutUs);
        } else {
          setError(data.error || 'Failed to fetch data');
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const Title = aboutUsData.length > 0 ? aboutUsData[0].Title : '';
  const organization = aboutUsData.length > 0 ? aboutUsData[0].organization : '';
  const field1 = aboutUsData.length > 0 ? aboutUsData[0].field1 : '';
  const field2 = aboutUsData.length > 0 ? aboutUsData[0].field2 : '';
  const handleBackClick=()=>{
    window.history.back();
  }
  return (
    <div className=' h-screen w-full z-0 overflow-x-hidden overflow-y-hidden '>
      <div className='top-0 left-0 z-0 w-full h-full bg-gradient-to-b from-[#EED8FF] to-[#3E0C6E]'>
        <div className=' flex justify-between'>
          <div className='absolute flex flex-col pl-5 pt-8'>
          <button onClick={handleBackClick} className='text-white'><BackArrowButton /></button>
            <Link href="/" className=" text-white text-bold text-4xl mt-4">
          <div className="">
            <Home />
          </div>
        </Link>
            <Link href="/settings" className=" text-bold text-white text-4xl mt-4">
          <div className="">
            <Setting />
          </div>
        </Link>
            
          </div>
          <div className='pl-[45%] pt-7   w-screen'>
            <h1 className='text-3xl '>About us </h1>
          </div>
        </div>

        <div className='pl-[43%] pt-[2%]  text-2xl text-black-500'>
          
          <h2>{Title}</h2>
          <h3>{organization}</h3>
        </div>
        <div className='flex flex-row'>
          <div className='w-[40%] h-[70%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-[#6E6BFA] lg:bg-opacity-[45%] blur-2xl rounded-full  ml-[3%] mt-[5%]'></div>

          <div className='h-60 w-70 pl-[40%]'>
            <div className='lightbulbside relative flex   items-center justify-center '>
              <Image
                src='/images/Vectarytexture.svg'
                alt='doll'
                width={260}
                height={200}
              />
            </div>
          </div>
          <div className='flex flex-col ml-[6%]'>
            <div className='h-auto w-[233%] bg-[#343A40] pl-[40%] pt-5 pb-7  text-white rounded-tl-2xl  rounded-bl-2xl'>
              <h1 className='pl-20 pb-3'>About Us</h1>
              <h2>
                {field1}
              </h2>
            </div>
            <div className='pt-3'>
              <div className='h-auto w-[233%] bg-[#343A40] pl-[50%] pt-5 pb-7  text-white rounded-tl-2xl  rounded-bl-2xl'>
                <h1 className='pl-20 pb-3'>project</h1>
                <h2>
                  {field2}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

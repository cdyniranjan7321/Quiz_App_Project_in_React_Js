'use client'
import axios from 'axios'
import {toast} from 'react-toastify'
import React, { useState, ChangeEvent } from 'react'
import Navbar from '@/components/Navbar'
import { useForm } from 'react-hook-form'

const UpdateAboutUs = () => {
  const [organizationTitle, setOrganizationTitle] = useState('')
  const [organizationName, setOrganizationName] = useState('')
  const [organizationfield1, setOrganizationfield1] = useState('')
  const [organizationfield2, setOrganizationfield2] = useState('')
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
    await axios
      .post('/api/createAboutUs', data)
      .then((response) => {
        console.log('response : ', response)
        toast.success('Successfully uploaded about us page!')
      })
      .catch((err) => {
        console.log('err: ', err)
        toast.error('Oops unable to upload questions')
      })
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganizationTitle(e.target.value)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(e.target.value)
  }
  
  const handlefield1Change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOrganizationfield1(e.target.value)
  }

  
  const handlefield2Change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOrganizationfield2(e.target.value)
  }
  return (
    <div className='h-screen w-screen flex flex-col overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      <div className='w-full'>
        <Navbar title='Update Aboutus' isBackArrow={true} />
      </div>
      <div className='flex flex-col bg-white w-[40%] mt-10 ml-[33%] pt-3 rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative pl-4 pr-4 mt-3">
          <input
            type="text"
            id="Title"
            placeholder="Title Name"
            required
            {...register('Title')}
            className='input-field block w-full border border-black border-solid rounded-md p-4 '
            value={organizationTitle}
            onChange={handleTitleChange}
          />
          {organizationTitle && (
            <span className="top-0 left-3 pointer-events-none transition-all duration-300 text-black text-xs bg-white px-1 absolute">Title Name</span>
          )}
        </div>


          <div className='relative mt-3 pl-4 pr-4 '>
            <input
              type='text'
              id='organization'
              placeholder='Organization Name'
              required
              {...register('organization')}
              className='block w-full border border-black border-solid rounded-md p-4'
              value={organizationName}
              onChange={handleNameChange}
            />
            {organizationName && (
              <span className='absolute top-0 left-3 pointer-events-none transition-all duration-300 text-black text-xs bg-white px-1'>Organization Name</span>
            )}
          </div>

          <div className='relative mt-3 pl-4 pr-4'>
            <textarea
              id='f1'
              placeholder='Field 1*'
              required
              {...register('field1')}
              className='block w-full border border-black border-solid rounded-md p-4'
              value={organizationfield1}
              onChange={handlefield1Change}
            />
             {organizationfield1 && (
              <span className='absolute top-0 left-3 pointer-events-none transition-all duration-300 text-black text-xs bg-white px-1'>Field 1</span>
            )}
          </div>
          <div className='relative mt-3 pl-4 pr-4'>
            <textarea
              id='f2'
              placeholder='Field 2*'
              {...register('field2')}
              required
              className=' block w-full border border-black border-solid rounded-md p-4'
              value={organizationfield2}
              onChange={handlefield2Change}
            />
            
            {organizationfield2 && (
              <span className='absolute top-0 left-3 pointer-events-none transition-all duration-300 text-black text-xs bg-white px-1'>Field 2</span>
            )}
          </div>

          <button
            type='submit'
            className='bg-[#57CC99] w-[20%] h-10 rounded-full ml-[43%] mt-[10%] text-2xl mb-10'
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateAboutUs

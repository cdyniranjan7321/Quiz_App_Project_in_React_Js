'use client'
import React, { useState, ChangeEvent } from 'react'
import Navbar from '@/components/Navbar'
import { useForm } from 'react-hook-form'

const GeneralQuestion = () => {
  const [organizationTitle, setOrganizationTitle] = useState('')
  const [organizationName, setOrganizationName] = useState('')

  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log('data: ', data)
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganizationTitle(e.target.value)
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganizationName(e.target.value)
  }

  return (
    <div className='h-screen w-screen flex flex-col overflow-hidden bg-blue-gray-900 bg-gradient-to-b from-gray-100 to-purple-900'>
      <div className='w-full'>
        <Navbar title='UpdatedAboutus' isBackArrow={true} />
      </div>
      <div className='flex flex-col bg-white w-[40%] mt-5 ml-[33%] pt-3 rounded-md'>
        <style>
          {`
          .input-wrapper {
            position: relative;
          }

          .input-field {
            display: block;
            width: 100%;
            padding: 0.5rem;
            border: 1px solid black;
            border-radius: 4px;
          }

          .input-placeholder {
            position: absolute;
            top: -1.5rem;
            left: 0.75rem;
            pointer-events: none;
            transition: all 0.3s;
            color: black;
            font-size: 0.75rem;
            background-color: white;
            padding: 0 0.25rem;
          }

          .input-field:focus + .input-placeholder,
          .input-field:not(:placeholder-shown) + .input-placeholder {
            top: -0.5rem;
            font-size: 0.75rem;
            background-color: white;
            padding: 0 0.25rem;
          }
        `}
        </style>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='input-wrapper pl-4 pr-4'>
            <input
              type='text'
              id='Title '
              placeholder='Title Name'
              required
              {...register('Title')}
              className={`input-field ${organizationTitle ? 'has-value' : ''}`}
              value={organizationTitle}
              onChange={handleTitleChange}
            />
            {organizationTitle && (
              <span className='input-placeholder'>Title Name</span>
            )}
          </div>

          <div className='input-wrapper mt-3 pl-4 pr-4'>
            <input
              type='text'
              id='organization'
              placeholder='Organization Name'
              required
              {...register('organization')}
              className={`input-field ${organizationName ? 'has-value' : ''}`}
              value={organizationName}
              onChange={handleNameChange}
            />
            {organizationName && (
              <span className='input-placeholder'>Organization Name</span>
            )}
          </div>
          <div className='flex flex-col'>
            <textarea
              id='f1'
              placeholder='Field 1*'
              required
              {...register('field1')}
              className='text-md ml-4 mr-4 mt-4 pl-2 pt-2 h-11 border border-black hover:border-black focus:border-black rounded-md'
            />
            <textarea
              id='f2'
              placeholder='Field 2*'
              {...register('field2')}
              required
              className='text-md ml-4 mr-4 mt-3 h-11 pl-2 pt-2 border border-black focus:border-black rounded-md'
            />
          </div>

          <button
            type='submit'
            className='bg-[#57CC99] w-[12%] rounded-full ml-[43%] mt-[10%] mb-3 text-2xl'
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default GeneralQuestion

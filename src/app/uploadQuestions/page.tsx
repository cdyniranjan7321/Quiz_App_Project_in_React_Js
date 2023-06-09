'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import classNames from 'classnames'
import QuestionUploadPopup from '@/components/QuestionUploadPopup'

const UploadQuestions = () => {
  const [round, setRound] = useState('')
  const [modalIsOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log('data : ', data)
    const datas = {
      ...data,
      round,
    }
    console.log('datas : ', datas)

    await axios
      .post('/api/uploadQuestions', datas)
      .then((response) => {
        console.log('response : ', response)
        toast.success('Successfully uploaded questions!')
      })
      .catch((err) => {
        console.log('err: ', err)
        toast.error('Oops unable to upload questions')
      })
  }

  const inputClass = classNames(
    'rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
  )

  return (
    <div className='h-screen w-full flex flex-col  bg-gradient-to-b from-gray-300 to-purple-900 justify-center items-center'>
      <div className=' w-[60%] sm:[90%] h-auto rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700'>
        {modalIsOpen && (
          <QuestionUploadPopup
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            setRound={setRound}
          />
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='!w-[90%] sm:w-[50vh] space-y-6 m-auto mt-4'
        >
          <div className='font-extrabold text-transparent text-3xl text-center bg-clip-text bg-gradient-to-b from-gray-300 to-purple-900 p-4'>
            Upload Questions
          </div>
          {/* <input type='hidden' {...register('round')} value={round} /> */}
          <div className='relative'>
            <input
              type='text'
              className={inputClass}
              {...register('qno')}
              required
            />
            <label className='input-text absolute left-4 top-5 opacity-20'>
              Enter a Question Number <span className='text-[crimson]'>*</span>
            </label>
          </div>
          <div className='relative'>
            <input
              type='text'
              className={inputClass}
              {...register('question')}
              required
            />
            <label className='input-text absolute left-4 top-5 opacity-20'>
              Enter a Question <span className='text-[crimson]'>*</span>
            </label>
          </div>

          {round == 'general' ? (
            <div className='relative'>
              <input
                type='text'
                className={inputClass}
                {...register('answer')}
                required
              />
              <label className='input-text absolute left-4 top-5 opacity-20'>
                Enter answer <span className='text-[crimson]'>*</span>
              </label>
            </div>
          ) : (
            <>
              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('optionA')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Option A <span className='text-[crimson]'>*</span>
                </label>
              </div>

              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('optionB')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Option B <span className='text-[crimson]'>*</span>
                </label>
              </div>

              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('optionC')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Option C <span className='text-[crimson]'>*</span>
                </label>
              </div>

              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('optionD')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Option D <span className='text-[crimson]'>*</span>
                </label>
              </div>

              <div className='relative'>
                <select
                  {...register('answer')}
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600'
                >
                  <option value='optionA'>Option A</option>
                  <option value='optionB'>Option B</option>
                  <option value='optionC'>Option C</option>
                  <option value='optionD'>Option D</option>
                </select>
              </div>
            </>
          )}
          <input
            type='submit'
            className='  w-28 bg-gradient-to-b from-gray-300 to-purple-900 text-white text-xl p-4 rounded-lg cursor-pointer flex items-center justify-center m-auto uppercase tracking-wider font-bold hover:text-[#303237] hover:bg-gradient-to-t hover:to-purple-900 hover:from-gray-300'
          />
        </form>
      </div>
    </div>
  )
}

export default UploadQuestions

'use client'
import axios from 'axios'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import QuestionUploadPopup from '@/components/QuestionUploadPopup'

const UploadQuestions = async () => {
  const [roundId, setRoundId] = useState(2)
  const [modalIsOpen, setIsOpen] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    const id = parseInt(data.id)
    const datas = {
      ...data,
      roundId,
      id,
    }
    console.log('datas : ', datas)

    await axios
      .post('/api/createQuestion', datas)
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
            setRoundId={setRoundId}
          />
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='!w-[90%] sm:w-[50vh] space-y-6 m-auto mt-4'
        >
          <div className='font-extrabold text-transparent text-3xl text-center bg-clip-text bg-gradient-to-b from-gray-300 to-purple-900 p-4'>
            Upload Questions
          </div>
          <div className='relative'>
            <input
              type='number'
              className={inputClass}
              {...register('id')}
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
          {/* General roundId = 2 & rapidFire SETA, setB setC, setD roundId= 4, 5, 6, 7 respectively */}
          {roundId !== 2 &&
            roundId !== 4 &&
            roundId !== 5 &&
            roundId !== 6 &&
            roundId !== 7 && (
              <>
                <div className='relative'>
                  <input
                    className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                    type='text'
                    {...register('option1')}
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
                    {...register('option2')}
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
                    {...register('option3')}
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
                    {...register('option4')}
                    required
                  />
                  <label className='absolute left-4 top-5 opacity-20 input-text'>
                    Option D <span className='text-[crimson]'>*</span>
                  </label>
                </div>
              </>
            )}

          {/* fifty-fifty roundId = 8 */}
          {roundId === 8 && (
            <>
              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('fiftyOption1')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Fifty Option 1 <span className='text-[crimson]'>*</span>
                </label>
              </div>

              <div className='relative'>
                <input
                  className='rounded-[6px] h-[7vh] w-full px-4 border-2 border-slate-300 text-slate-600 outline-none focus:border-blue-600 opacity-50 focus:opacity-100 transition-all duration-500 bg-white'
                  type='text'
                  {...register('fiftyOption2')}
                  required
                />
                <label className='absolute left-4 top-5 opacity-20 input-text'>
                  Fifty Option 2 <span className='text-[crimson]'>*</span>
                </label>
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

'use client'

import Modal from 'react-modal'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'linear-gradient(to right, #d1d5db, #581c87)',
  },
}

Modal.setAppElement('#modals')

const QuestionUploadPopup = (props: any) => {
  const { modalIsOpen, setIsOpen, setRound } = props

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setRound(data.round)
    closeModal()
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      //   onRequestClose={closeModal}
      style={customStyles}
      contentLabel='Example Modal'
      // className='bg-gradient-to-r from-[#36d0dc] to-[#5b87e5] flex flex-col items-center  m-auto w-[40%] h-[40%] rounded-2xl'
    >
      <div className='flex items-center justify-end'>
        {/* <div className='w-[95%] ring-2 rounded-2xl p-2  text-center font-bold tracking-wider bg-[#6dd5ed]'>
          General Round
        </div> */}
        {/* <button
          onClick={closeModal}
          className=' py-2 px-3 mb-2 text-white text-xl'
        >
          X
        </button> */}
      </div>
      <div className='flex flex-col items-center justify-center mx-20 my-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='py-4 text-xl font-semibold'
        >
          <label>Select Round : </label>
          <select className='p-4' {...register('round')}>
            <option value='general'>General Round </option>
            <option value='audioVisual'>Audio/Visual Round</option>
            <option value='rapidFire'>Rapid Fire Round</option>
          </select>

          <input
            type='submit'
            className=' rounded-md p-3 m-4 bg-gradient-to-b from-gray-300 to-purple-900 text-white hover:text-black hover:bg-slate-500 hover:ring-1 ring-slate-900 ring-offset-2'
            // href='/round'
            value='Go'
          />
        </form>
      </div>
    </Modal>
  )
}

export default QuestionUploadPopup

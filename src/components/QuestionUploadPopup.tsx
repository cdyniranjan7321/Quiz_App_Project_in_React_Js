'use client'
import React from 'react'
import Modal from 'react-modal'
import { RoundI } from '../../types'
import { useForm } from 'react-hook-form'
import useRound from '../../utils/useRoundRequest'

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
  const { modalIsOpen, setIsOpen, setRoundId } = props

  const rounds = useRound()

  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    setRoundId(parseInt(data.roundId))
    closeModal()
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='flex items-center justify-end'></div>
      <div className='flex flex-col items-center justify-center mx-20 my-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='py-4 text-xl font-semibold'
        >
          <label>Select Round : </label>
          <select className='p-4' {...register('roundId')}>
            {rounds.key !== null &&
              rounds?.map((round: RoundI) => {
                return (
                  !round.issubcategory && (
                    <option key={round.id} value={round.id}>
                      {round.roundname} Round{' '}
                    </option>
                  )
                )
              })}
          </select>

          <input
            type='submit'
            className=' rounded-md p-3 m-4 bg-gradient-to-b from-gray-300 to-purple-900 text-white hover:text-black hover:bg-slate-500 hover:ring-1 ring-slate-900 ring-offset-2'
            value='Go'
          />
        </form>
      </div>
    </Modal>
  )
}

export default QuestionUploadPopup

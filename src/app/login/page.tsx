import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Login = () => {
  return (
    <div
      className='min-h-screen w-screen bg-indigo-100 bg-opacity-65 flex justify-center items-center'
      style={{ backgroundColor: '#081C15' }}
    >
      <form
        className='max-w-[500px] w-full mx-auto bg-indigo-800 p-8 px-8 rounded-lg mt-7 mb-7'
        style={{ backgroundColor: '#1A1B74' }}
      >
        <h2 className='flex flex-row justify-between ml-40 pt-2 text-4xl my-4 text-white font-bold text-center font-k2d'>
          Log In{' '}
          <button className='ml-12 pb-4 '>
            <span>
              {true ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={30} />
              )}
            </span>
          </button>
        </h2>

        <div className='flex flex-col text-gray-400 py-2 px-8'>
          <label className='flex flex-col text-gray-100 py-2'>
            Email address*
          </label>
          <input
            type='text'
            placeholder='Email*'
            className='text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded w-full h-10'
          />
        </div>

        <div className='flex flex-col text-gray-400 py-2 px-8'>
          <label className='flex flex-col text-gray-100 py-2'>Password*</label>
          <input
            type='password'
            placeholder='Password*'
            className='text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded w-full h-10'
          />
        </div>

        <div className='flex flex-col text-gray-100 py-2 px-8'>
          <label className='flex items-center justify-center'>
            <input type='checkbox' className='w-5 h-5' />
            <span style={{ marginLeft: '0.5rem' }}>Remember me</span>
          </label>
        </div>

        <div className='flex justify-between items-center right-0 '>
          <button className='bg-[#F7F5FF] w-[120px] rounded-md font-medium my-5 ml-36 py-2 text-[#3A00E5]'>
            Login
          </button>
          <button>
            <span className='my-5 ml-4 py-2 right-0 text-white overflow-visible'>
              Forgot password ?
            </span>
          </button>
        </div>

        <p className='flex flex-col text-gray-100 py-2 px-8 text-center'>
          Don&apos;t have an account ?
        </p>
        <div className='flex justify-center'>
          <button className='bg-[#24AAA2] w-[120px] rounded-md font-medium my-5 mr-7 py-2 text-white '>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}
export default Login

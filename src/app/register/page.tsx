import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Signup = () => {
  return (
    <div className='min-h-screen w-screen bg-indigo-100 bg-opacity-65 flex flex-col justify-center 'style={{backgroundColor:"#081C15"}}>
       <form className='max-w-[500px] w-full mx-auto bg-indigo-800 p-8 px-8 rounded-lg mt-7 mb-7' style={{ backgroundColor: '#1A1B74' }}>
      <h2 className='flex flex-row justify-between pl-8 text-4xl text-white font-bold text-center font-k2d'>Create an account 
    <button><span>{ true ?<AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}</span></button>  
      </h2>
      
         <div className='flex flex-col text-gray-400 py-2 px-8'>
          <label className='flex flex-col text-gray-100 py-2'>Email address*</label>
          <input type='text' placeholder='Email address*' className='text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded w-full h-10'/>

        </div>
        <div className='flex flex-col text-gray-400 py-2 px-8'>
          <label className='flex flex-col text-gray-100 py-2'>Password*</label>
          <input type='password' placeholder='Password*' className='text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded w-full h-10'/>
        </div>
        <div className=' flex flex-col text-gray-400 py-2 px-8'>
          <label className='flex flex-col text-gray-100 py-2'>Retype-Password*</label>
          <input type='password' placeholder='Retype-Password*' className='text-lg bg-gray-100 text-gray-800 px-2 py-1 rounded w-full h-10'/>
        </div>
        <div className='flex flex-col text-gray-100 py-2 px-8'>
          <label className='flex items-center'>
          <input type='checkbox' className='w-4 h-4' />
       <span className='ml-2 border-b border-gray-300 '>Agree with Terms and Conditions?</span>
      </label>
          
        </div>
        <div className='flex justify-center'>
        <button className='bg-[#24AAA2] w-[120px] rounded-md font-medium my-5 mx-auto py-2 text-white '>Sign Up</button>
        </div>
        <div className=' flex justify-center  text-gray-100 py-2'>
       <div className='text-center'>
       <p>Already have an account ?</p>
       <hr className='border-gray-300' />
         </div>
        </div>
        <div className='flex justify-center'>
        <button className='bg-[#F7F5FF] w-[120px] rounded-md font-medium my-5 mx-auto py-2 text-[#3A00E5] '>Login</button>
     </div>
      </form>
     </div>
  )
}

export default Signup

import React from 'react'

type NavProps = {
  title: String
}

const Navbar = (props: NavProps) => {
  const { title } = props
  return (
    <div className='bg-gradient-to-r from-[#C77DFF] to-[#000000]  flex items-center justify-center text-center  w-full h-[12%] '>
      <h1 className=' text-4xl font-bold text-white'> {title}</h1>
    </div>
  )
}

export default Navbar

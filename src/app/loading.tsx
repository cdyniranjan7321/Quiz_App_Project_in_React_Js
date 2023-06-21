'use client'
import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Loading = () => {
  let [loading, setLoading] = useState(true)
  let [color, setColor] = useState('#57CC99')
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#C77DFF] to-[#3C096C] '>
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={100}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  )
}

export default Loading

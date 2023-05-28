import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=' flex flex-col h-screen w-full items-center justify-center'>
      <div className='flex my-4'>
        <div className=' h-24 w-1 bg-blue-300 mx-4'></div>
        <div className='flex flex-col'>
          <h1 className='text-4xl'>404 </h1>
          <p className='mt-4 uppercase tracking-wider'>Page not found</p>
        </div>
      </div>
      <Link href='/' className='w-auto h-auto p-2 bg-blue-400 rounded-md'>
        Back to Homepage
      </Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router'

export default function NavBar() {
  return (
    <>
    <nav className='absolute w-full h-18 flex items-center justify-center p-2 md:p-5 bg-gradient-to-b from-blue-400 to-blue-600 shadow-xl/20 z-50'>
        <div className='flex items-center justify-between w-full p-2 md:p-5 md:w-280 text-white'>
            <Link to="/" className='transition-all duration-300 text-xl md:text-4xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'>
            DEMO Streaming
          </Link>
            <div className='flex flex-col md:flex-row gap-1 md:gap-8 text-xs pr-2 md:pr-0 md:text-lg'>
                <button className='cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,10)]'>Log In</button>
                <button className='bg-gradient-to-b duration-300 from-gray-700 to-gray-800 px-3 py-1 cursor-pointer hover:from-gray-500 hover:to-gray-600'>Start your free trail</button>
            </div>
        </div>
    </nav>
    <div className='w-full h-18'></div>
    </>
  )
}

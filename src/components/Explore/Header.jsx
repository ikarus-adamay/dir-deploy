import React from 'react'
import { FaFire } from 'react-icons/fa';
import Slider from './Slider/Slider'

const Header = () => {
  return (
    <div className='font-poppins'>
      <header className="shadow bg-[url('/src/Assets/hero-img.png')] h-48">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-800 mt-8">Explore Nest's Marketplace</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with slider --> */}
          <div className="text-2xl flex p-[500px] py-6 items-center">
            <FaFire className='pr-1 text-orange-500' />
            <h4 className='text-black font-semibold'>Trending Items</h4>
          </div>
          <Slider />
          {/* <!-- End replace --> */}
        </div>
      </main>
    </div>
  )
}
export default Header
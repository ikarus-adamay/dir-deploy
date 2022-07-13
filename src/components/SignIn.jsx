import React from 'react'

import sketchfab from '../Assets/sketchfab.png'

const SignIn = () => {
  return (
    <div className='w-min font-poppins bg-white p-8'>
        <div className='flex justify-between py-4'>
            <p className='text-xl'>Welcome to Ikarus 3D</p>
            <div className='text-base'>
                <p className='text-gray-1100'>No Account?</p>
                <a href='/' className='text-blue-1000'>Sign Up</a>
            </div>
        </div>
        <div className="">
            <p className='text-6xl pb-6'>Sign In</p>
        </div>
        <form className="pt-6">
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="username">
                    Enter your Username or Email Address
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="email" type="email" placeholder="Username or Email Address" />
            </div>
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="password">
                    Enter your Password
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="password" type="password" placeholder="Password" />
                <a className="text-sm text-blue-600 hover:text-blue-1000" href="/#">
                    <p className='text-right pt-2'>Forgot Password?</p>
                </a>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white shadow-lg font-medium py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
            </button>
            <p className='text-gray-1200 px-52 pt-4 pb-4'>OR</p>
            <button className="w-full bg-gray-50 hover:bg-gray-400 text-blue-700-accent font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline flex justify-center" type="button">
                    <img src={sketchfab} alt='sketchfab' className='pr-3 w-10 h-7'/>
                    Sign In with Sketchfab
            </button>
        </form>
    </div>
  )
}

export default SignIn

import React from 'react'

import apple from '../Assets/apple.png'
import fb from '../Assets/Facebook.png'
import google from '../Assets/google.png'

const SignUp = () => {
  return (
    <div className='w-min font-poppins bg-white p-8'>
        <div className='flex justify-between py-4'>
            <p className='text-xl'>Welcome to Ikarus 3D</p>
            <div className='text-base'>
                <p className='text-gray-1100'>Have an Account?</p>
                <a href='/' className='text-blue-1000'>Sign In</a>
            </div>
        </div>
        <div className="">
            <p className='text-6xl pb-6'>Sign Up</p>
        </div>
        <form className="pt-6">
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="username">
                    Username
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="username">
                    Enter your email address
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="email" type="email" placeholder="Email Address" />
            </div>
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="password">
                    Enter your Password
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="password" type="password" placeholder="Password" />
            </div>
            <div className="mb-4">
                <label className="block text-black text-base mb-2" for="password">
                    Verify your Password
                </label>
                <input className="shadow appearance-none border border-gray-1200 rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-sm" id="password" type="password" placeholder="Password" />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white shadow-lg font-medium py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
            </button>
            <p className='text-gray-1200 px-44 pt-4'>OR</p>
            <div className="flex items-center justify-between pt-4">
                <button className="bg-blue-400-accent hover:bg-blue-100 text-blue-700-accent font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline flex" type="button">
                    <img src={google} alt='google' className='pr-3'/>Sign Up with Google
                </button>
                <button className="bg-gray-50 hover:bg-gray-400 font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    <img src={fb} alt='fb'/>
                </button>
                <button className="bg-gray-50 hover:bg-gray-400 font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                    <img src={apple} alt='apple'/>
                </button>
            </div>
        </form>
    </div>
  )
}

export default SignUp

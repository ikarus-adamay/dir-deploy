import React, { useState } from 'react'
import logo from '../Assets/logo-ikarus.png'
import user from '../Assets/Male-User.png'
import cart from '../Assets/Shopping-Cart.png'
import profile from '../Assets/User.png'
import heart from '../Assets/Heart.png'
import cog from '../Assets/Gear.png'
import Modal from "react-modal";
import SignIn from './SignIn'
import SignUp from './SignUp'
import { FaWindowClose } from 'react-icons/fa'

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showModalLog, setShowModalLog] = useState (false);
  const [showModalReg, setShowModalReg] = useState (false);

  const openModalLog = () => {
    setShowModalReg(false)
    setShowModalLog(prev => !prev)
};

const openModalReg = () => {
    setShowModalLog(false)
    setShowModalReg(prev => !prev)
};

  const handleClick = () => {
    setShowOptions(!showOptions)
  };
  let url = '/';
  return (
    <div className="sticky top-0 z-50 w-full flex flex-row items-center p-1 justify-between drop-shadow-lg bg-white font-poppins">
      <div className="ml-4 text-lg text-white hidden md:flex">
        <img className="h-18 w-38" src={logo} alt='logo' />
      </div>
      <form className='w-3/5'>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg className='w-5 h-5 text-gray-200' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input type="search" id="default-search" className='block py-3 px-10 w-full text-md text-gray-200 border-2 border-gray-50 rounded' placeholder="Search for 3D Models and Collections"></input>
        </div>
      </form>
      <div className="items-center mr-8 hidden md:flex">
        <button href="#" className="ml-1 inline-flex items-center px-4 py-2 rounded-lg shadow-sm text-xl font-bold text-gray-100 bg-blue hover:bg-blue-600 border-2" onClick={openModalLog}>
          Login
        </button>
        <Modal
            isOpen={showModalLog}
            onRequestClose={() => setShowModalLog(false)}
            className="translate-y-1/4 w-2/3 translate-x-1/2 rounded-[20px] focus:outline-none"
          >
            <FaWindowClose onClick={() => setShowModalLog(!showModalLog)} className="text-black"/>
            <SignIn />
        </Modal>
        <button href="#" className="ml-3 inline-flex items-center px-4 py-2 rounded-lg shadow-sm text-xl font-bold text-blue bg-white hover:bg-gray-50 border-2 border-blue" onClick={openModalReg}>
          Register
        </button>
        <Modal
            isOpen={showModalReg}
            onRequestClose={() => setShowModalReg(false)}
            className="translate-y-1/4 w-2/3 translate-x-1/2 rounded-[20px] focus:outline-none"
          >
            <FaWindowClose onClick={() => setShowModalReg(!showModalReg)} className="text-black"/>
            <SignUp className="object-contain" />
        </Modal>
        <button href="#" className="ml-3 p-1 rounded-full text-white">
          <img src={cart} className="relative h-16 inline-flex items-center px-4 py-2" alt='cart'></img>
        </button>
        <button onClick={handleClick} className="flex flex-inline space-x-0">
          <img src={user} className="relative h-16 inline-flex items-center pl-3 py-2" alt='user'></img>
          <p className='text-2xl font-medium mt-4 text-light-blue-700'>AM</p>
          {showOptions && (
            <div className="absolute right-0 mt-20 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ease-in duration-300" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div classNamess="py-1" role="none">
                <a href={url} className="flex flex-inline px-4 py-1.5 text-xl font-bold hover:bg-gray-100 text-black text-left" role="menuitem" tabindex="-1" id="menu-item-0"><img alt='art' src={profile} className="pr-3"></img>Profile</a>
              </div>
              <div classNamess="py-1" role="none">
                <a href={url} className="flex flex-inline px-4 py-1.5 text-xl font-bold hover:bg-gray-100 text-black text-left" role="menuitem" tabindex="-1" id="menu-item-1"><img alt='art' src={heart} className="pr-3"></img>Favorites</a>
              </div>
              <div classNamess="py-1 " role="none">
                <a href={url} className="flex flex-inline px-4 py-1.5 text-xl font-bold hover:bg-gray-100 text-black text-left" role="menuitem" tabindex="-1" id="menu-item-2"><img alt='art' src={cog} className="pr-3"></img>Settings</a>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar

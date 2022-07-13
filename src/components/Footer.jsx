import React from 'react'
import youtube from '../Assets/yt.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/insta.png'
import linkedin from '../Assets/lin.png'
import facebook from '../Assets/fb.png'
import logo from '../Assets/logo.png'


const Footer = () => {
    return (
        <div className='bg-dark-blue-100 mt-10'>
            <div className='max-w-8xl mx-32 text-white flex flex-wrap justify-center font-poppins'>
                <div className='p-5 w-48'>
                    <div className='text-lg font-bold uppercase'>Ikarus 3D</div>
                    <a className="my-3 block" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">How it Works <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Help/FAQs <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Blog <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Intellectual Property</a>
                </div>
                <div className='p-5 w-48'>
                    <div className='text-lg font-bold uppercase'>Maker</div>
                    <a className="my-3 block" href="/#">Why Us? <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Explore Opportunities <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Buy Printers <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Certification</a>
                </div>
                <div className='p-5 w-48'>
                    <div className='text-lg font-bold uppercase'>Creator</div>
                    <a className="my-3 block" href="/#">Why us? <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Trending Topics <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Commissioned Work <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">Community</a>
                </div>
                <div className='grid pl-48 pt-4 w-2/4 font-poppins'>
                    <div className=''>
                        <a href="#!" type="button" className=" text-white leading-normal w-28 h-20 m-1">
                            <img src={logo} alt=""></img>
                        </a>
                        <a href="#!" type="button" className=" text-white leading-normal w-12 h-12 m-1 mb-9">
                            <img src={twitter} alt=""></img>
                        </a>

                        <a href="#!" type="button" className=" text-white leading-normal w-12 h-12 m-1 mb-9">
                            <img src={youtube} alt=""></img>
                        </a>

                        <a href="#!" type="button" className=" text-white leading-normal w-12 h-12 m-1 mb-9">
                            <img src={facebook} alt=""></img>
                        </a>

                        <a href="#!" type="button" className=" text-white leading-normal w-12 h-12 m-1 mb-9">
                            <img src={instagram} alt=""></img>
                        </a>
                        <a href="#!" type="button" className=" text-white leading-normal w-12 h-12 m-1 mb-9">
                            <img src={linkedin} alt=""></img>
                        </a>
                    </div>
                    <div className=''>
                        <form action=''>
                            <div className="md:mb-3">
                                <input
                                    type="text"
                                    className="
                                bg-transparent
                                  form-control
                                  block
                                  w-3/4
                                  py-1.5
                                  text-base
                                  font-normal
                                  text-gray-100
                                "
                                    id="exampleFormControlInput1"
                                    placeholder="Email" />
                                <hr className='text-white w-3/4'></hr>
                            </div>

                            <div className="grid md:grid-cols-2 gird-cols-1 gap-2 justify-center items-center">
                                <div className="justify-start md:mb-12">
                                    <p className="">
                                        <strong>SignUp for our Newsletter</strong>
                                    </p>
                                </div>
                                <div className="md:mr-auto mb-6">
                                    <button type="submit" className="inline-block px-6 py-2 bg-blue">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className='text-lg text-white font-bold mb-3'>
                            Want to be a part of Us?
                            <a href="#!" className='text-gray-200 underline text-md font-medium pl-10'>Check out our careers</a>
                        </p>
                    </div>
                    <div>
                        <p className='text-lg text-white font-bold mb-3'>
                            Want to become one of our partners?
                            <a href="#!" className='text-gray-200 underline text-md font-medium pl-2'>Get in touch</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center bg-dark-blue-100">
                <div className="flex pb-5 px-3 mx-52 pt-3 border-t text-gray-600 font-semibold text-md flex-col md:flex-row max-w-6xl">
                    <div className="mb-2">All Rights Reserved © 2022</div>
                    <div className="md:flex-auto md:flex-row-reverse mb-2 flex-row flex">
                        <a className="text-gray-600 font-semibold" href="#!">Privacy Policy | Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

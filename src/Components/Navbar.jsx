import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const[open, setopen]=useState(false)
  const clickHandle = () =>{
    setopen(!open);
  }
  return (
    <>
    <div className="w-full min-h-[10vh] pb-[20px] bg-gray-900 flex justify-around text-white overflow-x-hidden">
        <div className="w-[100px] h-[10vh] flex flex-col">
            <h1 className=' text-[40px]'>HR</h1>
            <p className='text-[20px] -my-[20px] -mx-[10px]'>creation</p>
        </div>
        <div onClick={clickHandle} className='w-[10vw] h-[10vh] cursor-pointer flex justify-center items-center md:hidden' ><IoMenu className="w-[50px] h-[50px]" /></div>
        <div className="w-[50%] h-[10vh] hidden md:block  ">
            <ul className='h-[10vh] flex justify-evenly items-center'>
                <li className='px-[20px]'><a href="#Home">Home</a></li>
                <li className='px-[20px]'><a href="#About">About</a></li>
                <li className='px-[20px]'><a href="#Skills">Skills</a></li>
                <li className='px-[20px]'><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </div>
    {open &&<div data-aos="fade-out" className="w-full min-h-[10vh] bg-gray-700 md:hidden flex justify-center items-center  ">
            <ul className='h-[10vh] w-full flex justify-evenly items-center'>
                <li className='px-[20px] bg-blue-400 py-[5px] rounded-[20px] hover:bg-blue-600 duration-1000'><a href="#Home">Home</a></li>
                <li className='px-[20px] bg-blue-400 py-[5px] rounded-[20px] hover:bg-blue-600 duration-1000'><a href="#About">About</a></li>
                <li className='px-[20px] bg-blue-400 py-[5px] rounded-[20px] hover:bg-blue-600 duration-1000'><a href="#Skills">Skills</a></li>
                <li className='px-[20px] bg-blue-400 py-[5px] rounded-[20px] hover:bg-blue-600 duration-1000'><a href="#Contact">Contact</a></li>
            </ul>
      </div>}
    </>
  )
}

export default Navbar

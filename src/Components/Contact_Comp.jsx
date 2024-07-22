import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact_Comp = () => {
  return (
    <>
      <div id='Contact' className="bg-gray-500 w-full min-h-[100vh] p-[50px] flex justify-center items-center">
        <div className="w-[90%] h-[80%] p-[50px] bg-gray-700 gap-[30px] flex flex-col justify-center items-center ">
          <h1 className='text-[40px] text-white text-center'>Contact Us</h1>
          <div data-aos="fade-out" className="min-w-[80%] p-[10px] rounded-[20px] bg-gray-400 md:flex-row  flex-col flex gap-[30px] justify-between items-center">
              <h1 className="sm:w-[200px] w-full h-[50px] bg-gray-600 flex justify-center items-center font-bold">Whatsapp.No :</h1>
              <h1 className='min-w-[100px] h-[50px] flex justify-center items-center text-[25px] font-semibold'>6380865187</h1>
              <a className='w-full sm:w-[100px] flex justify-center items-center ' href="#"  target='blank' ><FaWhatsapp className='text-green-500 bg-white w-[50px] h-[50px] md:ml-[20px]'/></a>
          </div>
          <div data-aos="fade-out" className=" min-w-[80%] p-[10px] rounded-[20px] bg-gray-400 md:flex-row flex-col flex gap-[30px] justify-between items-center">
              <h1 className="sm:w-[200px] w-full h-[50px] bg-gray-600 flex justify-center items-center font-bold">Instagram :</h1>
              <h1 className='min-w-[100px] h-[50px] flex justify-center items-center text-[25px] font-semibold'>silent_killer_hariram</h1>
              <a className='w-full sm:w-[100px] flex justify-center items-center' href="https://www.instagram.com/silent_killer_hariram/"  target='blank'><FaInstagramSquare className='text-pink-700 bg-white w-[50px] h-[50px] md:ml-[20px]'/></a>
          </div>
          <div data-aos="fade-out" className="min-w-[80%] p-[10px] rounded-[20px] bg-gray-400 md:flex-row flex-col flex gap-[30px] justify-between items-center">
              <h1 className="sm:w-[200px] w-full h-[50px] bg-gray-600 flex justify-center items-center font-bold">Youtube :</h1>
              <h1 className='min-w-[100px] h-[50px] flex justify-center items-center text-[25px] font-semibold'>HR Creation</h1>
              <a className='w-full sm:w-[100px] flex justify-center items-center ' href="https://www.youtube.com/@hrcreations207?si=4Xonm8CnhglOL9ti" target='blank'><FaYoutube className='text-red-800 bg-white w-[50px] h-[50px] md:ml-[20px]'/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact_Comp

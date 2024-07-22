import React, { useState } from 'react'
import Vid1 from "../../public/Images/WhatsApp Video 2024-07-22 at 11.49.49 AM.mp4"
import haribeach from "../../public/Images/beach.jpeg" 
import dinesh from "../../public/Images/About1.jpeg"
import kalimuthu from "../../public/Images/About3.jpeg"

const Skills_Comp = () => {

  const[one,setone]=useState(true)
  const[two,settwo]=useState(true)
  const[three,setthree]=useState(true)

  const Clickone = ()=>{
    setone(!one)
  }
  const Clicktwo = ()=>{
    settwo(!two)
  }
  const Clickthree = ()=>{
    setthree(!three)
  }

  return (
    <>
    <div id='Skills' className="p-[50px] w-full min-h-[100vh] bg-gray-700 text-white">
      <h1 data-aos="fade-up" className='text-[40px] font-bold text-center'>Skills</h1>
      <div className="w-full min-h-[90vh] flex justify-center items-center">
        <div className="w-full sm:w-[80%] min-h-[80%] py-[10px] flex gap-[30px] flex-col justify-around items-center">
          <div data-aos="fade-in" className=" flex justify-center items-center flex-col md:flex-row text-black w-[90%] min-h-[50%]">
            <img className=' w-[200px] min-h-[200px] rounded-[20px]' src={haribeach} alt="" />
            {one &&<div data-aos="fade-left" className="p-[20px] md:w-[70%]  bg-gray-600 m-[20px]  rounded-[20px]">
              <h1 className='text-[40px] font-semibold text-gray-300'>HariRam</h1>
              <p className='text-[25px] text-gray-900'>
              1. Versatile Performances: Hariram displays diverse roles. <br />
2. Emotional Depth: He conveys feelings convincingly. <br />
3. Natural Charisma: Hariram captivates audiences.
</p>
            </div>}
            {
              !one && <div className="p-[20px] h-[300px] md:w-[70%] w-[70%] flex justify-center items-center ">
              <video controls className='w-[auto] h-[100%] '  src={Vid1}></video>
            </div>
            }
            <button className='w-[100px] h-[50px] rounded-[40px]  bg-red-700 px-[20px] py-[10px] text-black' onClick={Clickone}>Click</button>
          </div>
          <div data-aos="fade-in" className="flex justify-center items-center flex-col md:flex-row text-black w-[90%] min-h-[50%]">
            <img className=' w-[200px] min-h-[200px] rounded-[20px]' src={dinesh} alt="" />
            {two && <div data-aos="fade-left" className="p-[20px] md:w-[70%]  bg-gray-600 m-[20px]  rounded-[20px]">
              <h1 className='text-[40px] font-semibold text-gray-300' >Dinesh</h1>
              <p className='text-[25px] text-gray-900'>
              1. Precision in Cuts: Dinesh edits meticulously. <br />
2. Creative Flow Control: He shapes narratives fluidly. <br />
3. Timely Delivery: Dinesh meets deadlines reliably.
</p>
            </div>}
            { 
              !two && <div className="p-[20px] h-[300px] md:w-[70%] w-[70%] flex justify-center items-center ">
                <video controls className='w-[auto] h-[100%] '  src={Vid1}></video>
              </div>
            }
            <button className='w-[100px] h-[50px] rounded-[40px]  bg-red-700 px-[20px] py-[10px] text-black' onClick={Clicktwo}>Cilck</button>
          </div>
          <div data-aos="fade-in" className="flex justify-center items-center flex-col md:flex-row text-black w-[90%] min-h-[50%]">
            <img className=' w-[200px] min-h-[200px] rounded-[20px]' src={kalimuthu} alt="" />
            {three &&<div data-aos="fade-left" className="p-[20px] md:w-[70%]  bg-gray-600 m-[20px]  rounded-[20px]">
              <h1 className='text-[40px] font-semibold text-gray-300'>Kalimuthu</h1>
              <p className='text-[25px] text-gray-900'>
              
 1. Technical Proficiency: Kalimuthu masterfully handles cameras. <br />
 2. Artistic Vision: He frames scenes creatively. <br />
 3. Storytelling Through Lens: Kalimuthu captures narratives visually.</p>
            </div>}
            {
              !three && <div className="p-[20px] h-[300px] md:w-[70%] w-[70%] flex justify-center items-center ">
              <video controls className='w-[auto] h-[100%] '  src={Vid1}></video>
            </div>
            }
            <button className='w-[100px] h-[50px] rounded-[40px]  bg-red-700 px-[20px] py-[10px] text-black' onClick={Clickthree}>Click</button>
          </div>
          </div>
        </div>
      </div>
      <div className=" pb-[50px] gap-[20px] w-full h-[50vh] flex justify-center items-center flex-col bg-gray-700 ">
        <h1 data-aos="fade-up" className='text-[50px] text-white '>Youtube video</h1>
      <iframe data-aos="fade-out" className='w-[250px] h-[300px] sm:w-[80%] sm:h-[80%] md:w-[800px] md:h-[600px]' width="560" height="315" src="https://www.youtube.com/embed/5ciLFwO_OK4?si=42yHAui4xP1GpgdZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Skills_Comp

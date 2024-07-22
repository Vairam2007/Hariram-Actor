import React, { useState } from 'react'
import { ReactTyped } from "react-typed";

const About_Comp = () => {
    const[one,setone]=useState(true);
    const[two,settwo]=useState(false);
    const[three,setthree]=useState(false);
    const Clickone = ()=>{
        setone(true)
        settwo(false)
        setthree(false)
    }
    const Clicktwo =()=>{
        settwo(true)
        setone(false)
        setthree(false)
    }
    const Clickthree =()=>{
        setthree(true)
        settwo(false)
        setone(false)
    }
  return (
    <>
    <div id='About' className="w-full min-h-[100vh] bg-gray-800 text-white p-[50px] overflow-hidden">
        <h1 data-aos="fade-up" className='text-center pb-[50px] text-[50px] font-bold text-white'>About</h1>
        {one && <div  className="w-full min-h-[10vh] flex md:flex-row flex-col" >
            <div data-aos="fade-right" className="w-full md:w-[50%] h-[70%] p-[20px] flex justify-center items-center" >
                <img style={{boxShadow:"3px 3px 5px white"}} className='w-[90wv] h-[60vh] rounded-[40px]' src="public/Images/About1.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" className="w-full md:w-[50%] h-[50%] p-[20px] text-center md:text-start ">
            <ReactTyped className='text-[50px] font-bold text-green-600' strings={["Dinesh","Editor"]} typeSpeed={100} backSpeed={50} loop />
                <p className="text-[25px]">
                Dinesh is a versatile editor, renowned for his ability to navigate diverse genres and styles with finesse. His sharp editorial instincts and deep understanding of storytelling elevate each project to new heights, earning him a reputation as a sought-after professional in the world of publishing.</p>
            </div>
        </div>}

        {two && <div className="w-full min-h-[10vh] flex md:flex-row flex-col">
            <div data-aos="fade-right" className="w-full md:w-[50%] h-[70%] p-[20px] flex justify-center items-center">
                <img style={{boxShadow:"3px 3px 5px white"}} className='w-[90wv] h-[60vh] rounded-[40px]' src="public/Images/About2.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" className="w-full md:w-[50%] h-[50%] p-[20px] text-center md:text-start ">
            <ReactTyped className='text-[50px] font-bold text-red-600' strings={["HariRam","Acting"]} typeSpeed={100} backSpeed={50} loop />
                <p className="text-[25px]">
                Hariram is a chameleon-like actor known for his ability to seamlessly slip into any role, whether it's a comedic character or a deeply emotional one. His skillful portrayal and nuanced performances consistently captivate audiences, solidifying his status as a versatile talent in the entertainment industry.</p>
            </div>
        </div>}
        {three && <div className="w-full min-h-[10vh] flex md:flex-row flex-col">
            <div data-aos="fade-right" className="w-full md:w-[50%] h-[70%] p-[20px] flex justify-center items-center">
                <img style={{boxShadow:"3px 3px 5px white"}} className='w-[90wv] h-[60vh] rounded-[40px]' src="public/Images/About3.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" className="w-full md:w-[50%] h-[50%] p-[20px] text-center md:text-start ">
            <ReactTyped className='text-[50px] font-bold text-blue-600' strings={["KaliMuthu","Camera Man"]} typeSpeed={100} backSpeed={50} loop />
                <p className="text-[25px]">
                Kailmuthu is a seasoned cameraman known for his impeccable technical prowess and creative flair behind the lens. With a knack for capturing breathtaking visuals and enhancing the director's vision, he consistently delivers cinematography that leaves a lasting impact on audiences worldwide.</p>
            </div>
        </div>}
        <div className="w-full h-[50%] p-[20px] flex justify-evenly items-center gap-[20px] flex-col md:flex-row">
                <img data-aos="fade-up" style={{boxShadow:"0 0 10px black"}} onClick={Clickone} className='cursor-pointer w-[200px] h-[200px] rounded-[30px]' src="public/Images/About1.jpeg" alt="" />
                <img data-aos="fade-up" style={{boxShadow:"0 0 10px black"}} onClick={Clicktwo} className='cursor-pointer w-[200px] h-[200px] rounded-[30px]' src="public/Images/About2.jpeg" alt="" />
                <img data-aos="fade-up" style={{boxShadow:"0 0 10px black"}} onClick={Clickthree} className='cursor-pointer w-[200px] h-[200px] rounded-[30px]' src="public/Images/About3.jpeg" alt="" />
            </div>
    </div>    
    </>  
)
}

export default About_Comp

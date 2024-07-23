import React from 'react'
import { ReactTyped } from "react-typed";
import home_img from "../../public/Images/homeimg.jpeg"

const Home_Comp = () => {
  return (
    <>
    <div id='Home' className="p-[50px] w-full justify-center items-center min-h-[90vh] bg-gray-800 text-white flex flex-col md:flex-row overflow-hidden ">
      <div className="w-[80%] h-[80%] flex justify-center items-center gap-[50px] flex-col md:flex-row ">
        <div data-aos="fade-right" className="w-full h-[80%]  md:w-[50%] flex justify-center items-center">
          <img style={{boxShadow:"5px 5px 10px black"}} className='w-[270px] h-[345px] md:w-[300px] md:h-[500px] rounded-[30px]' src={home_img} alt="home_img" />        </div>
        <div data-aos="fade-left" className='w-full h-[50%] md:w-[50%] flex flex-col justify-center'>
          <h1 className='text-[30px]'>I am ,</h1>
          <ReactTyped className='sm:text-[50px] text-[35px] font-bold text-blue-600' strings={["Hariram","Interest in Acting"]} typeSpeed={100} backSpeed={50} loop />
          <h1 data-aos-delay='200' data-aos="fade-left" className=' text-gray-400 text-[25px]'> Begins with a Short Film with my friends ( Dinesh , KaliMuthu ) and Many other were helped me in to many ways.</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home_Comp

import React from 'react'
import Home_Comp from '../Components/Home_Comp'
import About_Comp from '../Components/About_Comp'
import Navbar from '../Components/Navbar'
import Skills_Comp from '../Components/Skills_Comp'
import Contact_Comp from '../Components/Contact_Comp'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Home_Comp />
        <About_Comp/>
        <Skills_Comp />
        <Contact_Comp/>
    </div>
  )
}

export default Layout

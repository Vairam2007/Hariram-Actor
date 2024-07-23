import './App.css'
import Layout from './Pages/Layout'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    Aos.init({
        duration:2000
    });
  },[])

  return (
    <>
    <Layout />
    </>
  )
}

export default App

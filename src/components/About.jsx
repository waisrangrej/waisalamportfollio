import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaArrowRight } from "react-icons/fa6";

function About() {
const {bgcolor , textcolor}=useTheme()

  return (
    <div className={`w-full h-[180vh] ${bgcolor}`}>
      <div className='w-full pt-20 pl-5'>
        <h1 className='text-[25vw] font-[BarlowBold]'>ABOUT</h1>
      </div>
      <div className='flex items-center gap-5 pl-5'>
        <p className='font-[BarlowBold] text-[2vw] '>Hii i'am WAIS ALAM  <br /> Currently i am Learning Backend in NODE JS </p>
        <button className= {`w-[6vw] h-[6vw] mt-5 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`}> <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default About
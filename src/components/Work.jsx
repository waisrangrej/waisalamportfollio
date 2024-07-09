import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext'
import websitepic from '../assets/images/websitepic.png'
import arrow from '../assets/images/arrow.png'

function Work() {
const {bgcolor,textcolor,theme}=useTheme()
const [Trueor, setTrueor] = useState(true)

const handletrue=()=>{
  setTrueor(true)
}

  return (
    <div className={`w-full h-[180vh] ${bgcolor} relative overflow-hidden`}>
      <div className='w-full pl-5 pt-20'>
        <h1 className='text-[20vw] font-[BarlowBold]'>PROJECT'S</h1>
      </div>
      <p className='text-[2vw] font-[BarlowBold] w-1/2 pl-5'>I am passionate about creating innovative and user-centric web solutions. Here are some of the projects I've worked on:</p>
 
      <div className='flex items-center pl-5 gap-5 pt-5'>
        <h1 className='font-[BarlowBold] text-[3vw]'>View My Projects</h1>
        <button style={{right:Trueor ? "0%":"100%",transition:"all ease-linear 1s"}} onClick={()=> setTrueor(false)} className={`w-[6vw] h-[6vw] flex items-center justify-center rounded-full bg-black  text-[2.5vw] ${textcolor}`}> 
          <FaArrowRight/>
        </button>
      </div>
      <div style={{right:Trueor ? "-100%":"0",transition:"all ease 1s"}} className={`${bgcolor} absolute w-[90vw] h-full top-0 right-0 overflow-y-scroll`}>
      <h1 className='text-[16vw] p-10 font-[BarlowBold]'>PROJECT'S</h1>
      <button  onClick={handletrue}
  className= {`w-[6vw] h-[6vw] mt-5 absolute top-[11vw] right-10 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`}
>
  <FaArrowRight />
</button>
      <div className="w-[100%] pl-5 font-[BarlowBold] flex items-center ">   
     <div className="left w-[50%] h-full relative ">
      <h1 className='text-[15vw] -mt-[33vw] sticky'>2024</h1>
     </div>
     <div className="right w-[50%] h-full">
     <div className='flex  items-center  gap-5 '>
<h3 className='text-[3vw] pt-5'>3D Website with Scroll Animation </h3>
<a
  href="https://cybertron3dwebsite.vercel.app/"
  className= {`w-[6vw] h-[6vw] mt-5 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`}
>
  <FaArrowRight />
</a>
</div> 
<img className='w-[40vw] pt-5' src={websitepic} alt="" />
<h3 className='text-[3vw] pt-5'>Components Library</h3>
  <p className='text-[2vw]'>Currently, I am working on building my own components library. This library aims to provide reusable and customizable UI components that can be easily integrated into various web projects. I am using technologies like React and JavaScript to develop these components, focusing on creating modular and efficient code. One of the key challenges is ensuring the components are both versatile and easy to use, which I address by writing comprehensive documentation and providing clear examples.</p>
     </div>
      </div>
      </div>
    </div>
  )
}

export default Work
import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaArrowRight } from "react-icons/fa6";
import { useState } from 'react';

function Contcat() {
    const {bgcolor , textcolor}=useTheme()
    const [right, setRight] = useState(true)

    const handleright=()=>{
setRight(false)
    }

  return (
    <div className={`w-full h-[180vh] relative ${bgcolor} overflow-hidden`}>
        <div className='w-full pl-5
        '>
            <h1 className='text-[25vw] font-[BarlowBold] text-black uppercase'>Contact</h1>
        </div>
        <div className="w-full pl-5">
            <p className='text-[2vw] font-[BarlowBold] '>Contact me here for "FREELANCEING" <br /> Feel free to reach me</p>
            <button style={{right:right ? "0%":"100%",transition:"all ease 1s"}} onClick={handleright} className= {`w-[6vw] h-[6vw] mt-5 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`}> <FaArrowRight /></button>
           
        </div>
        <div style={{right:right ? "-100%":"0",transition:"all ease 1s"}} onClick={()=> setRight(true)} className={`contact w-[90%] h-full absolute top-0 right-0 ${bgcolor}`}>
        <h1 className='text-[20vw] p-10 font-[BarlowBold]'>CONTACT</h1>
        <button  onClick={handleright}
  className= {`w-[6vw] h-[6vw] mt-5 absolute top-[14vw] right-10 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`}
>
  <FaArrowRight />
</button>
<div  className="einsta w-full flex items-center gap-20">
<div className="email pl-32 font-[BarlowBold]">
  <h1 className='text-[3.5vw]'>Mail</h1>
<p className='text-[2vw]'>Feel free to email me with any questions or <br /> website creation requests.</p>
<button  className= {`w-[6vw] h-[6vw] mt-5 absolute top-[14vw] right-10 rounded-full flex items-center justify-center bg-black text-[2.5vw] ${textcolor}`} >
  <FaArrowRight />
</button>
<p className='text-[2vw] pt-10'>Mail id : awaisrangrej9876@gmail.com</p>
</div>
<div className="insta border-l-[2px] pl-5 border-black font-[BarlowBold]">
<h1 className='text-[3.5vw]'>Instagram</h1>
<p className='text-[2vw]'>Feel free to DM me with any questions or <br /> website creation requests.</p>
<p className='text-[2vw] pt-10'>Insta id : @waisrangrej</p>
</div>
</div>
        </div>
    </div>
  )
}

export default Contcat
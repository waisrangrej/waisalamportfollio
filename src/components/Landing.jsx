import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Landing() {
     const {bgcolor,textcolor,theme}=useTheme();
     const [div100, setdiv100] = useState(false)
     const [iscolor, setiscolor] = useState(false)

     const colors=[
        {bg:"bg-[#FE942D]", Text:"text-[#FF9326]"},
        {bg:"bg-[#34FF8D]", Text:"text-[#34FF8D]"},
        {bg:"bg-[#FFFF3B]", Text:"text-[#FFFF3B]"},
        {bg:"bg-[#2DEBFF]", Text:"text-[#2DEBFF]"},
        {bg:"bg-[#FF70C0]", Text:"text-[#FF70C0]"},
        {bg:"bg-[#ffffff]", Text:"text-[#000000]"},
     ]

     const calculateHeight = (index) => {
      const baseHeight = 20; // Base height in vw
      const decrement = 2;   // Decrement per div
      return `${baseHeight - index * decrement}vw`;
    };

    const handleDivclick=(bg,Text)=>{
theme(bg,Text);
setdiv100(true);
setiscolor(true)
    }
const handleDivcolor=(bg,Text)=>{
theme(bg,Text)
setiscolor(true)
}
useGSAP(()=>{
  let tl=gsap.timeline()

  tl.to(".height",{
    height:"0vw"
  })
  tl.to(".height",{
    height:calculateHeight,
    stagger:"0.2",
    transformOrigin:"bottom",
    ease:"easeIn"
  })
})

  return (
    <div style={{top:div100 ? "-100%" :"0"}} className={`w-full h-screen fixed top-0 z-[999999999] bg-black ${textcolor} transition-all duration-1000 text-[8vw] font-["BarlowBlack"] `} >
<div style={{ transform: 'rotateY(-70deg)' ,perspective:"2000px"}} className='colors flex items-center gap-6 absolute bottom-[25%] left-[5%] '>
{colors.map((color,index)=>{
  return <motion.div  key={index} onMouseMove={()=>handleDivcolor(color.bg,color.Text)} onClick={()=> handleDivclick(color.bg, color.Text)
  } className={`${color.bg} ${color.Text} height w-[14vw] h-[25vw]`}  style={{ height: calculateHeight(index), perspective:"400px", transform:'rotateY(35deg)' ,transformOrigin:"top"}}>
<div className='full'></div>
  </motion.div>
})}
</div>
<h1 style={{transform:"rotateY('45deg')", perspective:"400px"}}  className={`leading-[7.5vw] transition-all ease-in duration-500 ${iscolor ? textcolor:"text-white"} tracking-wider absolute bottom-5 right-10`}>Click On Your <br /> Favroute COlor</h1>
    </div>
  )
}

export default Landing
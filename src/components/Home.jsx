import React, { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import Nav from './Nav'
import { useTheme } from '../context/ThemeContext'
import { useScroll ,motion,useTransform, transform } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { color2Hex } from 'vanta/src/helpers'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const {bgcolor,textcolor,theme}=useTheme()
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)



useEffect(() => {
  
    if (vantaEffect) {
    } else {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 100.00,
        minWidth: 100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: color2Hex(bgcolor), // Primary color
        color2: 0x000000, // Secondary color
        backgroundColor: 0x080000, // Background color
        size: 2.40,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, bgcolor]); // Re-run effect when `vantaEffect` or `bgcolor` changes


useGSAP(()=>{
  let tl=gsap.timeline({    scrollTrigger:{
    trigger:".main",
    start:"top top",
    end:"+=800",
    pin:true,
    scrub:2
  },})
  tl.to(".h",{
    y:"-300%"
  },"b")
  tl.to(".rotatex",{
transform:'rotateX(-160deg)',
transformOrigin:'bottom'
  },"b")
  tl.to(".width",{
width:"100vw",
borderRadius:"0",
  },"a")
  tl.to(".width",{
    height:"100vh",
   
      },"a")
      tl.from(".textop",{
        opacity:0,
        ease:Expo.easeIn,
      })
})

  return (
   
    <div  className={`main  relative w-full h-screen   overflow-hidden bg-[#000000]`} >
      <Nav/>
      <div className={`${bgcolor} w-5 h-[18vw] rounded-[10%] transition-all ease-linear duration-700 width absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
      <h2 className='text-black textop  font-[BarlowBold] text-[3vw] uppercase absolute bottom-[30%] left-[20%]'> (i'am a) </h2>
      <h1 className={`text-black textop  uppercase text-[10vw] absolute bottom-10 right-5 font-[BarlowBlack]`}>Frontend devloper</h1>
      </div>
      <div ref={myRef} style={{transform:'rotateX(-38deg)', perspective:"400px", transformOrigin:'bottom'}} className='w-full rotatex h-[200vh] absolute -top-[100%]'></div>
        <div className={`font-["BarlowBlack"] ${textcolor} hii absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[30vw] flex items-center justify-center gap-8 -ml-9`} ><motion.span 
     className='h '>H</motion.span> <span>I</span> <motion.span className='h '>I</motion.span></div>
    </div>
 
  )
}

export default Home

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

function Footer() {
  const {bgcolor,textcolor,theme}=useTheme()

  return (
   
    <div  className={`mainf relative w-full h-screen ${bgcolor}  overflow-hidden bg-[#000000]`} >
<h1 className={`font-[BarlowBold] text-[25vw] left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 absolute z-50 text-black text-nowrap`}>LET's TALK</h1>
<span className='text-black font-[BarlowBold] text-[3vw] text-center absolute top-[90%] -translate-x-1/2 -translate-y-1/2 left-1/2'> PHONE : 9523728021</span>
    </div>
 
  )
}

export default Footer

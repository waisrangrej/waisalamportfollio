import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link, NavLink } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)

function Nav({
  className=""
}) {
const {bgcolor,textcolor,theme}=useTheme()

useGSAP(()=>{
gsap.to(".topy",{
  scrollTrigger:{
    trigger:".topy",
    start:"top top",
    end:"+=100",scrub:2
  },
  top:"-50%"
})
})

  return (
    <div style={{backgroundColor:"transparent"}}  className={`w-full ${textcolor} fixed top-0 topy flex items-center justify-between p-5 px-10 z-40`}>
        <h1 className={`text-[2vw]  font-["BarlowBold"]  `}>WAIS ALAM</h1>
        <nav>
<ul className={`flex items-center text-[2vw] font-["BarlowBold"] gap-8 `}>
    <li>
      Home
      </li>
    <li>
    Projects
    </li>
    <li>
<a href="https://github.com/waisrangrej?tab=repositories"> Github</a>
    </li>
    <li>
    Contact
    </li>

</ul>
        </nav>
    </div>
  )
}

export default Nav
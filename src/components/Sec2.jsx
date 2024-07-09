import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/src/all'
import { useTheme } from '../context/ThemeContext'
gsap.registerPlugin(ScrollTrigger)

function Sec2() {
const {bgcolor,textcolor,theme}=useTheme()

useGSAP(()=>{
  let tl3=gsap.timeline()

  tl3.to(".textc",{
    scrollTrigger:{
      trigger:".sec2",
      start:"top top",
      end:"+=500",
      pin:true,
      scrub:2
    },
    opacity:".3"
  },"a")
  tl3.from(".ptext ",{
    scrollTrigger:{
      trigger:".sec2",
      start:"top top",
      end:"+=500",
      scrub:2
    },
    bottom:"-170%",
    opacity:"0.3"
  },"a")
})

  return (
    
    <div className={`w-full sec2 h-screen relative overflow-hidden ${bgcolor}  text-black font-['BarlowBold'] `}>
<div className="w-full h-full flex items-center  justify-center sticky top-0 -z-0">
<h1 className='text-center textc text-[18vw]'>INTRODUCTION</h1>
</div>
<p className='absolute ptext pl-10 bottom-[0] text-[3vw] w-[70%] leading-[10vw] z-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dignissimos dolor earum sequi tenetur nihil, reprehenderit atque corporis harum voluptatem qui mollitia. Nihil distinctio quae obcaecati. Blanditiis minus quibusdam esse ratione voluptatem laborum id magni eligendi deserunt rerum sit, sequi accusantium, excepturi nam, quo a mollitia? Voluptatum explicabo, assumenda vel voluptas, nobis odit quibusdam eum, magnam tenetur architecto cum consequuntur magni dolore dolores pariatur fugit.</p>
    </div>
  )
}

export default Sec2
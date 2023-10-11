import React from 'react'
import { motion } from 'framer-motion'

type Props = {}
function BackgroundCircles({}: Props) {
  return (
    <div className=' relative flex  justify-center items-center h-screen'>
        <div className='absolute border-[#6d6d6d] rounded-full h-[200px] w-[200px] mt-52  animate-ping'/>
        
        <div className='rounded-full border border-[#727272] h-[300px] w-[300px] absolute mt-52'/>
        <div className='rounded-full border border-[#676767] h-[500px] w-[500px] absolute mt-52'/>
        <div className=' rounded-full border border-[#F7AB0A] opacity-20'/>
       
    </div>
  )
}
 
export default BackgroundCircles
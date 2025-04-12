"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="px-6 py-2 border border-[#7042f88b] opacity-90 rounded-full bg-[#0300145e] backdrop-blur-sm"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 inline-block animate-pulse" />
        <h3 className="text-[15px] text-[#b49bff] font-bold inline-block">Think. Create. Solve.</h3>
      </motion.div>
      
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className='mt-6 text-center'
      >
        <motion.p 
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="text-gray-300 text-[20px] mt-6 mb-10 max-w-[600px] text-center leading-relaxed"
        >
          Crafting digital experiences with modern technologies.
          From frontend finesse to backend robustness, explore my technical arsenal below.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default SkillText
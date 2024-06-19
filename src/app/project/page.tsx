'use client';
import { BentoGridDemo } from '@/components/BentoGridDemo'
import NavbarTwo from '@/components/NavbarTwo'
import { motion } from 'framer-motion'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div>
        <NavbarTwo   />
      </div>
      <motion.div
         initial ={{y:-100}}
         animate = {{y:0}}
         transition={{duration: 1,type:"spring",damping:6}}
      className='w-full items-center justify-center flex mt-6'>
        <h1 className='font-bold text-3xl'>Projects</h1>
      </motion.div>
      <div>
        <BentoGridDemo />
      </div>
    </div>
  )
}

'use client';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button'
import { easeInOut, motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

export default function About() {
  return (
    <div>
      <Navbar />
      <motion.div
         initial ={{y:-100}}
         animate = {{y:0}}
         transition={{duration: 1,type:"spring",damping:9}} className='w-full mt-12 flex justify-center items-center'>
        <h1 className='font-bold text-3xl'>Profile</h1>
      </motion.div>
      <motion.div
      initial ={{y:-100}}
      animate = {{y:0}}
      transition={{duration: 1,type:"spring",damping:9}}
      className='w-full mt-3 flex justify-center items-center'>
        <h1 className='font-bold text-xl'>I am a creative developer</h1>
      </motion.div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-9 p-3 md:px-24'>
        <motion.div
        initial ={{opacity:0}}
        animate = {{opacity:1}}
        transition={{duration: 1,delay:0.6 , ease : easeInOut}}
        className='border p-9 min-h-[450px] overflow-hidden'>
          <p className='text-xl font-bold text-orange-400'>Detail</p>
          <div className='flex flex-col gap-6 mt-9 '>
            <p className='font-bold'>Name:</p>
            <p>Nnureach Hong</p>
            <p className='font-bold'>Age:</p>
            <p>21 years old</p>
            <p className='font-bold'>Location:</p>
            <p>Cambodia, Phnom Penh, Meanchey, 80BT</p>
          </div>
        </motion.div>
        <motion.div
         initial ={{opacity:0}}
         animate = {{opacity:1}}
         transition={{duration: 1,delay:0.9 , ease : easeInOut}}
        className='border p-9 min-h-[450px] overflow-hidden'>
          <p className='text-xl font-bold text-orange-400'>About Me</p>
          <div className='flex flex-col gap-6 mt-9 '>
            <p>I am a skilled web and mobile developer with a passion for crafting efficient, user-friendly applications. With expertise in both front-end and back-end technologies, I specialize in creating seamless digital experiences that enhance user engagement and satisfaction.
            </p>
            <a className='w-full' href='mailto:nureach46@gmail.com'>
              <Button  className='bg-orange-400 font-extrabold w-full'>Contact <Mail className='ml-3 font-bold' /> </Button>
            </a>
            <a className='w-full' href='/cv.pdf' download={true}>
            <Button className='bg-orange-400 font-extrabold w-full'>Download Cv <Download className='ml-3 font-bold' /> </Button>  
            </a>
          </div>
        </motion.div>
        <motion.div
         initial ={{opacity:0}}
         animate = {{opacity:1}}
         transition={{duration: 1,delay:1.2 , ease : easeInOut}}
        className='border p-9 min-h-[450px]  relative flex flex-col gap-6'>
          <img src="/cover.jpg" alt="profile" className=' object-cover ' />
          <div>
            <p className='font-bold'>Nnureach Hong</p>
          </div>
          <div className='flex flex-wrap gap-6'>
              <Link href={'/'}>
                <img src="https://api.iconify.design/logos:facebook.svg" alt=""  className='w-9 cursor-pointer'/>
              </Link>  
              <Link href={'/'}>
                <img src="https://api.iconify.design/skill-icons:instagram.svg" alt="" className='w-9 cursor-pointer'/>
              </Link>
              <Link href={'/'}>
                <img src="https://api.iconify.design/logos:telegram.svg" alt="" className='w-9 cursor-pointer'/>
              </Link>
              <Link href={'/'}>
                <img src="https://api.iconify.design/skill-icons:github-dark.svg" alt="" className='w-9 cursor-pointer'/>
              </Link>
              <Link href={'/'}>
                <img src="https://api.iconify.design/skill-icons:linkedin.svg" alt="" className='w-9 cursor-pointer'/>
              </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

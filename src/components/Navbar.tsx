'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll();
  const [ show , setShow ] = useState(true);
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest>47) {
  //     setShow(true)
  //   }else{
  //     setShow(false)
  //   }
  // })
  return (
    <div className='flex justify-between p-3 w-full '>
        <div className=''>
            <Link href={'/'} className='text-sm font-extrabold  text-gray-630 text-black '>
              @NNUREACH HONG@
            </Link>
        </div>
        {
          show &&
          <div className='hidden md:block md:fixed top-3 right-3'>
            <Sheet>
              <SheetTrigger>
                <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center text-black'>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent side={"right"}>
              <SheetHeader>
                  <SheetTitle className='text-xs mt-24 border-b p-6'>NAVIGATE</SheetTitle>
                  <SheetDescription className='p-6 flex flex-col gap-6 text-black font-bold text-3xl'>
                    <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1, ease: [0.27,0.94,0.48,1.0]}}
                    >
                      <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/`}>Home</Link>
                    </motion.div>
                    <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1.3, ease: [0.27,0.94,0.48,1.0]}}
                    >
                      <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/project`}>Project</Link>
                    </motion.div>
                    <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1.6, ease: [0.27,0.94,0.48,1.0]}}
                    >
                       <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/about`}>About</Link>
                    </motion.div>  
                  </SheetDescription>
                  <SheetTitle className='text-xs mt-16 border-b p-6'>FIND ME!!</SheetTitle> 
                  <SheetTitle className='text-xs mt-16 border-b p-6 flex gap-3'>
                  <Link href={'https://www.facebook.com/profile.php?id=100009653767074'}>
                      <img src="https://api.iconify.design/logos:facebook.svg" alt=""  className='w-9 cursor-pointer'/>
                    </Link>  
                    <Link href={'https://t.me/Nnureach'}>
                      <img src="https://api.iconify.design/logos:telegram.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                    <Link href={'https://github.com/NuReach'}>
                      <img src="https://api.iconify.design/skill-icons:github-dark.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/nu-reach-94b564220/'}>
                      <img src="https://api.iconify.design/skill-icons:linkedin.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                  </SheetTitle>  
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        }
          <div className='fixed top-3 right-3 md:hidden'>
            <Sheet>
              <SheetTrigger>
                <div className='w-12 h-12 bg-white rounded-full flex justify-center items-center text-black'>
                  <Menu />
                </div>
              </SheetTrigger>
              <SheetContent side={"right"}>
              <SheetHeader>
                  <SheetTitle className='text-xs mt-24 border-b p-6'>NAVIGATE</SheetTitle>
                  <SheetDescription className='p-6 flex flex-col gap-6 text-black font-bold text-3xl'>
                  <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1, ease: [0.27,0.94,0.48,1.0]}}
                    >
                      <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/`}>Home</Link>
                    </motion.div>
                    <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1.3, ease: [0.27,0.94,0.48,1.0]}}
                    >
                      <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/project`}>Project</Link>
                    </motion.div>
                    <motion.div 
                      initial={{x: 100 }}
                      animate={{x: 0}}
                      exit={{opacity:0}}
                      transition={{duration: 1.6, ease: [0.27,0.94,0.48,1.0]}}
                    >
                       <Link className='hover:border-b-2 hover:transition-opacity hover:delay-100' href={`/about`}>About</Link>
                    </motion.div>
                  </SheetDescription>
                  <SheetTitle className='text-xs mt-16 border-b p-6'>FIND ME!!</SheetTitle> 
                  <SheetTitle className='text-xs mt-16 border-b py-6 flex gap-3 flex-wrap'>
                    <Link href={'https://www.facebook.com/profile.php?id=100009653767074'}>
                      <img src="https://api.iconify.design/logos:facebook.svg" alt=""  className='w-9 cursor-pointer'/>
                    </Link>  
                    <Link href={'https://t.me/Nnureach'}>
                      <img src="https://api.iconify.design/logos:telegram.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                    <Link href={'https://github.com/NuReach'}>
                      <img src="https://api.iconify.design/skill-icons:github-dark.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                    <Link href={'https://www.linkedin.com/in/nu-reach-94b564220/'}>
                      <img src="https://api.iconify.design/skill-icons:linkedin.svg" alt="" className='w-9 cursor-pointer'/>
                    </Link>
                  </SheetTitle>  
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
    </div>
  )
}

'use client';
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const name = "I'm Nnureach Hong, Freelancer, Website and Mobile Developer.";
  const textArr = name.split("");
  return (
  <div className="relative ">
    <div className="absolute w-full top-36 sm:top-72 z-10">
      <Navbar />
    </div>
     <div className="my-container w-full relative">
      <Image
        src="/cover.jpg" 
        alt="My background image"
        width={1280} 
        height={720} 
        className=" w-full object-cover h-[600px] -mt-36  sm:h-[1030px] sm:-mt-72 brightness-75 "
      />
      <div>
          <div className="absolute z-50 top-[403px] left-[3px] sm:top-[603px] sm:left-[303px] lg:left-[603px] xl:left-[803px]  text-black text-lg sm:text-3xl p-3 md:w-80 text-center font-extrabold">
            {
              textArr.map((item,i)=>(
                <motion.span
                  key={i}
                  initial ={{opacity:0}}
                  animate = {{opacity:1}}
                  transition={{duration: 1, ease: [0.27,0.94,0.48,1.0], delay : i*0.03}}
                >{item}</motion.span>
              ))
            }
          </div>
          <div className="absolute z-50 top-[400px] left-[0px] sm:top-[600px] sm:left-[300px] lg:left-[600px] xl:left-[800px] text-lg sm:text-3xl p-3 md:w-80 text-center font-bold">
            {
              textArr.map((item,i)=>(
                <motion.span
                  key={i}
                  initial ={{opacity:0}}
                  animate = {{opacity:1}}
                  transition={{duration: 1, ease: [0.27,0.94,0.48,1.0], delay : i*0.03}}
                >{item}</motion.span>
              ))
            }
          </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque nulla tenetur non dolorum? Facilis doloribus labore quaerat, libero nemo aliquid voluptatum autem iusto beatae voluptatem amet perspiciatis, explicabo magni.
    </div>
  </div>
  );
}

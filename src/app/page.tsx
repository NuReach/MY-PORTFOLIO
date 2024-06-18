'use client';
import Navbar from "@/components/Navbar";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const name = "I'm Nnureach Hong, Freelancer, Website and Mobile Developer.";
  const textArr = name.split("");
  const mydesc = useRef(null);
  const isMyDescInView = useInView(mydesc);
  
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
        className=" w-full object-cover h-[600px] -mt-36  sm:h-[1030px] sm:-mt-72 brightness-95 "
      />
      <div>
          <div className="absolute text-white z-50 top-[401px] left-[1px] sm:top-[501px] sm:left-[303px] lg:left-[603px] xl:left-[803px] text-2xl sm:text-5xl p-3 md:w-96 text-center font-extrabold">
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
          <div className="absolute text-black z-50 top-[400px] left-[0px] sm:top-[500px] sm:left-[300px] lg:left-[600px] xl:left-[800px] text-2xl sm:text-5xl p-3 md:w-96 text-center font-extrabold">
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
    <div className="relative">
      <div ref={mydesc} className=" w-full flex justify-center items-center absolute top-6 sm:top-12 "
         style={{
          transform: isMyDescInView ? "none" : "translateY(120px)",
          opacity: isMyDescInView ? 1 : 0,
          transition: "all 2.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <p className="p-3 w-full sm:w-[600px] text-center text-sm sm:text-xl">
        "I am a skilled web and mobile developer with a passion for crafting efficient, user-friendly applications. With expertise in both front-end and back-end technologies, I specialize in creating seamless digital experiences that enhance user engagement and satisfaction."
        </p>
      </div>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <div className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab nam! Iste aspernatur tempora ipsa quis molestiae? Saepe sapiente sit neque aliquid natus delectus voluptas nobis excepturi. Doloribus, exercitationem ea.
        </div>
        {/* <Image
          src={`/cover.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
      </ContainerScroll>
    </div>
  </div>
  );
}

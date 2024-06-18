'use client';
import CardSection from "@/components/CardSection";
import Navbar from "@/components/Navbar";
import { LampDemo } from "@/components/lamp";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const name = "I'm Nnureach Hong, Freelancer, Website and Mobile Developer.";
  const textArr = name.split("");
  const mydesc = useRef(null);
  const isMyDescInView = useInView(mydesc,{once:true});
  const header1 = useRef(null);
  const isHeader1InView = useInView(header1,{once:true});
  const header2 = useRef(null);
  const isHeader2InView = useInView(header2,{once:true});
  const cardSection = useRef(null);
  const isCardSectionInView = useInView(cardSection,{once:true});
  const header3 = useRef(null);
  const isHeader3InView = useInView(header3,{once:true});
  
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
    <motion.div ref={mydesc} className=" w-full flex justify-center items-center my-12 text-white "
        style={{
        transform: isMyDescInView ? "none" : "translateY(100px)",
        opacity: isMyDescInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
      }}
    >
      <p className="p-3 w-full sm:w-[600px] text-center text-sm sm:text-xl">
      "I am a skilled web and mobile developer with a passion for crafting efficient, user-friendly applications. With expertise in both front-end and back-end technologies, I specialize in creating seamless digital experiences that enhance user engagement and satisfaction."
      </p>
    </motion.div>
    <div className="w-full text-center mt-12 mb-9">
        <h1 className="text-4xl font-semibold text-white" 
        ref={header1}
        style={{
          transform: isHeader1InView ? "none" : "translateY(100px)",
          opacity: isHeader1InView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
        }}>
            Unleash the power of new <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Technologies
            </span>
        </h1>
    </div>
    <div className="relative">
      <ContainerScroll
        titleComponent={
          <>
          </>
        }
      >
        <div className="text-black">
          <div className="w-full columns-3 sm:columns-4 lg:columns-5  p-3">
            <img src="https://api.iconify.design/devicon:html5.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/logos:css-3.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/devicon:javascript.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/skill-icons:tailwindcss-light.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/devicon:java-wordmark.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/devicon:spring-wordmark.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/logos:php.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/devicon:laravel-wordmark.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/vscode-icons:file-type-flutter.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/vscode-icons:file-type-node.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/skill-icons:nextjs-light.svg"className="w-full p-3" alt="" />
            <img src="https://api.iconify.design/skill-icons:nestjs-light.svg"className="w-full p-3" alt="" />
          </div>
        </div>
      </ContainerScroll>
    </div>
    <div className="w-full items-center justify-center flex">
        <p  ref={header2}
        style={{
          transform: isHeader2InView ? "none" : "translateY(100px)",
          opacity: isHeader2InView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
        }} className="text-4xl lg:text-7xl font-bold">More About Me</p>
    </div>
    <div
    ref={cardSection}
    style={{
      transform: isCardSectionInView ? "none" : "translateY(100px)",
      opacity: isCardSectionInView ? 1 : 0,
      transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
    }}>
      <CardSection />
    </div>
    <div  ref={header3}
        style={{
          transform: isHeader3InView ? "none" : "translateY(100px)",
          opacity: isHeader3InView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
        }} >
          <LampDemo text={"If you want to see some of my proejects, Please click on the menu icon"} />
    </div>
  </div>
  );
}

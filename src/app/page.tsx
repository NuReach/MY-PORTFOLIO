import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <div className="relative ">
    <div className="absolute w-full top-36 sm:top-72 z-10">
      <Navbar />
    </div>
     <div className="my-container w-full">
      <Image
        src="/cover.jpg" 
        alt="My background image"
        width={1280} 
        height={720} 
        className=" w-full object-cover h-[600px] -mt-36  sm:h-[1030px] sm:-mt-72"
      />
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque nulla tenetur non dolorum? Facilis doloribus labore quaerat, libero nemo aliquid voluptatum autem iusto beatae voluptatem amet perspiciatis, explicabo magni.
    </div>
  </div>
  );
}

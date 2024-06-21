import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { LucideOctagonX } from "lucide-react";
import Image from "next/image";


export function BentoGridDemo() {
  return (
    <BentoGrid className="p-3 lg:p-12">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 || i===10 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Bali Villa Kompot",
    description: "Explore the modern of web solution ideas and inventions.",
    header: <Image width={1200} height={900} src={`/bali1.png`} alt="bali" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Note taking with AI",
    description: "Dive into the ai technology to store all your note.",
    header: <Image width={1200} height={900} src={`/note1.png`} alt="note" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "E-Commerce Online Store",
    description: "Browse our curated selection of high-quality products and discover your new favorites today",
    header: <Image width={1200} height={900} src={`/ecommerce1.png`} alt="ecommerce" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "My Portfolio website",
    description:
      "Welcome to my portfolio, showcasing my skills and experience to bring your vision to life.",
    header: <Image width={1200} height={100} src={`/portfo.png`} alt="myportfo" className=" h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Hotel Management System",
    description: "Streamline your hotel operations with a comprehensive system for reservations, guest management, and efficient daily tasks.",
    header: <Image width={1200} height={900} src={`/no-image.png`} alt="hotel" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Limkokwing Online Quiz",
    description: "Test your knowledge and prepare for success with Limkokwing's online quizzes.",
    header: <Image width={1200} height={900} src={`/lkw1.png`} alt="lkw" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Rebuild Apple 3D Website",
    description: "Immerse yourself in interactive experiences with eye-catching 3D website designs.",
    header: <Image width={1200} height={100} src={`/apple1.png`} alt="apple" className=" h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Video Streaming ",
    description: "Lose yourself in a world of entertainment with endless video streaming options.",
    header: <Image width={1200} height={900} src={`/vdostream1.png`} alt="vdo" className=" h-full object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Cambodia Scholarship Center",
    description: "Storing all data in cloud",
    header: <Image width={1200} height={900} src={`/cscdata1.png`} alt="csc" className="  h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Cambodia Scholarship Center E-Learning",
    description: "Enhance scholarship rate with our cousrse",
    header: <Image width={1200} height={900} src={`/csc1.png`} alt="csc" className="  h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "E-Menu for your business",
    description: "Choose the best menu for your customer",
    header: <Image width={1200} height={900} src={`/no-image.png`} alt="e-menu" className="  h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Mobile Legend Drafting",
    description: "Analyze draft winrate with our system",
    header: <Image width={1200} height={900} src={`/mlbb1.png`} alt="mlbb" className="  h-[270px] object-cover" />,
    icon: <LucideOctagonX />,
  },
  
];

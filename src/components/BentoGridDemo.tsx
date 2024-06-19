import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { LucideOctagonX } from "lucide-react";


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
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Note taking with AI",
    description: "Dive into the ai technology to store all your note.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "E-Commerce Online Store",
    description: "Browse our curated selection of high-quality products and discover your new favorites today",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "My Portfolio website",
    description:
      "Welcome to my portfolio, showcasing my skills and experience to bring your vision to life.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Hotel Management System",
    description: "Streamline your hotel operations with a comprehensive system for reservations, guest management, and efficient daily tasks.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Limkokwing Online Quiz",
    description: "Test your knowledge and prepare for success with Limkokwing's online quizzes.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Rebuild Apple 3D Website",
    description: "Immerse yourself in interactive experiences with eye-catching 3D website designs.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Video Streaming ",
    description: "Lose yourself in a world of entertainment with endless video streaming options.",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Cambodia Scholarship Center",
    description: "Storing all data in cloud",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Cambodia Scholarship Center E-Learning",
    description: "Enhance scholarship rate with our cousrse",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "E-Menu for your business",
    description: "Choose the best menu for your customer",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  {
    title: "Mobile Legend Drafting",
    description: "Analyze draft winrate with our system",
    header: <Skeleton />,
    icon: <LucideOctagonX />,
  },
  
];

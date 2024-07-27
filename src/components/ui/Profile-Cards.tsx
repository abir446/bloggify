"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProfileCardProps{
    imgUrl: String,
}

export function ProfileCards({imgUrl}:ProfileCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-[url(${imgUrl})] bg-cover`
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
       
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Author Card
          </h1>
          
        </div>
      </div>
    </div>
  );
}

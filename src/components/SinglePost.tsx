"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { title } from "process";
interface SinglePostProps {
  t: string;
  b: string;
  imageUrl: string;
  // linkUrl: string;
}

export function SinglePost({
  t,
  b,
  imageUrl,
}: // linkUrl,
SinglePostProps) {
  const dummyContent = [
    {
      title: t,
      description: b,

      badge: "React",
      image: { imageUrl },
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <div key={`content-`} className="mb-10">
          <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            {/* {item.badge} */}
          </h2>

          <p className="text-xl mb-4">{t}</p>

          <div className="text-sm  prose prose-sm dark:prose-invert">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="blog thumbnail"
                height="1000"
                width="1000"
                className="rounded-lg mb-10 object-cover"
              />
            )}
            {b}
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}

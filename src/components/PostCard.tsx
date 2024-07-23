"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import UserCard from "./User";

interface ThreeDCardDemoProps {
  title: string;
  id: number;
  imageUrl: string;
  username: string;
}

export function ThreeDCardDemo({
  title,
  id,
  imageUrl,
  username,
}: // body,
// linkUrl,
ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl w-full font-bold text-neutral-600 dark:text-white "
        >
          <UserCard username={username} />
          {title}
        </CardItem>

        {imageUrl && (
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              height="800"
              width="800"
              className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        )}
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={`/posts/${id}`}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Read More →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

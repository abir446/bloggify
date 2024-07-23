"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import nextLink from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ScrollShadow } from "@nextui-org/scroll-shadow";


const CoverLoggedin = () => {
  const words = `Discover, Share, and Inspire: Join Our Community of Passionate Writers and Readers Today!
`;

  return (
    <ScrollShadow hideScrollBar className="w-full h-[85vh]">
      <WavyBackground className="max-w-xl flex flex-col items-center justify-center gap-2 mx-auto pb-40 px-2 md:px-0">
        <TextGenerateEffect words={words} />
        <Link
          showAnchorIcon
          as={nextLink}
          className=" bg-transparent transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 "
          color="foreground"
          href="/new-blog"
        >
          Post A New Blog
        </Link>
      </WavyBackground>
    </ScrollShadow>
  );
};

export default CoverLoggedin;

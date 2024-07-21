import React from "react";
import { Link } from "@nextui-org/react";
import nextLink from "next/link";

const CoverLoggedin = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start max-w-[80vw] mx-auto bg-zinc-900 rounded-lg px-2 py-4 mb-5">
        <h1 className="text-lg italic font-bold">
          &quot;Keep your friends rich and your enemies rich Then find out which
          is which!&quot;
        </h1>
        <span>-Ultron</span>
      </div>
      <div className="flex flex-col items-center justify-start max-w-[80vw] mx-auto">
        <h2 className="text-sm">Fill others with your knowledge:</h2>
        <Link
          showAnchorIcon
          as={nextLink}
          className=" bg-zinc-800 hover:bg-transparent transition-all duration-500 border border-gray-200 rounded-lg px-2 py-1 "
          color="foreground"
          href="/new-blog"
        >
          Post A New Blog
        </Link>
      </div>
    </div>
  );
};

export default CoverLoggedin;

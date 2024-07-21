import { ThreeDCardDemo } from "@/components/PostCard";
import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return (
    <ScrollShadow hideScrollBar className="w-full h-[85vh]">
      <div className="px-5  md:px-0">
        <div className="mb-2 ">
          <h2 className="text-center  text-2xl ">Recent Posts</h2>
        </div>
        <div className="flex flex-col gap-4 ">
          {data.map((post: any) => (
            <ThreeDCardDemo key={post.id} id={post.id} title={post.title} />
          ))}
        </div>
      </div>
    </ScrollShadow>
  );
};

export default page;

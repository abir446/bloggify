import { ThreeDCardDemo } from "@/components/PostCard";
import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import prisma from "@/lib/db";

const page = async () => {
  const data1 = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  await new Promise((resolve) => {setTimeout(resolve,1000)})
  return (
    <ScrollShadow hideScrollBar className="w-full h-[85vh]">
      <div className="px-5  md:px-0">
        <div className="mb-2 ">
          <h2 className="text-center  text-2xl">Recent Posts</h2>
        </div>
        <div className="flex flex-col gap-4 ">
          {data1.map((post: any) => (
            <ThreeDCardDemo
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              username={post.username}
              userImage={post.userImage}
            />
          ))}
        </div>
      </div>
    </ScrollShadow>
  );
};

export default page;

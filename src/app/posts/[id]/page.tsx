import { SinglePost } from "@/components/SinglePost";
import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import prisma from "@/lib/db";
import { ObjectId } from "mongodb";

const page = async ({ params }: { params: Params }) => {
  await new Promise((resolve) => {setTimeout(resolve,1000)})
  const postId = new ObjectId(params.id);
  const post = await prisma.post.findUnique({
    where: {
      id: postId.toString(),
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <ScrollShadow hideScrollBar className="w-full h-[85vh]">
        <SinglePost imageUrl={post.imageUrl} t={post.title} b={post.body} />
      </ScrollShadow>
    </div>
  );
};

export default page;

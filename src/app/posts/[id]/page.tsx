import { SinglePost } from "@/components/SinglePost";
import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const page = async ({ params }: { params: Params }) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await data.json();

  return (
    <div>
      <ScrollShadow hideScrollBar className="w-full h-[85vh]">
        <SinglePost t={post.title} b={post.body} />
      </ScrollShadow>
    </div>
  );
};

export default page;

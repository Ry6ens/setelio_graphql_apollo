import React from "react";
import Image from "next/image";

import { IPost } from "@/types/post";

type Props = {
  post: IPost;
};

export default function PostCard({ post }: Props) {
  console.log(post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        {/* <Image
          src={post.node.featuredImage}
          alt={post.node.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg ronded-t-lg lg:rounded-lg"
        /> */}
      </div>
    </div>
  );
}

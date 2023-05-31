import React from "react";

import { IPost } from "@/types/post";

type Props = {
  post: IPost;
};

export default function PostCard({ post }: Props) {
  return (
    <div>
      {post.title} {post.excerpt}
    </div>
  );
}

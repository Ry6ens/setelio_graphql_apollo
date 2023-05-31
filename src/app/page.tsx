"use client";

import { useQuery } from "@apollo/client";

import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

import { Posts } from "@/lib/posts.graphql";

import { IPosts } from "@/types/post";

export default function Home() {
  const { data, loading, error } = useQuery(Posts);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading missions.</p>;
  }

  const posts = data.postsConnection.edges;

  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: IPosts) => (
            <PostCard key={post.node.title} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}

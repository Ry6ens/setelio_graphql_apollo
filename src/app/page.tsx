"use client";

import Categories from "@/components/Categories";
import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

// import { getClient } from "@/lib/apollo";
// import { gql } from "@apollo/client";

// const query = gql`
//   query Now {
//     now(id: "1")
//   }
// `;

// const query = gql`
//   query MyQuery {
//     postsConnection {
//       edges {
//         node {
//           author {
//             bio
//             id
//             name
//             photo {
//               url
//             }
//           }
//           createdAt
//           slug
//           title
//           excerpt
//           featuredImage {
//             url
//           }
//           categories {
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `;

const posts = [
  { id: "1", title: "React", excerpt: "Learn React Testing" },
  {
    id: "2",
    title: "React with Tailwind",
    excerpt: "Learn React with Tailwind",
  },
];

export default async function Home() {
  // const data = await getClient().query({ query });
  // console.log("data::", data);

  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
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

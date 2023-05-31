export type IPost = {
  author: {
    bio: string;
    name: string;
    id: string;
    photo: string;
  };
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  categories: [];
};

export type IPosts = {
  node: IPost;
};

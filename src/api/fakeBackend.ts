interface Post {
  id: number;
  title: string;
  description: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
}

const posts: Post[] = [];

export const delay = () => new Promise((resolve) => setTimeout(resolve, 300));

export const getPosts = async () => {
  await delay();
  return posts;
};

export const getPost = async (id: Post["id"]) => {
  await delay();
  return posts.find((post) => post.id === id);
};

export const createPost = async (data: Omit<Post, "id">) => {
  await delay();
  return posts.push({
    ...data,
    id: posts.length,
  });
};

export const updatePost = async ({
  id,
  ...rest
}: Pick<Post, "id"> & Partial<Omit<Post, "id">>) => {
  await delay();
  const postIndex = posts.findIndex((post) => post.id === id);
  posts[postIndex] = {
    ...posts[postIndex],
    ...rest,
  };
};

export const deletePost = async (id: Post["id"]) => {
  await delay();
  const postIndex = posts.findIndex((post) => post.id === id);
  return posts.slice(postIndex, 1);
};

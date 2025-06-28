import { dummyJsonUrl } from "../constants";
import { IPost } from "../types";
import PostList from "./PostList";

export default async function PostsPage() {
  const res = await dummyJsonUrl.get(`/posts?limit=9&skip=0`);
  const initialPosts = res.data.posts as IPost[];

  return (
    <section>
      <h1 className="h1">Posts</h1>
      <PostList initialData={initialPosts} />
    </section>
  );
}

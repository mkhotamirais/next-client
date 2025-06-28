import { IPost } from "@/lib/dummyjson/types";
import { url } from "@/lib/dummyjson/utils";
import PostList from "./PostList";

export default async function PostsPage() {
  const res = await url.get(`/posts?limit=9&skip=0`);
  const initialPosts = res.data.posts as IPost[];

  return (
    <section>
      <div className="container">
        <h2 className="h2">Posts</h2>
        <PostList initialData={initialPosts} />
      </div>
    </section>
  );
}

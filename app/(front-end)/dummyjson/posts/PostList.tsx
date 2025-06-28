"use client";

import React from "react";
import { motion } from "motion/react";
import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import { IPost } from "../types";
import { dummyJsonUrl } from "../constants";

interface PostListProps {
  initialData: IPost[];
}

export default function PostList({ initialData }: PostListProps) {
  const {
    data: posts,
    loaderRef,
    loading,
    hasMore,
  } = useInfiniteScroll<IPost>({
    fetchFn: async (skip, limit) => {
      const res = await dummyJsonUrl.get(`/posts?limit=${limit}&skip=${skip}`);
      return res.data.posts;
    },
    limit: 9,
    initialData,
  });

  return (
    <>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h2">
        Post List
      </motion.h2>
      <div className="grid grid-cols-3 gap-2 py-12">
        {posts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded p-2"
          >
            <h3 className="h3">{item.title}</h3>
            <p>{item.body}</p>
          </motion.div>
        ))}
      </div>

      <div ref={loaderRef} className="py-4 text-center">
        {loading && <span>Loading...</span>}
        {!hasMore && <span>No more to load.</span>}
      </div>
    </>
  );
}

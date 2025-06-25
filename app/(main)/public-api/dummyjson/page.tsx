import React from "react";
import { dummyJsonUrl as url } from "../constants";
import axios from "axios";
import { IDJPost } from "../types";
import Link from "next/link";

export default async function Dummyjson() {
  const res = await axios.get(`${url}/posts?limit=10`);
  const posts = await res.data.posts;

  return (
    <div>
      <h2 className="h2">Dummyjson</h2>
      <div>
        <h3 className="h3">Posts List</h3>
        <div>
          {posts.map((item: IDJPost, i: number) => (
            <div key={i} className="border rounded p-2">
              <Link href={`/public-api/dummyjson/${item.id}`} className="hover:underline">
                <h4 className="text-sm">{item.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

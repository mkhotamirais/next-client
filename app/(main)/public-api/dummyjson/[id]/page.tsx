import React from "react";
import axios from "axios";
import { dummyJsonUrl as url } from "../../constants";

export default async function DjPostId({ params }: { params: { id: string } }) {
  const { id } = await params;
  const res = await axios.get(`${url}/posts/${id}`);
  const post = res.data;
  return (
    <div>
      <h2 className="h2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default async function Dummyjson() {
  return (
    <div>
      <h1 className="h1">Dummyjson</h1>
      <div>
        <Link href="/dummyjson/posts">Posts</Link>
        <Link href="/dummyjson/products">Products</Link>
      </div>
    </div>
  );
}

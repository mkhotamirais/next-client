import { dummyJsonUrl } from "@/lib/config/constants";
import React from "react";
import ProductList from "./ProductList";

const limit = 24;

export default async function Products() {
  const res = await dummyJsonUrl.get(`/products?limit=${limit}&skip=0`);

  return (
    <div>
      <div className="container">
        <h1 className="h1">Products</h1>
        <ProductList initialData={res.data.products} limit={limit} />
      </div>
    </div>
  );
}

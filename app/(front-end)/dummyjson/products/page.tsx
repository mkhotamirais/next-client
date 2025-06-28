import React from "react";
import ProductList from "./ProductList";
import { dummyJsonUrl } from "../constants";

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

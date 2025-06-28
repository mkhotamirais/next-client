"use client";

import { useInfiniteScroll } from "@/lib/hooks/useInfiniteScroll";
import Image from "next/image";
import React from "react";
import { IProduct } from "../types";
import { dummyJsonUrl } from "../constants";

interface IProductList {
  initialData: IProduct[];
  limit: number;
}

export default function ProductList({ initialData, limit = 9 }: IProductList) {
  const {
    data: products,
    loaderRef,
    loading,
    hasMore,
  } = useInfiniteScroll<IProduct>({
    fetchFn: async (skip, limit) => {
      const res = await dummyJsonUrl.get(`/products?limit=${limit}&skip=${skip}`);
      return res.data.products;
    },
    limit,
    initialData,
  });
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2">
        {products.map((item, i) => (
          <div key={i} className="rounded shadow">
            <div>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={100}
                height={100}
                className="size-20 object-center w-full object-contain"
                priority
              />
            </div>
            <div className="p-3">
              <h3>{item.brand}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div ref={loaderRef} className="py-4 text-center">
        {loading && <span>Loading...</span>}
        {!hasMore && <span>No more to load.</span>}
      </div>
    </>
  );
}

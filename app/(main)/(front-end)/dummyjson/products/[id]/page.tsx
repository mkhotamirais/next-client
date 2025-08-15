import React from "react";
import { dummyJsonUrl } from "../../constants";
import { IProduct } from "../../types";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await dummyJsonUrl.get(`/products?limit=10&skip=0`);
  const products = res.data.products as IProduct[];
  return products.map((item) => ({ id: item.id.toString() }));
};

export default async function ProductId({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "force-cache", // default-nya cache
    next: { revalidate: 60 }, // 1 menit refresh
  });
  const product = (await res.json()) as IProduct;

  return (
    <section className="py-4">
      <h1 className="h1">{product.title}</h1>
      <div className="flex">
        <div>
          <Image src={product.images[0]} alt={product.title} width={400} height={400} className="" priority />
          <p>gambar 2</p>
        </div>
        <div>
          <Image src={product.images[0]} alt={product.title} width={400} height={400} className="h-56 w-auto" />
          <p>gambar 1</p>
        </div>
      </div>
    </section>
  );
}

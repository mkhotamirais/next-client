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
  const res = await dummyJsonUrl.get(`/products/${id}`);
  const product = res.data as IProduct;

  return (
    <section className="py-4">
      <p>halo {id}</p>
      <h1 className="h1">{product.title}</h1>
      <div className="flex">
        <Image src={product.images[0]} alt={product.title} width={400} height={400} />
        <Image src={product.thumbnail} alt={product.title} width={400} height={400} />
      </div>
    </section>
  );
}

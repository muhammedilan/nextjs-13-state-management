import React from "react";

import { store } from "@/stores";
import { getProductById } from "@/stores/slices/productsSlice";

import AddBasketButton from "@/components/AddBasketButton";
import Image from "next/image";

const ProductDetail = async ({ searchParams }) => {
  const { id } = searchParams;
  const product = (await store.dispatch(getProductById(id))).payload;

  const { title, images, description, price, brand } = product;

  return (
    <div className="mt-20 mx-auto max-w-[500px] flex flex-col items-center text-center">
      <div className="w-[300px] h-[300px] relative">
        <Image fill src={images[0]} alt="Product" className="object-contain" />
      </div>
      <div className="font-bold mt-2 mb-3 text-[1.125rem]">{title}</div>
      <div className="font-medium mb-3">{description}</div>
      <AddBasketButton
        product={{ id, image: images[0], brand, title, price }}
      />
    </div>
  );
};

export default ProductDetail;

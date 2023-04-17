"use client";

import React from "react";
import Star from "@/assets/svgs/star.svg";
import Link from "next/link";
import Image from "next/image";
import AddBasketButton from "./AddBasketButton";

const Product = ({ id, title, images, price, brand, rating }) => {
  const rate = Math.floor(rating);
  const maxRate = 5;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const hrefTitle = title.replaceAll(" ", "-").toLocaleLowerCase();
  const href = `product/${hrefTitle}?id=${id}`;

  return (
    <div className="w-full flex flex-col">
      <Link href={href} className="cursor-pointer">
        <div className="h-[300px] relative">
          <Image
            fill
            alt="Product"
            src={images[0]}
            className="object-contain"
          />
        </div>
        <div className="text-[.75rem] text-primary/50 font-bold mt-4">
          {brand}
        </div>
        <h3 className="line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between font-bold mt-4 mb-6">
          <div className="flex gap-x-1">
            {[...Array(rate).keys()].map((key) => (
              <Star key={key} />
            ))}
            {[...Array(maxRate - rate).keys()].map((key) => (
              <Star key={key} stroke="#FFD233" className="[&>*]:fill-none" />
            ))}
          </div>
          {formatter.format(price).replace(".", ",")}
        </div>
      </Link>
      <AddBasketButton
        product={{ id, image: images[0], brand, title, price }}
      />
    </div>
  );
};

export default Product;

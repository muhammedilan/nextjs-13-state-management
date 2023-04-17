"use client";

import React from "react";
import ShoppingBag from "@/assets/svgs/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/stores/slices/basketSlice";

const AddBasketButton = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToBasket(product))}
      className="w-full h-10 bg-primary rounded-lg font-medium text-background mt-auto relative group overflow-hidden"
    >
      <div className="h-full leading-10 group-hover:-translate-y-full duration-500">
        Add To Basket
      </div>
      <div className="w-full h-full absolute top-full flex items-center justify-center group-hover:-translate-y-full duration-500 rounded-lg">
        <ShoppingBag className="[&>*]:fill-background" />
      </div>
    </button>
  );
};

export default AddBasketButton;

"use client";

import React from "react";
import Image from "next/image";

import Close from "@/assets/svgs/close.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromBasket,
  setQuantity,
} from "@/stores/slices/basketSlice";

const Basket = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleClose = () => setOpen(false);
  const handleSetQuantity = (e, product) => {
    const { id, quantity } = product;

    if (/^[0-9]+$/.test(e.target.value)) {
      let value = e.target.value;
      dispatch(setQuantity({ id, quantity: value }));
    } else {
      dispatch(setQuantity({ id, quantity }));
    }
  };

  return (
    <div
      data-open={open}
      className="invisible opacity-0 data-[open=true]:visible data-[open=true]:opacity-100 duration-300 relative z-10"
    >
      <div
        data-open={open}
        onClick={handleClose}
        className="w-full h-full bg-black/30 fixed left-0 top-0"
      />

      <div
        data-open={open}
        className="w-[min(100%,500px)] h-screen flex flex-col fixed top-0 right-0 z-10 bg-background translate-x-full data-[open=true]:translate-x-0 duration-500 py-6 px-4 sm:px-10"
      >
        <div className="flex items-center justify-between border-primary border-b py-6">
          <h2 className="font-normal">Shopping Cart</h2>
          <button onClick={handleClose} className="p-1">
            <Close className="[&>*]:fill-primary" />
          </button>
        </div>

        <div className="h-full overflow-y-scroll my-10 flex flex-col gap-y-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {basket.length == 0 ? (
            "No products in the cart"
          ) : (
            <>
              {basket.map((product) => {
                const { id, title, image, brand, price, quantity } = product;

                return (
                  <div
                    key={product.id}
                    className="flex gap-x-4 sm:gap-x-8 items-center justify-between"
                  >
                    <div className="h-full flex-1">
                      <div className="w-[min(100%,90px)] h-full relative">
                        <Image
                          fill
                          src={image}
                          alt="Product"
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-[.75rem] text-primary/50 font-bold">
                        {brand}
                      </div>
                      <h3 className="max-w-[100px]">{title}</h3>
                      <div className="h-8 inline-flex mt-4 border border-primary rounded-lg overflow-hidden">
                        <button
                          onClick={() => dispatch(decreaseQuantity(id))}
                          className="w-8 hover:bg-primary hover:text-background duration-300"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => handleSetQuantity(e, product)}
                          className="w-8 sm:w-10 bg-transparent outline-none text-center border-x border-primary"
                        />
                        <button
                          onClick={() => dispatch(increaseQuantity(id))}
                          className="w-8 hover:bg-primary hover:text-background duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-wrap items-center justify-between">
                      <div className="mx-auto whitespace-nowrap">
                        {quantity + " X "}
                        <span className="font-medium">
                          ${price}
                        </span>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromBasket(id))}
                        className="mx-auto p-1"
                      >
                        <Close className="[&>*]:fill-primary" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between border-primary border-t py-6">
          <h2 className="font-normal">Total Price</h2>
          <h3>
            {formatter.format(
              basket
                .map((product) => product.quantity * product.price)
                .reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                )
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Basket;

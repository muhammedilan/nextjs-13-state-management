"use client";

import React, { useState } from "react";
import Link from "next/link";
import Basket from "./Basket";
import IconButton from "./IconButton";
import ClickAwayListener from "./ClickAwayListener";

import Moon from "@/assets/svgs/moon.svg";
import ShoppingBag from "@/assets/svgs/shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/stores/slices/themeSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);

  return (
    <header className="sticky top-0 bg-background z-10 py-4 flex items-center justify-between">
      <h1>
        <Link href="/">E-Commerce</Link>
      </h1>
      <div className="flex gap-x-3">
        <IconButton onClick={() => dispatch(toggleTheme())}>
          <Moon className="[&>*]:fill-primary" />
        </IconButton>
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div>
            <IconButton onClick={() => setOpen(true)} className="relative">
              <ShoppingBag className="[&>*]:fill-primary" />
              <div className="w-6 h-6 leading-6 text-center bg-primary text-background rounded-full absolute -top-1 -right-2 font-medium">
                {basket.length}
              </div>
            </IconButton>
            <Basket open={open} setOpen={setOpen} />
          </div>
        </ClickAwayListener>
      </div>
    </header>
  );
};

export default Header;

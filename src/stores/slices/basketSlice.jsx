import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const product = action.payload;
      const existingProduct = state.basket.find(
        (basketProduct) => basketProduct.id == product.id
      );

      existingProduct
        ? existingProduct.quantity++
        : state.basket.push({ ...product, quantity: 1 });
    },

    removeFromBasket: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((product) => product.id !== id);
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.basket.find((product) => product.id === id);
      product.quantity++;
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.basket.find((product) => product.id === id);

      product.quantity == 1
        ? (state.basket = state.basket.filter((product) => product.id !== id))
        : product.quantity--;
    },

    setQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.basket.find((product) => product.id === id);

      quantity <= 0
        ? (state.basket = state.basket.filter((product) => product.id !== id))
        : (product.quantity = quantity);
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;

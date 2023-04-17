import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    const url = "https://dummyjson.com/products/" + productId;
    const response = await axios.get(url);
    return response.data;
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  }
);

const initialState = {
  products: [],
  error: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default productsSlice.reducer;

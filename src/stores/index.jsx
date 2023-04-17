import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./slices/themeSlice";
import productsReducer from "./slices/productsSlice";
import basketReducer from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    theme: themeReducer,
    basket: basketReducer,
  },
});

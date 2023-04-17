import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      const htmlElement = document.getElementsByTagName("html")[0];
      state.theme = state.theme == "light" ? "dark" : "light";
      state.theme == "dark"
        ? htmlElement.classList.add("dark")
        : htmlElement.classList.remove("dark");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

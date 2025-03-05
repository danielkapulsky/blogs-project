import { createSlice } from "@reduxjs/toolkit";

type TTheme = "light" | "dark";

const initialState: TTheme = "dark"; // Directly store "dark" or "light"

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    //@ts-ignore
    toggleTheme: (state) => (state === "dark" ? "light" : "dark"), // Correctly return new state
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
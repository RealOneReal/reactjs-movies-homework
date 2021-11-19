import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    language: "en",
  },
  reducers: {
    inputSearch: (state, action) => {
      state.value = action.payload;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
  },
});
export const { inputSearch, language } = searchSlice.actions;

export default searchSlice.reducer;

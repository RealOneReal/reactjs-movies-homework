import { createSlice } from "@reduxjs/toolkit";
import { API_MOVIES } from "../../api/moviesAPI";

const initialState = {
  value: "",
  language: "en",
  category: API_MOVIES.POPULAR,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputSearch: (state, action) => {
      state.value = action.payload;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
    categoryChange: (state, action) => {
      state.category = action.payload;
    },
  },
});
export const { inputSearch, language, categoryChange } = searchSlice.actions;

export default searchSlice.reducer;

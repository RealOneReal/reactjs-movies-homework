import { createSlice } from "@reduxjs/toolkit";
import { API_MOVIES } from "../../api/moviesAPI";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    language: "en",
    moviesCategorie: API_MOVIES.POPULAR,
  },
  reducers: {
    inputSearch: (state, action) => {
      state.value = action.payload;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
    moviesCategorie: (state, action) => {
      state.moviesCategorie = action.payload;
    },
  },
});
export const { moviesCategorie, inputSearch, language } = searchSlice.actions;

export default searchSlice.reducer;

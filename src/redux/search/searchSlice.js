import { createSlice } from "@reduxjs/toolkit";
import { API_PARAMS } from "../../api/moviesAPI";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    pageNumber: 1,
    language: "EN",
    moviesCategorie: API_PARAMS.POPULAR,
  },
  reducers: {
    inputSearch: (state, action) => {
      state.value = action.payload;
    },
    pageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    language: (state, action) => {
      state.language = action.payload;
    },
    moviesCategorie: (state, action) => {
      state.moviesCategorie = action.payload;
    },
  },
});
export const { moviesCategorie } = searchSlice.actions;

export default searchSlice.reducer;

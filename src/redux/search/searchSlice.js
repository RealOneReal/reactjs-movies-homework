import { createSlice } from "@reduxjs/toolkit";
import { API_MOVIES } from "../../api/moviesAPI";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    pageNumber: 1,
    language: "EN",
    moviesCategorie: API_MOVIES.POPULAR,
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
    // newCat: {
    //   prepare(title, content) {
    //     return {
    //       payload: {
    //         id,
    //         title,
    //         content,
    //       },
    //     };
    //   },
    //   reducer(state, action) {
    //     state.language = action.payload.content;
    //     state.value = action.payload.id;
    //     state.pageNumber = action.payload.content;
    //   },
    // },
  },
});
export const { moviesCategorie, pageNumber } = searchSlice.actions;

export default searchSlice.reducer;

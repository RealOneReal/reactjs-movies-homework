import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import moviesReducer from "./movies/moviesSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    movies: moviesReducer,
  },
});

export default store;

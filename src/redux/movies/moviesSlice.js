import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../constants";
import {
  fetchMoviesByCategory,
  fetchGenresConfig,
  fetchMoviesBySearch,
} from "./moviesThunks";

const initialState = {
  movies: [],
  status: fetchStatus.idle,
  error: null,
  totalPages: 0,
  pageNumber: 1,
  genresConfig: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    pageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByCategory.pending, (state) => {
        state.error = null;
        state.status = fetchStatus.loading;
      })
      .addCase(fetchMoviesByCategory.fulfilled, (state, action) => {
        state.status = fetchStatus.success;
        state.movies = action.payload.results;
        state.pageNumber = action.payload.page;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMoviesByCategory.rejected, (state, action) => {
        state.status = fetchStatus.failure;
        state.error = action.error.message;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.error = null;
        state.status = fetchStatus.loading;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.status = fetchStatus.success;
        state.movies = action.payload.results;
        state.pageNumber = action.payload.page;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.status = fetchStatus.failure;
        state.error = action.error.message;
      })
      .addCase(fetchGenresConfig.pending, (state) => {
        state.error = null;
        state.status = fetchStatus.loading;
      })
      .addCase(fetchGenresConfig.fulfilled, (state, action) => {
        state.status = fetchStatus.success;
        state.genresConfig = action.payload.genres;
      })
      .addCase(fetchGenresConfig.rejected, (state, action) => {
        state.status = fetchStatus.failure;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

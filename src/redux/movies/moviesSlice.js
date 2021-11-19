import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIES } from "../../api/moviesAPI";
import { renameKeysOfFetchingMovies } from "../../utils/objectUtils";

export const fetchMoviesByCategory = createAsyncThunk(
  "movies/fetchMoviesByCategory",
  async ({ category, pageNumber, language }) => {
    const response = await axios.get(
      `${API_MOVIES.BASE_URL}${category}${API_MOVIES.API_KEY}&language=${language}&page=${pageNumber}`
    );
    return renameKeysOfFetchingMovies(response);
  }
);

export const fetchMoviesBySearch = createAsyncThunk(
  "movies/fetchMoviesBySearch",
  async ({ pageNumber, language, value }) => {
    const response = await axios.get(
      `${API_MOVIES.BASE_URL}search/movie${API_MOVIES.API_KEY}&language=${language}&page=${pageNumber}&query=${value}`
    );
    return renameKeysOfFetchingMovies(response);
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
    totalPages: 0,
    pageNumber: 1,
    images: {},
  },
  reducers: {
    pageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesByCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload.results;
        state.pageNumber = action.payload.page;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMoviesByCategory.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      })
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload.results;
        state.pageNumber = action.payload.page;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

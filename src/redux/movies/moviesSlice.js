import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIES } from "../../api/moviesAPI";
import {
  renameKeysOfFetchingMovies,
  decodeGenres,
} from "../../utils/objectUtils";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
  totalPages: 0,
  pageNumber: 1,
  genresConfig: [],
};

export const fetchMoviesByCategory = createAsyncThunk(
  "movies/fetchMoviesByCategory",
  async ({ category, pageNumber, language }, { getState }) => {
    const response = await axios.get(
      `${API_MOVIES.BASE_URL}${category}${API_MOVIES.API_KEY}&language=${language}&page=${pageNumber}`
    );
    const movies = renameKeysOfFetchingMovies(response);
    const genreConfig = getState().movies.genresConfig;
    const results = decodeGenres(movies.results, genreConfig);
    return { ...movies, results };
  }
);

export const fetchMoviesBySearch = createAsyncThunk(
  "movies/fetchMoviesBySearch",
  async ({ pageNumber, language, value }, { getState }) => {
    const response = await axios.get(
      `${API_MOVIES.BASE_URL}search/movie${API_MOVIES.API_KEY}&language=${language}&page=${pageNumber}&query=${value}`
    );
    const movies = renameKeysOfFetchingMovies(response);
    const genreConfig = getState().movies.genresConfig;
    const results = decodeGenres(movies.results, genreConfig);
    return { ...movies, results };
  }
);

export const fetchGenresConfig = createAsyncThunk(
  "movies/genresConfig",
  async ({ language }) => {
    const response = await axios.get(
      `${API_MOVIES.GENRES_LIST}&language=${language}`
    );
    return response.data;
  }
);

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
        state.error = null;
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
      })
      .addCase(fetchGenresConfig.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenresConfig.fulfilled, (state, action) => {
        state.status = "success";
        state.genresConfig = action.payload.genres;
      })
      .addCase(fetchGenresConfig.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

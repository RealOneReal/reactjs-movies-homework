import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIES } from "../../api/moviesAPI";

export const fetchMoviesByCategory = createAsyncThunk(
  "movies/fetchMoviesByCategory",
  async (categorie) => {
    const data = await axios.get(
      `${API_MOVIES.BASE_URL}${categorie}${API_MOVIES.API_KEY}`
    );
    return data;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    status: "idle",
    error: null,
    // images: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesByCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload?.data;
      })
      .addCase(fetchMoviesByCategory.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;

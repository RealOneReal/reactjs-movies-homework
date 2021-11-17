import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIES } from "../../api/moviesAPI";

export const fetchMoviesByCategory = createAsyncThunk(
  "movies/fetchMoviesByCategory",
  async ({ categorie, pageNumber, language }) => {
    const response = await axios.get(
      `${API_MOVIES.BASE_URL}${categorie}${API_MOVIES.API_KEY}&language=${language}&page=${pageNumber}`
    );
    const responseData = {
      ...response,
      data: {
        ...response.data,
        results: response.data.results?.map((item) => {
          return {
            genreIds: item.genre_ids,
            originalTitle: item.original_title,
            posterPath: item.poster_path,
            voteAverage: item.vote_average,
            id: item.id,
          };
        }),
      },
    };

    return responseData.data;
  }
);

// export const fetchMoviesBySearch = createAsyncThunk(
//   "movies/fetchMoviesBySearch",
//   async()
// );

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
    totalPages: 0,
    pageNumber: 1,
    // images: {},
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
      });
  },
});

export default moviesSlice.reducer;

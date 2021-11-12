import { createSlice } from "@reduxjs/toolkit";
import { moviesApi } from "../../api/moviesAPI";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {},
    loading: false,
    error: null,
    images: {},
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {},
    fetchMoviesError: (state, action) => {},
  },
});
// export const { loading,fetchMoviesError,fetchMoviesSuccess } = moviesSlice.actions;

// export const fetchMovies = () => (dispatch) => {
//   moviesApi
//     .get("asdasd")
//     .then((data) => dispatch(moviesSlice.actions.fetchMoviesSuccess(data)))
//     .catch((error) => dispatch(fetchMoviesError(error)));
// };

export default moviesSlice.reducer;

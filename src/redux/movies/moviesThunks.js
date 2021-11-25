import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIES } from "../../api/moviesAPI";
import {
  renameKeysOfFetchingMovies,
  decodeGenres,
} from "../../utils/objectUtils";

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
